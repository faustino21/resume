Write a complete blog article and save it as a draft post based on the user input: $ARGUMENTS

Follow these steps:

1. Parse $ARGUMENTS to extract a topic or title. If none is provided, ask the user for one.

2. If the topic is vague, ask one clarifying question:
   - What angle or audience? (e.g. beginner tutorial, deep dive, opinion piece, case study)

3. Generate a slug: lowercase, spaces → hyphens, remove special characters, max 60 chars.

4. Write the full article content. Structure it as:
   - **Hook / intro** — 1-2 paragraphs that grab attention and state what the reader will learn
   - **Body** — 3-5 sections with `##` headings, each covering one idea clearly
   - **Code examples** — include fenced code blocks with language hints when relevant
   - **Conclusion** — 1 paragraph summarizing key takeaways and a call to action or next step
   - Aim for 500-1500 words depending on the topic depth

5. Generate frontmatter:
   - `title`: max 60 characters, compelling and specific
   - `description`: 50-160 characters, summarizes the article for SEO/preview
   - `publishDate`: today's date in YYYY-MM-DD format
   - `tags`: 2-5 relevant lowercase strings
   - `draft: true` — always draft until user confirms

6. Create the file at `src/content/post/<slug>.md` with this layout:

```
---
title: "<title>"
description: "<description>"
publishDate: <YYYY-MM-DD>
tags: [tag1, tag2]
draft: true
---

<article content>
```

7. After creating the file:
   - Confirm the file path
   - Show the title and description for review
   - Remind the user: set `draft: false` when ready to publish, run `npm run dev` to preview
