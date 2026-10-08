import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
 loader: glob({pattern:'**/*.md',base:'./src/content/blog'}),
 schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),category:z.string(),image:z.string(),imageAlt:z.string().optional(),featured:z.boolean().default(false),readTime:z.number().optional()})
});
export const collections={blog};
