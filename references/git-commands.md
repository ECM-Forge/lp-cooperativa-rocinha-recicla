# Git Commands Reference

Complete reference for git commands used in landing page deployment workflows.

---

## Initial Setup

### Check Git Installation

```bash
git --version
```

### Configure Identity (One-time)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Verify Configuration

```bash
git config --list
```

---

## Repository Operations

### Initialize New Repository

```bash
git init
```

### Clone Existing Repository

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```

### Clone to Specific Folder

```bash
git clone https://github.com/usuario/nome-do-repositorio.git nome-da-pasta
```

### Add Remote to Existing Local Repo

```bash
git remote add origin https://github.com/usuario/nome-do-repositorio.git
```

### Verify Remotes

```bash
git remote -v
```

---

## Daily Workflow

### Check Status

```bash
git status
```

Shows:
- Modified files (not staged)
- Staged files (ready to commit)
- Untracked files
- Branch name

### Stage Changes

```bash
# Stage all changes
git add .

# Stage specific file
git add arquivo.html

# Stage all files of a type
git add *.css
```

### Unstage Changes

```bash
# Unstage all
git reset HEAD

# Unstage specific file
git reset HEAD arquivo.html
```

### Commit Changes

```bash
# Commit with message
git commit -m "feat: descricao da mudanca"

# Commit all tracked changes (skip git add)
git commit -am "fix: corrige bug no menu"

# Amend last commit (use with caution)
git commit --amend -m "feat: nova descricao"
```

### View Commit History

```bash
# Simple log
git log

# Compact log
git log --oneline

# Log with graph
git log --oneline --graph --all
```

---

## Branch Operations

### List Branches

```bash
# Local branches
git branch

# All branches (local + remote)
git branch -a
```

### Create and Switch Branch

```bash
git checkout -b nome-da-branch
```

### Switch Branch

```bash
git checkout main
git checkout nome-da-branch
```

### Merge Branch

```bash
git checkout main
git merge nome-da-branch
```

### Delete Branch

```bash
# Delete merged branch
git branch -d nome-da-branch

# Force delete unmerged branch
git branch -D nome-da-branch
```

---

## Remote Operations

### Push to Remote

```bash
# Push current branch
git push origin main

# Push and set upstream (first push)
git push -u origin main

# Push specific branch
git push origin nome-da-branch
```

### Pull from Remote

```bash
# Pull latest changes
git pull origin main

# Pull with rebase (cleaner history)
git pull --rebase origin main
```

### Fetch (Download without merging)

```bash
git fetch origin
```

---

## Undo Operations

### Discard Local Changes

```bash
# Discard changes in specific file
git checkout -- arquivo.html

# Discard all changes (dangerous)
git checkout -- .
```

### Revert Commit (safe undo)

```bash
# Revert specific commit
git revert abc1234

# Revert last commit
git revert HEAD
```

### Reset (dangerous — use with caution)

```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (keep changes unstaged)
git reset --mixed HEAD~1

# Hard reset (discard all changes)
git reset --hard HEAD~1
```

---

## Troubleshooting

### Merge Conflicts

```bash
# Check conflicted files
git status

# After resolving conflicts, stage and commit
git add .
git commit -m "fix: resolve merge conflict"
```

### Authentication Issues

```bash
# Update remote URL to use token
git remote set-url origin https://TOKEN@github.com/usuario/repo.git

# Or use SSH
git remote set-url origin git@github.com:usuario/repo.git
```

### Large Files Accidentally Committed

```bash
# Remove from tracking but keep locally
git rm --cached arquivo-grande.zip
git commit -m "chore: remove large file from tracking"
```

### Check What Will Be Pushed

```bash
git diff origin/main --stat
```

---

## Useful Aliases

Add to `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    lg = log --oneline --graph --all
    last = log -1 HEAD
    unstage = reset HEAD --
```
