# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-ranges@2.0.1...@zendeskgarden/react-ranges@2.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-ranges@2.0.0...@zendeskgarden/react-ranges@2.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-ranges

<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-ranges@1.0.1...@zendeskgarden/react-ranges@2.0.0) (2018-06-02)


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




<a name="1.0.1"></a>
## [1.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-ranges@1.0.0...@zendeskgarden/react-ranges@1.0.1) (2018-05-15)




**Note:** Version bump only for package @zendeskgarden/react-ranges

<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-ranges@0.1.0...@zendeskgarden/react-ranges@1.0.0) (2018-05-10)


### Features

* **ranges:** add WCAG 2.0 AA compliant color palette ([#9](https://github.com/zendeskgarden/react-components/issues/9)) ([bd39a09](https://github.com/zendeskgarden/react-components/commit/bd39a09))


### BREAKING CHANGES

* **ranges:** This version includes the WCAG 2.0 AA compliant "blue" color palette. With this being a large visual change it is a major version.




<a name="0.1.0"></a>
# 0.1.0 (2018-05-10)


### Features

* **ranges:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-ranges package ([#3](https://github.com/zendeskgarden/react-components/issues/3)) ([3311e64](https://github.com/zendeskgarden/react-components/commit/3311e64))
