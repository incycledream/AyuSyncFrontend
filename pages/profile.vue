<script lang="ts" setup>
import { useMainStore } from "~/stores/main";
import { $fetch } from "ofetch";

const route = useRoute();
const config = useRuntimeConfig();

const mainStore = useMainStore();

async function getUser() {
  if (!mainStore.token) {
    return null;
  }

  console.log(mainStore.token);

  return await $fetch(config.public.apiUrl + "/v1/ayu/info", {
    headers: {
      Authorization: mainStore.token,
    },
  });
}

const { data: user } = await useLazyAsyncData("user", () => getUser());

async function logout() {
  mainStore.token = "";
  user.value = null;

  await navigateTo("/");
}

async function verifyToken() {
  if (!mainStore.token) {
    await navigateTo("/");
    return;
  }

  await refreshNuxtData();
}

async function saveTokenFromUrl() {
  if (route.query.token) {
    mainStore.token = route.query.token as string;
    await navigateTo("/profile");
  }
}

async function copyText(s: string) {
  if (!s) {
    return;
  }

  await navigator.clipboard.writeText(s);
}

onMounted(saveTokenFromUrl);
onMounted(verifyToken);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mt-14">
      <div
        class="container max-w-[100vw] rounded-xl border bg-white px-8 py-6 shadow-md"
      >
        <p class="text-center text-xl font-bold">Your profile</p>
        <div class="mt-8 flex flex-col">
          <p class="font-bold">ID</p>
          <code class="break-all md:select-all" @click="copyText(user?.id)">{{
            user?.id
          }}</code>
          <br />
          <p class="font-bold">Token</p>
          <code
            class="break-all md:select-all"
            @click="copyText(user?.accessToken)"
            >{{ user?.accessToken }}</code
          >
          <br />
          <p class="font-bold">AyuGram MVP</p>
          <p>{{ user?.isMVP ? "yes" : "no" }}</p>
          <div v-if="user?.devices && user?.devices.length > 0">
            <br />
            <p class="font-bold">Devices</p>
            <ul class="list-inside">
              <li v-for="device in user.devices">
                {{ device.name }} (<code class="break-all md:select-all">{{
                  device.identifier
                }}</code
                >)
              </li>
            </ul>
          </div>
          <div class="mt-6 flex w-full justify-between space-x-4">
            <button class="cool-btn" @click="navigateTo('/donate')">
              Donate
            </button>
            <button class="bad-btn" @click="logout">Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
