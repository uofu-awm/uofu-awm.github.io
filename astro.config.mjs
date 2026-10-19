import { defineConfig } from 'astro/config';

// For a project site such as https://org.github.io/awm-website, set base to
// '/awm-website'. Leave it undefined for a custom domain or an org root site.
export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  base: undefined,
});
