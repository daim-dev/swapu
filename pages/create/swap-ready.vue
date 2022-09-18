<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <Meta
      property="og:image"
      content="https://firebasestorage.googleapis.com/v0/b/geosynergy-swapu.appspot.com/o/Banner%2FLOGO%20RED%20on%20transparent%20background.png?alt=media&token=81518040-5ec5-4265-bad1-73b0ebab100d"
    ></Meta>
    <nuxt-link class="flex" to="/create/value">
      <span class="bg-[#E9ECF8] mr-2 my-auto flex rounded-full w-26px h-26px">
        <span
          class="text-primary w-16px h-16px m-auto i-carbon-chevron-left"
        ></span>
      </span>
      <span class="flex">back</span>
    </nuxt-link>
    <div
      class="flex flex-auto flex-wrap mx-auto bg-white p-8 rounded-2xl mt-6"
    >
      <div class="text-center w-full md:w-1/2">
        <h1 class="text-5xl font-semibold text-[#0D284F] mb-3">
          Tell everyone your listing is ready to swap
        </h1>
        <p class="text-[#929090] text-xl mb-3 font-poppins">
          Any item that is "Swap Ready" is 50% more likely to be swapped on
          SwapU.
        </p>
        <h2 class="text-3xl font-semibold text-[#0D284F] mb-5">
          For $10 you'll receive
        </h2>
        <div class="mx-3">
          <ul class="list-disc text-[#0D284F] text-left text-lg">
          <li class="mb-3">
            An E-book that contains all the information that you need to swap
            any registered vehicle, boat or trailer.
          </li>
          <li class="mb-3">
            A “Swap Ready” badge to show other swappers that your item is ready
            to swap.
          </li>
        </ul>
        <p class="text-lg">
          Make your swapped item stand out. Buy a “Swap Ready” package today!
        </p>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <img src="/img/create/swap-ready.png" alt="" />
      </div>
      <div class="w-full flex justify-center items-center mt-14">
        <nuxt-link
          class="btn rounded-lg font-semibold w-260px text-center text-[#929090] py-4"
          to="/create/swap-for"
          >Skip</nuxt-link
        >
        <nuxt-link
          class="btn btn-primary rounded-2xl font-semibold text-center py-4"
          to="/create/swap-for"
          >Add a "Swap Ready" package</nuxt-link
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
