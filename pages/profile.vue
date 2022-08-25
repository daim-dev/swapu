<template>
  <div class="container mx-auto px-6 py-6 h-full w-full">
    <div class="flex">
      <div class="w-60">
        <Link
          v-for="item of sidebar"
          v-bind="item"
          :key="item.name"
          class="flex px-4 hover:bg-gray-500/10 btn"
        >
          <span class="bg-[#E9ECF8] mr-3 my-auto flex rounded-lg w-29px h-29px">
            <span
              :class="item.icon"
              class="text-primary w-16px h-16px m-auto"
            ></span>
          </span>
          <span
            class="font-semibold my-auto"
            :class="{ 'text-primary': $route.path === item.url, 'text-[#6F767E]': $route.path !== item.url }"
            >{{ item.name }}</span
          >
        </Link>
      </div>
      <div class="flex flex-auto">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sidebar: [
      {
        icon: "i-bx-user-circle",
        name: "My account",
        url: "/profile",
        pos: "1/1"
      },
      {
        icon: "i-bx-cube",
        name: "My items",
        url: "/profile/items",
        pos: "1/1",
      },
      {
        icon: "i-ph-arrows-clockwise",
        name: "My swaps",
        url: "/profile/swaps",
        pos: "2/1",
      },
      {
        icon: "i-bx-heart",
        name: "Favourites",
        url: "/profile/favourites",
        pos: "3/1",
      },
      {
        icon: "i-eva-info-outline",
        name: "User guide",
        url: "/profile/user-guide",
        pos: "4/1",
      },
    ],
  }),
};
</script>
