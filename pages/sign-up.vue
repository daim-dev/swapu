<template>
  <div class="container-fluid mx-auto h-full w-full">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <div class="flex items-center flex-wrap h-full w-full text-gray-800">
      <div class="md:w-4/10 w-0 bg-[#F7F7F7] relative">
        <img src="/img/login.png" class="w-full" alt="Swapu" />
        <img
          src="/logo.svg"
          class="navbar-brand absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2"
          width="122"
          height="35"
          alt="Swapu"
        />
      </div>
      <div class="ml-38">
        <div class="top-0 right-0 absolute mt-8 mr-10">
          <span class="text-[#9A9FA5]">Already a member? </span>
          <nuxt-link to="/sign-in" class="font-semibold">Sign in</nuxt-link>
        </div>
        <h1 class="font-semibold text-5xl">Sign up</h1>
        <p class="font-semibold mt-8">
          Sign up with an existing Google or Facebook account
        </p>
        <button
          class="w-full btn rounded-lg font-semibold border bg-[#FCFCFC] border-color-[#EFEFEF] mt-8 flex justify-center"
        >
          <span class="i-logos-google-icon w-24px h-24px mr-2"></span>
          Google
        </button>
        <button
          class="w-full btn rounded-lg font-semibold mt-5 border bg-[#FCFCFC] border-color-[#EFEFEF] flex justify-center"
        >
          <span
            class="i-ant-design-facebook-filled w-24px h-24px text-[#3b5998] mr-2"
          ></span>
          Facebook
        </button>
        <hr class="border-color-hr my-8 h-2px" />
        <form @submit.prevent="login" class="w-auto">
          <p class="font-semibold">Or continue with your email address</p>
          <div class="flex rounded-lg bg-[#F4F4F4] items-center mt-5">
            <label
              for="emailInput"
              class="form-label inline-block mb-2 text-gray-700 text-lg sr-only"
              >Email address</label
            >
            <span class="i-uil-envelope-alt w-24px h-24px text-[#6F767E] m-3"></span>
            <input
              type="email"
              class="form-control text-lg bg-[#F4F4F4] focus:bg-[#F4F4F4] font-semibold border-y-none border-r-none flex-1 border-l-2 border-color-[#2A85FF] my-3 mr-3 pl-1 p-0"
              id="emailInput"
              placeholder="Your email"
              v-model="email"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full btn btn-primary rounded-lg mt-8 font-bold"
          >
            <template v-if="loading">Loading</template>
            <template v-else>Continue</template>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  methods: {
    async login() {
      const endpoint = "sendOobCode";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${this.apiKey}`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          requestType: "EMAIL_SIGNIN",
          continueUrl: "http://localhost:3000" + `?email=${this.email}`,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        const code = data.error.message.replace(/ ?: [\w ,.'"()]+$/, "");
        throw Error(code);
      }
      return data;
    },
  },
  setup() {
    const loading = ref(false);
    const email = ref("");
    const runtimeConfig = useRuntimeConfig();

    definePageMeta({
      layout: "empty",
    });

    return {
      apiKey: runtimeConfig.FIREBASE_API_KEY,
      loading,
      email,
      title: "Sign up",
      description: "Sign up with an existing Google or Facebook account",
    };
  },
};
</script>