<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <form class="w-full md:w-1/2 p-6 m-auto" @submit.prevent="updateProfile">
      <client-only>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            :value="user?.email"
            disabled
            class="form-control w-full bg-gray-200"
          />
        </div>
        <div v-if="profile" class="form-group">
        <label for="givenName">User Name</label>
          <input
            id="userName"
            type="text"
            v-model="profile.userName"
            class="form-control mb-3"
          />
          <label for="givenName">First Name</label>
          <input
            id="givenName"
            type="text"
            v-model="profile.givenName"
            class="form-control mb-3"
          />
          <label for="familyName">Last Name</label>
          <input
            id="familyName"
            type="text"
            v-model="profile.familyName"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary block w-full rounded-lg"
            :disabled="loading"
          >
            {{ loading ? "Loading ..." : "Save" }}
          </button>
        </div>
      </client-only>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useUserStore } from "~/stores/user";

export default defineComponent({
  async setup() {
    const loading = ref(true);
    const store = useUserStore();
    const profile = store.profile;
    const user = store.user;

    loading.value = false;

    function updateProfile() {}

    return {
      profile,
      user,
      loading,
      updateProfile,
    };
  },
});
</script>
