# Lauren Pires Website & PR Project Reference

**Last updated:** March 1, 2026
**Latest site version:** v112
**Live URL:** https://www.laurensaysyay.com
**Hosted on:** Netlify
**Domain registrar:** GoDaddy
**Email:** yay@laurensaysyay.com (Google Workspace)

---

## About Lauren

Lauren Pires is an award-winning keynote speaker and invisible disability advocate based in Mississauga, Ontario. She was born with Central Core Disease, a rare neuromuscular disorder that limits her physical strength to about 33% of the average person. She went undiagnosed for two decades and spent 30 years hiding her disability before becoming one of Canada's most visible rare disease and invisible disability advocates.

**Key credentials:**
- Certified Professional Speaker (CSP)
- Canada's first and only Invisible Disabilities Association (IDA) Ambassador — raised over $5,000 USD for the nonprofit
- Named to 2024 D-30 Disability Impact List by Diversability (30 global leaders in disability awareness)
- Selected as one of the faces of the global Rare Disease Day 2024 campaign by EURORDIS
- #2 Inspirational Speaker of the Year, Speaker Slam 2023
- TEDxMississauga speaker (upcoming) — talk title: "The Daily Yay: How Small Joys Build Real Resilience"

**Past speaking clients include:** Health Canada, Arc'teryx, McKesson, The Co-operators, Rick Hansen Foundation, Employment and Social Development Canada (ESDC), GreenShield, Embark, GroupHealth, Guelph-Humber, ScaleHR, and others.

**Media coverage:** CTV Your Morning, Breakfast Television, CHCH, CityNews Toronto, OMNI News, Global News, SiriusXM Canada, insauga, Newmarket Today, Canadian SME, CanvasRebel, Ramona Magazine, Thorold Today, NOTL Local, Modern Mississauga, Mélange & Co.

---

## Site Structure

### Pages (root level)
- `index.html` — Homepage
- `about.html` — About Lauren
- `speaking.html` — Speaking topics & booking info
- `media.html` — Media coverage & logos
- `lightupforrare.html` — #LightUpForRare advocacy/campaign page
- `blog.html` — Blog listing
- `contact.html` — Contact form (Netlify Forms)
- `privacy.html` — Privacy policy
- `accessibility.html` — Accessibility statement
- `thank-you.html` — Form submission confirmation
- `404.html` — Custom 404 page
- `styles.css` — Global stylesheet
- `robots.txt` / `sitemap.xml` — SEO

### Folders
- `blog/` — 46 individual blog post HTML files
- `assets/` — Organized into subfolders (reorganized in v111):
  - `assets/photos/` (25) — headshots, stage shots, hero images
  - `assets/clients/` (20) — client/org logos
  - `assets/media/` (23) — media outlet logos
  - `assets/awards/` (7) — award badge images
  - `assets/lightup/` (8) — #LightUpForRare campaign photos
  - `assets/og/` (6) — Open Graph social sharing images
  - `assets/blog/` (46) — blog post featured images
  - `assets/logo.png` / `assets/logo.svg` — site logo
- `favicons/` — All favicon & app icon files, browserconfig.xml, site.webmanifest

### Navigation order
About → Speaking → Media → Advocacy → Blog → Contact Lauren (button)

The "Advocacy" nav link currently points to `lightupforrare.html`. Long-term plan is to expand to an advocacy hub covering #LightUpForRare, Invisible Disabilities Week, Mobility Awareness Month.

---

## #LightUpForRare Campaign (2026)

Lauren coordinates the Canadian arm of the global Rare Disease Day #LightUpForRare campaign, working with the Canadian Organization for Rare Disorders (CORD).

**2026 confirmed: 26 locations, 18 cities, 4 provinces**

### Landmark List
| Date | Landmark | City | Colours |
|------|----------|------|---------|
| Feb 23–Mar 1 | Belleville Sign | Belleville, ON | Blue, pink, green |
| Feb 23–Mar 1 | Bridge Street Bridge | Belleville, ON | Blue, pink, green |
| Feb 23–Mar 1 | Fire Station 1 Memorial | Belleville, ON | Blue, pink, green |
| Feb 26 | Mississauga Civic Centre | Mississauga, ON | Blue, pink, green |
| Feb 26 | Oakville Town Hall | Oakville, ON | Blue |
| Feb 27 | City Hall Clock Tower | Brampton, ON | Blue, pink, green |
| Feb 27 | Market Square | Guelph, ON | Blue, pink, green |
| Feb 27 | London City Hall | London, ON | Blue, pink, green |
| Feb 27 | J. Allyn Taylor Building | London, ON | Blue, pink, green |
| Feb 27 | RBC Place | London, ON | Blue, pink, green |
| Feb 27 | Fred A. Lundy Bridge | Newmarket, ON | Blue |
| Feb 27–28 | Avenir Centre | Moncton, NB | Pink |
| Feb 27–28 | Downing Street | Moncton, NB | Pink |
| Feb 27–28 | Downtown Place | Moncton, NB | Pink |
| Feb 28 | Moncton City Hall | Moncton, NB | Blue |
| Feb 28 | King Street Lights / Waterluminate | Waterloo, ON | Blue, pink, green |
| Feb 28 | Hamilton Sign | Hamilton, ON | Blue, pink, green |
| Feb 28 | Niagara Sign | Niagara Region, ON | Blue, pink, green, purple |
| Feb 28 | Peace Bridge | Fort Erie, ON | Blue, pink, green, purple |
| Feb 28 | Peterborough City Hall | Peterborough, ON | Blue, pink, green |
| Feb 28 | Apron Tower — Toronto Pearson International Airport | Mississauga, ON | Blue |
| Feb 28 | TELUS Spark Science Centre | Calgary, AB | Blue, pink, green |
| Feb 28 | Gateway Angels | Penetanguishene, ON | Blue |
| Feb 28 | LED Light Poles | Coquitlam, BC | Blue |
| Feb 28 | Vaughan City Hall | Vaughan, ON | Blue, pink, green, purple |
| Feb 28 | Clock Tower | Campbellford, ON | Blue, pink, green |

