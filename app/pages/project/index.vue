<script setup lang="ts">
const { data: projects } = await useAsyncData('project-list', () =>
  queryCollection('project').all()
)

defineOgImage('OgDefault', {
  headline: 'Projects - Rohan Dhimal',
  title: 'Projects',
  description: 'Projects by Rohan Dhimal.',
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      v-for="project in projects"
      :key="project.path"
      class="p-2 border border-red bg-gray-900 text-gray-100 dark:text-gray-900 dark:bg-gray-100"
      :to="project.path"
    >
      <h2 class="font-medium">{{ project.title }}</h2>
    </NuxtLink>
  </div>
</template>
