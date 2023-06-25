<script setup>
const { data } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
  <ContentRenderer :value="data" />
</template>
