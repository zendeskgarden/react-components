# Development

All commands are controlled from the root of the project.

## Install Dependencies

First, we need to install all of our shared dependencies. This will also call `lerna bootstrap` which will install all package-specific dependencies and link anything that is shared.

```bash
yarn
```

## Running Components Locally

Since every package is self-contained, each has independently created documentation that must be ran separately. These can be ran at the same time, but must have different port numbers to serve simultaneously (customizable in the package's `styleguide.config.js`).

### Starting Development Environment

```bash
# Shows prompt with list of packages to choose from
yarn start

# Start specific package without prompt
yarn start --scope @zendesk/garden-react-button
```

### Linting Components

```bash
# Lint all components
yarn lint

# Lint single component (--scope also available)
yarn lint:single
```

### Testing Components

```bash
# Run tests related to unstaged files
yarn test

# Run all tests
yarn test:all
```

### Building Components

```bash
# Build all components
yarn build

# Build single component (--scope also available)
yarn build:single
```

## Deployment Instruction

ToDo once we get the first few components out...
