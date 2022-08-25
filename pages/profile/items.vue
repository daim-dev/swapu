<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex justify-between">
      <h1 class="font-semibold text-2xl">My items</h1>
      <nuxt-link class="btn btn-primary rounded-lg" to="/create"
        >Add item</nuxt-link
      >
    </div>
    <Grid :items="items"></Grid>
  </div>
</template>

<script>
import transformFirestore from "~/utils/transform-firestore";
import renameKeys from "~/utils/remap-listing-keys";
export default {
  async setup() {
    const url =
      "https://firestore.googleapis.com/v1/projects/swapu-staging/databases/(default)/documents:runQuery";
    const { data: items, error } = await useFetch(url, {
      method: "POST",
      body: {
        structuredQuery: {
          from: [{ collectionId: "All Posts" }],
          orderBy: [
            { field: { fieldPath: "created_on" }, direction: "DESCENDING" },
          ],
          limit: 4,
        },
      },
      // server: false,
      transform(data) {
        return data.map((item) => {
          return renameKeys(transformFirestore(item.document));
        });
      },
    });
    return { items };
  },
};
</script>
