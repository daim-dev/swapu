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
    <nuxt-link class="flex" to="/create/swap-ready">
      <span class="bg-[#E9ECF8] mr-2 my-auto flex rounded-full w-26px h-26px">
        <span
          class="text-primary w-16px h-16px m-auto i-carbon-chevron-left"
        ></span>
      </span>
      <span class="flex">back</span>
    </nuxt-link>
    <div
      class="flex flex-auto flex-wrap mx-auto flex-col bg-white p-8 rounded-2xl mt-6"
    >
      <div class="text-center">
        <h1 class="text-2xl font-semibold">What would you swap it for?</h1>
        <!-- <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p> -->
      </div>
      <div>
        <div class="flex flex-row mb-5">
          <span class="font-semibold mr-auto text-lg pr-2 mb-3"
            >I am open to swap for anything of similar value</span
          >
          <label
            for="similar-value"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              name="similar-value"
              id="similar-value"
              class="sr-only peer"
            />
            <div
              class="peer-checked w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[25%] after:left-[12%] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            ></div>
            <span
              class="ml-3 font-semibold text-gray-900 dark:text-gray-300 sr-only text-lg"
              >As well as swapping, I'm open to selling too</span
            >
          </label>
        </div>
        <div class="flex flex-row mb-5">
          <span class="font-semibold mr-auto text-lg pr-2 mb-3"
            >Looking to swap for something specific</span
          >
          <label
            for="swap-specific"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              v-model="store.swapSpecific"
              type="checkbox"
              name="swap-specific"
              id="swap-specific"
              class="sr-only peer"
            />
            <div
              class="peer-checked w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[25%] after:left-[12%] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            ></div>
            <span
              class="ml-3 font-semibold text-gray-900 dark:text-gray-300 sr-only text-lg"
              >Looking to swap for something specific</span
            >
          </label>
        </div>
        <div class="w-full mb-3">
          <label
            for="item-category"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
            >Categories</label
          >
          <select
          v-model="store.postCategory2"
            placeholder="Select"
            name="category"
            id="item-category"
            class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
          >
            <option value="" disabled selected hidden class="text-gray-700">
              Select
            </option>
            <option
              v-for="category of categories"
              :key="category.value"
              :value="category"
            >
              {{ category.optionName }}
            </option>
          </select>
        </div>
        <div class="w-full">
          <label
            for="key-words"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
            >Add key words like brand, model, etc.</label
          >
          <input
            type="text"
            class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
            id="key-words"
            placeholder="Type here"
          />
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/"
          >Continue</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useCreateStore } from "~/stores/create";
