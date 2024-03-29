<template>
  <div
    class="rounded-lg shadow-lg bg-white flex flex-col grow self-stretch min-w-240px max-w-360px"
  >
    <img
      class="rounded-t-lg"
      :src="image"
      alt=""
      :width="imageWidth"
      :height="imageHeight"
      :aspect-ratio="imageWidth / imageHeight"
      :style="`background-color: ${_imageBackgroundColor};`"
      style="height: 216px"
    />
    <div class="p-6 flex grow flex-col self-stretch">
      <div
        class="text-gray-900 text-xl font-medium whitespace-nowrap text-ellipsis overflow-hidden"
      >
        {{ name }}
      </div>
      <p class="text-[#8C959F] mt-3">
        <span
          class="i-gridicons-location my-auto inline-block text-[#787878]"
        ></span>
        {{ location }}
      </p>
      <div class="flex justify-between mt-6">
        <span v-if="price" class="font-bold"> ${{ price }} </span>
        <Link
          class="ml-2 flex justify-end self-end justify-self-end mt-auto text-primary"
          v-for="link in links"
          v-bind="link"
          :key="link"
        >
          <span class="pr-2 font-medium">Details</span>
          <span
            class="w-18px h-18px my-auto"
            :class="
              link.url.startsWith('http')
                ? 'i-carbon-new-tab'
                : 'i-fa6-solid-arrow-right'
            "
          ></span>
        </Link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: { type: String, default: null },
    dark: { type: Boolean, default: false },
    acronym: { type: String, default: undefined },
    image: { type: String, default: undefined },
    url: { type: String, default: undefined },
    icon: { type: [String, Object], default: () => undefined },
    name: { type: String, default: undefined },
    subheading: { type: String, default: undefined },
    description: { type: String, default: undefined },
    list: { type: Array, default: undefined },
    links: { type: Array, default: undefined },
    // plans: { type: Array, default: undefined },
    price: { type: Number, default: undefined },
    startDate: { type: String, default: undefined },
    endDate: { type: String, default: undefined },
    imageHeight: { type: Number, default: 360 },
    imageWidth: { type: Number, default: 640 },
    imageQuality: { type: Number, default: 100 },
    imageColor: { type: String, default: "#f9f9f9" },
    imageBackgroundColor: { type: String, default: null },
    imageFit: {
      type: String,
      default: "inside",
      validator: (val) =>
        ["cover", "contain", "inside", "outside"].includes(val),
    },
    iconColor: { type: String, default: "grey" },
  },
  computed: {
    _imageBackgroundColor() {
      return this.imageBackgroundColor ?? this.imageColor;
    },
    lazy() {
      const svg = Buffer.from(
        `<svg xmlns='http://www.w3.org/2000/svg'
      viewBox='00512512'>
      <rect width="100%" height="100%" fill="${this._imageBackgroundColor}"/>
      </svg>`,
      ).toString("base64");
      return `data:image/svg+xml;base64,${svg}`;
    },
  },
};
</script>
