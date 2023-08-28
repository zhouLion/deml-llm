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
    <h2 mb4>
      It's runs table
      <AButton @click="addProject()">
        Create New Project
      </AButton>
    </h2>

    <ATable :columns="columns" :data-source="projects || []">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <NuxtLink :to="`/training/project/${record.id}`">
            {{ text }}
          </NuxtLink>
        </template>
        <span v-if="column.dataIndex === 'actions'" flex items-center gap-2>
          <AButton size="small" @click="removeProject(record.id)">
            Remove
          </AButton>
        </span>
      </template>
    </ATable>
  </ClientOnly>
</template>
