<template>
  <slot />
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
})
</script>

<style>
pre code {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  background-color: #f6f8fa;
  font-size: 0.875rem;
  line-height: 1.5;
  tab-size: 2;
}

pre code{
  @apply bg-gray-200 dark:bg-gray-800 ;
}
</style>