# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.1.5"></a>
## [1.1.5](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.1.4...@zendeskgarden/react-tags@1.1.5) (2018-07-04)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.1.4"></a>
## [1.1.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.1.3...@zendeskgarden/react-tags@1.1.4) (2018-06-26)


### Bug Fixes

* **dependencies:** update react-theming peerDependency for all packages ([#46](https://github.com/zendeskgarden/react-components/issues/46)) ([1d0a43b](https://github.com/zendeskgarden/react-components/commit/1d0a43b))




<a name="1.1.3"></a>
## [1.1.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.1.2...@zendeskgarden/react-tags@1.1.3) (2018-06-25)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.1.2"></a>
## [1.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.1.1...@zendeskgarden/react-tags@1.1.2) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.1.1"></a>
## [1.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.1.0...@zendeskgarden/react-tags@1.1.1) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.1.0"></a>
# [1.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.0.4...@zendeskgarden/react-tags@1.1.0) (2018-06-11)


### Features

* **testing:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-testing utilities package ([#34](https://github.com/zendeskgarden/react-components/issues/34)) ([678e3c4](https://github.com/zendeskgarden/react-components/commit/678e3c4))
* **testing:** introduce the [@zendeskgarden](https://github.com/zendeskgarden)/react-testing package ([#36](https://github.com/zendeskgarden/react-components/issues/36)) ([ee884e0](https://github.com/zendeskgarden/react-components/commit/ee884e0))




<a name="1.0.4"></a>
## [1.0.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.0.3...@zendeskgarden/react-tags@1.0.4) (2018-06-11)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.0.3"></a>
## [1.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.0.2...@zendeskgarden/react-tags@1.0.3) (2018-06-06)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.0.2"></a>
## [1.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.0.1...@zendeskgarden/react-tags@1.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@1.0.0...@zendeskgarden/react-tags@1.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@0.1.4...@zendeskgarden/react-tags@1.0.0) (2018-06-02)


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




<a name="0.1.4"></a>
## [0.1.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@0.1.3...@zendeskgarden/react-tags@0.1.4) (2018-05-29)




**Note:** Version bump only for package @zendeskgarden/react-tags

<a name="0.1.3"></a>
## [0.1.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@0.1.2...@zendeskgarden/react-tags@0.1.3) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="0.1.2"></a>
## [0.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@0.1.1...@zendeskgarden/react-tags@0.1.2) (2018-05-14)


### Bug Fixes

* **tags:** bump `css-tags` dependency ([#12](https://github.com/zendeskgarden/react-components/issues/12)) ([e69871b](https://github.com/zendeskgarden/react-components/commit/e69871b))




<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-tags@0.1.0...@zendeskgarden/react-tags@0.1.1) (2018-05-10)


### Bug Fixes

* **docs:** use correct build:demo script ([#7](https://github.com/zendeskgarden/react-components/issues/7)) ([6bd1c82](https://github.com/zendeskgarden/react-components/commit/6bd1c82))




<a name="0.1.0"></a>
# 0.1.0 (2018-05-10)


### Features

* **tags:** introduce [@zendesk](https://github.com/zendesk)/garden-react-tags package ([#2](https://github.com/zendeskgarden/react-components/issues/2)) ([d0f0777](https://github.com/zendeskgarden/react-components/commit/d0f0777))
