<template>
  <nav class="px-10 py-2 flex justify-between items-center">
    <h1>dBlog</h1>
    <div class="flex gap-8">
      <NuxtLink to="/blog">Blogs</NuxtLink>
      <NuxtLink to="/project">Projects</NuxtLink>
    </div>
  </nav>
  <div class="px-10">
    <slot />
  </div>
</template>
