# @zendeskgarden/codemods [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/codemods)](https://www.npmjs.com/package/@zendeskgarden/codemods)

The `@zendeskgarden/codemods` package offers a variety of codemods designed to automate
code transformations in Garden-based projects.
These codemods are accessible via subcommands and are categorized into two main types:

1. **Version-Specific Transformations**: These codemods are tailored to facilitate specific version migrations,
   enabling users to upgrade their projects from one version to another smoothly and efficiently.
2. **Targeted Refactoring Transformations**: These codemods are designed for specific
   refactoring tasks, such as updating deprecated property names or modernizing component usage
   patterns. They help developers maintain the health of their codebase and adopt best practices
   incrementally, without being tied to version upgrades.

## Installation

```sh
npm install @zendeskgarden/codemods
```

## Running without prior installation

```sh
npx garden-codemods [options] [command]
```

## Usage

```sh
   __ _  __ _ _ __ __| | ___ _ __     ___ ___   __| | ___ _ __ ___   ___   __| |___
  / _` |/ _` | '__/ _` |/ _ \ '_ \   / __/ _ \ / _` |/ _ \ '_ ` _ \ / _ \ / _` / __|
 | (_| | (_| | | | (_| |  __/ | | | | (_| (_) | (_| |  __/ | | | | | (_) | (_| \__ \
  \__, |\__,_|_|  \__,_|\___|_| |_|  \___\___/ \__,_|\___|_| |_| |_|\___/ \__,_|___/
  |___/
Usage: garden-codemods [options] [command]

Options:
  -V, --version                           output the version number
  -h, --help                              display help for command

Commands:
  v8-v9 [options] [transform] [paths...]  A collection of codemods to help migrate
                                          from Garden v8 to v9

```

## v8 to v9 migration codemods

These version-specific codemods are designed to assist users in migrating from Garden v8 to v9.
For detailed information, refer to this [document](./docs/v8-v9.md).
