<template>
  <div class="flex flex-col justify-start body relative">
    <div class="sticky top-0 z-1">
      <Navigation v-model:draw="draw" :items="items" class="z-2 bg-[#F7F7F7]"></Navigation>
      <div class="absolute top-full bottom-0">
        <SideNav
          :items="items"
          :class="{ 'pointer-events-none': !draw }"
          v-model:draw="draw"
        ></SideNav>
      </div>
    </div>
    <div class="flex justify-start self-stretch h-full grow relative">
      <div
        class="flex w-full flex-col grow self-stretch flex-wrap transition-all duration-500"
      >
        <main
          itemprop="mainContentOfPage"
          itemtype="https://schema.org/WebPageElement"
          class="flex grow self-stretch min-h-screen bg-[#F7F7F7]"
        >
          <slot></slot>
        </main>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: items } = await useAsyncData("content-navigation", () => {
  const items = [
    {
      icon: "i-carbon-home",
      name: "Home",
      url: "/",
      pos: "1/1",
    },
    {
      icon: "i-carbon-product",
      name: "Listings",
      url: "/listings",
      pos: "1/2",
    },
    {
      icon: "i-ic-outline-category",
      name: "Categories",
      url: "/categories",
      pos: "1/3",
    },
    {
      icon: "i-ic-outline-local-offer",
      name: "Offers",
      url: "/offers",
      pos: "1/4",
    },
    {
      icon: "i-icon-park-outline-add",
      name: "Add an item",
      url: "/create",
      pos: "1/5",
    },
  ];
  return items;
});
const draw = ref(false);
</script>
