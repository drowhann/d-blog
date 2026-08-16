<template>
  <h2 :id="id" class="text-lg font-bold">
    <a v-if="id" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>
