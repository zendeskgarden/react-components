# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@2.0.1...@zendeskgarden/react-theming@2.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@2.0.0...@zendeskgarden/react-theming@2.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-theming

<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@1.0.0...@zendeskgarden/react-theming@2.0.0) (2018-06-02)


### Features

* **build:** move to webpack build and remove custom webpack dependency ([#21](https://github.com/zendeskgarden/react-components/issues/21)) ([5640a6e](https://github.com/zendeskgarden/react-components/commit/5640a6e))


### BREAKING CHANGES

* **build:** All components no longer require custom webpack loaders for CSS-modules. Due to this build change the following breaking changes occurred:

* Styles are no longer bundled within the components. You must import them separately:

```
import ‘@zendeskgarden/react-buttons/dist/styles.css';
```

* The relative, “flat-pack” import paths are no longer necessary. You can now use the standard import structures:

```
// Old imports
import Button from ‘@zendeskgarden/react-buttons/Button’;

// New imports
import { Button } from ‘@zendeskgarden/react-buttons’;
```

These changes also simplify the custom configurations needed to test with our components. You may be able to remove some custom jest/enzyme entries that you needed in the past.




<a name="1.0.0"></a>
# 1.0.0 (2018-05-09)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#4](https://github.com/zendeskgarden/react-components/issues/4)) ([61b05a3](https://github.com/zendeskgarden/react-components/commit/61b05a3))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="0.3.1"></a>
## [0.3.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-theming@0.3.0...@zendesk/garden-react-theming@0.3.1) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-theming

<a name="0.3.0"></a>
# [0.3.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-theming@0.2.0...@zendesk/garden-react-theming@0.3.0) (2018-04-12)


### Bug Fixes

* **selection:** add KEY_CODES constant to root export ([#517](https://github.com/zendeskgarden/react-components/issues/517)) ([ebcbf22](https://github.com/zendeskgarden/react-components/commit/ebcbf22))


### Features

* **theming:** add support to change target of styled-components CSS ([#542](https://github.com/zendeskgarden/react-components/issues/542)) ([f0bf138](https://github.com/zendeskgarden/react-components/commit/f0bf138))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-theming@0.1.1...@zendesk/garden-react-theming@0.2.0) (2018-03-01)


### Features

* Introduce new [@zendesk](https://github.com/zendesk)/garden-react-selection package ([#474](https://github.com/zendeskgarden/react-components/issues/474)) ([4cbd2d3](https://github.com/zendeskgarden/react-components/commit/4cbd2d3))




<a name="0.1.1"></a>

## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-theming@0.1.0...@zendesk/garden-react-theming@0.1.1) (2018-02-05)

### Bug Fixes

* Move necessary dependencies from devDependencies ([7382dc9](https://github.com/zendeskgarden/react-components/commit/7382dc9))

<a name="0.1.0"></a>

# 0.1.0 (2018-01-31)

### Features

* Add [@zendesk](https://github.com/zendesk)/garden-react-theming package ([#459](https://github.com/zendeskgarden/react-components/issues/459)) ([a0d2616](https://github.com/zendeskgarden/react-components/commit/a0d2616))
