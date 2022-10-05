<template>
  <div class="container mx-auto px-6 pb-12 h-full w-full bg-white">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <Meta
      property="og:image"
      content="https://firebasestorage.googleapis.com/v0/b/geosynergy-swapu.appspot.com/o/Banner%2FLOGO%20RED%20on%20transparent%20background.png?alt=media&token=81518040-5ec5-4265-bad1-73b0ebab100d"
    ></Meta>
    <section class="py-10">
      <!-- Breadcrumb -->
      <span class="text-[#808080]">Homepage</span
      ><span class="text-[#808080]"> / </span> Categories
      <span class="text-[#808080]"> / </span> Cars
    </section>
    <section>
      <Search class="flex-auto items-center self-center"></Search>
    </section>
    <section class="flex mt-10">
      <div class="w-313px">
        <div class="bg-[#F7F7F7] rounded-xl p-4 flex items-center justify-center">
          <span class="block mr-3 w-26px h-30px i-lucide-bell text-[#929292] -rotate-45 border-none"></span>
          <div class="w-full"><p class="font-semibold">Search alert</p>
          <p class="text-[#929292]">Get notified when new items are posted</p></div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <Grid :items="items"></Grid>
        <div class="mx-auto mt-12">
          <!-- Pagination -->
          <button class="btn border border-[#afafaf] rounded text-[#808080] font-semibold mx-3">Back</button>
          <button class="btn btn-primary rounded mx-3 min-w-35px p-2">1</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">2</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">3</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">4</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">5</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">6</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">7</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">8</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">9</button>
          <button class="btn rounded mx-3 bg-[#F7F7F7] p-2 min-w-35px">10</button>
          <button class="btn border border-primary rounded text-primary font-semibold mx-3">Next</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import transformFirestore from "~/utils/transform-firestore";
import renameKeys from "~/utils/remap-listing-keys";
export default {
  async setup() {
    const url =
      "https://firestore.googleapis.com/v1/projects/swapu-staging/databases/(default)/documents:runQuery";
    const { data: items, error } = await useFetch(url, {
      method: "POST",
      body: {
        structuredQuery: {
          from: [{ collectionId: "All Posts" }],
          orderBy: [
            { field: { fieldPath: "created_on" }, direction: "DESCENDING" },
          ],
          limit: 24,
        },
      },
      // server: false,
      transform(data) {
        return data.map((item) => {
          return renameKeys(transformFirestore(item.document));
        });
      },
    });
    return { items, error };
  },
  data() {
    return {
      title: "SwapU - The Swapping Marketplace",
      heading: "Swapping Categories",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
};
</script>
