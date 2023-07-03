<template>
  <div class="flex flex-col gap-4">
    <ContentList path="/blog" v-slot="{ list: blogs }">
      <NuxtLink class="p-2 border border-red border-1 rounded text-black" :to="blog._path" v-for="blog in blogs">
        <h2 class="font-light">{{ blog.title }}</h2>
      </NuxtLink>
    </ContentList>
  </div>
</template>
