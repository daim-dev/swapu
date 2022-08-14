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
          <span class="text-[#9A9FA5]">Not a member? </span>
          <nuxt-link to="/sign-up" class="font-semibold">Sign up</nuxt-link>
        </div>
        <h1 class="font-semibold text-5xl">Sign In</h1>
        <p class="font-semibold mt-8">
          Sign in with an existing Google or Facebook account
        </p>
        <button
          @click="loginWithGoogle"
          class="w-full btn rounded-lg font-semibold border bg-[#FCFCFC] border-color-[#EFEFEF] mt-8 flex justify-center"
        >
          <span class="i-logos-google-icon w-24px h-24px mr-2"></span>
          Google
        </button>
        <button
          @click="loginWithFacebook"
          class="w-full btn rounded-lg font-semibold mt-5 border bg-[#FCFCFC] border-color-[#EFEFEF] flex justify-center"
        >
          <span
            class="i-ant-design-facebook-filled w-24px h-24px text-[#3b5998] mr-2"
          ></span>
          Facebook
        </button>
        <hr class="border-color-hr my-8 h-2px" />
        <form @submit.prevent="loginWithEmail" class="w-auto">
          <p class="font-semibold">Or continue with your email address</p>
          <div class="flex rounded-lg bg-[#F4F4F4] items-center mt-5">
            <label
              for="emailInput"
              class="form-label inline-block mb-2 text-gray-700 text-lg sr-only"
              >Email address</label
            >
            <span
              class="i-uil-envelope-alt w-24px h-24px text-[#6F767E] m-3"
            ></span>
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
import Auth from "firebase-auth-lite";

export default {
  methods: {
    async loginWithEmail() {
      // We need to store somewhere the user email localy in order to validate that is the same user who clicked the email than the one who requested the email
      window.localStorage.setItem("loginEmail", this.email);

      // Then we request the email to be sent to the user
      await this.auth.sendOobCode("EMAIL_SIGNIN", this.email);
    },
    async loginWithGoogle() {
      await this.auth.signInWithProvider("google.com");
    },
    async loginWithFacebook() {
      await this.auth.signInWithProvider("facebook.com");
    },
  },
  setup() {
    const loading = ref(false);
    const email = ref("");
    const runtimeConfig = useRuntimeConfig();

    definePageMeta({
      layout: "empty",
    });

    let auth;
    if (process.client) {
      auth = new Auth({
        apiKey: runtimeConfig.FIREBASE_API_KEY,
        redirectUri: runtimeConfig.APP_URL,
      });
    }

    return {
      auth,
      apiKey: runtimeConfig.FIREBASE_API_KEY,
      loading,
      email,
      title: "Sign in",
      description: "Sign in with an existing Google or Facebook account",
    };
  },
};
</script>
