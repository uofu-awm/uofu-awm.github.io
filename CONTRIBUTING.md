# Updating the U of U AWM website

Routine updates use only Markdown files in `src/content/`. Do not edit Astro components, CSS, or configuration for ordinary events, announcements, officer changes, programs, or resource links.

## Add an event or announcement

1. Copy `src/templates/event.md` to `src/content/events/a-short-file-name.md`, or copy `src/templates/announcement.md` to `src/content/announcements/a-short-file-name.md`.
2. Replace the example text. Keep the `---` lines at the beginning and end of the frontmatter.
3. Use dates in `YYYY-MM-DD` format. Use a clear title, plain-language summary, and a specific location. If an event needs registration, use a descriptive `registrationLabel` such as `Register for the mentoring workshop`.
4. Preview the site before publishing, if possible.

Required fields:

- Event: `title`, `date`, `startTime`, `location`, `summary`, and `status`.
- Announcement: `title`, `date`, and `summary`.
- Officer: `name` and `role`.
- Resource: `title`, `category`, `summary`, and `url`.
- Program: `title`, `summary`, and `audience`.

## Preview locally

Install Node.js 22 or newer once. From the repository folder, run:

```sh
npm install
npm run dev
```

Open the address Astro prints, normally `http://localhost:4321`. To run the same validation used before deployment:

```sh
npm run build
```

## Save and publish with Git

From the repository folder, use these exact commands after reviewing your changes:

```sh
git status
git add src/content
git commit -m "Add spring welcome social"
git push origin main
```

Replace the quoted commit message with a short description of your update. Pushing to `main` starts the GitHub Pages deployment. GitHub normally takes a few minutes to publish it.

## Small text updates in GitHub’s browser editor

1. Open the repository on GitHub and open `src/content/events` or `src/content/announcements`.
2. For a new item, open the matching file in `src/templates`, choose **Copy raw file** or copy its contents, then create a new `.md` file in the correct content folder. For an edit, open the existing file and choose the pencil icon.
3. Preserve the frontmatter fields between the `---` lines, then select **Commit changes** directly to `main` (or make a pull request if your team uses review).
4. Open the **Actions** tab to confirm that “Deploy site to GitHub Pages” finishes successfully.

Do not put private student information, phone numbers, or sensitive access requests in a Markdown file. Use approved University forms or email for that information.
