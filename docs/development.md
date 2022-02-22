# Garden development

You're here because you want to get into the codebase. That's great. This
guide will help you dig in. If you haven't already, please see the
[contribution](/.github/CONTRIBUTING.md) documentation for a project overview
along with versioning, development, and PR workflows.

## Package creation

One of the best ways to get familiar with Garden's package structure is to
create your own. Garden makes this simple by providing a `yarn new` command.
This command will prompt you to enter a name (e.g. `test`). The new package
will be generated under `/packages` and you can view the results by running
the `yarn start` command (e.g. `yarn start --scope @zendeskgarden/react-test`).

Unless you are a member of the core team, it is unlikely that we'll accept
brand new package PRs. However, a new package provides the simplified sandbox
for exploring further component development concepts. In the mean time,
please open an [issue](https://github.com/zendeskgarden/react-components/issues/new)
to discuss the addition of a new component package.

## Package structure

All packages follow this basic structure (.e.g. under `/packages/test`):

<!-- markdownlint-disable -->

- `├── demo/` – visual component demos
- `├── src/` – component source code and spec tests<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── elements/` – high abstraction components that wrap interaction behavior and visual styling<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── styled/` – view-level [styled-components](https://styled-components.com/) that contain theme based CSS<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── index.ts` – public-facing component exports for this package
- `├── package.json` – configuration for the package published to the registry
- `├── README.md` – essential package description, install, and usage instructions

<!-- markdownlint-enable -->

The Garden React codebase is statically type-checked using
[TypeScript](https://www.typescriptlang.org/). See the [API](api.md)
documentation for in-depth treatment of Garden's Container-View-Element
architecture, along with rules that apply to each component type.

## Package demos

Package demo code is generated via [Storybook](https://storybook.js.org/). Run
`yarn start` to build and serve package documentation in development mode (with
hot reloading). See [demo documentation](/docs/demo.md) for development
information.

## Package testing

The Garden `react-components` repo is strongly tested – holding steady at
~95% [coverage](https://coveralls.io/github/zendeskgarden/react-components).
DOM testing is implemented using [React Testing
Library](https://testing-library.com/react) while [Jest](https://jestjs.io/)
is the underlying API (`describe` - `it` - `expect`) and test runner.

All exported elements must be tested, but should be limited to the surface
area exposed by the component (in other words, don't re-test imported
`react-containers`). All styled views may also benefit from testing –
asserting that various options affect one or two notable CSS values in
question.

In cases where DOM structure or state would be unwieldy to determine,
`data-test-*` attributes can be added in complex components to aid with
testing. These attributes will be removed from published components during
the build process.

### Linting and formatting

All JS/TS, CSS, and Markdown files are linted using eslint, stylelint, and
markdownlint respectively. Additionally, prettier is used to format all
JS/TS, and package.json files.

## Package dependencies

Garden attempts to keep package dependencies to a minimum. Typical package
dependencies include:

- Dependencies
  - `polished`
- Peer dependencies
  - `@zendeskgarden/react-theming`
  - `react`
  - `react-dom`
  - `styled-components`

When additional dependencies are required, they can be installed with the
[`lerna add`](https://github.com/lerna/lerna/tree/main/commands/add#readme).
The [Renovate](https://renovatebot.com) bot will keep these dependencies
up-to-date over time.

## Package build

Garden packages are built using [Rollup](https://rollupjs.org/). Package distribution files include:

- CommonJS bundle (the package [`main`](https://docs.npmjs.com/files/package.json#main) entry)
- ES module bundle (the package `module` entry)
- type definitions

Run a full repo build using `yarn build` or a package-scoped build with `yarn build --scope @zendeskgarden/react-[package]`.
