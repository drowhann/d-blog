<script setup>
const router = useRoute()
</script>

<template>
  <div>
    <ContentDoc :path="router.fullPath" />
  </div>
</template>
