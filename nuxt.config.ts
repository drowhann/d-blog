import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-16',
  modules: ['@nuxt/content', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
          langs: ['diff', 'ts', 'js', 'css', 'java', 'groovy', 'sql', 'xml', 'json', 'c', 'bash'],
        },
      },
    },
  },
  site: {
    url: 'https://www.rohandhimal.com.np/',
    name: 'Rohan Dhimal',
    description: 'Rohan Dhimal is a software engineer, technical writer, and open-source contributor.',
    defaultLocale: 'en',
  },
  schemaOrg: {
    identity: 'Person',
  },
  nitro: {
    preset: 'cloudflare_module',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
