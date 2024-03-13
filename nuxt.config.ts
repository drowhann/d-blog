// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['diff', 'ts', 'js', 'css', 'java', 'groovy', 'sql', 'xml', 'json'],
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
})
