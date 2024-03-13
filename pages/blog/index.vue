<template>
  <div class="flex flex-col gap-4">
    <ContentList path="/blog" v-slot="{ list: blogs }">
      <NuxtLink class="p-2 border border-red bg-gray-900 text-gray-100 dark:text-gray-900 dark:bg-gray-100 "
        :to="blog._path" v-for="blog in blogs">
        <h2 class="font-medium">{{ blog.title }}</h2>
      </NuxtLink>

    </ContentList>
  </div>
</template>

<script setup lang="ts">
efineOgImageComponent('Nuxt', {
  headline: 'Blogs - Rohan Dhimal',
  title: 'Blogs',
  description: 'Blogs by Rohan Dhimal.',
})
</script>
