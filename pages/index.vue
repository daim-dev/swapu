<template>
  <div class="container mx-auto px-6 py-6 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      :style="`
    background-position: 50%;
    background-image: url('/banners/home.png');
    height: 619px;
  `"
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      >
        <slot>
          <div class="flex justify-end items-center h-full">
            <div class="max-w-361px mx-6">
              <div class="p-6 md:p-12 bg-white rounded text-lg font-semibold">
                <div>
                  I have a
                  <select
                    placeholder="Select"
                    class="form-control border-none mt-6 px-0"
                  >
                    <option value="" disabled selected hidden>Select</option>
                  </select>
                </div>
                <div class="mt-11">
                  and I want to swap it for a
                  <select
                    placeholder="Select"
                    class="form-control border-none mt-6 px-0"
                  >
                    <option value="" disabled selected hidden>Select</option>
                  </select>
                </div>
                <div class="mt-11">
                  <button class="btn btn-primary rounded-lg w-full text-left">
                    Find my swap
                  </button>
                </div>
              </div>
              <div class="text-[#787878] mt-9">
                Don't miss out on the latest swap listings. Add your email and
                receive weekly updates.
                <div class="rounded-lg bg-white flex p-2 mt-2">
                  <input
                    name="email"
                    type="email"
                    class="form-control border-none p-0"
                    placeholder="Your email address"
                  />
                  <button class="btn btn-primary rounded whitespace-nowrap">
                    Keep me updated
                  </button>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
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
