<script lang="ts" setup>
const route = useRoute()
const pid = computed(() => route?.params?.pid || '')
const runid = computed(() => route?.params?.runid || '')

const { projects, projectRuns } = useRunStores()
</script>

<template>
  <ClientOnly>
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <NuxtLink to="/training/projects">
          Training Projects
        </NuxtLink>
      </a-breadcrumb-item>

      <a-breadcrumb-item v-if="pid">
        <NuxtLink :to="`/training/project/${pid}`">
          Project{{ pid }}
        </NuxtLink>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="proj in projects" :key="proj.id">
              <NuxtLink :to="`/training/project/${proj.id}`">
                {{ proj.name }}
              </NuxtLink>
            </a-menu-item>
          </a-menu>
        </template>
      </a-breadcrumb-item>

      <a-breadcrumb-item v-if="runid">
        <NuxtLink :to="`/training/project/p-${pid}/${runid}`">
          Run {{ runid }}
        </NuxtLink>
        <template #overlay>
          <a-menu>
            <a-menu-item v-for="run in projectRuns" :key="run.id">
              <NuxtLink :to="`/training/project/p-${pid}/${run.id}`">
                Run {{ run.name }}
              </NuxtLink>
            </a-menu-item>
          </a-menu>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </ClientOnly>
</template>
