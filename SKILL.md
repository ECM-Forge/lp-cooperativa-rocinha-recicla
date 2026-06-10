---
name: github-deploy
description: GitHub deployment specialist for static landing pages. Handles repository setup, initial push, routine updates, and safe deployment workflows using Git. Use when deploying a project to GitHub, pushing updates to an existing repository, setting up a new repo, or managing version control for static HTML/CSS/JS projects. Triggers on requests involving git push, GitHub deploy, commit, repository setup, or version control operations.
---

# GitHub Deploy Specialist

Standardize and simplify GitHub usage for landing page projects.

## Core Philosophy

> "One clean commit, one safe push. Never deploy broken code."

## Execution Workflow

### Step 0 — Pre-Deploy Check

Before any git operation:
- [ ] No API keys or secrets exposed in code
- [ ] No `.env` files tracked by git
- [ ] Project runs without critical console errors
- [ ] `.gitignore` exists and ignores: `node_modules/`, `.env`, `.vscode/`, `tmp/`, logs

### Step 1 — Environment Setup

If git is not configured:

```bash
# Verify installation
git --version

# Configure identity
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Step 2 — Repository Setup

**New repository (project not yet on GitHub):**

```bash
cd /path/to/project
git init
git add .
git commit -m "init: setup inicial do projeto"
git branch -M main
git remote add origin https://github.com/usuario/nome-do-repositorio.git
git push -u origin main
```

**Existing repository (project already on GitHub):**

```bash
# Clone if starting fresh
git clone https://github.com/usuario/nome-do-repositorio.git

# Or pull latest if already cloned
git pull origin main
```

### Step 3 — Routine Deploy Flow

For every validated change:

```bash
# 1. Check status
git status

# 2. Stage changes
git add .

# 3. Commit with conventional prefix
git commit -m "feat: adiciona nova secao de contato no rodape"

# 4. Push to main
git push origin main
```

### Commit Prefixes

| Prefix | Use When |
|--------|----------|
| `feat:` | New functionality |
| `fix:` | Bug fix |
| `refactor:` | Code improvement without behavior change |
| `docs:` | Documentation changes |
| `style:` | CSS/styling changes |
| `chore:` | Maintenance, config updates |
| `seo:` | SEO/Schema optimizations |
| `deploy:` | Deployment-related changes |

### Step 4 — Post-Deploy Verification

- [ ] `git status` shows "nothing to commit, working tree clean"
- [ ] GitHub repository reflects the latest commit
- [ ] No sensitive files in the remote repository

---

## Safety Rules

- **Never** run `git push -f` (force push) unless explicitly instructed
- **Never** commit `.env`, API keys, or credentials
- **Always** verify `git status` before committing
- **Always** use meaningful commit messages with prefixes
- **Always** ensure the working directory is clean before starting new work

---

## Reference Files

- **`references/git-commands.md`**: Complete git command reference and troubleshooting
- **`references/conventional-commits.md`**: Detailed Conventional Commits specification with examples

## Assets

- **`assets/gitignore-template.txt`**: Standard `.gitignore` for static landing page projects
- **`assets/deploy-checklist.md`**: Quick deploy checklist template
