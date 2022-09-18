<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Tell everyone your listing is ready to swap</h1>
        <p class="font-semibold text-[#929090]">
          Any item that is "Swap Ready" is 50% more likely to be swapped on SwapU.
        </p>
      </div>
      <div class="w-full flex justify-center items-center mt-14">
        <nuxt-link
          class="btn rounded-lg font-semibold w-260px text-center text-[#929090] py-4"
          to="/create/swap-for"
          >Skip</nuxt-link
        >
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold text-center py-4"
          to="/create/swap-for"
          >Add a "Swap Ready package"</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