### Year-over-year growth
- 2024: 7 landmarks, 7 cities, 1 province (Ontario only)
- 2025: 21 landmarks, 14 cities, 3 provinces
- 2026: 26 landmarks, 18 cities, 4 provinces (ON, NB, AB, BC)

---

## Technical Setup

### Hosting & Domain
- **Netlify** — site hosted, forms handled natively via Netlify Forms
- **GoDaddy** — domain registrar for laurensaysyay.com
- DNS pointed to Netlify with SSL active

### Email
- **Google Workspace** — yay@laurensaysyay.com
- SPF, DKIM, and DMARC all configured and authenticating
- DKIM was regenerated for the correct domain (laurensaysyay.com, not laurenpires.ca)
- Initial spam issues caused by Mixmax email tracking — resolved after disabling Mixmax and DKIM authentication
- Domain reputation building over time; no issues as of late Feb 2026

### DNS Records (GoDaddy)
- SPF TXT record: `v=spf1 include:_spf.google.com ~all`
- DKIM TXT record: `google._domainkey` with RSA key for laurensaysyay.com
- DMARC: configured
- Netlify A/CNAME records for site hosting

### Analytics & SEO
- Google Analytics tag installed on all pages
- Google Search Console — verification and sitemap submitted
- Structured data (JSON-LD) on key pages
- Open Graph and Twitter Card meta tags on all pages
- Sitemap.xml includes all pages with priority weighting

### Performance
- Desktop PageSpeed: ~93 Performance / 92 Accessibility / 77 Best Practices / 100 SEO
- Mobile optimizations applied: removed lazy loading from LCP hero image, added fetchpriority="high", preload for hero image, preconnect for Google Fonts, width/height attributes to prevent layout shift
- All images in .webp format (except logo SVG and a few PNGs)
- WCAG contrast fixes applied to footer and text-light elements
- `<main>` landmark added to all pages for accessibility

---

## Messaging Guidelines

### Tone & Positioning
- Mission-driven, not personal achievement-focused
- Frame Lauren as a contributor to larger movements, not sole credit-taker
- Challenge "overcome your limitations" narratives — emphasize systemic change
- First-person narratives over academic approaches
- Authentic storytelling, not inspiration porn

### Writing Rules
- No parallel sentence structures
- No "it's not x, it's y" constructions
- No em dashes in professional communications
- Always verify facts from primary sources

---

## Key Links

- **Website:** https://www.laurensaysyay.com
- **Speaker Sheet (Canva):** https://www.canva.com/design/DAGiTwzSOEA/jZjzVyTzKAUIbnDhQ7sSJQ/view?utm_content=DAGiTwzSOEA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5d2dd5df29
- **YouTube:** https://www.youtube.com/@laurensaysyay
- **Instagram:** https://www.instagram.com/laurensaysyay
- **LinkedIn:** linkedin.com/in/laurensaysyay
- **CORD:** https://www.raredisorders.ca
- **IDA:** https://invisibledisabilities.org

---

## Outreach in Progress

### Speakers Bureau of Canada
- Contact: Gord (CEO Gordon Breault), friend of Dan's
- Email: representation@speakerscanada.com
- Draft intro email prepared with all application materials (v112 session)
- Application requires: contact info, website, bio, topic descriptions, video links, media links, written work, social handles + follower counts, years of paid speaking, booking frequency, fees, location, bureau affiliations

### Podcast Targets
- 19 active podcasts identified for outreach (personal circumstances & parenting focus)
- Prioritized list created for booking ahead of TEDxMississauga

### Media Strategy
- Leveraging Mélange & Co. coverage for couples-focused and mainstream outlets
- Timing campaigns around awareness weeks (Rare Disease Day, Invisible Disabilities Week, NDEAM, Disability Pride Month, Mobility Awareness Month)

---

## Version History Highlights

| Version | Key Changes |
|---------|-------------|
| v1–v65 | Initial site build (prior sessions) |
| v66–v99 | SEO, CTAs, forms, analytics, deployment, DNS, email setup |
| v100 | PageSpeed optimizations, accessibility fixes, speaker sheet link updated |
| v101 | #LightUpForRare campaign page created, favicons updated, Advocacy nav added |
| v102 | Left-aligned Get Involved and Partners sections |
| v103–v107 | Hero image iterations (Mississauga Civic Centre photo) |
| v108 | Hero replaced with side-by-side layout (text + image, stacks on mobile) |
| v109 | Updated landmarks to 25/17, added Fred A. Lundy Bridge + color dots |
| v110 | Removed TBC Campbellford entry |
| v111 | Full file reorganization — assets into subfolders, favicons folder |
| v112 | Added Campbellford Clock Tower, updated to 26 landmarks / 18 cities |
