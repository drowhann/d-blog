<script setup lang="ts">
const { data: blogs } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

defineOgImage('OgDefault', {
  headline: 'Blogs - Rohan Dhimal',
  title: 'Blogs',
  description: 'Blogs by Rohan Dhimal.',
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      v-for="blog in blogs"
      :key="blog.path"
      class="p-2 border border-red bg-gray-900 text-gray-100 dark:text-gray-900 dark:bg-gray-100"
      :to="blog.path"
    >
      <h2 class="font-medium">{{ blog.title }}</h2>
    </NuxtLink>
  </div>
</template>
