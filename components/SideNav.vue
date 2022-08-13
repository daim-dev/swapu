<template>
  <div
    class="flex grow shadow-md bg-white flex-col transition-all duration-500"
    :class="{ 'opacity-0': !draw, 'w-0': !draw, 'w-60': draw }"
  >
    <div
      v-for="item of items"
      :key="item.name"
      class="relative hover:bg-gray-500/10 flex"
      :class="{ 'bg-gray-200': $route.path === item.url }"
    >
      <Link
        v-bind="item"
        @click="$emit('update:draw', false)"
        class="flex px-4 btn relative"
      >
        <span class="bg-[#E9ECF8] mr-3 my-auto flex rounded-lg w-29px h-29px">
          <span
            :class="item.icon"
            class="text-primary w-16px h-16px m-auto"
          ></span>
        </span>
        <span class="text-black-500 hover:text-grey-500 font-semibold text-sm my-auto whitespace-nowrap">{{ item.name }}</span>
      </Link>
    </div>
  </div>
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
