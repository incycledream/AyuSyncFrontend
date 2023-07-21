// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
  ],
  // @ts-ignore
  css: ["@/assets/main.pcss"],
  runtimeConfig: {
    public: {
      apiUrl: "https://ayusync.radolyn.com",
      official: false,
    },
  },
});
