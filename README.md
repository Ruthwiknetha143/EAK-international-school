# EAK International School: Admissions Landing Page (2027-28)

A responsive, single-page admissions landing page for the fictional EAK International School, built as a frontend assignment. It takes a parent from learning about the school to sending an enquiry. All content is hard-coded sample data and there is no backend.

**Live demo:** <add your Vercel link here>

## Screenshots

<add a desktop and a mobile screenshot here, e.g. ![Desktop](screenshots/desktop.png)>

## Tech stack

| Technology | Used for |
|---|---|
| React 19 | Component-based UI |
| Vite | Dev server and production build |
| Bootstrap 5 | Grid, cards, navbar, modal, accordion, forms, utility classes |
| Bootstrap Icons | Icons in the "Why choose us" cards and footer |
| Google Fonts (Poppins) | Typography |
| Plain CSS (`default.css`) | Brand colours, section styling and responsive tweaks |

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/Ruthwiknetha143/EAK-international-school.git
cd EAK-international-school
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Page sections

1. Hero (Apply Now / Schedule a Visit)
2. Why choose us
3. Academic programs
4. School highlights
5. Facilities
6. Admission process
7. Important dates
8. Required documents (interactive checklist)
9. Fee information
10. Parent testimonials
11. FAQ
12. Final call to action

Plus a sticky navbar and a footer with contact details and quick links.

## Features and interactions

- Sticky navbar with anchor links to each section and a collapsible menu on mobile
- Enquiry modal opened from the navbar, hero and final call-to-action buttons. It uses browser validation for required fields and shows a success message on submit (nothing is sent anywhere)
- Required-documents checklist with a live "x out of 5 ready" counter
- FAQ accordion (Bootstrap collapse)
- Fee information as a table on larger screens and as cards on phones
- Testimonials shown as a grid on larger screens and as a previous/next slider on phones

## Responsive design

Built with Bootstrap's grid and breakpoints plus custom media queries. The layout was checked at phone, tablet and desktop widths. The admission process turns from a horizontal flow on desktop into a vertical timeline on mobile.

## Project structure

```
public/                 images and logos (served from the site root, e.g. /hero_banner.png)
src/
  main.jsx              app entry point
  App.jsx               root component
  components/           one component per section, plus the enquiry modal
    default.css         global and per-section styles
  data/content.js       all page content (programs, fees, FAQs, dates, testimonials...)
```

All text content lives in `src/data/content.js`, so wording can be changed without editing components.

## Assets

Images are stored locally in `public/`. <credit your image sources here, e.g. Unsplash / Pexels, with photographer names if you can>

## Known limitations

- The enquiry form does not submit anywhere (frontend only, as per the assignment brief)
- Names, dates, statistics, fees and testimonials are fictional sample data
