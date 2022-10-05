<template>
  <div class="justify-center">
    <div class="mx-auto">
      <div class="input-group relative flex flex-wrap items-stretch w-full border border-solid border-[#E9E9E9] rounded-2xl bg-[#F8F8F8] overflow-hidden">
        <button
          class="btn border-none inline-block -ml-1px pl-6 px-0 bg-[#F8F8F8] py-2.5 text-[#373637] focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center"
          type="button"
        >
          <span class="i-fe-search h-24px w-24px my-auto"></span>
        </button>
        <input
          type="search"
          class="form-control w-1% relative flex-auto min-w-0 flex px-3 py-6 text-lg font-normal text-[#787878] bg-[#F8F8F8] bg-clip-padding transition ease-in-out m-0 focus:text-[#787878] focus:bg-white border-none focus:outline-none"
          placeholder="I'm looking for..."
          aria-label="I'm looking for..."
        />
      </div>
    </div>
  </div>
</template>
