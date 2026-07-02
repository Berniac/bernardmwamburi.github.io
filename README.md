# Bernard Mwamburi — Data Science Portfolio

A personal Data Science portfolio website, built as a static site and hosted on
GitHub Pages at **https://bernardmwamburi.github.io**.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Landing page and overview of focus areas |
| About | `about.html` | Background, skills, experience & education |
| Machine Learning | `machine-learning.html` | ML projects (prediction, NLP, vision, recsys) |
| Data Visualization | `data-visualization.html` | Dashboards & data storytelling |
| Big Data Analytics | `big-data-analytics.html` | Scalable pipelines (Spark, Kafka, cloud) |
| Projects | `projects.html` | All projects, including other/side work |

## Structure

```
.
├── index.html
├── about.html
├── machine-learning.html
├── data-visualization.html
├── big-data-analytics.html
├── projects.html
├── assets/
│   ├── css/style.css     # Shared styles (dark, responsive)
│   ├── js/main.js        # Mobile nav, scroll reveals, skill bars
│   └── img/              # Add your images here
├── .nojekyll             # Serve files as-is (no Jekyll processing)
└── README.md
```

The site is plain HTML/CSS/JS with **no build step and no external dependencies**
(only Google Fonts is loaded), so it works the moment it's pushed.

## Making it yours

The content ships as a realistic template. To personalize it:

1. **About page** (`about.html`) — replace the bio, and fill in the real
   experience/education timelines and skill levels.
2. **Project pages** — swap the placeholder project cards for your real projects.
   Update titles, descriptions, tags, and the `href` links to case studies / repos.
3. **Links** — the LinkedIn link (`in` icon) points to `#`; set it to your profile.
   GitHub links point to `https://github.com/berniac` and email to
   `bwadero@gmail.com` — update if needed.
4. **Images** — drop images into `assets/img/` and reference them in the project
   thumbnails (currently emoji placeholders).

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This repo is a GitHub Pages **user site** (`bernardmwamburi.github.io`), so the
`main` branch is published automatically at the root domain. Ensure GitHub Pages
is enabled in **Settings → Pages** with the source set to the `main` branch.
