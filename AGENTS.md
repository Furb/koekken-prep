# AGENTS.md

## Context & Monorepo

Internal kitchen recipe application running on wall-mounted tablets/laptops.

- **PackageManager**: `pnpm`
- **Monorepo**: `/studio` (Sanity Studio) & `/frontend` (Next.js, React, TypeScript)

## Commands

- **Root**: `pnpm dev` | `pnpm build`
- **Targeted**: `pnpm --filter frontend <script>` | `pnpm --filter studio <script>`

## Strict Guardrails

- **Git**: Local `git commit` OK. **NEVER** `git push`, push to GitHub, or deploy.
- **Type Safety**: **NEVER** use `any` or `as any`. Use strict TypeScript types.
- **UI/CSS**: **NEVER** write or edit CSS, colors, or layouts. Visual design belongs 100% to developer.
- **Scope**: **NEVER** add unrequested features, "future-proofing", or unapproved packages.
- **Surgical Changes**: Inspect code before changing. Touch ONLY files relevant to the task.

## Product Scope

- **Core**: Recipe browsing, ingredient search, 2-level categories (L1 predefined, L2 dynamic), creation/editing/archiving (hidden, recoverable), A4 single/catalogue printing.
- **Data Model**: Structured Sanity fields only. No monolithic rich-text fields.
- **Auth**: Single shared kitchen account. Authors identify via initials in recipe metadata.
- **DO NOT BUILD**: Scaling, images, video, nutrition, costing, inventory, production planning, user accounts, approvals, versioning.

## Definition of Done

1. `pnpm typecheck` passes with zero errors and no `any` types.
2. Code diff is minimal with no unrelated changes or unrequested edits.
3. Brief output: State what changed, what was verified, and any open questions.
