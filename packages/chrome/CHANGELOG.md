# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/react-components/compare/@zendeskgarden/react-chrome@2.0.0...@zendeskgarden/react-chrome@3.0.0) (2018-05-09)


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




<a name="1.1.5"></a>
## [1.1.5](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.1.4...@zendesk/garden-react-chrome@1.1.5) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-chrome

<a name="1.1.4"></a>
## [1.1.4](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.1.3...@zendesk/garden-react-chrome@1.1.4) (2018-05-07)




**Note:** Version bump only for package @zendesk/garden-react-chrome

<a name="1.1.3"></a>
## [1.1.3](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.1.2...@zendesk/garden-react-chrome@1.1.3) (2018-04-24)




**Note:** Version bump only for package @zendesk/garden-react-chrome

<a name="1.1.2"></a>
## [1.1.2](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.1.1...@zendesk/garden-react-chrome@1.1.2) (2018-04-18)




**Note:** Version bump only for package @zendesk/garden-react-chrome

<a name="1.1.1"></a>
## [1.1.1](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.1.0...@zendesk/garden-react-chrome@1.1.1) (2018-04-17)




**Note:** Version bump only for package @zendesk/garden-react-chrome

<a name="1.1.0"></a>
# [1.1.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@1.0.0...@zendesk/garden-react-chrome@1.1.0) (2018-04-12)


### Features

* **theming:** add support to change target of styled-components CSS ([#542](https://github.com/zendeskgarden/react-components/issues/542)) ([f0bf138](https://github.com/zendeskgarden/react-components/commit/f0bf138))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/zendeskgarden/react-components/compare/@zendesk/garden-react-chrome@0.1.0...@zendesk/garden-react-chrome@1.0.0) (2018-04-03)


### Bug Fixes

* **chrome:** correct HeaderItemText default export ([#535](https://github.com/zendeskgarden/react-components/issues/535)) ([34f5318](https://github.com/zendeskgarden/react-components/commit/34f5318))


### BREAKING CHANGES

* **chrome:** the `headerItemText` default export is now `HeaderItemText`




<a name="0.1.0"></a>
# 0.1.0 (2018-04-02)


### Features

* **chrome:** introduce [@zendesk](https://github.com/zendesk)/garden-react-chrome package ([#499](https://github.com/zendeskgarden/react-components/issues/499)) ([aa074f9](https://github.com/zendeskgarden/react-components/commit/aa074f9))
