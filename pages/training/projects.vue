<script setup lang="ts">
const {
  projects,
  addProject,
  removeProject,
} = useRunStores()

definePageMeta({
  layout: 'project',
})

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
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
      <AButton @click="addProject()">
        Create New Project
      </AButton>
    </h2>

    <ATable :columns="columns" :data-source="projects || []">
      <template #bodyCell="{ column, text, record }">
        <span v-if="column.dataIndex === 'actions'" flex items-center gap-2>
          <NuxtLink :to="`/training/project/${record.id}`">
            View
          </NuxtLink>
          <AButton size="small" @click="removeProject(record.id)">
            Remove
          </AButton>
        </span>
      </template>
    </ATable>
  </ClientOnly>
</template>
