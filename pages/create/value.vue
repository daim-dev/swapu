<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add approximate value</h1>
        <!-- <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p> -->
      </div>
      <div>
        <div class="w-full mb-6">
          <label
            for="estimated-cash-value"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
            >Estimated Cash Value</label
          >
          <input
            type="number"
            class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
            id="estimated-cash-value"
            placeholder="0.00"
          />
        </div>
        <div class="flex flex-row">
          <span class="font-semibold mr-auto text-lg">As well as swapping, I'm open to selling too</span>
          <label
            for="open-to-selling"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              name="open-to-selling"
              id="open-to-selling"
              class="sr-only peer"
            />
            <div
              class="peer-checked w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            ></div>
            <span
              class="ml-3 font-semibold text-gray-900 dark:text-gray-300 sr-only text-lg"
              >As well as swapping, I'm open to selling too</span
            >
          </label>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/create/swap-ready"
          >Continue</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
