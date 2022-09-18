<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add description</h1>
        <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p>
      </div>
      <div>
        <div class="w-full flex my-8">
          <div class="w-full md:w-1/2 mr-4">
            <label
              for="item-name"
              class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
              >Item name</label
            >
            <input
              type="text"
              class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
              id="item-name"
              placeholder="Type here"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label
              for="item-category"
              class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
              >Categories</label
            >
            <select
              placeholder="Select"
              name="category"
              id="item-category"
              class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
            >
              <option value="" disabled selected hidden class="text-gray-700">
                Select
              </option>
            </select>
          </div>
        </div>

        <div class="w-full my-8">
          <label
            for="item-description"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Item description</label
          >
          <textarea
            type="text"
            class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg"
            id="item-description"
            placeholder="Type here"
          ></textarea>
        </div>
        <div class="w-full my-8">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Condition</label
          >
          <div class="flex items-center justify-around">
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-new"
                type="radio"
                value="new"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-new"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >New</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                checked
                required
                id="condition-used-like-new"
                type="radio"
                value="used-like-new"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-like-new"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (like new)</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-used-fair"
                type="radio"
                value="used-fair"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-fair"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (fair)</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-used-good"
                type="radio"
                value="used-good"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-good"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (good)</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/create/images"
          >Continue</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
