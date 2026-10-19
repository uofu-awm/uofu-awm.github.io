# University of Utah AWM Student Chapter site

An Astro static site designed for the University of Utah Association for Women in Mathematics Student Chapter. Routine content lives in Markdown files under `src/content/`; see [CONTRIBUTING.md](CONTRIBUTING.md).

The chapter’s legacy material is preserved in `src/content/archive/`; see [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for archival and mark-source notes.

## First GitHub Pages setup

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In `astro.config.mjs`, replace `YOUR-GITHUB-USERNAME` with the account or organization that owns the Pages site.
4. If this is a project site—published at `https://ACCOUNT.github.io/REPOSITORY/`—set `base` to `'/REPOSITORY'`. If it has a custom domain or is the account root site, leave `base: undefined`.
5. Push to `main`; the included workflow builds and deploys the site.

Before launch, replace all sample names, dates, links, and email routing with confirmed chapter information. Register or update the public University website record and follow University brand, accessibility, and footer requirements.

## Commands

```sh
npm install
npm run dev
npm run build
```
