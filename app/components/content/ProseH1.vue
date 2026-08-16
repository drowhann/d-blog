<template>
  <h1 :id="id" class="text-2xl font-bold mb-2">
    <a v-if="id" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
