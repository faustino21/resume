Perform a git operation based on the user input: $ARGUMENTS

Supported operations — parse $ARGUMENTS to determine intent:

**commit** (or no args) — commit staged changes
  - Run `git diff --staged` to inspect changes
  - Draft a message in this repo's style: `<type> : <short description>`
  - Types: `feat`, `fix`, `refactor`, `docs`, `style`, `chore`
  - Commit without Co-Authored-By trailer
  - Confirm with `git status` after

**status** — show working tree state
  - Run `git status` and summarize what is staged, unstaged, and untracked

**log [N]** — show recent commits (default N=10)
  - Run `git log --oneline -N` and display results

**diff [--staged]** — show changes
  - Run `git diff` or `git diff --staged` and summarize the key changes

**branch [name]** — list or create branches
  - No name: run `git branch -a` and list branches
  - With name: confirm with user before creating a new branch

**push** — push current branch to origin
  - Check current branch with `git branch --show-current`
  - Warn if pushing to main/master and ask for confirmation
  - Run `git push` (or `git push -u origin <branch>` if no upstream set)

**pull** — pull latest changes
  - Run `git pull` and report result

**stash [pop|list]** — manage stash
  - No args: `git stash`
  - `pop`: `git stash pop`
  - `list`: `git stash list`

Rules:
- Never use `--no-verify`, `--force` on main/master, or `--amend` on published commits without explicit user confirmation
- Never add Co-Authored-By trailers to commits
- Always confirm before destructive operations (reset --hard, force push, branch delete)
