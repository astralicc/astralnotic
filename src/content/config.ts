import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    order: z.number().default(0),
    image: z.string().optional(),

    // Rich Project Case Study Fields (8 Requested Sections)
    problem: z.string().optional(),
    user: z.string().optional(),
    solution: z.string().optional(),
    keyFeatures: z.array(z.string()).optional(),
    challenge: z.string().optional(),
    impact: z.string().optional(),
    techChoices: z.array(z.object({
      tech: z.string(),
      rationale: z.string(),
    })).optional(),
    screenshot: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    type: z.enum(['Work', 'Leadership', 'Achievement']).default('Work'),
    location: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
  experience,
};
