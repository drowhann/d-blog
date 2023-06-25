<script setup>
const { data, pending } = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
  <ContentRenderer :value="data" />
</template>
