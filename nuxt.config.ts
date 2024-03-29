import { defineNuxtConfig } from "nuxt/config";
import invertColor from "./utils/invert-color";

const APP_NAME = 'Swapu'
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
const APP_URL = process.env.CF_PAGES_URL

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY,
      APP_URL,
    }
  },
  meta: {
    title: APP_NAME,
    meta: [
      { name: 'description', content: APP_NAME },
      { name: 'apple-mobile-web-app-status-bar', content: 'black' },
      { name: 'theme-color', content: 'black' },
      {
        property: 'og:image',
        content: '/social.png',
      },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '600' },
      { property: 'og:image:alt', content: APP_NAME },
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png',
      },
    ],
  },
  modules: ['@pinia/nuxt', '@nuxt/content', 'nuxt-icon'],
  buildModules: ["@unocss/nuxt"],
  css: ["@unocss/reset/tailwind.css"],
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    webFonts: {
      fonts: {
        brand: [
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
        sans: 'Montserrat:400,700',
        poppins: 'Poppins:400',
      },
    },
    icons: {
      scale: 1.2,
    },
    theme: {
      colors: {
        primary: "#698AFF",
        nav: "#ffffff",
        footer: '#3F3F3F',
        hr: '#D9D9D9',

      },
    },
    shortcuts: [
      {
        btn: "py-2 px-4 px-6 py-2.5",
        "btn-link": "bg-transparent",
        "form-control":
          "block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
        "form-group": "mb-6",
        "form-label": "inline-block mb-2 text-gray-700",
      },
      // dynamic shortcuts
      [
        /^btn-(.*)$/,
        ([, c], { theme }) => {
          const color = theme.colors[c];
          const sm = "px-4 py-1.5";
          const md = "px-6 py-2.5";
          const lg = "px-8 py-3 text-md";
          const sizes = { sm, md, lg };
          const size = sizes[c];
          if (size) {
            return size;
          }
          const bg = color
            ? `bg-${c}-400 hover:bg-${c}-700 focus:bg-${c}-700 active:bg-${c}-800`
            : "";
          const text = color
            ? `text-${invertColor(color.DEFAULT ?? color, true)}`
            : "";
          return `${bg} ${text} inline-block font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`;
        },
      ],
    ],
  },
});
