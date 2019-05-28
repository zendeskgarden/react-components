# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.2.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.2.1...@zendeskgarden/react-theming@3.2.2) (2019-05-28)


### Features

* add matchExports testing utility ([#225](https://github.com/zendeskgarden/react-components/issues/225)) ([8666052](https://github.com/zendeskgarden/react-components/commit/8666052))
* refactor matchExports to getExports ([#228](https://github.com/zendeskgarden/react-components/issues/228)) ([7280879](https://github.com/zendeskgarden/react-components/commit/7280879))


### BREAKING CHANGES

* The `@zendeskgarden/react-testing` utility `matchExports` has been refactored to `getExports`.

This utility no longer applies any assertions.





## [3.2.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.2.0...@zendeskgarden/react-theming@3.2.1) (2018-12-05)

**Note:** Version bump only for package @zendeskgarden/react-theming





# [3.2.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.1.3...@zendeskgarden/react-theming@3.2.0) (2018-12-04)


### Features

* **docs:** Improve theming docs ([#195](https://github.com/zendeskgarden/react-components/issues/195)) ([7e57c47](https://github.com/zendeskgarden/react-components/commit/7e57c47))





<a name="3.1.3"></a>
## [3.1.3](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.1.2...@zendeskgarden/react-theming@3.1.3) (2018-08-17)

**Note:** Version bump only for package @zendeskgarden/react-theming





<a name="3.1.2"></a>
## [3.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.1.1...@zendeskgarden/react-theming@3.1.2) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/react-theming

  <a name="3.1.1"></a>
## [3.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.1.0...@zendeskgarden/react-theming@3.1.1) (2018-07-17)


### Bug Fixes

* **autocomplete|menus|selection|theming:** guard against `getDocument` being undefined. ([#56](https://github.com/zendeskgarden/react-components/issues/56)) ([160fc06](https://github.com/zendeskgarden/react-components/commit/160fc06))




<a name="3.1.0"></a>
# [3.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@3.0.0...@zendeskgarden/react-theming@3.1.0) (2018-07-04)


### Features

* **theming:** Add a document prop and getDocument util to help with iframes ([#49](https://github.com/zendeskgarden/react-components/issues/49)) ([1a67f43](https://github.com/zendeskgarden/react-components/commit/1a67f43))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@2.1.1...@zendeskgarden/react-theming@3.0.0) (2018-06-25)


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




<a name="2.1.1"></a>
## [2.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@2.1.0...@zendeskgarden/react-theming@2.1.1) (2018-06-14)




**Note:** Version bump only for package @zendeskgarden/react-theming

<a name="2.1.0"></a>
# [2.1.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-theming@2.0.2...@zendeskgarden/react-theming@2.1.0) (2018-06-11)


### Features

* **testing:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-testing utilities package ([#34](https://github.com/zendeskgarden/react-components/issues/34)) ([678e3c4](https://github.com/zendeskgarden/react-components/commit/678e3c4))
* **testing:** introduce the [@zendeskgarden](https://github.com/zendeskgarden)/react-testing package ([#36](https://github.com/zendeskgarden/react-components/issues/36)) ([ee884e0](https://github.com/zendeskgarden/react-components/commit/ee884e0))




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
