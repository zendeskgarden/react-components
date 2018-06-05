# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@3.0.2...@zendeskgarden/react-tabs@3.0.3) (2018-06-05)


### Bug Fixes

* **tabs:** add missing `data-garden-*` attributes ([#30](https://github.com/zendeskgarden/react-components/issues/30)) ([caaaba7](https://github.com/zendeskgarden/react-components/commit/caaaba7))




<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@3.0.1...@zendeskgarden/react-tabs@3.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@3.0.0...@zendeskgarden/react-tabs@3.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-tabs

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@2.1.0...@zendeskgarden/react-tabs@3.0.0) (2018-06-02)


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




<a name="2.1.0"></a>
# [2.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@2.0.1...@zendeskgarden/react-tabs@2.1.0) (2018-05-23)


### Features

* **tabs:** add onChange callback for selection event ([#22](https://github.com/zendeskgarden/react-components/issues/22)) ([fd5eb4c](https://github.com/zendeskgarden/react-components/commit/fd5eb4c))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@2.0.0...@zendeskgarden/react-tabs@2.0.1) (2018-05-15)




**Note:** Version bump only for package @zendeskgarden/react-tabs

<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tabs@1.0.0...@zendeskgarden/react-tabs@2.0.0) (2018-05-09)


### Features

* **accessibility:** add WCAG 2.0 AA compliant color palette  ([#5](https://github.com/zendeskgarden/react-components/issues/5)) ([29f30d1](https://github.com/zendeskgarden/react-components/commit/29f30d1))


### BREAKING CHANGES

* **accessibility:** This accessible palette update is a breaking visual change. You should validate that any usages are correct in relation to other areas of your application. 

There are also API changes for `Avatar` and `Tooltip`:
* Avatar - we have removed the `isActive`, `isIn`, and `isOut` props and standardized on a single `disabled` prop.
* Tooltip - we have added a new `Paragraph` component and updated the styling of `Title`




<a name="1.0.0"></a>
# 1.0.0 (2018-05-09)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#4](https://github.com/zendeskgarden/react-components/issues/4)) ([61b05a3](https://github.com/zendeskgarden/react-components/commit/61b05a3))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="0.1.9"></a>
## [0.1.9](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.8...@zendesk/garden-react-tabs@0.1.9) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.8"></a>
## [0.1.8](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.7...@zendesk/garden-react-tabs@0.1.8) (2018-04-24)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.7"></a>
## [0.1.7](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.6...@zendesk/garden-react-tabs@0.1.7) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.6"></a>
## [0.1.6](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.5...@zendesk/garden-react-tabs@0.1.6) (2018-04-17)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.5"></a>
## [0.1.5](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.4...@zendesk/garden-react-tabs@0.1.5) (2018-04-12)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.4"></a>
## [0.1.4](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.3...@zendesk/garden-react-tabs@0.1.4) (2018-04-02)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.3"></a>
## [0.1.3](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.2...@zendesk/garden-react-tabs@0.1.3) (2018-03-23)


### Bug Fixes

* **selection:** add KEY_CODES constant to root export ([#517](https://github.com/zendeskgarden/react-components/issues/517)) ([ebcbf22](https://github.com/zendeskgarden/react-components/commit/ebcbf22))




<a name="0.1.2"></a>
## [0.1.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.1...@zendesk/garden-react-tabs@0.1.2) (2018-03-01)




**Note:** Version bump only for package @zendesk/garden-react-tabs

<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-tabs@0.1.0...@zendesk/garden-react-tabs@0.1.1) (2018-02-26)


### Bug Fixes

* Correct invalid paths in Tabs root export ([#494](https://github.com/zendeskgarden/react-components/issues/494)) ([fcfec8f](https://github.com/zendeskgarden/react-components/commit/fcfec8f))




<a name="0.1.0"></a>
# 0.1.0 (2018-02-20)


### Features

* Add [@zendesk](https://github.com/zendesk)/garden-react-tabs package ([#484](https://github.com/zendeskgarden/react-components/issues/484)) ([64dcdff](https://github.com/zendeskgarden/react-components/commit/64dcdff))
