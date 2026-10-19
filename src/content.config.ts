import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    startTime: z.string(),
    endTime: z.string().optional(),
    location: z.string(),
    summary: z.string(),
    status: z.enum(['upcoming', 'cancelled', 'past']).default('upcoming'),
    registrationUrl: z.string().url().optional(),
    registrationLabel: z.string().optional(),
    accessibilityNotes: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    expires: z.coerce.date().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const officers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/officers' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    term: z.string().optional(),
    email: z.string().email().optional(),
    pronouns: z.string().optional(),
    order: z.number().default(99),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Academic support', 'Career & research', 'Community', 'Funding']),
    summary: z.string(),
    url: z.string(),
    audience: z.string().optional(),
    deadline: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    audience: z.string(),
    schedule: z.string().optional(),
    contact: z.string().optional(),
    signupUrl: z.string().url().optional(),
    signupLabel: z.string().optional(),
    order: z.number().default(99),
  }),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    sourceUrl: z.string().url(),
    section: z.enum(['Calendar', 'Chapter pages', 'BRIDGES conference']),
    originalDate: z.string().optional(),
  }),
});

export const collections = { events, announcements, officers, resources, programs, archive };
