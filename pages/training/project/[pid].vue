<script setup lang="ts">
const { projectRuns, removeRun, createProjectRun } = useRunStores()
definePageMeta({
  layout: 'project',
})

const columns = [
  {
    title: 'Run Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Project ID',
    dataIndex: 'pid',
    key: 'pid',
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
    <h2 mb4 flex items-center justify-between>
      It's runs table
      <AButton @click="createProjectRun()">
        Create New Run
      </AButton>
    </h2>

    <ATable :columns="columns" :data-source="projectRuns || []">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
        <span v-if="column.dataIndex === 'actions'" flex items-center gap-2>
          <NuxtLink :to="`/training/project/p-${useRoute().params.pid}/${record.id}`">
            View
          </NuxtLink>

          <AButton size="small" @click="removeRun(record.id)">
            Remove
          </AButton>
        </span>
      </template>
    </ATable>
  </ClientOnly>
</template>
