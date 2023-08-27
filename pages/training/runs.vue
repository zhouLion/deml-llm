<script lang="ts" setup>
import { Table as ATable, Button, TabPane, Tabs } from 'ant-design-vue'

const activeKey = ref('')

const { runsInTab, onEdit, addRun } = useRunStores()

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

const data = [
  {
    key: '1',
    name: 'Run 1',
    tags: 'tag1, tag2',
    accountName: 'Account 1',
    createTime: '2021-01-01',
    state: 'Running',
  },
  {
    key: '2',
    name: 'Run 2',
    tags: 'tag1, tag2',
    accountName: 'Account 1',
    createTime: '2021-01-01',
    state: 'Running',
  },
  {
    key: '3',
    name: 'Run 3',
    tags: 'tag1, tag2',
    accountName: 'Account 1',
    createTime: '2021-01-01',
    state: 'Running',
  },
  {
    key: '4',
    name: 'Run 4',
    tags: 'tag1, tag2',
    accountName: 'Account 1',
    createTime: '2021-01-01',
    state: 'Running',
  },
]
</script>

<template>
  <ClientOnly>
    <Tabs
      v-model:activeKey="activeKey" type="editable-card"
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
    <h2 mb4>
      It's runs table
    </h2>

    <ATable :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <NuxtLink :to="`/training/run/${record.key}`" title="View in tab" @click="addRun(record.key)">
            <span class="i-solar:align-horizonta-spacing-linear inline-block" />
          </NuxtLink>
        </template>
      </template>
    </ATable>
  </ClientOnly>
</template>