export default {
  setup() {
    const store = useCreateStore();
    return { store };
  },
  data() {
    return {
      title: "SwapU - The Swapping Marketplace",
      heading: "Create a Listing",
      description:
        "Visit Australia's FREE online swap meet! Find cars, boats, motorbikes, furniture, electronics & more for swap across Australia.",
      categories: [
        {
          label: "category.4x4",
          optionName: "4x4s & Utes",
          status: "active",
          value: "4x4s & Utes",
          icon: "far fa-car-bus",
        },
        {
          label: "category.antiques",
          optionName: "Antiques",
          status: "active",
          value: "Antiques",
          icon: "fad fa-helmet-battle",
        },
        {
          label: "category.baby",
          optionName: "Baby & Toddler",
          status: "active",
          value: "Baby & Toddler",
          icon: "fal fa-baby",
        },
        {
          status: "active",
          label: "category.homemade",
          optionName: "Bespoke Homemade Crafts",
          value: "Bespoke Homemade Crafts",
          icon: "fal fa-tools",
        },
        {
          label: "category.bicycles",
          optionName: "Bicycles",
          status: "active",
          value: "Bicycles",
          icon: "fal fa-bicycle",
        },
        {
          label: "category.boats",
          optionName: "Boats",
          status: "active",
          value: "Boats",
          icon: "fal fa-ship",
        },
        {
          label: "category.camping",
          optionName: "Camping & Fishing",
          status: "active",
          value: "Camping & Fishing",
          icon: "fal fa-campground",
        },
        {
          label: "category.caravans",
          optionName: "Caravans & Campervans",
          status: "active",
          value: "Caravans & Campervans",
          icon: "fal fa-caravan",
        },
        {
          label: "category.car_parts",
          optionName: "Car Parts & Accessories",
          status: "active",
          value: "Car Parts & Accessories",
          icon: "fal fa-cars",
        },
        {
          label: "category.cars",
          optionName: "Cars",
          status: "active",
          value: "Cars",
          icon: "fad fa-car",
        },
        {
          label: "category.children_fashion",
          optionName: "Children's Fashion",
          status: "active",
          value: "Children's Fashion",
          icon: "fal fa-child",
        },
        {
          label: "category.comic_books",
          optionName: "Comic Books & Collectables",
          status: "active",
          value: "Comic Books & Collectables",
          icon: "fad fa-books",
        },
        {
          label: "category.electronics",
          optionName: "Electronics",
          status: "active",
          value: "Electronics",
          icon: "far fa-phone-laptop",
        },
        {
          label: "category.everything_else",
          optionName: "Everything Else",
          status: "active",
          value: "Everything Else",
          icon: "fad fa-list-alt",
        },
        {
          label: "category.furniture",
          optionName: "Furniture",
          status: "active",
          value: "Furniture",
          icon: "fal fa-couch",
        },
        {
          label: "category.gaming",
          optionName: "Gaming",
          status: "active",
          value: "Gaming",
          icon: "fad fa-gamepad-alt",
        },
        {
          label: "category.garden",
          optionName: "Garden & Home",
          status: "active",
          value: "Garden & Home",
          icon: "fal fa-flower-tulip",
        },
        {
          label: "category.accessories",
          optionName: "Handbag & Accessories",
          status: "active",
          value: "Handbag & Accessories",
          icon: "fal fa-bags-shopping",
        },
        {
          label: "category.hobbies",
          optionName: "Hobbies",
          status: "active",
          value: "Hobbies",
          icon: "fal fa-mountain",
        },
        {
          label: "category.kitchen",
          optionName: "Kitchen",
          status: "active",
          value: "Kitchen",
          icon: "fal fa-hat-chef",
        },
        {
          label: "category.men_fashion",
          optionName: "Men's Fashion",
          status: "active",
          value: "Men's Fashion",
          icon: "fal fa-male",
        },
        {
          label: "category.men_watches_sneakers",
          optionName: "Men's Watches & Sneakers",
          status: "active",
          value: "Men's Watches & Sneakers",
          icon: "fad fa-watch-calculator",
        },
        {
          label: "category.motorbikes",
          optionName: "Motorbikes",
          status: "active",
          value: "Motorbikes",
          icon: "fad fa-motorcycle",
        },
        {
          label: "category.musical_instruments",
          optionName: "Musical Instruments",
          status: "active",
          value: "Musical Instruments",
          icon: "fad fa-music",
        },
        {
          label: "category.odd_jobs",
          optionName: "Odd Jobs & Chores",
          status: "active",
          value: "Odd Jobs & Chores",
          icon: "fal fa-hard-hat",
        },
        {
          label: "category.pet_accessories",
          optionName: "Pet Accessories",
          status: "active",
          value: "Pet Accessories",
          icon: "fad fa-dog-leashed",
        },
        {
          label: "category.produce_homemade_foods",
          optionName: "Produce & Homemade Foods",
          status: "active",
          value: "Produce & Homemade Foods",
          icon: "fal fa-pie",
        },
        {
          label: "category.services",
          optionName: "Services",
          status: "active",
          value: "Services",
          icon: "far fa-hand-sparkles",
        },
        {
          label: "category.sporting_goods",
          optionName: "Sporting Goods",
          status: "active",
          value: "Sporting Goods",
          icon: "fal fa-tennis-ball",
        },
        {
          label: "category.textbooks",
          optionName: "Textbooks",
          status: "active",
          value: "Textbooks",
          icon: "fad fa-book",
        },
        {
          label: "category.tools",
          optionName: "Tools",
          status: "active",
          value: "Tools",
          icon: "fal fa-toolbox",
        },
        {
          label: "category.toys",
          optionName: "Toys",
          status: "active",
          value: "Toys",
          icon: "fab fa-linode",
        },
        {
          label: "category.water_sports",
          optionName: "Water Sports",
          status: "active",
          value: "Water Sports",
          icon: "fal fa-swimming-pool",
        },
        {
          label: "category.women_fashion",
          optionName: "Women's Fashion",
          status: "active",
          value: "Women's Fashion",
          icon: "fad fa-female",
        },
        {
          label: "category.women_accessories",
          optionName: "Women's Watches & Jewellery",
          status: "active",
          value: "Women's Watches & Jewellery",
          icon: "fal fa-watch",
        },
      ],
    };
  },
};
</script>
