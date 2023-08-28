<script lang="ts" setup>
// useRoute
const {
  params,
} = useRoute()

const activeKey = ref('')

const { runsInTab, onEdit } = useRunStores()

onMounted(() => {
  activeKey.value = params.id
})
</script>

<template>
  <ClientOnly>
    <ATabs
      v-model:activeKey="activeKey"
      type="editable-card"
      @change="(evt) => navigateTo(`/training/run/${evt}`, {
        replace: true,
      })"
      @edit="onEdit"
    >
      <ATabPane v-for="runId in runsInTab" :key="runId" :tab="`Run ${runId}`" closable />

      <template #leftExtra>
        <AButton mr @click="navigateTo('/training/runs')">
          LLM Run Home
        </AButton>
      </template>
    </ATabs>

    <h2>Content of run</h2>
    <p>
      Here is run (id:{{ params.id }})
    </p>
  </ClientOnly>
</template>
