<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add images</h1>
        <!-- <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p> -->
      </div>
      <div class="bg-[#F4F4F4] p-5 mt-7 text-center">
        <div>
          <span class="font-semibold">Drop your images here,</span>
          <span>or</span> <span class="text-primary">click to browse</span>
        </div>
        <div class="text-[#888888] text-center mt-1">
          1600 x 1200 (4:3) recommended, up to 10MB each.
        </div>
      </div>
      <div class="text-[#888888] pt-2 text-center">Add up to 10 images to your product</div>
      <div class="w-full mt-4">
        <div class="font-semibold">Uploads:</div>
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
