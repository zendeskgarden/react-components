# Garden React Development

This is a multi-package repo which uses [Lerna](https://lernajs.io/) to
manage shared and cross-package dependencies.

For further contribution guidelines view our [contribution documentation](CONTRIBUTING.md).

All packages must be implemented following the requirements listed below.

## Creating New Packages

We have abstracted the creation of packages into the `yarn new` command. When prompted, provide a base name for your package (i.e. if provided "example" the command will create the `@zendeskgarden/react-example` package in the `packages/example` path).

### Dependencies

All dependencies required by a package must be kept in it's specific `package.json`. The `lerna add` command can help automate this.

```sh
# Adds the css-buttons package to the local react-buttons package
yarn lerna add @zendeskgarden/css-buttons --scope @zendeskgarden/react-buttons
```

### Documentation

Documentation is generated for each package using [react-styleguidist](https://react-styleguidist.js.org/).

A shared, global config (including webpack modifications) can be found at [utils/styleguide/styleguide.base.config.js](utils/styleguide/styleguide.base.config.js).

Each package can override the global config with its local `styleguide.config.js` file. The most common use case for this is creating a sidebar layout custom to the packages directory structure.

To include examples with your code include a markdown file. `FooComponent.js` would be documentented with `FooComponent.example.md`.

To start the documentation in development mode use the `yarn start` command.

```sh
# Prompts for an individual package
yarn start

# Starts the individual package immediately
yarn start --scope @zendeskgarden/react-buttons
```

## Component Requirements

### Elements

All elements must

* Be implemented with associated `Conatiner` and `View` components
* Provide `uncontrolled` and `controlled` state management if necessary
  * Be implemented with the `ControlledComponent` state abstractions if necessary
* Create an abstraction to benefit a majority of use cases

### Containers

All containers must

* Be implemented using the [render prop pattern](https://reactjs.org/docs/render-props.html)
* Provide `uncontrolled` and `controlled` state management if necessary
  * Be implemented with the `ControlledComponent` state abstractions if necessary
* Provide the minimum number of events and attributes to implement the appropriate [W3C WAI-ARIA Design Pattern](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
* Only use events and attributes that work with **ANY** DOM element (within reason)

### Views

All view component styling must be based on an existing Garden designer-approved CSS component. Please see the [Garden CSS Components](https://github.com/zendeskgarden/css-components) repo for details.

In addition all views must

* Be created using (or extending) a [styled-components](https://www.styled-components.com/) primitive
* Use the `retrieveTheme` utility to allow dynamic theming
* Provide the following analytics attributes:
  * `data-garden-id="unique-component-id"` - this should match the ID provided to `retrieveTheme`
  * `data-garden-version="packageVersion"` - provided by `package.json`
  * (these attributes allow us to view current Garden usage across the Zendesk product suite)
* Provide `propTypes` for any custom visualizations you have provided

## Building Components

The packages are built using a slightly customized babel implementation that allows "flat-pack" import structures.

```jsx
import Button from '@zendeskgarden/react-buttons/Button';
import Anchor from '@zendeskgarden/react-buttons/Anchor';
import ButtonGroupContainer from '@zendeskgarden/react-buttons/ButtonGroupContainer';
```

This helps ensure that consumers are not requiring the full package and negatively affecting their bundle size.

## Testing Components

All `Element` and `Container` components must only test the surface area that they are implementing. (i.e. Since `TabsContainer` is implemented with the `SelectionContainer` it does not need to test all keyboard navigation).

These tests should be implemented with standard assertions using the Enzyme shallow renderer when possible.

All `View` components must test all visual combinations using snapshot tests.

## Linting and Formatting Components

All JS, CSS (in styled-components), and Markdown files are linted respectively with eslint, stylelint, and markdownlint.

Additionally, prettier is used to format all JS, Markdown, and package.json files.
