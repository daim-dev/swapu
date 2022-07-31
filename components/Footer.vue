<template>
  <section
    class="bg-footer flex justify-center items-center text-white flex-wrap px-8 md:px-32 py-14"
  >
    <div class="flex flex-wrap w-full justify-between">
      <div class="flex justify-between">
        <img src="/img/footer-logo.svg" alt="Swapu" width="122" height="35" />
        <div class="flex items-center ml-15">
          <img src="/img/social/instagram.png" alt="Instagram" class="w-25px h-25px mr-3" height="25" width="25" />
          <img src="/img/social/facebook.png" alt="Facebook" class="w-25px h-25px mr-3" height="25" width="25" />
          <img src="/img/social/twitter.png" alt="Twitter" class="w-25px h-25px" height="25" width="25" />
        </div>
      </div>
      <div class="font-semibold">Contact</div>
      <div class="flex w-full md:w-auto flex-wrap">
        <div class="w-full sm:w-1/2">
          <div class="font-semibold">Don't miss out</div>
          <div class="opacity-50">Receive weekly swap updates</div>
        </div>
        <div class="flex w-full sm:w-1/2">
          <input
            class="form-control border-none rounded-l-lg"
            type="email"
            placeholder="Your email address"
          />
          <button class="btn btn-primary rounded-r">Subscribe</button>
        </div>
      </div>
    </div>
    <hr class="w-full opacity-30 mt-8" />
    <p class="opacity-50">
      Copyright © 2022 SwapU | <a class="underline">Privacy Policy</a> |
      <a class="underline">Terms and Conditions</a> |
      <a class="underline">Cookie Policy</a>
    </p>
  </section>
</template>
