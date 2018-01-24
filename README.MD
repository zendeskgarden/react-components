# Zendesk Garden React components

This project provides React components that use
[Zendesk Garden](http://zendeskgarden.github.io/) for styling.

**ATTENTION** If you are looking for the legacy Garden components repo. [View the current branch](https://github.com/zendeskgarden/react-components/)

## Repo Layout

The [react-components](https://github.com/zendeskgarden/react-components) repo is a multi-package repo that contains all of the React related `@zendesk` packages.

```bash
packages    // All packages
  - button
    - src   // Package source files
    - package.json   // Package specific dependencies and commands
    - styleguide.config.json    // Package specific documentation (headers, etc.)
  - chrome
  - styleguide   // Private GatsbyJS package that builds this documentation
  ...
package.json   // Contains all shared dependencies
lerna.json   // Tells Lerna how our project is laid out
```

### Technologies

Our multi-package repo manages commands and inter-dependencies of packages with [LernaJS](https://lernajs.io/).

- [CSS-Modules](https://github.com/css-modules/css-modules/)
  - Used to import existing styling from our [Garden CSS](http://garden.zendesk.com/css-components/)
- [Styled-Components](https://www.styled-components.com/)
  - Used for advanced styling along with CSS-Modules
  - Allows global theming and RTL localization
