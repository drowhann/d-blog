<template>
  <div :class="$colormode.isDarkMode.value ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-gray-900  dark:text-gray-100 text-gray-900 min-h-[100vh]">
      <nav class="px-4 py-2 md:px-8 ,d:my-4">
        <section class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold">drowhann.</NuxtLink>
          <div class="flex gap-4 items-center">
          <NuxtLink to="/blog" class="text-lg font-bold uppercase">Blogs</NuxtLink>
          <NuxtLink to="/project" class="text-lg font-bold uppercase">Projects</NuxtLink>
            <div class="w-5 h-5 dark:bg-gray-100 bg-gray-900 rounded-full cursor-pointer" @click="$colormode.toggleColorMode()">
          </div>
          </div>
         
        </section>
      </nav>
      <section class="p-2 md:p-4">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </section>
    </div>
  </div>
</template>
