<script lang="ts" setup>
const { pinRun, runs, removeRun } = useRunStores()

definePageMeta({
  layout: 'run',
})

const columns = [
  {
    title: 'Run Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    width: 80,
  },
  {
    title: 'Account Name',
    dataIndex: 'accountName',
    key: 'accountName',
    ellipsis: true,
  },
  {
    title: 'Create Time',
    dataIndex: 'createTime',
    key: 'createTime',
    ellipsis: true,
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    ellipsis: true,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
]
</script>

<template>
  <ClientOnly>
    <h2 mb4>
      It's runs table
    </h2>

    <ATable :columns="columns" :data-source="runs || []">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
        <span v-if="column.dataIndex === 'actions'" flex items-center gap-2>
          <NuxtLink :to="`/training/run/${record.id}`" title="View in tab" @click="pinRun(record.id)">
            View in tab
          </NuxtLink>

          <AButton size="small" @click="removeRun(record.id)">
            Remove
          </AButton>
        </span>
      </template>
    </ATable>
  </ClientOnly>
</template>
