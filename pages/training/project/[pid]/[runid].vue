<script setup lang="ts">
const { params } = useRoute()
definePageMeta({
  layout: 'project',
})
</script>

<template>
  <div>
    It's documents table {{ params }}
  </div>
</template>
