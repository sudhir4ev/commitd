import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import tailwindcss from '@tailwindcss/vite'
import { rehypeMermaidCLI } from 'rehype-mermaid-cli'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.app',
  integrations: [sitemap(), mdx({ rehypePlugins: [rehypeMermaidCLI] }), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    rehypePlugins: [rehypeMermaidCLI],
  },
})
