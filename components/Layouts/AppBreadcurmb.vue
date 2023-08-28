<script lang="ts" setup>
const route = useRoute()
const pid = computed(() => route?.params?.pid || '')
const runid = computed(() => route?.params?.runid || '')

const { projects } = useRunStores()
</script>

<template>
  <ClientOnly>
    <a-breadcrumb>
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
        Run {{ runid }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </ClientOnly>
</template>
