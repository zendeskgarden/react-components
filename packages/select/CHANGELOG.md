# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.2.1"></a>
## [2.2.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.2.0...@zendeskgarden/react-select@2.2.1) (2018-06-14)


### Bug Fixes

* **menus|modals|tooltips|select:** enable React v15 support with optional fragment inclusion ([#38](https://github.com/zendeskgarden/react-components/issues/38)) ([bc45ee6](https://github.com/zendeskgarden/react-components/commit/bc45ee6))




<a name="2.2.0"></a>
# [2.2.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.1.0...@zendeskgarden/react-select@2.2.0) (2018-06-11)


### Features

* **testing:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-testing utilities package ([#34](https://github.com/zendeskgarden/react-components/issues/34)) ([678e3c4](https://github.com/zendeskgarden/react-components/commit/678e3c4))
* **testing:** introduce the [@zendeskgarden](https://github.com/zendeskgarden)/react-testing package ([#36](https://github.com/zendeskgarden/react-components/issues/36)) ([ee884e0](https://github.com/zendeskgarden/react-components/commit/ee884e0))




<a name="2.1.0"></a>
# [2.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.0.4...@zendeskgarden/react-select@2.1.0) (2018-06-11)


### Features

* **utilities:** introduce new [@zendeskgarden](https://github.com/zendeskgarden)/react-utilities package ([#33](https://github.com/zendeskgarden/react-components/issues/33)) ([6ee0ce7](https://github.com/zendeskgarden/react-components/commit/6ee0ce7))




<a name="2.0.4"></a>
## [2.0.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.0.3...@zendeskgarden/react-select@2.0.4) (2018-06-06)




**Note:** Version bump only for package @zendeskgarden/react-select

<a name="2.0.3"></a>
## [2.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.0.2...@zendeskgarden/react-select@2.0.3) (2018-06-06)


### Bug Fixes

* Add hasType util to safely check children of component ([#27](https://github.com/zendeskgarden/react-components/issues/27)) ([5436bbd](https://github.com/zendeskgarden/react-components/commit/5436bbd))




<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.0.1...@zendeskgarden/react-select@2.0.2) (2018-06-05)


### Bug Fixes

* **dependencies:** add new allowed peerDependency for [@zendeskgarden](https://github.com/zendeskgarden)/react-theming ([#29](https://github.com/zendeskgarden/react-components/issues/29)) ([c5af0ce](https://github.com/zendeskgarden/react-components/commit/c5af0ce))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@2.0.0...@zendeskgarden/react-select@2.0.1) (2018-06-04)




**Note:** Version bump only for package @zendeskgarden/react-select

<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.1.4...@zendeskgarden/react-select@2.0.0) (2018-06-02)


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




<a name="1.1.4"></a>
## [1.1.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.1.3...@zendeskgarden/react-select@1.1.4) (2018-05-29)




**Note:** Version bump only for package @zendeskgarden/react-select

<a name="1.1.3"></a>
## [1.1.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.1.2...@zendeskgarden/react-select@1.1.3) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="1.1.2"></a>
## [1.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.1.1...@zendeskgarden/react-select@1.1.2) (2018-05-10)




**Note:** Version bump only for package @zendeskgarden/react-select

<a name="1.1.1"></a>
## [1.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.1.0...@zendeskgarden/react-select@1.1.1) (2018-05-09)




**Note:** Version bump only for package @zendeskgarden/react-select

<a name="1.1.0"></a>
# [1.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-select@1.0.0...@zendeskgarden/react-select@1.1.0) (2018-05-09)


### Features

* **select:** add zIndex option to Select component ([#6](https://github.com/zendeskgarden/react-components/issues/6)) ([dcf6b74](https://github.com/zendeskgarden/react-components/commit/dcf6b74))




<a name="1.0.0"></a>
# 1.0.0 (2018-05-09)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#4](https://github.com/zendeskgarden/react-components/issues/4)) ([61b05a3](https://github.com/zendeskgarden/react-components/commit/61b05a3))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="0.1.0"></a>
# 0.1.0 (2018-05-07)


### Features

* **select:** introduce new [@zendesk](https://github.com/zendesk)/garden-react-select package ([#555](https://github.com/zendeskgarden/react-components/issues/555)) ([2e664b9](https://github.com/zendeskgarden/react-components/commit/2e664b9))
