# Updating the U of U AWM website

Hello, future AWM website maintainer! Here's some basic instructions for how to add content to the website as well, test edits locally, and publish changes.
Routine updates use only Markdown files in `src/content/`. Do not edit Astro components, CSS, or configuration for ordinary events, announcements, officer changes, programs, or resource links.

## Git Instructions

0. (First time only) __Setup__. Make sure you have git installed, and then run 

```bash
git clone git@github.com:uofu-awm/uofu-awm.github.io.git
```
in the terminal, in whichever folder you want to keep your personal copy of the website (which you will update on your machine, and eventually upload back to github so it appears online).

1. __Updating__. First run `git pull` to make sure your local copy is up to date. Then, edit the relevant files in `src/content/`.
Here are some instructions for adding some basic types of content:

### Add an event or announcement

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

2. (Optional) __Test locally__. You need to install `Node.js` (with npm) over [here](https://nodejs.org/en/download), specifically Node.js 22 or newer.
Then, from the repository folder, run:

```sh
npm install
npm run dev
```

This will start a local version of the website that updates as you make edits, so you can preview changes before pushing them.
Open the address Astro prints, normally `http://localhost:4321` to look at the preview.

3. __Push your changes__ to the internet. Run
- `git add .` to make git track all the files that you've changed.
- `git commit -m "<message>"` to "commit" these changes, and give a message about how you've updated things.
- `git push` to push your changes to the interwebs, and in a little bit, [https://uofu-awm.github.io/](https://uofu-awm.github.io/) should be updated!!!
