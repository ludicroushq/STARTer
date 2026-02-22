# Project Instructions

## Agent Rules

DO NOT run the dev server or any database altering CLIs. Do as much as you can, and then provide instructions to the user of what needs to be done prior to running the dev server. Only run the commands if you have explicit permission from the user to execute them.

### Style Guide

- **No comments**: Do not add comments to code unless the logic is non-obvious due to product requirements or business rules that differ from what a developer would naturally expect.
- **within-ts**: Always use `within-ts` primitives (`Define.Error`, `Define.Service`, `Define.Entity`, `Define.Logger`, `Result`, `Cache`, `Schedule`) instead of hand-rolling equivalent patterns. Use `Result` instead of throwing errors, `Define.Error` instead of manual error class boilerplate, `Define.Service` instead of manual DI or global singletons, and `Cache.memoize` instead of manual caching logic. Reference the `within-ts` skill for API details and usage patterns.
