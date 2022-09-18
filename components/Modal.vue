<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-10"
    v-if="open"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="close"
    ></div>

    <div class="absolute max-h-full w-full max-w-600px" :xclass="maxWidth">
      <div class="container bg-white overflow-hidden md:rounded-lg p-8">
        <div
          class="px-4 py-4 leading-none flex justify-between items-center font-medium text-sm"
        >
          <div class="text-4xl font-semibold">{{ title }}</div>
          <button
            @click="close"
            class="text-2xl hover:text-gray-600 cursor-pointer rounded-full"
          >
            <span class="i-gg-close-o block"></span>
          </button>
        </div>

        <div class="max-h-full px-4 py-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: String,
      default: "full",
      validator: (value) =>
        ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
    },
  },
  emits: ["update:open"],
  methods: {
    close() {
      // this.open = false;
      this.$emit("update:open", false);
    },
  },
  computed: {
    maxWidth() {
      switch (this.width) {
        case "xs":
          return "max-w-lg";
        case "sm":
          return "max-w-xl";
        case "md":
          return "max-w-2xl";
        case "lg":
          return "max-w-3xl";
        case "full":
          return "max-w-full";
      }
    },
  },
  mounted() {
    // const onEscape = (e) => {
    //   if (e.key === "Esc" || e.key === "Escape") {
    //     this.close();
    //   }
    // };
    // document.addEventListener("keydown", onEscape);
    // this.$once("hook:beforeDestroy", () => {
    //   document.removeEventListener("keydown", onEscape);
    // });
  },
};
</script>
