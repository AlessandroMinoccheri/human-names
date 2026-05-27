# Contributing to human-names

Thanks for taking the time to contribute!

## Getting Started

1. Fork the repository and clone it locally
2. Install dependencies: `npm install`
3. Run the tests to make sure everything is working: `npm test`

## Making Changes

- Create a new branch from `master` for your changes
- Keep changes focused — one fix or feature per pull request
- Run `npm test` before submitting
- Write a clear PR description explaining what you changed and why

## Submitting a Pull Request

1. Push your branch to your fork
2. Open a pull request against the `master` branch of this repository
3. Reference any related issue in the PR description (e.g. `closes #6`)

## Reporting Issues

Open a GitHub issue with a clear description of the problem, the expected behaviour, and steps to reproduce.

## Releasing a New Version

Releases are done by the maintainer after merging to `master`.

```bash
# Pull the latest merged changes
git pull origin master

# Bump the version (patch / minor / major), commit, and tag
npm version patch   # e.g. 1.0.12 → 1.0.13
# or
npm version minor   # e.g. 1.0.12 → 1.1.0
# or
npm version major   # e.g. 1.0.12 → 2.0.0

# Push the commit and the new tag
git push origin master --tags

# Publish to npm
npm publish
```

Use `patch` for bug fixes and security updates, `minor` for new backwards-compatible features, `major` for breaking changes.
