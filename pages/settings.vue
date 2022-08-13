<template>
  <div class="container mx-auto px-6 py-6 h-full w-full">
    <div class="flex">
      <div class="w-60">
        <div class="uppercase text-[#92989E] p-2 font-semibold text-sm">Settings</div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/language">Language</NuxtLink>
        </div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/push-notifications"
            >Push notifications</NuxtLink
          >
        </div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/change-password">Change password</NuxtLink>
        </div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/faq">FAQ</NuxtLink>
        </div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/support">Support</NuxtLink>
        </div>
        <div class="font-semibold my-2 text-lg py-2 px-4 text-[#6F767E]">
          <NuxtLink to="/settings/payment">Payment</NuxtLink>
        </div>
      </div>
      <div class="flex flex-auto">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sidebar: [
      {
        url: "/settings/language",
        name: "Language",
        pos: "1/1",
      },
      {
        url: "/settings/push-notifications",
        name: "Push notifications",
        pos: "2/1",
      },
    ],
  }),
};
</script>

<style></style>
