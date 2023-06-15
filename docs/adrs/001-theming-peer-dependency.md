# ADR-001: Theming peer dependency

2023.04.24

## Context

Garden provides a collection of React components through multiple NPM packages.
Each package has peer dependencies for `@zendeskgarden/react-theming`, `react`,
`react-dom`, and `styled-components`. Typically, a package should increase its
major version when there is a change in its peer dependency requirements.
However, Garden proposes a DECISION to deviate from this [general
rule](https://nodejs.org/en/blog/npm/peer-dependencies) and allow special
treatment for `@zendeskgarden/react-theming`.

While this decision conflicts with [semantic versioning](https://semver.org/),
it benefits both maintainers and consumers by enabling a centralized, tested
collection of hooks and utilities across the codebase. As a result, consumers
are not required to ingest duplicated and more brittle code. A terminal warning
will notify the consumer if a peer version is out-of-date.

Ideally, all Garden package versions should align. However, at the very least,
the `@zendeskgarden/react-theming` peer dependency should align with the highest
version of a Garden component package dependency.

## Decision

As [centralized theming
utilities](https://garden.zendesk.com/components/utilities) are added or
modified (in non-breaking fashion), other Garden component packages may take
advantage of them by updating their `@zendeskgarden/react-theming` peer dependency
minor version without publishing a major version breaking change.

## Consequences

If a consumer upgrades a single Garden component package, they may see a console
warning indicating that the `@zendeskgarden/react-theming` package is
out-of-date. If the warning is ignored, there is a high likelihood that
component rendering will fail due to a missing theming utility. However, there
is no reason to believe that such a failure could slip through to production.
