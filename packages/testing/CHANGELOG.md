# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@2.0.2...@zendeskgarden/react-testing@2.0.3) (2019-05-28)

**Note:** Version bump only for package @zendeskgarden/react-testing





## [2.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@2.0.1...@zendeskgarden/react-testing@2.0.2) (2019-02-01)

**Note:** Version bump only for package @zendeskgarden/react-testing





## [2.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@2.0.0...@zendeskgarden/react-testing@2.0.1) (2018-12-07)


### Bug Fixes

* update react-testing documentation paths ([#230](https://github.com/zendeskgarden/react-components/issues/230)) ([da84fbc](https://github.com/zendeskgarden/react-components/commit/da84fbc))





# [2.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.2.1...@zendeskgarden/react-testing@2.0.0) (2018-12-07)


### Features

* refactor matchExports to getExports ([#228](https://github.com/zendeskgarden/react-components/issues/228)) ([7280879](https://github.com/zendeskgarden/react-components/commit/7280879))


### BREAKING CHANGES

* The `@zendeskgarden/react-testing` utility `matchExports` has been refactored to `getExports`.

This utility no longer applies any assertions.





## [1.2.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.2.0...@zendeskgarden/react-testing@1.2.1) (2018-12-06)


### Bug Fixes

* update react-testing docs to pass build ([#226](https://github.com/zendeskgarden/react-components/issues/226)) ([9782ccf](https://github.com/zendeskgarden/react-components/commit/9782ccf))





# [1.2.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.1.3...@zendeskgarden/react-testing@1.2.0) (2018-12-06)


### Features

* add matchExports testing utility ([#225](https://github.com/zendeskgarden/react-components/issues/225)) ([8666052](https://github.com/zendeskgarden/react-components/commit/8666052))





## [1.1.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.1.2...@zendeskgarden/react-testing@1.1.3) (2018-12-05)

**Note:** Version bump only for package @zendeskgarden/react-testing





## [1.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.1.1...@zendeskgarden/react-testing@1.1.2) (2018-12-04)

**Note:** Version bump only for package @zendeskgarden/react-testing





<a name="1.1.1"></a>
## [1.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.1.0...@zendeskgarden/react-testing@1.1.1) (2018-10-08)


### Bug Fixes

* **testing:** fix enzyme options passing ([#175](https://github.com/zendeskgarden/react-components/issues/175)) ([6cb703c](https://github.com/zendeskgarden/react-components/commit/6cb703c))





<a name="1.0.5"></a>
## [1.0.5](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.0.4...@zendeskgarden/react-testing@1.0.5) (2018-08-17)

**Note:** Version bump only for package @zendeskgarden/react-testing





<a name="1.0.4"></a>
## [1.0.4](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.0.3...@zendeskgarden/react-testing@1.0.4) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/react-testing

      <a name="1.0.3"></a>
## [1.0.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.0.2...@zendeskgarden/react-testing@1.0.3) (2018-07-17)




**Note:** Version bump only for package @zendeskgarden/react-testing

<a name="1.0.2"></a>
## [1.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.0.1...@zendeskgarden/react-testing@1.0.2) (2018-07-04)




**Note:** Version bump only for package @zendeskgarden/react-testing

<a name="1.0.1"></a>
## [1.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@1.0.0...@zendeskgarden/react-testing@1.0.1) (2018-06-26)


### Bug Fixes

* **dependencies:** update react-theming peerDependency for all packages ([#46](https://github.com/zendeskgarden/react-components/issues/46)) ([1d0a43b](https://github.com/zendeskgarden/react-components/commit/1d0a43b))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@0.1.2...@zendeskgarden/react-testing@1.0.0) (2018-06-25)


### Bug Fixes

* **theming:** Remove StyleSheetManager from ThemeProvider ([#45](https://github.com/zendeskgarden/react-components/issues/45)) ([1433883](https://github.com/zendeskgarden/react-components/commit/1433883)), closes [#24](https://github.com/zendeskgarden/react-components/issues/24)


### BREAKING CHANGES

* **theming:** The `target` prop on `ThemeProvider` has been removed. In order to do do the same thing that the `target` prop offered you'll need to do the following change:

```
// Old use of `target` prop
<ThemeProvider target={document.body} />
```

The new way is to import the `StyleSheetManager` directly from `styled-components` and wrap that around the `ThemeProvider`

```
// New way to change the location of where styled component css is injected
import { StyleSheetManager } from 'styled-components';

<StyleSheetManager target={document.body}>	
<ThemeProvider />
</StyleSheetManager>
```

This change will also help with SSR and specifically use in next.js.




<a name="0.1.2"></a>
## [0.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@0.1.1...@zendeskgarden/react-testing@0.1.2) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-testing

<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-testing@0.1.0...@zendeskgarden/react-testing@0.1.1) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-testing

<a name="0.1.0"></a>
# 0.1.0 (2018-06-11)


### Features

* **testing:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-testing utilities package ([#34](https://github.com/zendeskgarden/react-components/issues/34)) ([678e3c4](https://github.com/zendeskgarden/react-components/commit/678e3c4))
* **testing:** introduce the [@zendeskgarden](https://github.com/zendeskgarden)/react-testing package ([#36](https://github.com/zendeskgarden/react-components/issues/36)) ([ee884e0](https://github.com/zendeskgarden/react-components/commit/ee884e0))
