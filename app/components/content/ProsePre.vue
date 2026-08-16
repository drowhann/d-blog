<template>
  <pre><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<style>
@reference "~/assets/css/main.css";

pre code {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  tab-size: 2;
  @apply bg-gray-200 dark:bg-gray-800;
}
</style>
