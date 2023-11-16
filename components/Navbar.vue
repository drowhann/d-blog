<template>
    <nav class="p-2">
        <section class="flex justify-between items-center">
            <NuxtLink to="/" class="text-lg font-bold">drowhann.</NuxtLink>
            <div class="flex gap-4 items-center">
                <NuxtLink to="/blog" class="text-sm font-bold uppercase">Blogs</NuxtLink>
                <NuxtLink to="/project" class="text-sm font-bold uppercase">Projects</NuxtLink>
                <div class="w-5 h-5 dark:bg-gray-100 bg-gray-900 rounded-full cursor-pointer"
                    @click="$colormode.toggleColorMode()">
                </div>
            </div>

        </section>
    </nav>
</template>