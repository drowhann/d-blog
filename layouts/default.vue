<template>
  <nav class="px-8 py-4 flex justify-between items-center bg-gray-700 text-white">
    <h1 class="text-2xl font-bold">dBlog</h1>
    <div class="flex gap-8 uppercase">
      <NuxtLink to="/blog">Blogs</NuxtLink>
      <NuxtLink to="/project">Projects</NuxtLink>
    </div>
  </nav>
  <div class="px-10 py-4">
    <slot />
  </div>
</template>
