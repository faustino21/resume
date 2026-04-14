Commit all currently staged changes with a generated commit message.

Follow these steps:
1. Run `git status` to confirm there are staged changes. If nothing is staged, tell the user and stop.
2. Run `git diff --staged` to read the staged diff.
3. Analyze the diff and draft a commit message following this project's style:
   - Format: `<type> : <short description>`
   - Types: `feat`, `fix`, `refactor`, `docs`, `style`, `chore`
   - Keep the description concise (under 72 characters total)
   - Examples from this repo: `feat : add new skill - n8n`, `fix : resolve tab title`
4. Run the commit using a HEREDOC:
   ```
   git commit -m "$(cat <<'EOF'
   <type> : <description>
   EOF
   )"
   ```
   Do NOT include a Co-Authored-By trailer.
5. After the commit succeeds, run `git status` to confirm the working tree is clean.
6. Report the commit hash and message.
