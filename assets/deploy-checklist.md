# Deploy Checklist

Quick checklist for safe deployment to GitHub.

---

## Pre-Deploy

- [ ] `git status` — review all modified files
- [ ] No API keys or secrets in code
- [ ] No `.env` files tracked
- [ ] `.gitignore` is up to date
- [ ] Project runs without critical errors
- [ ] All tests pass (if applicable)

## Commit

- [ ] `git add .` (or specific files)
- [ ] Commit message follows Conventional Commits
- [ ] Message is clear and descriptive
- [ ] Scope is included if applicable

## Push

- [ ] `git push origin main`
- [ ] No push errors
- [ ] No merge conflicts

## Post-Deploy

- [ ] `git status` shows clean working tree
- [ ] GitHub repository shows latest commit
- [ ] No sensitive files in remote
- [ ] GitHub Pages (if used) reflects changes

---

## Emergency Rollback

If deployment breaks something:

```bash
# Revert last commit (creates new commit)
git revert HEAD

# Or reset to previous commit (destructive)
git reset --hard HEAD~1
git push --force-with-lease origin main
```

**Note:** Only use `--force` when absolutely necessary and after confirming no one else pushed changes.
