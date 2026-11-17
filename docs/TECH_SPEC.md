# Tech Spec: Alpha Tau Omega, Theta Sigma Chapter (Texas A&M) Website

Status: Draft, 2026-11-17. See PRD.md for scope.

## Summary

A static site built with **Astro**, content stored as Markdown/JSON in this repo, edited through a git-based CMS, hosted free on **Netlify**. No database. Forms go to Netlify Forms. Apparel links to an external print-on-demand store.

## Stack decision

### Framework

| Option | Pros | Cons |
|---|---|---|
| **Astro (pick)** | Built for content sites; ships almost no JS so it's fast; Markdown content collections built in; free static hosting | Less suited to app-like features (not needed) |
| Next.js | Huge ecosystem, good if we later add logins or dynamic data | Heavier than needed; more to maintain; React for every page |
| Wix / Squarespace | No code, officers edit visually (aggiepike.com is Wix) | $200-300/yr, limited control, harder to make truly custom, vendor lock-in |
| Plain HTML/CSS | Zero tooling | Repeated headers/footers, no CMS, painful to update |

Astro gives the custom "clean and slick" look of hand-built code with the editability of a CMS, for free.

### Language and styling

- **TypeScript** for the small amount of logic (content schemas, components)
- **Plain CSS** with custom properties for brand tokens. The site is small; Tailwind or a UI kit isn't worth the dependency.
- **Fonts:** see Brand tokens.

### Do we need a database?

**No.** Everything on the site (officers, news, events, photos, newsletters) changes a few times a semester and is public. That fits in Markdown/JSON files in git, which gives version history and free backups.

A database would only be needed for member logins, dues, or our own checkout. Those are non-goals: ATO national, the IFC, and the store provider already handle them. If that changes, add Supabase (Postgres + auth) later.

## Architecture

```
Officer edits in CMS ──> commit to GitHub ──> Netlify builds Astro ──> static site on CDN
                                                                   │
Visitor ── forms ──> Netlify Forms ──> email to chair              │
Visitor ── "Shop" ──> external apparel store                       │
Visitor ── "Register" ──> IFC recruitment site                     │
```

## Project structure

```
src/
  content/
    officers/        # one .md per officer: name, role, classYear, photo, order
    news/            # one .md per post: title, date, cover, body
    events/          # title, date, location (optional, nice to have)
    gallery/         # one .md per album: title, date, images[]
    newsletters/     # title, date, pdf
  content.config.ts  # zod schemas for each collection
  components/        # Header, Footer, Hero, Card, OfficerCard, CTA
  layouts/Base.astro # html shell, meta tags, nav, footer
  pages/             # index, about, leadership, recruitment, philanthropy, news/[slug], apparel, gallery, alumni, contact
  styles/global.css  # brand tokens, base styles
src/data/site.json   # tagline, socials, recruitment link, store URL, president's letter
public/admin/        # CMS config
```

Schemas fail the build on bad content (missing photo, wrong date), so a typo can't break the live site.

## Brand tokens

Taken from ato.org's theme CSS (`wp-content/themes/ato/assets/dist/css/style.css`), the most-used colors there:

```css
:root {
  --ato-azure: #264167; /* primary: header, footer, headings */
  --ato-gold:  #fdb144; /* old gold accent: buttons, highlights */
  --ink:       #212529;
  --paper:     #fff;
  --muted-bg:  #f4f4f4;
}
```

Gold on white fails contrast for text (about 1.9:1), so use gold only as a background behind azure/dark text, or as text on azure.

**Fonts** (same as ato.org): Oswald for headings, Inter for body. Self-host both via `@fontsource`.

**Logo:** use ATO national's logo as-is from ato.org (white version on azure, dark blue/yellow version on white). Save copies into `src/assets/` rather than hot-linking:
- https://ato.org/wp-content/uploads/2018/12/ATO-main-logo-white-2.png
- https://ato.org/wp-content/uploads/2019/01/ATO-dark-blue-yellow@2x-300x78.png
- https://ato.org/wp-content/uploads/2018/12/ATO_main_logo.png

Design rules for "clean, not too much going on": white space, one accent color, full-bleed photo hero, max 2 font weights, no carousels or autoplay video.

## Content editing (CMS)

| Option | Pros | Cons |
|---|---|---|
| **Sveltia CMS / Decap CMS (pick)** | Free, open source, edits Markdown in the repo, form-based UI at `/admin` | Editors need GitHub accounts; needs a small OAuth setup |
| Edit in GitHub web UI | Zero setup | Officers must edit Markdown directly |
| Sanity / Contentful | Polished editor | External service, free tier limits, more code |

Phase 1: edit in GitHub directly while building. Phase 2: add Sveltia CMS before handing off to officers.

## Forms

- **Interest form** (Recruitment) and **contact form**: Netlify Forms (free tier, spam filter, email notifications). Just HTML with `data-netlify="true"`, no backend code.
- **Recruitment registration**: link out to the TAMU IFC registration site, as aggiepike.com does. Don't duplicate it.
- **Newsletter signup**: link or embed a free Mailchimp/Buttondown form if alumni email is wanted; otherwise skip.

## Apparel

TBD. v1 ships a static "coming soon" page.

## Hosting and costs

| Item | Choice | Cost |
|---|---|---|
| Hosting + CDN + HTTPS | Netlify free tier | $0 |
| Forms | Netlify Forms | $0 (100 submissions/mo) |
| Domain | Cloudflare Registrar (at-cost `.com`), register under a chapter email | ~$10-12/yr |
| CMS | Sveltia/Decap | $0 |
| Analytics (optional) | Netlify or Cloudflare Web Analytics | $0 |

Alternatives: Cloudflare Pages or Vercel work the same way; Netlify is picked for built-in forms.

## Images

- Use the chapter's own photos and ATO national's logo (see Brand tokens). Which photo goes where, and what's excluded: see PHOTOS.md.
- Commit only picked photos, resized to 2400px, under `src/assets/photos/`. Originals (574 MB) stay out of git.
- Astro's `<Image />` handles resizing, WebP/AVIF, and lazy loading.
- Every image needs alt text (enforced in the content schema).

## Quality

- `astro check` (types and content schemas) on every build
- Lighthouse and an accessibility check (axe) before launch
- Netlify deploy previews on PRs so content changes can be reviewed before going live

## Build plan

1. `npm create astro@latest`, base layout, brand tokens, Header/Footer
2. Home and Recruitment pages (highest value)
3. Content collections and remaining pages
4. Forms, SEO meta, social images
5. Deploy to Netlify, connect domain
6. Add CMS, train editors, write a one-page "how to update the site" guide

## Risks

- **Trademark licensing:** confirm with national that the site can use ATO marks and logos; revisit for apparel when it's scoped.
- **Officer turnover:** CMS access and the domain/Netlify accounts should be owned by a chapter email, not a person.
- **Photo quality** drives the look more than code does.
