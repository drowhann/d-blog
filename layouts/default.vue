<template>
  <div :class="$colormode.isDarkMode.value ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-900 min-h-[100vh]">
      <Navbar />
      <section class="p-2">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>


<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) => title !== "Rohan Dhimal" ? `${title} - Rohan Dhimal` : title,
  ogImage: '/images/rohan.jpeg',
  ogUrl: 'https://rohandhimal.com.np',
  ogTitle: 'Rohan Dhimal',
  twitterCard: 'summary_large_image',
  twitterSite: '@rohandhimal9',
  twitterCreator: '@rohandhimal9',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>