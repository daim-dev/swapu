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
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto" v-if="item">
      <div class="w-full md:w-1/2 pr-4">
        <img :src="item.image" class="mx-auto rounded-lg" alt="" />
      </div>
      <div class="w-full md:w-1/2 flex flex-col pl-4">
        <div class="flex justify-between mb-5">
          <h1 class="text-3xl font-brand font-bold py-3">{{ item.name }}</h1>
          <p class="text-3xl py-3 text-primary font-bold">${{ item.price }}</p>
        </div>
        <div class="flex">
          <p class="text-gray-600 mr-9 flex">
            <span class="mr-2 i-quill-calendar-more my-auto"></span>
            {{
              new Date(item.created_on).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: 'numeric'
              })
            }}
          </p>
          <p class="text-gray-600 flex">
            <span class="i-carbon-location mr-2 my-auto"></span>
            {{ item.location }}
          </p>
        </div>

        <p class="py-3">{{ item.description }}</p>

        <div>
          <h3 class="font-bold">Will swap for</h3>
          <button
            class="bg-[#7B7C7D]/10 font-bold py-1 px-5 text-[#7B7C7D] rounded-full"
          >
            Cars
          </button>
        </div>

        <h3 class="font-bold">Swap/Sell Preferences</h3>
        <div class="flex justify-between">
          <button class="btn btn-primary rounded font-semibold">
            Make a Swap Offer
          </button>
          <button class="btn bg-[#0D284F] rounded text-light font-semibold">
            Make a Cash Offer
          </button>
          <button
            class="btn border border-color-[#606468] rounded font-semibold text-[#606468]"
          >
            Message
          </button>
        </div>
      </div>
    </div>
    <div>
      <!-- <pre>{{ JSON.stringify(item, null, 4) }}</pre> -->
    </div>
  </div>
</template>

<script>
import transformFirestore from "~/utils/transform-firestore";
import renameKeys from "~/utils/remap-listing-keys";
export default defineComponent({
  async setup() {
    const route = useRoute();
    const url = `https://firestore.googleapis.com/v1/projects/swapu-staging/databases/(default)/documents/All Posts/${route.params.id}`;
    const { data: item, error } = await useFetch(url, {
      key: url,
      server: false,
      transform(data) {
        console.log(data);
        const transformed = renameKeys(transformFirestore(data));
        console.log("transformed", transformed);
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
});
</script>
