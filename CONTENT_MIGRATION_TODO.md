# Legacy AWM content-migration to-do

Source audited: [University of Utah AWM Student Chapter legacy site](https://www.math.utah.edu/awmchapter/) on October 9, 2026.

This list separates content that is absent or damaged from content that is preserved in the archive but is not yet surfaced in the redesigned site. The legacy site’s newest visible event information is from Spring 2025, so verify anything promoted as current before publishing it as an upcoming event, officer roster, or sale.

All 37 direct legacy AWM destinations (homepage, chapter pages, calendar pages, and BRIDGES pages) have a corresponding archive source file. The gaps below are therefore mostly publishing, conversion, linking, and redesigned-page parity issues rather than entirely missing top-level pages.

## P0 — make the copied content publish

- [x] Fix content-collection registration for the installed Astro version. A clean build reports every collection as empty and generates only the eight shell pages; it does not generate any archive entries, program details, or event details. Migrate the `type: 'content'` collections in [src/content.config.ts](src/content.config.ts) to `glob()` loaders (one per `src/content/<collection>` directory), or explicitly enable Astro’s legacy collection compatibility as a temporary bridge.
  - Done when the build contains the 37 archive entries, 7 program detail pages, 3 event detail pages, and populated archive/resources/about/index pages without “collection does not exist or is empty” warnings.

## P1 — restore content and links lost in conversion

- [x] Rebuild [src/content/archive/links.md](src/content/archive/links.md). Its eight source destinations were flattened into two non-clickable run-on paragraphs. Restore separate, linked entries for GSAC, SIAM at the U, SACNAS, AWM, Women Do Math, EDGE, Mathematically Gifted and Black, and Lathisms.

- [x] Rebuild [src/content/archive/opportunities.md](src/content/archive/opportunities.md). All 20 source opportunities lost their links and were collapsed into two long paragraphs. Model them as accessible linked entries. The redesigned Resources page represents only Learning Assistant Program, Math Center, Science Research Initiative, and USTARS; Mentoring is represented as a program. Add or deliberately archive-only the remaining 15: GURU; College of Science Internship Program; NCUWM; Mickey Leland Energy Fellowship; DOE Computational Science Graduate Fellowship; STEM Ambassador Program; AMS graduate and undergraduate travel grants; FWCA; Field of Dreams; Budapest Semesters in Mathematics and Mathematics Education; Mathematics Research Communities; AMS CASE Workshop; and Causeway.

- [x] Restore the ten document links from the visible legacy Materials page. [src/content/archive/materials.md](src/content/archive/materials.md) retains the ten thumbnails but not their linked documents. Two Bystander Training PDFs appear only inside HTML comments on the old server, so recover those only if a content owner confirms they should be public.

- [x] Repair damaged archive conversion in [src/content/archive/committees.md](src/content/archive/committees.md): the current-roster caption is joined to a heading and every past-officer record is concatenated, making the historic roster unreadable.

- [x] Repair damaged archive conversion in [src/content/archive/bridges-2024.md](src/content/archive/bridges-2024.md): restore the two registration-form links, the in-page contact link, and the campus-map link; fix the malformed `Lecture Notes 2` URL containing parentheses; and split the merged Registration/Local/Travel headings.

- [x] Repair BRIDGES formatting that did not survive HTML-to-Markdown conversion: add valid table headers/separator rows to the 2021 and 2022 schedules, and correct duplicated/corrupted MathML-derived notation in the 2024 Ila Varma abstract.

- [x] Correct the replacement character in Daniel Hernández’s image alt text in [src/content/archive/bridges-2022.md](src/content/archive/bridges-2022.md).

- [x] Remove the legacy global footer that was imported into [src/content/archive/calendar-spring2021.md](src/content/archive/calendar-spring2021.md), including its duplicate copyright, University navigation, and footer image.

- [x] Make the preservation claim accurate. [ATTRIBUTIONS.md](ATTRIBUTIONS.md) and the Archive index currently say the text was retained verbatim and only formatting changed; either complete the repairs above or revise that claim to disclose the conversion losses.

- [x] Replace legacy internal links with new-site routes. There are 266 in-page links to 37 legacy AWM pages that already have archive equivalents, primarily calendar cross-navigation. Keep each entry’s `sourceUrl` citation pointing to the original, but make reader-facing navigation base-aware links to the local archive. Also change [src/content/resources/chapter-materials.md](src/content/resources/chapter-materials.md) to point to the local Materials archive rather than the old site.

- [x] Make archive media self-contained. The archive has 42 image references; 41 still hotlink `www.math.utah.edu/awmchapter/`, while [public/images](public/images) contains only the two new header marks. Download and attribute the approved original images/documents, update their URLs, and verify that archived pages work if the legacy host disappears.

## P2 — bring the redesigned pages up to legacy-content parity

- [x] Restore the legacy homepage’s engagement links outside the archival copy: the volunteer Google Form, the chapter-specific Campus Connect page (`/organization/awm-utah`), Facebook, and Instagram. The new Join/Footer links use only the generic Campus Connect URL. Decide whether to surface Merchandise as a current page/link; it currently exists only at [src/content/archive/merchandise.md](src/content/archive/merchandise.md).

- [x] Decide whether to retain the public department phone number, `(801) 581-6851`, which appeared on the legacy homepage/footer but is absent from the new Join and Footer pages.

- [x] Complete the event model or clearly route readers to the full archive. The Spring 2025 calendar contains 16 event rows, but [src/content/events](src/content/events) has records for only three: Ice Skating with AWM, the April 16 study session, and STEM Night. The missing 13 are January 22; January 28 “Who Inspires You?”; weekly study sessions on January 29, February 5/12/19/26, March 5/19/26, and April 2/9; and the February 18 Campus Engagement Program. The full table is preserved in the calendar archive.

- [x] Add or intentionally archive-only the dated speaker events from the legacy Speaker Series page: Julia Pevtsova (March 25, 2025) and Claudia Miller (April 8, 2025). They appear in local program prose but not as event records with dates.

- [x] Give event files stable, title-matched slugs. `guest-speaker`, `mentoring-study-session`, and `spring-welcome-social` do not match the visible event titles, so their generated URLs are misleading.

- [x] Complete the source-derived officer roster before presenting it as a roster. The legacy 2023–24 section has 12 people; [src/content/officers](src/content/officers) has 7. Add Sradha Ramesh Bhatt (Events co-chair), Tory Richardson and Jenna Judd (Speaker Series co-chairs), Abby Linscott (Undergraduate Involvement), and Noy Soffer Aranov (Post-doc Involvement), or label the partial list as intentionally abbreviated. Then obtain a verified current roster rather than treating historical 2023–24 data as current.

- [x] Keep Socials and Lunch Discussions distinct in the redesigned Programs index. The legacy site has separate pages, but the current Socials record is titled “Socials & lunch discussions” while a separate Lunch Discussions record also exists; both use order `3`.

- [x] Refresh or expire stale promoted data after the archival work is complete. The structured event records are all from 2025, the visible officer data is from 2023–24, and both homepage announcements are dated 2019.

## Verification checklist

- [x] Run a clean production build with no empty-collection warnings.
- [x] Confirm every archive item linked from `/archive` renders and its internal calendar/chapter navigation stays on the new site.
- [x] Test all restored external links, image alt text, images, and documents.
- [x] Review any source material with an owner before publishing it as current; preserve historic wording/dates in the archive where appropriate.
