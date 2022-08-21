<template>
  <div class="position-relative">
    <div class="flex">
      <template v-if="user">
        <span class="hidden lg:inline-block">
          <button class="btn border-r border-color-[#D9D9D9] py-1">
            <span class="h-24px w-24px m-auto i-akar-icons-search flex"></span>
            <span class="sr-only">Search</span>
          </button>
          <button class="btn border-r border-color-[#D9D9D9] py-1">
            <span class="h-24px w-24px m-auto i-bi-question-lg flex"></span>
            <span class="sr-only">Help</span>
          </button>
          <button class="btn">
            <span class="h-24px w-24px m-auto i-lucide-bell flex"></span>
            <span class="sr-only">Notifications</span>
          </button>
        </span>
        <button
          v-bind="$attrs"
          @click="toggle"
          class="btn relative p-0 mx-8 rounded-full"
        >
          <img
            src="https://avatars.dicebear.com/api/identicon/swapu.svg"
            class="rounded-full w-32px h-32px m-auto"
            width="32"
            height="32"
            alt="Avatar"
          />
          <span
            class="absolute border-2 border-color-[#FAFAFA] bg-primary w-15px h-15px rounded-full -bottom-4px -right-4px"
          >
            <span class="flex h-full">
              <span
                class="h-8px w-8px m-auto text-white"
                :class="{
                  'i-carbon-chevron-up': !open,
                  'i-carbon-chevron-down': open,
                }"
              ></span>
            </span>
          </span>
        </button>
        <Link
          class="btn btn-primary rounded-lg py-3 px-4 hidden sm:inline-block"
          url="/create"
        >
          <span class="flex">
            <span
              class="i-icon-park-outline-add w-24px h-24px my-auto mr-2"
            ></span>
            <span class="my-auto text-sm font-semibold">Add an item</span>
          </span>
        </Link>
      </template>

      <template v-else>
        <Link
          v-bind="{
            icon: 'i-carbon-login',
            name: 'Sign Up',
            url: '/sign-up'
          }"
          class="btn btn-primary rounded-lg py-3 px-4 my-auto"
        />
      </template>
    </div>

    <div
      :class="dropdownClasses"
      class="position-absolute transition-all duration-500 w-60 shadow-lg bg-white right-0 z-1"
    >
      <div class="p-3 border-b border-color-[#C4C4C4]">
        <div class="flex">
          <img
            src="https://avatars.dicebear.com/api/identicon/swapu.svg"
            class="rounded-full w-42px h-42px my-auto"
            width="42"
            height="42"
            alt="Avatar"
          />
          <span class="pl-2">
            <div v-if="profile && profile.userName">{{ profile.userName }}</div>
            <div v-else-if="user && user.email" class="truncate w-60">
              {{ user.email }}
            </div>
            <div class="text-sm text-[#808080]">Member</div>
          </span>
        </div>
        <nuxt-link
          class="block btn border rounded-lg border-color-[#ECECEC] w-full py-1 mt-3"
          to="/profile"
          @click="toggle"
          >View Account info</nuxt-link
        >
      </div>
      <div
        class="uppercase my-3 text-[#959595] text-sm mx-4 font-bold opacity-50"
      >
        Account
      </div>
      <Link
        v-for="item of items"
        v-bind="item"
        :key="item.name"
        @click="toggle"
        class="flex px-4 hover:bg-gray-500/10 btn"
      >
        <span class="bg-[#E9ECF8] mr-3 my-auto flex rounded-lg w-29px h-29px">
          <span
            :class="item.icon"
            class="text-primary w-16px h-16px m-auto"
          ></span>
        </span>
        <span
          class="text-black-500 hover:text-grey-500 font-semibold text-sm my-auto"
          >{{ item.name }}</span
        >
        <span class="i-carbon-chevron-right ml-auto"></span>
      </Link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "~/stores/user";
export default defineComponent({
  setup() {
    const store = useUserStore();
    const profile = store.profile;
    const user = store.user;
    return { user, profile };
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
      if (this.user) {
        return [
          {
            icon: "i-carbon-cube",
            name: "My items",
            url: "/profile/",
            pos: "1/1",
          },
          {
            icon: "i-ph-arrows-clockwise",
            name: "My swaps",
            url: "/profile/",
            pos: "2/1",
          },
          {
            icon: "i-bx-heart",
            name: "Favourites",
            url: "/profile/",
            pos: "3/1",
          },
          {
            icon: "i-eva-info-outline",
            name: "User guide",
            url: "/user-guide",
            pos: "4/1",
          },
          {
            icon: "i-carbon-settings",
            name: "Settings",
            url: "/settings/language",
            pos: "5/1",
          },
          {
            icon: "i-carbon-logout",
            name: "Log out",
            url: "/logout",
            pos: "6/1",
          },
        ];
      } else {
        return [
          {
            icon: "i-carbon-login",
            name: "Sign Up",
            url: "/sign-up",
            pos: "3/1",
          },
        ];
      }
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
});
</script>
