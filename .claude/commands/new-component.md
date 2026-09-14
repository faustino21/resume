Create a new Astro component based on the user input: $ARGUMENTS

Follow these steps:
1. Parse $ARGUMENTS to extract a component name and optional subdirectory. Examples:
   - "Badge" → src/components/Badge.astro
   - "blog/AuthorCard" → src/components/blog/AuthorCard.astro
2. Use PascalCase for the component filename.
3. Create the component following this project's conventions:

```astro
---
import { cn } from '@/utils'

interface Props {
	class?: string
	as?: string
}

const { as: Tag = 'div', class: className, ...props } = Astro.props
---

<Tag class={cn(className, 'your-tailwind-classes-here')} {...props}>
	<slot />
</Tag>
```

4. Conventions to follow:
   - Import `cn` from `@/utils` for conditional class merging (clsx + tailwind-merge)
   - Support the polymorphic `as` prop pattern when the component renders a single wrapper element (see Card.astro, Button.astro for examples)
   - Use `class: className` destructuring (not `class` directly) since `class` is reserved in JS
   - Spread remaining props with `{...props}` for flexibility
   - Use path aliases: `@/components/*`, `@/layouts/*`, `@/utils`, `@/types`, `@/site-config`
   - Style with TailwindCSS utility classes using the project's CSS variable theme tokens (e.g. `text-foreground`, `bg-primary-foreground`, `border-border`, `text-muted-foreground`)
   - Minimal client-side JS; if interactivity is needed, use a `<script>` block with vanilla DOM APIs
   - Prettier config: tabs, single quotes, no trailing commas, 100 char width

5. If the component does not need to be polymorphic (e.g., it always renders a specific element), omit the `as` prop and use the concrete HTML element directly.

6. After creating the file, confirm the path and remind the user to import it with the `@/components/` alias.
