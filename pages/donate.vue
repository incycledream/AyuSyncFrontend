<script lang="ts" setup>
import QRCodeStyling from "@solana/qr-code-styling";

const selectedMethodId = ref();

const methods = [
  {
    id: "boosty",
    label: "Boosty",
    icon: "uil:vk",
    value: "https://boosty.to/alexeyzavar",
    qrCode: false,
  },
  {
    id: "qiwi",
    label: "QIWI",
    icon: "cryptocurrency-color:qiwi",
    value: "https://qiwi.com/n/ALEXEYZAVAR",
    qrCode: false,
  },
  {
    id: "usdt_tron",
    label: "USDT TRC-20",
    icon: "cryptocurrency-color:usdt",
    value: "TRpbajq38qU8joThgAfKJLyEPbNjzsdPJ1",
  },
  {
    id: "trx",
    label: "Tron",
    icon: "cryptocurrency-color:trx",
    value: "TRpbajq38qU8joThgAfKJLyEPbNjzsdPJ1",
  },
  {
    id: "ton",
    label: "TON",
    icon: "logos:telegram",
    value: "EQA4i8U8vP3mYUZSV3KqDQEHPwmhninEqCkkKc7BITQ65zqb",
  },
  {
    id: "xmr",
    label: "Monero",
    icon: "cryptocurrency-color:xmr",
    value:
      "46nHfoh3xDrS5HmABubs72igHfczzqoMDKpUhfA5KhNehhf7bddqKnb4TkR9uaaPBwPxmov5r4iTUYcT7VgaFU72TRinpLS",
  },
  {
    id: "eth",
    label: "Etherium",
    icon: "cryptocurrency-color:eth",
    value: "0x405589857C8DFAb45B2027c68ad1e58877FDa347",
  },
  {
    id: "btc",
    label: "Bitcoin",
    icon: "cryptocurrency-color:btc",
    value: "bc1qdk6qq4mzq5yap3fpy0qau3246w3m3uwac9f0xd",
  },
];

const selectedMethod = computed(() =>
  methods.find((x) => x.id === selectedMethodId.value)
);
const qrCodeVal = ref();

watch(selectedMethod, async () => {
  const qr = new QRCodeStyling({
    width: 512,
    height: 512,
    type: "svg",
    data: selectedMethod.value?.value,
    dotsOptions: {
      type: "rounded",
      color: "#2B2242",
    },
    backgroundOptions: {
      color: "#ffffff00",
    },
  });

  qrCodeVal.value = await qr.getRawData();
});

const qrCodeUrl = computed(() => {
  try {
    return URL.createObjectURL(qrCodeVal.value);
  } catch {
    return null;
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col">
      <div
        class="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0"
      >
        <div
          v-for="method in methods"
          :key="method.id"
          :class="{ 'selected-btn': selectedMethodId === method.id }"
          class="cool-btn"
          @click="selectedMethodId = method.id"
        >
          <div class="flex items-center">
            <Icon :name="method.icon" class="mr-2" size="24" />
            {{ method.label }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedMethodId" class="flex flex-col items-center">
      <br />
      <br />
      <div v-if="selectedMethod.qrCode === false">
        <a :href="selectedMethod.value" target="_blank">
          <div class="cool-btn w-fit">Go to {{ selectedMethod.label }}</div>
        </a>
      </div>
      <div v-else class="flex flex-col items-center">
        <code class="select-all break-all">{{ selectedMethod.value }}</code>
      </div>
      <br class="hidden lg:block" />
      <br class="hidden lg:block" />
      <img
        :src="qrCodeUrl"
        alt="QRCode"
        class="hidden lg:block"
        height="450"
        width="450"
      />
      <br />
      <br />
      <p>
        Send a message with transaction URL to
        <nuxt-link
          class="hint-url"
          target="_blank"
          to="https://t.me/alexeyzavar"
          >@alexeyzavar
        </nuxt-link>
        after donation.
      </p>
    </div>
    <div v-else>
      <br />
      <br />
      <p>Press any method to see QR code or link.</p>
    </div>
  </div>
</template>

<style scoped>
.selected-btn {
  @apply bg-stone-200;
}
</style>
