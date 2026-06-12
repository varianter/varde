# Varde

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/) to drive automated versioning and changelogs via release-please.

| Keyword                             | Bump          | When to use      |
| ----------------------------------- | ------------- | ---------------- |
| `fix:`                              | Patch (0.0.x) | Bug fixes        |
| `feat:`                             | Minor (0.x.0) | New features     |
| `feat!:` / `fix!:`                  | Major (x.0.0) | Breaking changes |
| `BREAKING CHANGE:` (in body/footer) | Major (x.0.0) | Breaking changes |

Both `!` in the header and `BREAKING CHANGE:` in the footer are recognized — use whichever you prefer.

A **breaking change** is anything that forces downstream consumers to update their code. For example, renaming or removing a CSS class in `packages/css/` is a breaking change.

Scope your commits to the affected package (e.g. `feat(css): add new spacing utility`).
