<script setup>
const router = useRoute()
const { data: blog } = await useAsyncData(`blog-${router.params.slug}`, () => queryContent(router.fullPath).findOne())
</script>

<template>
  <div>
    <ContentRendererMarkdown :value="blog" />
  </div>
</template>
