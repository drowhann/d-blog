<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  headline?: string
}>()
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full p-16 bg-gray-900 text-gray-100">
    <p class="text-2xl text-gray-400">{{ headline }}</p>
    <div class="flex flex-col">
      <h1 class="text-6xl font-bold">{{ title }}</h1>
      <p class="text-3xl mt-6 text-gray-300">{{ description }}</p>
    </div>
    <p class="text-2xl">Rohan Dhimal</p>
  </div>
</template>
