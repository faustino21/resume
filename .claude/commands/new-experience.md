Create a new experience entry based on the user input: $ARGUMENTS

Follow these steps:
1. Parse $ARGUMENTS to extract a company name or title. If unclear, ask the user.
2. Generate a slug from the company/title: lowercase, replace spaces with hyphens, remove special characters.
3. Create the file at `src/content/experience/<slug>.md` with this frontmatter template:

```
---
title: "<company or organization name, max 60 characters>"
description: "<job title or short summary — 10-160 characters>"
publishDate: <today's date in YYYY-MM-DD format>
tags: []
draft: false
slug: "<slug>"
jobPosition: "<job title, e.g. 'Backend Developer'>"
jobDate: "<date range, e.g. 'March 2024 - January 2025'>"
---

**<jobPosition>**<br>
📍 <Location> | 🗓️ <jobDate>

#### 🔹 Key Responsibilities

- Responsibility 1
- Responsibility 2
- Responsibility 3
```

4. Ask the user for any missing fields: jobPosition, jobDate, location, and key responsibilities.
5. Validate:
   - title is at most 60 characters
   - description is between 10 and 160 characters
   - slug matches the filename (without .md)

6. Follow the body format used in existing experience entries (see `src/content/experience/digdaya.md` and `src/content/experience/mekar.md` for reference): bold job title, location/date line with emoji, then a "Key Responsibilities" section with bullet points.
