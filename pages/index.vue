<script lang="ts" setup>
import { useMainStore } from "~/stores/main";

const config = useRuntimeConfig();

const buttonsDisabled = ref(false);
const signingIn = ref(false);

const errorText = ref();
const signInToken = ref();

const mainStore = useMainStore();

async function createUser() {
  buttonsDisabled.value = true;
  errorText.value = "";

  try {
    const res = await $fetch<AyuUser>(config.public.apiUrl + "/v1/ayu/create", {
      method: "POST",
    });

    mainStore.token = res.accessToken;
    buttonsDisabled.value = false;

    await navigateTo("/profile");
  } catch (error) {
    console.error(error);

    errorText.value = error;

    buttonsDisabled.value = false;
  }
}

async function signIn() {
  if (!signInToken.value || signInToken.value.length != 64) {
    errorText.value = "";
    return;
  }

  buttonsDisabled.value = true;
  errorText.value = "";

  try {
    await $fetch<AyuUser>(config.public.apiUrl + "/v1/ayu/info", {
      method: "GET",
      headers: {
        Authorization: signInToken.value,
      },
    });

    mainStore.token = signInToken.value;
    buttonsDisabled.value = false;

    await navigateTo("/profile");
  } catch (error) {
    console.error(error);

    errorText.value = error;

    buttonsDisabled.value = false;
  }
}

watch(signInToken, signIn);

async function verifyToken() {
  if (!mainStore.token) {
    return;
  }

  await navigateTo("/profile");
}

onMounted(verifyToken);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mt-14">
      <div class="w-fit rounded-xl border bg-white px-8 py-6 shadow-md">
        <p class="text-center text-xl font-bold">Authorization</p>
        <div class="mt-8 flex flex-col space-y-2">
          <div v-if="errorText" class="rounded-xl bg-pink-200 p-2">
            <p>{{ errorText }}</p>
          </div>
          <div v-if="!signingIn" class="flex flex-col space-y-2">
            <button
              :disabled="buttonsDisabled"
              class="cool-btn"
              @click="createUser"
            >
              Create account
            </button>
            <div class="flex items-center space-x-2">
              <div class="w-full border-b" />
              <p class="text-center text-gray-400">or</p>
              <div class="w-full border-b" />
            </div>
            <button
              :disabled="buttonsDisabled"
              class="cool-btn"
              @click="signingIn = true"
            >
              Sign In
            </button>
          </div>
          <input
            v-if="signingIn"
            v-model="signInToken"
            :disabled="buttonsDisabled"
            :maxlength="64"
            class="cool-input"
            placeholder="Paste your token"
            type="text"
          />
          <button
            v-if="signingIn"
            :disabled="buttonsDisabled"
            class="cool-btn"
            @click="
              signingIn = false;
              errorText = '';
            "
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
