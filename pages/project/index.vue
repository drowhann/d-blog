<template>
  <div class="flex flex-col gap-4">
    <ContentList path="/project" v-slot="{ list: projects }">
      <NuxtLink class="p-2 border border-red bg-gray-900 text-gray-100 dark:text-gray-900 dark:bg-gray-100 "
        :to="project._path" v-for="project in projects">
        <h2 class="font-medium">{{ project.title }}</h2>
      </NuxtLink>

    </ContentList>
  </div>
</template>

<script setup lang="ts">
defineOgImageComponent('Nuxt', {
  headline: 'Projects - Rohan Dhimal',
  title: 'Projects',
  description: 'Projects by Rohan Dhimal.',
})
</script>
