<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <Meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/geosynergy-swapu.appspot.com/o/Banner%2FLOGO%20RED%20on%20transparent%20background.png?alt=media&token=81518040-5ec5-4265-bad1-73b0ebab100d"
    ></Meta>
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto" v-if="item">
    <div class="w-full md:w-1/2 pr-4">
        <img
          :src="item.image"
          class="mx-auto"
          alt=""
        />
      </div>
      <div class="w-full md:w-1/2 flex flex-col justify-center pl-4">
        <h1 class="text-5xl font-brand font-bold py-3">{{item.name}}</h1>
        <p class="text-2xl py-3">${{item.price}}</p>
        <p class="text-gray-600">
          <span class="i-carbon-location my-auto inline-block"></span>
          {{item.location}}
        </p>
        <p class="text-xl py-3">{{item.description}}</p>
      </div>
    </div>
    <div>
      <!-- <pre>{{ JSON.stringify(item, null, 4) }}</pre> -->
    </div>
  </div>
</template>

<script>
import transformFirestore from '~/utils/transform-firestore';
import renameKeys from '~/utils/remap-listing-keys';
export default {
  async setup() {
    const route = useRoute()
    const url =
      `https://firestore.googleapis.com/v1/projects/swapu-staging/databases/(default)/documents/All Posts/${route.params.id}`;
    const { data: item, error } = await useFetch(url, {
      // server: false,
      transform(data) {
        console.log(data)
        const transformed = renameKeys(transformFirestore(data));
        console.log('transformed', transformed)
        return transformed;
      },
    });
    return { item, error };
  },
  data() {
    return {
      title: "SwapU - The Swapping Marketplace",
      heading: "Listing Details",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
};
</script>
