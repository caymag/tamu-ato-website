# PRD: Alpha Tau Omega, Theta Sigma Chapter (Texas A&M) Website

Status: Draft, 2026-11-17

## Problem

The chapter needs a public website that recruits new members, keeps alumni connected, and sells chapter apparel. It should look clean and modern, stay easy to update when officers turn over each year, and cost close to nothing to run.

## References

- **Layout and scope:** https://www.aggiepike.com/ (Wix site). Simple nav, a hero with a recruitment CTA, a president's letter, and pages for history, officers, recruitment, news, apparel, photos, and alumni.
- **Brand:** https://ato.org/ (ATO national). Azure blue and old gold, ATO's logo and fonts. Exact values in TECH_SPEC.md.

## Goals

1. A potential new member can learn about the chapter and register for recruitment in under a minute.
2. Alumni and parents can find news, give, and buy apparel.
3. A non-technical officer can update officers, news, events, and photos without a developer.
4. Under $25/year to run (domain only).

## Non-goals (v1)

- Member login or private portal (ATO national and the IFC already provide these)
- A database or custom backend
- An on-site checkout or inventory system
- Dues, payments, or event ticketing
- Blog comments, accounts, or search

## Users

| User                       | Needs                                                      |
| -------------------------- | ---------------------------------------------------------- |
| Potential new member (PNM) | What ATO is, why this chapter, rush dates, how to register |
| Parents                    | Legitimacy, safety, cost, contact info                     |
| Alumni                     | News, newsletter, events, giving, apparel                  |
| Chapter officers (editors) | Update content each semester without code                  |

## Pages

| Page         | Content                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Home         | Hero (Bid Day chapter photo, tagline, "Register for Recruitment" CTA), short intro, president's letter, recent events (3 photo cards: Bid Day, Tenders with Taus, Boo Bash), footer with socials |
| About        | ATO national (founding, values), chapter history, brotherhood (full-chapter photo)                                                                                                               |
| Philanthropy | Tenders with Taus: what it is, sponsors, photos, money raised                                                                                                                                    |
| Leadership   | Officers and advisors: photo, name, role, class year                                                                                                                                             |
| Recruitment  | Dates/schedule, FAQ, link to IFC registration, interest form                                                                                                                                     |
| News         | List of posts, each with its own page                                                                                                                                                            |
| Apparel      | TBD ("coming soon" in v1)                                                                                                                                                                        |
| Gallery      | Curated albums by event (see PHOTOS.md)                                                                                                                                                          |
| Alumni       | Newsletter signup, archived newsletters, link to give.atofoundation.org                                                                                                                          |
| Contact      | Contact form, email, socials                                                                                                                                                                     |

## Requirements

**Must have**

- Responsive, mobile first (most PNM traffic is from phones)
- ATO brand colors and approved logos
- Recruitment CTA visible on every page
- Interest and contact forms that email the recruitment chair / president
- Officers can edit content through a simple editor
- Accessible (WCAG 2.1 AA: contrast, alt text, keyboard nav)
- Fast: Lighthouse 90+ on mobile
- Basic SEO: titles, descriptions, social share images

**Nice to have**

- Instagram feed embed
- Privacy-friendly analytics

## Apparel

TBD. Ship v1 with an "Apparel coming soon" page; nav slot stays so it can be filled in later.

## Success metrics

- Recruitment registrations clicked from the site per semester
- Interest form submissions
- Apparel store visits from the site
- Officers updating content without dev help

## Decided

- Chapter: Alpha Tau Omega, Theta Sigma Chapter, Texas A&M
- Photos: chapter has its own
- Copy: written by the site owner
- Colors: azure blue and old gold; logo: ATO national's
- Apparel: TBD, placeholder page in v1

## Open questions

1. Tagline: "With a bond as strong as right itself" (decided).
2. Domain: aggieato.com (bought on Cloudflare, 2026-11-17).
3. Who are the content editors, and do they have GitHub accounts?

## Milestones

1. **Design:** Wireframes of Home and Recruitment, colors and type approved
2. **Build:** All pages with real content, forms working
3. **CMS:** Officer editing set up, editors trained
4. **Launch:** Domain live, before the next recruitment period
