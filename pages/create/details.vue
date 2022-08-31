<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add description</h1>
        <p class="font-semibold text-[#929090]">To start swapping, all you need is a name, price, and file</p>
      </div>
      <div>
        <div class="w-full md:w-1/2 my-8">
          <label
            for="item-name"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Item name</label
          >
          <input
            type="text"
            class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none"
            id="item-name"
            placeholder="Type here"
          />
        </div>
        <div class="w-full md:w-1/2">
          <label
            for="item-category"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Categories</label
          >
          <select
            placeholder="Select"
            name="category"
            id="item-category"
            class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none"
          >
            <option value="" disabled selected hidden>Select</option>
          </select>
        </div>
        <div class="w-full my-8">
          <label
            for="item-description"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Item description</label
          >
          <textarea
            type="text"
            class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none"
            id="item-description"
            placeholder="Type here"
          ></textarea>
        </div>
        <div class="w-full my-8">
          <label
            for="item-description"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Condition</label
          >
        </div>
      </div>
    </div>
  </div>
</template>
