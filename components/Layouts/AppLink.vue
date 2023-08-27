<script lang="ts" setup>
const props = defineProps<{
  icon: string
  activeIcon: string
  to?: { path?: string; name?: string }
}>()
</script>

<template>
  <NuxtLink v-slot="{ isActive: active }" :to="to">
    <div
      round mb-3 cursor-pointer p-4 transition-all duration-200 active:bg-white:20 hover:bg-white:10
      class="group"
      :class="{ 'bg-white:10': active }"
    >
      <div
        flex="~ row"
        group-hover:text-primary-300 mr-5 items-center
        :class="{ 'text-primary-300': active }"
      >
        <span
          :class="active ? activeIcon : icon"
          mr-4 inline-flex text-2xl
        />
        <slot />
      </div>
    </div>
  </NuxtLink>
</template>
