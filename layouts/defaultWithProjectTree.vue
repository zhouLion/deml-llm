<script lang="ts" setup>
import { theme } from 'ant-design-vue'

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
    <main>
      <LayoutsAppMenu />

      <div p="l-80 t-24 r-6 b-6" lt-lg="pt13 pl0 pr0" transition-all duration-200>
        <div
          relative z-10 hfull wfull overflow-hidden bg-white:7 p7 px10 lt-lg:bg-transparent lt-md:px0
          class="min-h-[calc(100vh-8rem)] rounded-1.4rem lt-md:rounded-none"
        >
          <slot />
        </div>
        <LayoutsAppFooter />
      </div>
    </main>
  </AConfigProvider>
</template>
