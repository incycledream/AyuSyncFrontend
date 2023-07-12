<script lang="ts" setup></script>

<template>
  <div>
    <p class="text-xl font-medium">AyuSync Server Limits</p>
    <br />
    <p class="font-bold">Why limitations exist?</p>
    <p>
      Just like any other service, AyuSync uses limits to ensure that users
      follow Fair Usage Policy and to keep the service running.
    </p>
    <br />
    <p>Here's our limits list:</p>
    <ul class="list-inside list-disc">
      <li>You can create a new account <b>once in 48 hours</b></li>
      <li>You can request <code>force sync</code> <b>once in 1 minute</b></li>
      <li>
        You can request <code>force sync</code> <b>with delta up to 14 days</b>
      </li>
      <li>
        We limit packet size up to <b>certain size</b> to prevent DDoS attacks.
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
