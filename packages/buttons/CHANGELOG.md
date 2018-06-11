# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.2.0"></a>
# [3.2.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@3.1.0...@zendeskgarden/react-buttons@3.2.0) (2018-06-11)


### Features

* **testing:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-testing utilities package ([#34](https://github.com/zendeskgarden/react-components/issues/34)) ([678e3c4](https://github.com/zendeskgarden/react-components/commit/678e3c4))
* **testing:** introduce the [@zendeskgarden](https://github.com/zendeskgarden)/react-testing package ([#36](https://github.com/zendeskgarden/react-components/issues/36)) ([ee884e0](https://github.com/zendeskgarden/react-components/commit/ee884e0))




<a name="3.1.0"></a>
# [3.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@3.0.3...@zendeskgarden/react-buttons@3.1.0) (2018-06-11)


### Features

* **utilities:** introduce new [@zendeskgarden](https://github.com/zendeskgarden)/react-utilities package ([#33](https://github.com/zendeskgarden/react-components/issues/33)) ([6ee0ce7](https://github.com/zendeskgarden/react-components/commit/6ee0ce7))




<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@3.0.2...@zendeskgarden/react-buttons@3.0.3) (2018-06-06)


### Bug Fixes

* Add hasType util to safely check children of component ([#27](https://github.com/zendeskgarden/react-components/issues/27)) ([5436bbd](https://github.com/zendeskgarden/react-components/commit/5436bbd))




<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@3.0.1...@zendeskgarden/react-buttons@3.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@3.0.0...@zendeskgarden/react-buttons@3.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-buttons

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@2.0.1...@zendeskgarden/react-buttons@3.0.0) (2018-06-02)


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




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@2.0.0...@zendeskgarden/react-buttons@2.0.1) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-buttons@1.0.0...@zendeskgarden/react-buttons@2.0.0) (2018-05-09)


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




<a name="0.2.4"></a>
## [0.2.4](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.2.3...@zendesk/garden-react-buttons@0.2.4) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.2.3"></a>
## [0.2.3](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.2.2...@zendesk/garden-react-buttons@0.2.3) (2018-04-24)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.2.2"></a>
## [0.2.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.2.1...@zendesk/garden-react-buttons@0.2.2) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.2.1"></a>
## [0.2.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.2.0...@zendesk/garden-react-buttons@0.2.1) (2018-04-17)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.2.0"></a>
# [0.2.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.1.4...@zendesk/garden-react-buttons@0.2.0) (2018-04-12)


### Features

* **theming:** add support to change target of styled-components CSS ([#542](https://github.com/zendeskgarden/react-components/issues/542)) ([f0bf138](https://github.com/zendeskgarden/react-components/commit/f0bf138))




<a name="0.1.4"></a>
## [0.1.4](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.1.3...@zendesk/garden-react-buttons@0.1.4) (2018-04-02)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.1.3"></a>
## [0.1.3](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.1.2...@zendesk/garden-react-buttons@0.1.3) (2018-03-23)


### Bug Fixes

* **selection:** add KEY_CODES constant to root export ([#517](https://github.com/zendeskgarden/react-components/issues/517)) ([ebcbf22](https://github.com/zendeskgarden/react-components/commit/ebcbf22))




<a name="0.1.2"></a>
## [0.1.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.1.1...@zendesk/garden-react-buttons@0.1.2) (2018-03-08)


### Bug Fixes

* **buttons:** update buttons CSS with fix for basic hover state on IE11 ([#511](https://github.com/zendeskgarden/react-components/issues/511)) ([f0189e4](https://github.com/zendeskgarden/react-components/commit/f0189e4))




<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-buttons@0.1.0...@zendesk/garden-react-buttons@0.1.1) (2018-03-01)




**Note:** Version bump only for package @zendesk/garden-react-buttons

<a name="0.1.0"></a>
# 0.1.0 (2018-03-01)


### Features

* Introduce [@zendesk](https://github.com/zendesk)/garden-react-buttons package ([#491](https://github.com/zendeskgarden/react-components/issues/491)) ([dc32027](https://github.com/zendeskgarden/react-components/commit/dc32027))
