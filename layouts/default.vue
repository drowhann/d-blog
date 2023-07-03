<template>
  <nav class="px-8 py-4 flex justify-between items-center bg-gray-700 text-white">
    <NuxtLink to="/" class="text-2xl font-bold">dBlog</NuxtLink>
    <div class="flex gap-8 uppercase">
      <NuxtLink to="/blog">Blogs</NuxtLink>
      <NuxtLink to="/project">Projects</NuxtLink>
    </div>
  </nav>
  <div class="px-10 py-4">
    <slot />
  </div>
</template>
