# Conventional Commits Specification

Detailed guide for writing consistent, machine-readable commit messages.

---

## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

---

## Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: add contact form validation` |
| `fix` | Bug fix | `fix: correct mobile menu toggle` |
| `docs` | Documentation only | `docs: update README with setup instructions` |
| `style` | Code style (formatting, semicolons, etc.) | `style: format CSS with consistent indentation` |
| `refactor` | Code change neither fix nor feature | `refactor: simplify navigation logic` |
| `perf` | Performance improvement | `perf: optimize image loading with lazy loading` |
| `test` | Adding or correcting tests | `test: add form validation tests` |
| `chore` | Maintenance tasks | `chore: update dependencies` |
| `seo` | SEO improvements | `seo: add Schema.org LocalBusiness markup` |
| `deploy` | Deployment changes | `deploy: configure GitHub Pages settings` |

---

## Scope (Optional)

Indicates the section of the codebase affected:

```
feat(nav): add sticky header on scroll
fix(footer): correct broken social links
style(css): update color variables
seo(schema): add FAQPage structured data
```

Common scopes for landing pages:
- `nav` / `header`
- `footer`
- `hero`
- `css` / `style`
- `js` / `script`
- `seo`
- `schema`
- `assets`
- `deploy`

---

## Description Rules

- Use imperative mood: "add" not "added" or "adds"
- Do not capitalize first letter
- No period at the end
- Maximum 72 characters

**Good:**
```
feat: add lazy loading to gallery images
fix: correct phone number in footer
seo: implement Organization schema markup
```

**Bad:**
```
feat: Added lazy loading to gallery images.
fix: phone number was wrong
seo: Schema markup
```

---

## Body (Optional)

Explain the "what" and "why", not the "how":

```
feat: add cookie consent banner

Implement GDPR-compliant cookie banner with:
- Accept/reject buttons
- Link to privacy policy
- LocalStorage for user preference
- Smooth slide-in animation

Closes #42
```

---

## Footer (Optional)

Reference issues, breaking changes, or co-authors:

```
fix: resolve mobile menu overflow

On screens smaller than 375px, the menu items were
overflowing the viewport. Added max-height and
overflow-y: auto to fix.

Fixes #15
BREAKING CHANGE: menu CSS class renamed from .menu to .nav-menu
```

---

## Examples by Scenario

### Adding New Section

```
feat(services): add recycling process section

Add step-by-step visual guide showing the
recycling workflow with icons and descriptions.

Includes responsive grid layout and scroll
animations using GSAP.
```

### Fixing Bug

```
fix(nav): correct hamburger menu on iOS Safari

The menu toggle was not working on iOS Safari
due to missing touch event handling. Added
pointer-events and touch-action CSS properties.

Fixes #23
```

### SEO Update

```
seo: add Open Graph and Twitter Card meta tags

Implement complete social sharing markup:
- og:title, og:description, og:image
- twitter:card, twitter:title, twitter:image

Images use absolute URLs pointing to the
production domain.
```

### Schema Update

```
seo(schema): implement LocalBusiness JSON-LD

Add structured data for Google Rich Snippets:
- Organization info with NAP
- Opening hours
- Service catalog
- Geo coordinates

Validates successfully on validator.schema.org
```

### Style Update

```
style(hero): update background gradient

Replace solid color with linear gradient
matching the brand palette. Improves visual
hierarchy and accessibility contrast.
```

### Deployment

```
deploy: push latest changes to production

Includes:
- feat: new contact section
- fix: mobile navigation
- seo: schema markup

All changes tested locally and validated.
```

---

## Commit Message Template

```
# <type>(<scope>): <description>
#
# [Body - explain what and why]
#
# [Footer - references, breaking changes]
```

Configure in project:

```bash
git config commit.template .gitmessage
```
