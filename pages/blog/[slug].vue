<script setup>
const slug = useRoute().params.slug
const { data: blog } = await useAsyncData(`blog-${slug}`, () => queryContent(`/blogs/${slug}`).findOne())
</script>

<template>
  <div>
    <ContentRendererMarkdown :value="blog" />
  </div>
</template>
