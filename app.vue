<script lang="ts" setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();

useSeoMeta({
  title: "AyuSync Official Server",
  description:
    "Official synchronization server for AyuGram - unofficial Telegram client.",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/ui/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/ui/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/ui/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/ui/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/ui/safari-pinned-tab.svg",
      color: "#2b2242",
    },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#F5F5F5",
    },
  ],
});
</script>

<template>
  <div class="mt-10 flex justify-center">
    <div
      class="flex select-none flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
    >
      <img alt="AyuGram Logo" class="h-24" src="@/assets/logo.svg" />
      <div class="flex flex-col">
        <nuxt-link class="cursor-default text-3xl font-bold" to="/">
          AyuGram Sync Server
        </nuxt-link>
        <p class="hint-url self-end">
          hosted by
          <nuxt-link target="_blank" to="https://radolyn.com"
            >Radolyn Labs
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-4 px-4 md:mt-12">
    <NuxtPage />
  </div>
  <footer class="mt-20 flex justify-center space-x-4 pb-16">
    <nuxt-link class="hint-url" to="/limits">Limits</nuxt-link>
    <p class="select-none">•</p>
    <nuxt-link class="hint-url" to="/privacy">Privacy Policy</nuxt-link>
    <p class="select-none">•</p>
    <nuxt-link class="hint-url" to="/faq">FAQ</nuxt-link>
  </footer>
</template>
