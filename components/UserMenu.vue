<template>
  <div class="position-relative">
    <button v-bind="$attrs" @click="toggle" class="btn" v-if="user">
      <img
        src="https://avatars.dicebear.com/api/identicon/daim-dashboard.svg"
        class="rounded-full w-32px h-32px m-auto"
        width="32"
        height="32"
        alt="Avatar"
      />
    </button>

    <template v-else>
      <Link
        v-bind="item"
        v-for="item of items"
        :key="item.name"
        class="hover:text-black-200 btn text-black-500 border-x-0 border-t-0 border-b-2 border-transparent mx-4 px-2 hover:bg-gray-500/10"
        :class="{ 'border-b-black': $route.path === item.url }"
      />
    </template>

    <div
      :class="dropdownClasses"
      class="position-absolute transition-all duration-500 w-60 shadow-lg bg-white right-0 z-1"
    >
      <Link
        v-for="item of items"
        v-bind="item"
        :key="item.name"
        @click="toggle"
        class="flex px-4 hover:bg-gray-500/10 btn"
      >
        <span :class="item.icon" class="text-gray w-32px h-32px my-auto mr-3"></span>
        <span class="text-black-500 hover:text-grey-500">{{item.name}}</span>
      </Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const user = ref(null);
    return { user };
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    dropdownClasses() {
      return {
        "opacity-0": !this.open,
        "opacity-100": this.open,
        "pointer-events-none": !this.open,
      };
    },
    items() {
      const items = [];
      if (this.user) {
        items.push(
          {
            icon: "i-carbon-settings",
            name: "Settings",
            url: "/settings/language",
            pos: "3/1",
          },
          {
            icon: "i-carbon-user",
            name: "Profile",
            url: "/profile",
            pos: "3/1",
          },
          {
            icon: "i-carbon-logout",
            name: "Logout",
            url: "/logout",
            pos: "3/1",
          },
        );
      } else {
        items.push({
          icon: "i-carbon-login",
          name: "Sign Up",
          url: "/sign-up",
          pos: "3/1",
        });
      }
      return items;
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
});
</script>
