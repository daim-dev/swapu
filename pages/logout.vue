<template>
  <div class="block p-6 max-w-sm m-auto">
    <h1 class="text-3xl text-center">
      <template v-if="loading">Logging</template>
      <template v-if="!loading">Logged</template>
      out
    </h1>
  </div>
</template>

<script setup>
import Auth from "firebase-auth-lite";
const loading = ref(true);
const runtimeConfig = useRuntimeConfig();
if (process.client) {
  const auth = new Auth({
    apiKey: runtimeConfig.FIREBASE_API_KEY,
    redirectUri: runtimeConfig.APP_URL,
  });
  try {
    loading.value = true;
    await auth.signOut();
  } finally {
    loading.value = false;
  }
}
</script>
