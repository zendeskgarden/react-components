# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-grid@0.1.2...@zendeskgarden/react-grid@1.0.0) (2018-06-02)


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




<a name="0.1.2"></a>
## [0.1.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-grid@0.1.1...@zendeskgarden/react-grid@0.1.2) (2018-06-01)


### Bug Fixes

* **grid:** update CSS dependency to remove global styling ([#25](https://github.com/zendeskgarden/react-components/issues/25)) ([b6fb8f4](https://github.com/zendeskgarden/react-components/commit/b6fb8f4))




<a name="0.1.1"></a>
## [0.1.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-grid@0.1.0...@zendeskgarden/react-grid@0.1.1) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="0.1.0"></a>
# 0.1.0 (2018-05-15)


### Features

* **grid:** introduce [@zendeskgarden](https://github.com/zendeskgarden)/react-grid package ([#13](https://github.com/zendeskgarden/react-components/issues/13)) ([6413da8](https://github.com/zendeskgarden/react-components/commit/6413da8))
