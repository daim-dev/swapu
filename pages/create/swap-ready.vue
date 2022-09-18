<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <Meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/geosynergy-swapu.appspot.com/o/Banner%2FLOGO%20RED%20on%20transparent%20background.png?alt=media&token=81518040-5ec5-4265-bad1-73b0ebab100d"
    ></Meta>
    <nuxt-link class="flex" to="/create/value">
      <span class="bg-[#E9ECF8] mr-2 my-auto flex rounded-full w-26px h-26px">
          <span
            class="text-primary w-16px h-16px m-auto i-carbon-chevron-left"
          ></span>
        </span>
      <span class="flex">back</span>
    </nuxt-link>
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

<script>
  export default {
    data() {
      return {
        title: "SwapU - The Swapping Marketplace",
        heading: "Create a Listing",
        description:
          "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
      };
    },
  };
  </script>
