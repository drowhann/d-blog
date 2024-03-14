<template>
  <div :class="$colormode.isDarkMode.value ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-900 min-h-[100vh]">
      <Navbar />
      <section class="px-2 py-4">
        <div class="max-w-4xl mx-auto">
          <slot />
        </div>
      </section>
      <Footer />
    </div>
  </div>
  <SpeedInsights />
</template>


<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
useSeoMeta({
  titleTemplate: (title) => title !== "Rohan Dhimal" ? `${title} - Rohan Dhimal` : title,
  ogImage: '/images/rohan.jpeg',
  ogUrl: 'https://rohandhimal.com.np',
  ogTitle: 'Rohan Dhimal',
  twitterCard: 'summary_large_image',
  twitterSite: '@rohandhimal9',
  twitterCreator: '@rohandhimal9',
  twitterImage: '/images/rohan.jpeg',
  twitterTitle: 'Rohan Dhimal',
  twitterDescription: 'Rohan Dhimal - Software Engineer, Web Developer, and Open Source Enthusiast'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>