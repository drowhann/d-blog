<script setup lang="ts">
const route = useRoute()

const { data: project } = await useAsyncData(route.path, () =>
  queryCollection('project').path(route.path).first()
)

defineOgImage('OgDefault', {
  headline: 'Project - Rohan Dhimal',
  title: project.value?.title,
  description: project.value?.description,
})
</script>

<template>
  <div>
    <ContentRenderer v-if="project" :value="project" />
    <p v-else>No project found</p>
  </div>
</template>
