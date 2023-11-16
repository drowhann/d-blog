<script setup>
const router = useRoute()

useSeoMeta({
  twitterImage: '/images/rohan.jpeg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog - Rohan Dhimal',
  twitterDescription: 'Rohan Dhimal is a full-stack developer and a tech enthusiast.',
  ogUrl: `https://rohandhimal.com.np/blog/${router.fullPath}`,
})
</script>

<template>
  <div>
    <ContentDoc :path="router.fullPath" />
  </div>
</template>


