# Contributing to Garden

Keen to contribute to Garden? We're stoked to have you join us. You may
find that opening an
[issue](https://github.com/zendeskgarden/react-components/issues) is the
best way to get a conversation started. When you're ready to submit a
pull request, follow the [steps](#pull-request-workflow) below. We
follow a [code of conduct](CODE_OF_CONDUCT.md) as our guide for
community behavior.

This is a multi-package repo which uses [Lerna](https://lernajs.io/) to
manage shared and cross-package dependencies. The basic repo layout
includes:

<!-- markdownlint-disable -->

- `├── package.json` – the top-level "project" package that contains
  the dependencies and scripts needed to manage the multi-package repo.
  _This package will never be published to the registry._
- `└── packages/` – the folder that contains individual `@zendeskgarden`
  packages which are published to the registry.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`├── .template/` – a special template package
  referenced by `yarn new` to generate a component.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`├── buttons/`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`├── tabs/`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`├── theming/`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`└── etc.`

<!-- markdownlint-enable -->

## Versioning Workflow

Garden follows [semantic versioning](https://semver.org/). We release
patch versions for bugfixes, minor versions for new features, and major
versions for any breaking changes.

The [pull request workflow](#pull-request-workflow) along with the [PR
template](PULL_REQUEST_TEMPLATE.md) will help us determine how to
version your contributions.

All changes are recorded in the [changelog](/CHANGELOG.md) after your PR is
merged.

## Development Workflow

Before you start, be sure [yarn](https://yarnpkg.com/en/) is installed
on your system. After you clone this repo, run `yarn` to install
dependencies needed for development. After installation, the following
commands are available:

- `yarn start` to launch Storybook with live reload.
- `yarn test` to run Jest testing.
- `yarn lint` to enforce consistent JavaScript, CSS, and
  markdown code conventions across all component packages. Note this is
  run as a git `pre-commit` hook.
- `yarn format` to enforce code style with opinionated
  formats across all component packages. Note this is run as a git
  `pre-commit` hook.
- `yarn build` to rebuild distributions across all packages.
  The build runs as part of the initial install. Operates as a facade
  over a Lerna command; operation may be modified using option
  [flags](https://github.com/lerna/lerna#flags) (i.e. `scope`, `since`,
  or `ignore`).
- `yarn new` to generate a new React component based on a package
  template.

See Garden's [development documentation](/docs/development.md) for package
implementation requirements. In general, your code will be expected to follow
documented standards and prevailing conventions. If you feel the need to
introduce a new or novel pattern, please start a new
[discussion](https://github.com/zendeskgarden/react-components/discussions) or
open an [issue](https://github.com/zendeskgarden/react-components/issues) for
consideration by the core team.

## Pull Request Workflow

1. Fork the repo and create a branch. Format your branch name as
   `username/verb-noun`.
1. If you haven't yet, get comfortable with the [development
   environment](#development-workflow).
1. Regularly `git commit` locally and `git push` to the remote branch.
   Use whatever casual commit messaging you find suitable. We'll help
   you apply an appropriate squashed [conventional
   commit](https://conventionalcommits.org/) message when it's time to
   merge to the main branch.
1. If your changes result in a major modification, be sure all
   documentation is up-to-date.
1. When your branch is ready, open a new pull request via GitHub.
   The repo [PR template](PULL_REQUEST_TEMPLATE.md) will guide you
   toward describing your contribution in a format that is ultimately
   suitable for a structured conventional commit (used to automatically
   advance published package versions).
1. Every PR must pass CI checks and receive at least one :+1: to be
   considered for merge.
1. Garden
   [maintainers](https://github.com/orgs/zendeskgarden/teams/maintainers)
   will manage the squashed merge to the main branch, using your PR title
   and description as the scope, description, and body for a conventional
   commit.

## License

By contributing to Garden, you agree that your contributions will be
licensed under the [Apache License, Version 2.0](/LICENSE.md).
