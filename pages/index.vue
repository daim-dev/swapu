<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto">
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <h1 class="text-5xl font-brand font-bold py-3">I'll Swap You</h1>
        <p class="text-xl py-3">Swap what you have for what you want</p>
        <p>Swapping is the new online shopping</p>
      </div>
      <div class="w-full md:w-1/2">
        <img
          src="https://swapu.com.au/LandingPageOne/HeaderSectionGuest/Graphic.svg"
          class="mx-auto"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "SwapU - The Swapping Marketplace",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
};
</script>
