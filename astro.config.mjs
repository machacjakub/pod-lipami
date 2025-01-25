// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import playformCompress from '@playform/compress';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.fyziopodlipami.cz/',
    integrations: [react(), sitemap(), playformCompress({JavaScript: false, HTML: true, CSS: true, SVG: true}), compressor()],
});