<script setup lang="ts">
const route = useRoute()

const { data: blog } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)

defineOgImage('OgDefault', {
  headline: 'Blog - Rohan Dhimal',
  title: blog.value?.title,
  description: blog.value?.description,
})
</script>

<template>
  <div>
    <ContentRenderer v-if="blog" :value="blog" />
    <p v-else>No blog found</p>
  </div>
</template>
