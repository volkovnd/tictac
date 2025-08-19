<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return (title ? `${title} | ` : '') + '@tic tac toe'
  },
})
</script>

<style lang="scss">
@use '~/assets/styles/helpers' as *;
</style>
