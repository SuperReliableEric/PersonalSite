Yep, this layout works. It’s clean, recruiter-proof, and it doesn’t scream “I learned CSS yesterday.” Also the “slightly ironic black turtleneck” headshot is exactly the kind of harmless personality signal that makes people remember you without you having to juggle flaming buzzwords.

Here’s a solid **spec** that keeps your split-layout home page, and adds a real blog without turning your site into a CMS side quest.

---

## Personal Site Spec

### Goals

* Make it obvious who you are and what you do in under 10 seconds.
* Provide quick exits to GitHub/LinkedIn/Resume.
* Host a blog that’s easy to publish to and easy to read.
* Keep the design minimal, fast, and boring in the best way.

### Non-goals

* Building “social features”
* Over-animated nonsense
* Complex tagging systems until you have enough posts to justify it

---

## Information Architecture

### Routes

* `/` Home (split layout)
* `/blog` Blog index (list of posts)
* `/blog/[slug]` Blog post page
* `/resume` Resume page (HTML)
* `/resume.pdf` Resume download (static file)
* `/projects` (optional but recommended) short portfolio/projects list

If you want to keep nav minimal: Home, Blog, Resume, Projects.

---

## Home Page Layout (matches your screenshot)

### Left Column (Identity + contact)

**Content**

* Photo (circular crop, fixed size)
* Name + pronouns (optional)
* Title (Senior Site Reliability Engineer)
* 1-line “positioning statement”

  * Example: “Azure + Kubernetes SRE. I reduce incident duration and increase sleep.”
* Primary CTA button: **Email me**

  * `mailto:` with subject preset
* Secondary links (icon row): GitHub, LinkedIn, Medium (optional), maybe Bluesky/Twitter if you actually use it

**Behavior**

* On mobile, this section stacks above the right column

### Right Column (About + next clicks)

**Content**

* Heading: “About”
* Short paragraph (3–5 lines). No resume regurgitation.
* Two buttons:

  * **Resume**
  * **Blog** (replace “Portfolio” in the mock, or add a third if you really want)
* Optional “Featured” block below buttons:

  * “Latest post: <title>”
  * “Pinned project: <name>”

---

## Blog Spec

### Blog Index (`/blog`)

* Title: “Blog”
* Short intro line (one sentence)
* Post list:

  * Title
  * Date
  * 1–2 sentence excerpt
  * Optional reading time (auto-calculated)

**Sorting**

* Reverse chronological

**Filters**

* None at first. Add tags later only if you hit ~12+ posts.

### Blog Post Page (`/blog/[slug]`)

* Title
* Date
* Reading time
* Content
* Optional “Back to blog” and “Next/Previous” navigation
* Optional “Share” links (low priority)

### Authoring workflow (choose one)

**Option A: Markdown/MDX in repo (recommended)**

* Store posts in `/content/blog/*.mdx`
* Frontmatter:

  * `title`
  * `date`
  * `description`
  * `draft` boolean
* Build generates pages automatically

**Option B: External platform**

* Keep posts on Medium/Dev.to and just show links.
* Faster, but you lose ownership and consistent branding.

---

## Resume Spec

### Resume Page (`/resume`)

* Clean HTML resume: summary, skills, experience, projects, education
* Print-friendly styling (`@media print`)
* Button: “Download PDF”

### PDF

* Store as static asset: `/public/resume.pdf`
* Keep it updated manually (fine) or generate from source later (optional)

---

## Design System

### Typography and spacing

* Max content width for text areas (blog/resume) so it’s readable
* Lots of whitespace
* One accent color, used sparingly (buttons/links)

### Colors

* Home page can keep the split neutral theme from the mock
* Blog pages should be mostly white/light for readability
* Dark mode optional; if you do it, do it correctly (no grey-on-grey misery)

### Components

* `ProfileCard` (photo/name/title/CTA/social)
* `AboutPanel` (about text + buttons)
* `PostCard` (blog list item)
* `Prose` wrapper styles for markdown content
* `Navbar` (minimal)
* `Footer` (email + socials)

---

## SEO + “Looks Professional” Checklist

* Page titles per route
* Meta description per page
* OpenGraph image (even a simple one)
* RSS feed for blog (nice touch)
* Sitemap
* Fast load: optimized image, minimal JS

---

## Tech Stack (practical, not trendy-for-sport)

* **Next.js** (App Router)
* **Tailwind** for styling
* **MDX** for blog content
* Deploy: **Cloudflare Pages** or **Vercel**
* Analytics: optional (Plausible/Umami) if you care

---

## Content Guidelines (so you don’t sabotage yourself)

* “About” should be punchy: what you do, what you’re into lately, what you want next.
* Blog posts should end with something useful (lesson learned, checklist, diagram, whatever).
* Projects should focus on outcomes. Even personal ones.

---

## Acceptance Criteria (so you know when it’s “done”)

* Home looks good desktop + mobile
* Clicking **Blog** shows a list of posts from markdown files
* Clicking a post renders cleanly with headings/code blocks
* Resume page exists and PDF downloads
* Lighthouse scores are decent (especially performance + accessibility)
* Every external link is correct and not embarrassing

---

## Decisions you need to lock in (before you build yourself into a corner)

* Blog source: MDX-in-repo vs external links
* Nav items: do you want Projects as a first-class page or just a section
* Home page buttons: Resume + Blog, or Resume + Projects + Blog

If you want, I can turn this into a repo-ready `README.md` spec + a file tree scaffold (Next.js + MDX) so you’re not staring at an empty folder like it’s going to do something.
