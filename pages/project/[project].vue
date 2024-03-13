<script setup>
const router = useRoute()

const { data: project } = await useAsyncData('project', () => queryContent().where({
  _path: { $eq: '/project/' + router.params.project }
}).findOne())

defineOgImageComponent('Nuxt', {
  headline: 'Project - Rohan Dhimal',
  title: project.value.title,
  description: project.value.description,
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
