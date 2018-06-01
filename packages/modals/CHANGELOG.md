# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-modals@3.0.1...@zendeskgarden/react-modals@3.0.2) (2018-05-29)




**Note:** Version bump only for package @zendeskgarden/react-modals

<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-modals@3.0.0...@zendeskgarden/react-modals@3.0.1) (2018-05-15)


### Bug Fixes

* **docs:** update all code examples to be mobile-responsive ([#14](https://github.com/zendeskgarden/react-components/issues/14)) ([ae68190](https://github.com/zendeskgarden/react-components/commit/ae68190))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-modals@2.0.0...@zendeskgarden/react-modals@3.0.0) (2018-05-09)


### Features

* **accessibility:** add WCAG 2.0 AA compliant color palette  ([#5](https://github.com/zendeskgarden/react-components/issues/5)) ([29f30d1](https://github.com/zendeskgarden/react-components/commit/29f30d1))


### BREAKING CHANGES

* **accessibility:** This accessible palette update is a breaking visual change. You should validate that any usages are correct in relation to other areas of your application. 

There are also API changes for `Avatar` and `Tooltip`:
* Avatar - we have removed the `isActive`, `isIn`, and `isOut` props and standardized on a single `disabled` prop.
* Tooltip - we have added a new `Paragraph` component and updated the styling of `Title`




<a name="2.0.0"></a>
# 2.0.0 (2018-05-09)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#4](https://github.com/zendeskgarden/react-components/issues/4)) ([61b05a3](https://github.com/zendeskgarden/react-components/commit/61b05a3))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="1.1.4"></a>
## [1.1.4](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.1.3...@zendesk/garden-react-modals@1.1.4) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.1.3"></a>
## [1.1.3](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.1.2...@zendesk/garden-react-modals@1.1.3) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.1.2"></a>
## [1.1.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.1.1...@zendesk/garden-react-modals@1.1.2) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.1.1"></a>
## [1.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.1.0...@zendesk/garden-react-modals@1.1.1) (2018-04-25)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.1.0"></a>
# [1.1.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.0.2...@zendesk/garden-react-modals@1.1.0) (2018-04-24)


### Features

* **modals:** add focusOnMount customization to FocusJailContainer ([#549](https://github.com/zendeskgarden/react-components/issues/549)) ([14bd472](https://github.com/zendeskgarden/react-components/commit/14bd472))




<a name="1.0.2"></a>
## [1.0.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.0.1...@zendesk/garden-react-modals@1.0.2) (2018-04-24)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.0.1"></a>
## [1.0.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@1.0.0...@zendesk/garden-react-modals@1.0.1) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@0.2.1...@zendesk/garden-react-modals@1.0.0) (2018-04-17)


### Features

* **modals:** move FocusJailContainer ref to separate prop ([#545](https://github.com/zendeskgarden/react-components/issues/545)) ([0343f8b](https://github.com/zendeskgarden/react-components/commit/0343f8b))


### BREAKING CHANGES

* **modals:** Moves ref allocation within the `FocusJailContainer` and `ModalContainer` components to it's own property rather than using the `refKey` pattern. 

If you do not use this new property rendering will be blocked by an an accessibility error being thrown.




<a name="0.2.1"></a>
## [0.2.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@0.2.0...@zendesk/garden-react-modals@0.2.1) (2018-04-17)




**Note:** Version bump only for package @zendesk/garden-react-modals

<a name="0.2.0"></a>
# [0.2.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-modals@0.1.0...@zendesk/garden-react-modals@0.2.0) (2018-04-12)


### Features

* **theming:** add support to change target of styled-components CSS ([#542](https://github.com/zendeskgarden/react-components/issues/542)) ([f0bf138](https://github.com/zendeskgarden/react-components/commit/f0bf138))




<a name="0.1.0"></a>
# 0.1.0 (2018-04-02)


### Features

* **modals:** introduce [@zendesk](https://github.com/zendesk)/garden-react-modals package ([#532](https://github.com/zendeskgarden/react-components/issues/532)) ([cab7a19](https://github.com/zendeskgarden/react-components/commit/cab7a19))
