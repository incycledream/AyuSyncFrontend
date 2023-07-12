<script lang="ts" setup></script>

<template>
  <div>
    <p class="text-xl font-medium">AyuSync Server Privacy Policy</p>
    <br />
    <p>Here's the data we collect:</p>
    <ul class="list-inside list-disc">
      <li>
        <b>Device Model</b> - you can view which devices were ever connected to
        the synchronization service. That way, you can prevent hack attempts.
      </li>
      <li>
        <b>Device Identifier</b> - we use it as identifier in your
        synchronization room to make sure your device don't get its own packets.
      </li>
      <li>
        <b>Application package</b> - we use it to gather analytics, but it's not
        connected to your account. Normally, you'd use
        <code>com.radolyn.ayugram</code> package, but who knows...
      </li>
    </ul>
    <br />
    <p>
      We don't collect either your <b>IP</b> or <b>packets</b>. Everything your
      device sends to the server gets forwarded to other your devices without a
      change, except packets sent after <code>sync_force</code>. In that mode,
      packets being collected in a memory for a limited time (usually a couple
      of seconds) to build the latest state.
    </p>
    <br />
    <p>
      If you want to delete your account - PM us directly:
      <nuxt-link
        class="hint-url"
        target="_blank"
        to="https://t.me/radolyn_services"
        >@radolyn_services
      </nuxt-link>
    </p>
  </div>
</template>

<style scoped></style>
