<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { appName } from '~/constants'

useHead({
  title: appName,
})

const color = useColorMode()
</script>

<template>
  <AConfigProvider
    :theme="{
      algorithm: color.preference === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      token: {
        colorPrimary: '#10b981',
      },
    }"
  >
    <slot />
  </AConfigProvider>
</template>
