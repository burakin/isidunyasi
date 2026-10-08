import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://burakin.github.io', base:'/isidunyasi/', integrations:[sitemap()]});
