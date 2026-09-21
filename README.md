# himanshi-portfolio

**Website** - `https://darkblu2.github.io/`

Astro portfolio starter inspired by the project-first clarity and numbered navigation of Sunny Patel's portfolio, adapted for computer engineering, hardware, photonics, research notes, and a résumé preview.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Astro prints (normally `http://localhost:4321`).

## The one file you will edit most

`src/data/site.ts`

It contains:
- your name, links, email, headline, and intro
- projects
- experience
- research notes
- skills
- “currently” items

You can update most of the site's content without touching page layout code.

## Add a project

In `src/data/site.ts`, duplicate one project object in the `projects` array.

Required fields:
- `slug`: URL-safe, e.g. `riscv-pipeline`
- `number`: display order, e.g. `04`
- `year`
- `title`
- `tagline`
- `description`
- `image`: path inside `/public`
- `status`
- `tags`
- `challenge`
- `approach`
- `learned`

Set `featured: true` to show it on the homepage.

The detail page is generated automatically at `/projects/your-slug`.

## Add project images

Put images in `public/images/`.

Then change:

```ts
image: '/images/your-image.jpg'
```

Recommended crop: 16:10 or wider. Screenshots, block diagrams, waveform screenshots, PCB/device photos, and simulation plots work better than generic stock photos.

## Add your résumé

Put your PDF here:

`public/resume.pdf`

The `/resume` page will embed it automatically.

## Add a portrait or lab image

Open `src/pages/about.astro`.

Replace the `portrait-placeholder` div with:

```astro
<img class="portrait" src="/images/portrait.jpg" alt="Himanshi" />
```

Then add `public/images/portrait.jpg`.

## Change the navigation

Open `src/components/Header.astro` and edit the `links` array.

Example:

```ts
['03', 'Research', '/research']
```

To remove a page, remove its row. To rename it, change the label.

## Change colors / type / overall visual style

Open `src/styles/global.css`.

Most important variables are at the top:

```css
--bg: #f2f1ed;
--surface: #e8e7e2;
--text: #11120f;
--muted: #696a65;
--line: #c9c8c2;
--accent: #2e42ff;
--max: 1180px;
```

Change `--accent` first if you want a different personality without redesigning everything.

## Change the cursor-light effect

The moving light is controlled by:
- `body::before` in `src/styles/global.css`
- the pointer-move script in `src/layouts/BaseLayout.astro`

Delete both if you want no cursor glow.

For a smaller glow, change `240px` in:

```css
radial-gradient(240px circle ...)
```

## Change the homepage order

Open `src/pages/index.astro`.

Each `<section>` is independent. Move whole sections up/down to reorder:
- hero
- selected work
- currently
- research notebook
- skills

## Make project cards denser or more visual

Open `src/components/ProjectCard.astro`.

Useful edits:
- `aspect-ratio: 16/10` → image crop
- `font-size` in `h3` → title size
- remove `.tags` if you want less metadata
- move image below text if you want editorial-style cards

## Add an entirely new page

Create a file in `src/pages/`, e.g.:

`src/pages/coursework.astro`

Astro automatically makes it available at `/coursework`.

Wrap it in:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Coursework — Himanshi">
  <section class="shell section">
    <h1 class="h1">Coursework</h1>
  </section>
</BaseLayout>
```

Then add it to `Header.astro`.

## Deploy

Easy options:
- GitHub + Vercel
- GitHub + Netlify
- GitHub Pages (with a little Astro config)

For Vercel: push the repo to GitHub, import the repository into Vercel, and use the default Astro settings.

## Suggested content order before publishing

1. Replace profile links/email.
2. Keep only projects you actually want recruiters/researchers to open.
3. Replace placeholder project images.
4. Rewrite project descriptions in your own words.
5. Fill experience bullets with measurable work.
6. Add `resume.pdf`.
7. Add 2–4 research notes.
8. Remove any section you cannot keep updated.
9. Check every page on mobile.
10. Run `npm run build` before deployment.
