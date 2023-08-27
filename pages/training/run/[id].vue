<script lang="ts" setup>
import { Button, TabPane, Tabs } from 'ant-design-vue'

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
    <Tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      @change="(evt) => navigateTo(`/training/run/${evt}`, {
        replace: true,
      })"
      @edit="onEdit"
    >
      <TabPane v-for="runId in runsInTab" :key="runId" :tab="`Run ${runId}`" closable />

      <template #leftExtra>
        <Button mr @click="navigateTo('/training/runs')">
          LLM Run Home
        </Button>
      </template>
    </Tabs>

    <h2>Content of run</h2>
    <p>
      Here is run (id:{{ params.id }})
    </p>
  </ClientOnly>
</template>
