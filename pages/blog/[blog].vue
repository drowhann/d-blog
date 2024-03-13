<script setup>
const router = useRoute()


const { data: blog } = await useAsyncData('blog', () => queryContent().where({
  _path: { $eq: '/blog/' + router.params.blog }
}).findOne())

defineOgImageComponent('Nuxt', {
  headline: 'Blog - Rohan Dhimal',
  title: blog.value.title,
  description: blog.value.description,
})
</script>

<template>
  <div>
    <ContentDoc :path="router.fullPath">
      <template #not-found>
        No blog found
      </template>
    </ContentDoc>
  </div>
</template>
