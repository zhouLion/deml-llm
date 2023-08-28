<script setup lang="ts">
</script>

<template>
  <LayoutsAppBase>
    <LayoutsAppMenu />
    <div p="l-80 t-8 r-6 b-6" lt-lg="pt2 pl2 pr2" transition-all duration-200>
      <div
        relative z-10 hfull wfull overflow-hidden bg-white:7 p7 px10 lt-lg:bg-transparent lt-md:px0
        class="min-h-[calc(100vh-8rem)] rounded-1.4rem lt-md:rounded-none"
      >
        <LayoutsAppBreadcurmb />
        <slot />
      </div>
      <LayoutsAppFooter />
    </div>
  </LayoutsAppBase>
</template>
