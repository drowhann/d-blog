<template>
  <h2 :id="id" class="text-lg font-bold mt-4 mb-2">
    <a v-if="id" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
