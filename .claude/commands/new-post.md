Create a new blog post file based on the user input: $ARGUMENTS

Follow these steps:
1. Parse $ARGUMENTS to extract a title. If no title is provided, ask the user for one.
2. Generate a slug from the title: lowercase, replace spaces with hyphens, remove special characters, max 60 chars.
3. Create the file at `src/content/post/<slug>.md` with this exact frontmatter template:

```
---
title: "<title, max 60 characters>"
description: "<ask user or generate a placeholder — must be 50-160 characters>"
publishDate: <today's date in YYYY-MM-DD format>
tags: []
draft: true
---

Write your post content here.
```

4. Validate:
   - title is at most 60 characters
   - description is between 50 and 160 characters
   - publishDate is a valid date string
   - tags is an array of lowercase strings
   - draft defaults to true so the post is hidden in production until ready

5. After creating the file, confirm the path and remind the user:
   - Set `draft: false` when ready to publish
   - Add relevant tags as lowercase strings
   - Optional fields: `updatedDate`, `coverImage` (object with `src` and `alt`), `ogImage` (string path)
   - Run `npm run dev` to preview the post locally
