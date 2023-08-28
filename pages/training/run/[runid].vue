<script lang="ts" setup>
definePageMeta({
  layout: 'run',
})
// useRoute
const {
  params,
} = useRoute()
</script>

<template>
  <ClientOnly>
    <h2>Content of run</h2>
    <p>
      Here is run (id:{{ params.runid }})
    </p>
  </ClientOnly>
</template>
