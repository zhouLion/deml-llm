<script setup lang="ts">
const route = useRoute()

const { runsInTab, onEdit } = useRunStores()

const runid = computed(() => {
  return route?.params?.runid || ''
})

const runs = computed(() => runsInTab.value || [])
</script>

<template>
  <ClientOnly>
    <ATabs
      :active-key="runid"
      type="editable-card"
      @change="(tab) => {
        navigateTo(`/training/run/${tab}`, {
          replace: true,
        })
      }"
      @edit="onEdit"
    >
      <ATabPane v-for="run in runs" :key="run" :tab="`Run ${run}`" closable />

      <template #leftExtra>
        <AButton
          mr @click="navigateTo('/training/runs', {
            replace: true,
          })"
        >
          LLM Run Home
        </AButton>
      </template>
    </ATabs>
  </ClientOnly>
</template>
