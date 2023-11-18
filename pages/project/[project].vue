<script setup>
const router = useRoute()

useSeoMeta({
  ogUrl: `https://rohandhimal.com.np/project/${router.fullPath}`,
})
</script>

<template>
  <div>
    <ContentDoc :path="router.fullPath">
      <template #not-found>
        No project found
      </template>
    </ContentDoc>
  </div>
</template>


