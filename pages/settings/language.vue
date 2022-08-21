<template>
  <div class="w-full">
    <h1 class="font-semibold text-2xl">Language</h1>
    <div class="w-full mt-8">
      <div class="flex flex-row">
        <span class="font-semibold mr-auto">English</span>
        <label
          for="english-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="radio"
            name="language"
            value="english"
            id="english-toggle"
            class="sr-only peer"
            checked
          />
          <div
            class="peer-checked w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
          ></div>
          <span
            class="ml-3 font-semibold text-gray-900 dark:text-gray-300 sr-only"
            >English</span
          >
        </label>
      </div>
      <div class="flex flex-row pt-8">
        <span class="font-semibold mr-auto">Portuguese</span>
        <label
          for="portuguese-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="radio"
            name="language"
            value="Portuguese"
            id="portuguese-toggle"
            class="sr-only peer"
          />
          <div
            class="peer-checked w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
          ></div>
          <span
            class="ml-3 font-semibold text-gray-900 dark:text-gray-300 sr-only"
            >Portuguese</span
          >
        </label>
      </div>
    </div>
    <button class="btn btn-primary rounded-lg font-semibold mt-8">Save</button>
  </div>
</template>

<style>
.peer-checked:after {
  content: "";
}
</style>
