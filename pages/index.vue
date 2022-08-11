<template>
  <div class="container mx-auto px-6 py-6 h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <h1 class="sr-only">I'll Swap you</h1>
    <section
      class="relative overflow-hidden bg-no-repeat bg-cover"
      :style="`
    background-position: 50%;
    background-image: url('/banners/home.png');
    height: 619px;
  `"
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      >
        <slot>
          <div class="flex justify-end items-center h-full">
            <div class="max-w-361px mx-6">
              <div class="p-6 md:p-12 bg-white rounded text-lg font-semibold">
                <div>
                  I have a
                  <select
                    placeholder="Select"
                    class="form-control border-none mt-6 px-0"
                  >
                    <option value="" disabled selected hidden>Select</option>
                  </select>
                </div>
                <div class="mt-11">
                  and I want to swap it for a
                  <select
                    placeholder="Select"
                    class="form-control border-none mt-6 px-0"
                  >
                    <option value="" disabled selected hidden>Select</option>
                  </select>
                </div>
                <div class="mt-11">
                  <button class="btn btn-primary rounded-lg w-full text-left">
                    Find my swap
                  </button>
                </div>
              </div>
              <div class="text-[#787878] mt-9">
                Don't miss out on the latest swap listings. Add your email and
                receive weekly updates.
                <div class="rounded-lg bg-white flex p-2 mt-2">
                  <input
                    name="email"
                    type="email"
                    class="form-control border-none p-0"
                    placeholder="Your email address"
                  />
                  <button class="btn btn-primary rounded whitespace-nowrap">
                    Keep me updated
                  </button>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </section>
    <section class="py-15">
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold">Recent swap offers</h2>
        <button class="btn btn-primary rounded-lg">Explore All</button>
      </div>
      <!-- <div>Card 1</div>
      <div>Card 2</div> -->
    </section>
    <section class="py-30">
      <h2 class="text-4xl font-bold">Categories</h2>
    </section>
    <section class="py-30">
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold">Suggested for you</h2>
        <button class="btn btn-primary rounded-lg">Explore All</button>
      </div>
      <hr class="my-11 border-color-hr"/>
      <Grid :items="items"></Grid>
    </section>
    <section class="p-8 md:p-16 mt-15">
      <div>
        <h2 class="text-2xl font-bold">Buy our 
          <img src="/img/swap-ready.png" alt="swap ready" class="inline-block" />
          package for $10 and everyone that sees your item will know that you are ready to swap and have everything you need to make the swap smooth and trouble-free</h2>
        <div class="text-gray">
          Our package includes a "Swap Ready" badge on your listing and all the information that you need to have your car/bike/boat etc ready to swap.
        </div>
        <button class="btn btn-primary rounded-lg">Buy</button>
      </div>
      <div>
        Images
      </div>
    </section>
    <section class="mt-15">
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold">Something of interest</h2>
        <button class="btn btn-primary rounded-lg">Explore All</button>
      </div>
      <hr class="my-11 border-color-hr"/>
      <Grid :items="items"></Grid>
    </section>
  </div>
</template>

<script>
import transformFirestore from '~/utils/transform-firestore';
import renameKeys from '~/utils/remap-listing-keys';
export default {
  data() {
    return {
      title: "SwapU - The Swapping Marketplace",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
    };
  },
  async setup() {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig()

    if (route.query.oobCode) {
      const endpoint = "signInWithEmailLink";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${runtimeConfig.FIREBASE_API_KEY}`;
      const { data } = await useFetch(url, {
        method: "POST",
        lazy: true,
        server: false,
        body: {
          oobCode: route.query.oobCode,
          email: route.query.email,
        },
      });
      console.log("data", data);
      // return data;
    }
    // Email sign-in flow.
    // if (location.href.match(/[&?]oobCode=/)) {
    //   const oobCode = location.href.match(/[?&]oobCode=([^&]+)/)[1];
    //   const email =
    //     (options && options.email) ||
    //     location.href.match(/[?&]email=([^&]+)/)[1];
    //   const expiresAt = Date.now() + 3600 * 1000;
    //   const { idToken, refreshToken } = await this.api("signInWithEmailLink", {
    //     oobCode,
    //     email,
    //   });

    //   // Now, get the user profile.
    //   await this.fetchProfile({ idToken, refreshToken, expiresAt });

    //   // Remove sensitive data from the URLSearch params in the location bar.
    //   history.replaceState(null, null, location.origin + location.pathname);
    // }

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
          limit: 4,
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
};
</script>
