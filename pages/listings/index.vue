<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
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
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto">
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <h1 class="text-5xl font-brand font-bold py-3">{{ heading }}</h1>
        <p class="text-xl py-3">Swap what you have for what you want</p>
        <p>Swapping is the new online shopping</p>
      </div>
      <div class="w-full md:w-1/2">
        <img
          src="https://swapu.com.au/LandingPageOne/HeaderSectionGuest/Graphic.svg"
          class="mx-auto"
          alt=""
        />
      </div>
    </div>
    <div>
      <pre v-if="error">Error{{ error }}</pre>
      <Grid :items="items"></Grid>
      <!-- <pre>{{ JSON.stringify(items, null, 4) }}</pre> -->
    </div>
  </div>
</template>

<script>
import normalizeData from "~/utils/normalize-data";
import transformFirestore from '~/utils/transform-firestore';
import renameKeys from '~/utils/remap-listing-keys';
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
      heading: "Listings",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
};
</script>
