import Auth from "firebase-auth-lite";
import { useUserStore } from "~/stores/user";
import transformFirestore from "~/utils/transform-firestore";
import renameKeys from "~/utils/remap-listing-keys";
import { AsyncDataOptions } from "#app";

export default defineNuxtPlugin(({ $config, $pinia }) => {
  if (process.client) {
    const store = useUserStore($pinia);
    const auth = new Auth({
      apiKey: $config.FIREBASE_API_KEY,
      redirectUri: $config.APP_URL,
    });
    const removeListener = auth.listen((user) => {
      store.$patch({ user });
      if (user) {
        const url = `https://firestore.googleapis.com/v1/projects/swapu-staging/databases/(default)/documents/All Users/${user.email}`;
        useFetch(url, {
          transform(data) {
            return renameKeys(transformFirestore(data));
          },
        }).then(({ data }) => store.$patch({ profile: data.value }));
      }
    });
  }
});
