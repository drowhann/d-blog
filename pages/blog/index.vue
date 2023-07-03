<template>
  <div class="flex flex-col gap-4">
    <ContentList path="/blog" v-slot="{ list: blogs }">
      <NuxtLink
        class="p-2 border border-red border-1 border-gray-500 rounded text-gray-900 hover:bg-gray-50 hover:text-gray-800"
        :to="blog._path"
        v-for="blog in blogs"
      >
        <h2 class="font-medium">{{ blog.title }}</h2>
      </NuxtLink>
    </ContentList>
  </div>
</template>
