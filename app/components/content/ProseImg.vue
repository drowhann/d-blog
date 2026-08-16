<template>
  <img class="my-4" :src="src" :alt="alt" :width="width" :height="height">
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  width?: string | number
  height?: string | number
}>()
</script>
