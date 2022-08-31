<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto">
      <div class="w-full flex flex-col justify-center">
        <h1 class="text-4xl font-semibold py-3 text-center">
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
          class="btn btn-primary rounded-lg font-semibold w-260px text-center"
          >Continue</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
