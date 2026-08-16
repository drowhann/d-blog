import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.string().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    project: defineCollection({
      type: 'page',
      source: 'project/**/*.md',
      schema: z.object({
        date: z.string().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
    }),
  },
})
