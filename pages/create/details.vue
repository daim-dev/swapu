<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div class="flex flex-auto flex-wrap max-w-1024px mx-auto flex-col">
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Add description</h1>
        <p class="font-semibold text-[#929090]">
          To start swapping, all you need is a name, price, and file
        </p>
      </div>
      <div>
        <div class="w-full flex my-8">
          <div class="w-full md:w-1/2 mr-4">
            <label
              for="item-name"
              class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
              >Item name</label
            >
            <input
              type="text"
              class="form-control text-xl bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg py-3 px-4"
              id="item-name"
              placeholder="Type here"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label
              for="item-category"
              class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold mb-4"
              >Categories</label
            >
            <select
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
                :value="category.value"
              >
                {{ category.optionName }}
              </option>
            </select>
          </div>
        </div>

        <div class="w-full my-8">
          <label
            for="item-description"
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Item description</label
          >
          <textarea
            type="text"
            class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-none rounded-lg"
            id="item-description"
            placeholder="Type here"
          ></textarea>
        </div>
        <div class="w-full my-8">
          <label
            class="form-label inline-block mb-2 text-gray-700 text-lg font-semibold"
            >Condition</label
          >
          <div class="flex items-center justify-around">
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-new"
                type="radio"
                value="new"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-new"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >New</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                checked
                required
                id="condition-used-like-new"
                type="radio"
                value="used-like-new"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-like-new"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (like new)</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-used-fair"
                type="radio"
                value="used-fair"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-fair"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (fair)</label
              >
            </div>
            <div class="flex items-center mx-3 w-full">
              <input
                required
                id="condition-used-good"
                type="radio"
                value="used-good"
                name="condition"
                class="hidden peer"
              />
              <label
                for="condition-used-good"
                class="py-4 mx-auto text-lg font-semibold w-full text-center cursor-pointer rounded-2xl text-[#888888] bg-[#F4F4F4] peer-checked:text-primary peer-checked:border peer-checked:border-primary"
                >Used (good)</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-14">
        <nuxt-link
          class="btn btn-primary rounded-lg font-semibold w-260px text-center py-4"
          to="/create/images"
          >Continue</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
