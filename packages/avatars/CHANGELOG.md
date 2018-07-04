# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.7"></a>
## [3.0.7](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.6...@zendeskgarden/react-avatars@3.0.7) (2018-07-04)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="3.0.6"></a>
## [3.0.6](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.5...@zendeskgarden/react-avatars@3.0.6) (2018-06-26)


### Bug Fixes

* **dependencies:** update react-theming peerDependency for all packages ([#46](https://github.com/zendeskgarden/react-components/issues/46)) ([1d0a43b](https://github.com/zendeskgarden/react-components/commit/1d0a43b))




<a name="3.0.5"></a>
## [3.0.5](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.4...@zendeskgarden/react-avatars@3.0.5) (2018-06-25)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="3.0.4"></a>
## [3.0.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.3...@zendeskgarden/react-avatars@3.0.4) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.2...@zendeskgarden/react-avatars@3.0.3) (2018-06-11)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.1...@zendeskgarden/react-avatars@3.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@3.0.0...@zendeskgarden/react-avatars@3.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@2.0.2...@zendeskgarden/react-avatars@3.0.0) (2018-06-02)


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




<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@2.0.1...@zendeskgarden/react-avatars@2.0.2) (2018-05-29)




**Note:** Version bump only for package @zendeskgarden/react-avatars

<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@2.0.0...@zendeskgarden/react-avatars@2.0.1) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-avatars@1.0.0...@zendeskgarden/react-avatars@2.0.0) (2018-05-09)


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




<a name="0.2.1"></a>
## [0.2.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-avatars@0.2.0...@zendesk/garden-react-avatars@0.2.1) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-avatars

<a name="0.2.0"></a>
# [0.2.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-avatars@0.1.1...@zendesk/garden-react-avatars@0.2.0) (2018-04-12)


### Features

* **theming:** add support to change target of styled-components CSS ([#542](https://github.com/zendeskgarden/react-components/issues/542)) ([f0bf138](https://github.com/zendeskgarden/react-components/commit/f0bf138))




<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-avatars@0.1.0...@zendesk/garden-react-avatars@0.1.1) (2018-03-19)


### Bug Fixes

* **avatars:** upgrade css-avatars dependency to remove default figure margin ([#521](https://github.com/zendeskgarden/react-components/issues/521)) ([1da3698](https://github.com/zendeskgarden/react-components/commit/1da3698))




<a name="0.1.0"></a>
# 0.1.0 (2018-03-13)


### Features

* **avatars:** introduce [@zendesk](https://github.com/zendesk)/garden-react-avatars package ([#515](https://github.com/zendeskgarden/react-components/issues/515)) ([7595aa9](https://github.com/zendeskgarden/react-components/commit/7595aa9))
