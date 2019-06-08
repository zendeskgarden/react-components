# Changelog

> **Tags:**
> - :boom: Breaking Change
> - :rocket: New Feature
> - :bug: Bug Fix
> - :memo: Documentation
> - :seedling: Internal

_Note: Gaps between patch versions are faulty, broken or test releases._

<!-- DO NOT MODIFY BELOW THIS COMMENT -->
<!-- insert-new-changelog-here -->

## v6.0.0 (2019-06-07)

#### :boom: Breaking Change
* `all packages`
  * [#342](https://github.com/zendeskgarden/react-components/pull/342) BREAKING CHANGE: upgrade to React@v16.8 and styled-components@v4 ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `all packages`
  * [#344](https://github.com/zendeskgarden/react-components/pull/344) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `other`
  * [#349](https://github.com/zendeskgarden/react-components/pull/349) chore(deps): update dependency react-testing-library to v8 ([@renovate[bot]](https://github.com/apps/renovate))
* `all packages`
  * [#353](https://github.com/zendeskgarden/react-components/pull/353) chore(lerna): update versioning flow ([@austin94](https://github.com/austin94))

### Breaking Change Details

#### New versioning strategy

- Garden React packages are now published under a shared, fixed (common major) version number
- You are still able to upgrade packages individually
- This change will help us better communicate changes and allows consumers to better understand the state of their dependencies
- This is the first release under the new versioning strategy, **v6.0.0**

#### New Peer Dependencies

From **v6.0.0** all Garden React libraries now require the following peer dependencies:

```bash
react@^16.8.0
react-dom@^16.8.0
styled-components@^4.2.0
@zendeskgarden/react-theming@^6.0.0
```

[React v16 upgrade docs](https://reactjs.org/blog/2017/09/26/react-v16.0.html)
[styled-components v4 upgrade docs](https://www.styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4)

Beginning with v4, styled-components now uses the [React.forwardRef](https://reactjs.org/docs/react-api.html#reactforwardref) API.

This means that all existing `innerRef`, `menuRef`, `buttonRef`, etc. props are now replaced with `ref`.

#### How to upgrade

1. Upgrade `react` and `react-dom` to `latest`
2. Upgrade all Garden dependencies to their most recent, pre v6 versions
3. Upgrade styled-components and all Garden dependencies to `latest`
  1. Correct all `innerRef`, `buttonRef`, `menuRef`, etc. usages based on the [styled-components v4 upgrade docs](https://www.styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4)

If you have any upgrade questions please [create an issue](https://github.com/zendeskgarden/react-components/issues).
