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
    <nuxt-link class="flex" to="/create/details">
      <span class="bg-[#E9ECF8] mr-2 my-auto flex rounded-full w-26px h-26px">
        <span
          class="text-primary w-16px h-16px m-auto i-carbon-chevron-left"
        ></span>
      </span>
      <span class="flex">back</span>
    </nuxt-link>
    <div
      class="flex flex-auto flex-wrap mx-auto items-center flex-col bg-white p-8 rounded-2xl mt-6"
    >
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add images</h1>
        <!-- <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p> -->
      </div>
      <label
        class="bg-[#F4F4F4] p-5 mt-7 text-center max-w-600px rounded-lg w-full"
        for="image"
      >
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
          class="hidden"
          @change="loadFile"
        />
        <div class="w-full flex items-center mb-3">
          <span class="i-akar-icons-image text-[#888888] mx-auto"></span>
        </div>
        <div class="text-lg">
          <span class="font-semibold">Drop your images here</span>
          <span>, or</span> <span class="text-primary">click to browse</span>
        </div>
        <div class="text-[#888888] text-center mt-1">
          1600 x 1200 (4:3) recommended, up to 10MB each.
        </div>
      </label>
      <div class="text-[#888888] pt-2 text-center">
        Add up to 10 images to your product
      </div>
      <div class="w-full mt-4 max-w-600px">
        <div class="font-semibold">Uploads:</div>
        <div class="w-full p-12px mx-auto p-12px">
          <div class="flex flex-auto flex-wrap -m-12px">
            <div
              v-for="image of images"
              :key="image.src"
              class="p-12px w-full md:w-1/2 xl:w-1/3 flex items-center justify-center"
            >
              <img :src="image.src" alt="" class="mr-3 h-64px w-64px" />
              <div>
                <div class="font-semibold">{{ image.name }}</div>
                <div class="text-[#888888] font-semibold">{{ image.size }}</div>
              </div>
              <div class="flex items-center justify-center pr-3">
                <div class="i-bx-dots-horizontal-rounded text-[#5F5F5F]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/create/value"
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
      images: [],
      title: "SwapU - The Swapping Marketplace",
      heading: "Create a Listing",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
  methods: {
    loadFile(event) {
      const vm = this;
      const reader = new FileReader();
      const file = event.target.files[0];
      const sizeFormatter = new Intl.NumberFormat("en", {
        notation: "compact",
      });
      reader.onload = function () {
        console.log(file);
        vm.images.push({
          src: reader.result,
          name: file.name,
          size: sizeFormatter.format(file.size),
        });
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
