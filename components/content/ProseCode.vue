<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
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
  },
})
</script>

<template>
  <slot />
</template>

<style>
pre code {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  background-color: #f6f8fa;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  tab-size: 2;
}

pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
