<template>
  <div class="w-full p-12px mx-auto p-12px">
    <div class="flex flex-auto flex-wrap -m-12px">
      <div
        class="p-12px w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex"
        v-for="item of items"
        :key="item.name"
      >
        <Card v-bind="item" class="w-full mx-auto"></Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
  },
};
</script>
