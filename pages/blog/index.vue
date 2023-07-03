<script setup>
const { data: blogs } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>
<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      class="p-2 border border-red border-1 rounded text-black"
      :to="`/blog/${blog.title.toLowerCase().split(' ').join('-')}`"
      v-for="blog in blogs"
    >
      <h2 class="font-light">{{ blog.title }}</h2>
    </NuxtLink>
  </div>
</template>
