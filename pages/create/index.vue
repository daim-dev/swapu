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
    <nuxt-link class="flex" to="/">
      <span class="bg-[#E9ECF8] mr-2 my-auto flex rounded-full w-26px h-26px">
          <span
            class="text-primary w-16px h-16px m-auto i-carbon-chevron-left"
          ></span>
        </span>
      <span class="flex">back</span>
    </nuxt-link>
    <div class="flex flex-auto flex-wrap mx-auto bg-white p-8 rounded-2xl mt-6">
      <div class="w-full flex flex-col justify-center">
        <h1 class="text-4xl font-semibold py-9 text-center">
          What are you planning to Swap?
        </h1>
      </div>
      <div class="w-full flex justify-center items-center">
        <div class="text-center bg-[#F7F7F7] p-4 grow max-w-280px mx-7 rounded-lg">
          <img src="/img/create/single.png" class="mx-auto" alt="" />
          <div class="font-semibold py-4">One item</div>
        </div>
        <div class="bg-[#F7F7F7] p-4 flex flex-col grow max-w-280px mx-7 rounded-lg">
          <img src="/img/create/multiple.png" class="mx-auto" alt="" />
          <div class="font-semibold py-4">Multiple items in a bundle swap</div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/create/details"
          >Continue</nuxt-link
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
