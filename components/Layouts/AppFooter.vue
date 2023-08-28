<script lang="ts" setup>
import { appDescription } from '~/constants'
</script>

<template>
  <div flex="~" justify-center p="2">
    {{ appDescription }} ©
    <DarkToggle />
  </div>
</template>
