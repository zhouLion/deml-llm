<script setup lang="ts">
definePageMeta({
  layout: 'project',
})
</script>

<template>
  <ClientOnly>
    <h2 mb4>
      It's runs:{{ useRoute().params?.runid }} under project {{ useRoute().params?.pid }}
    </h2>
  </ClientOnly>
</template>
