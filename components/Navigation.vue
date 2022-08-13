<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between text-lg shadow-md"
    bg-nav
  >
    <div
      class="w-full flex flex-wrap items-center justify-between px-3 sm:px-8 h-64px"
    >
      <div class="flex md:min-w-225px">
        <button
          class="navbar-toggler flex text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="$emit('update:draw', !draw)"
        >
          <span class="i-mdi-menu h-24px w-24px my-auto"></span>
        </button>
        <nuxt-link
          class="flex items-center text-black-900 hover:text-black-900 focus:text-black-900 mt-2 lg:mt-0 mr-1"
          to="/"
          title="Home Page"
        >
          <img
            src="/logo.svg"
            class="navbar-brand"
            width="122"
            height="35"
            alt="Swapu"
          />
        </nuxt-link>
      </div>

      <!-- <Search class="flex-auto items-center hidden md:flex self-center"></Search> -->

      <div class="flex justify-end md:min-w-225px">
        <UserMenu></UserMenu>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    draw: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
  },
  emits: ["update:draw"],
};
</script>
