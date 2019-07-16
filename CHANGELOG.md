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

## v6.3.0 (2019-07-16)

#### :rocket: New Feature
* `typography`
  * [#388](https://github.com/zendeskgarden/react-components/pull/388) feat(typography): add `List` component ([@jzempel](https://github.com/jzempel))
* `dropdowns`
  * [#387](https://github.com/zendeskgarden/react-components/pull/387) feat(dropdowns): export resetIdCounter to allow SSR ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `dropdowns`
  * [#391](https://github.com/zendeskgarden/react-components/pull/391) fix(dropdowns): allow previous item selection with arrow key ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#389](https://github.com/zendeskgarden/react-components/pull/389) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* [#390](https://github.com/zendeskgarden/react-components/pull/390) chore(deps): update dependency jest-dom to v4 ([@renovate[bot]](https://github.com/apps/renovate))

## v6.2.1 (2019-07-11)

#### :bug: Bug Fix
* `dropdowns`
  * [#386](https://github.com/zendeskgarden/react-components/pull/386) fix(dropdowns): remove webkit button styling when used with css-bedrock ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `tables`
  * [#382](https://github.com/zendeskgarden/react-components/pull/382) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#383](https://github.com/zendeskgarden/react-components/pull/383) chore(deps): update dependency husky to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#384](https://github.com/zendeskgarden/react-components/pull/384) chore(deps): update dependency lint-staged to v9 ([@renovate[bot]](https://github.com/apps/renovate))

## v6.2.0 (2019-07-03)

#### :rocket: New Feature
* `datepickers`
  * [#373](https://github.com/zendeskgarden/react-components/pull/373) feat(datepickers): introduce Datepicker component ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `notifications`
  * [#379](https://github.com/zendeskgarden/react-components/pull/379) fix(notifications): show correct Notification and Alert styling ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* Other
  * [#377](https://github.com/zendeskgarden/react-components/pull/377) chore(deps): update dependency eslint-config-prettier to v6 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#376](https://github.com/zendeskgarden/react-components/pull/376) chore(deps): update dependency eslint to v6 ([@renovate[bot]](https://github.com/apps/renovate))
* `dropdowns`
  * [#374](https://github.com/zendeskgarden/react-components/pull/374) chore(deps): pin dependency @types/lodash.debounce to 4.0.6 ([@renovate[bot]](https://github.com/apps/renovate))
* `breadcrumbs`, `buttons`, `checkboxes`, `chrome`, `dropdowns`, `forms`, `grid`, `menus`, `modals`, `notifications`, `pagination`, `radios`, `ranges`, `tables`, `tabs`, `tags`, `textfields`, `toggles`, `tooltips`
  * [#375](https://github.com/zendeskgarden/react-components/pull/375) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v6.1.0 (2019-06-26)

#### :rocket: New Feature
* `dropdowns`, `notifications`
  * [#371](https://github.com/zendeskgarden/react-components/pull/371)  feat(dropdowns): migrate react-dropdowns to Typescript ([@austin94](https://github.com/austin94))

##### Typescript Support

The `dropdowns` package is now written in [Typescript](https://www.typescriptlang.org/). The API has
not been changed, but Type definitions are now included with the package.

If you are not using Typescript in your development environment you will still benefit from
improved autocompletion and documentation in certain IDEs and editors like VSCode.

## v6.0.3 (2019-06-20)

#### :bug: Bug Fix
* `avatars`
  * [#368](https://github.com/zendeskgarden/react-components/pull/368) fix(avatars): display badge status whenever badge data exists ([@jzempel](https://github.com/jzempel))

## v6.0.2 (2019-06-14)

#### :bug: Bug Fix
* `buttons`
  * [#366](https://github.com/zendeskgarden/react-components/pull/366) fix(buttons): Pass className to <Icon /> ([@giacomorebonato](https://github.com/giacomorebonato))
* `avatars`
  * [#363](https://github.com/zendeskgarden/react-components/pull/363) fix(avatars): update avatar CSS for badge animation ([@jzempel](https://github.com/jzempel))
* Other
  * [#361](https://github.com/zendeskgarden/react-components/pull/361) fix(build): add tag fetching to process ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* [#364](https://github.com/zendeskgarden/react-components/pull/364) chore(demo): add `react-containers` link + deprecated packages section ([@jzempel](https://github.com/jzempel))
* [#362](https://github.com/zendeskgarden/react-components/pull/362) chore: add versioning documentation ([@jzempel](https://github.com/jzempel))

## v6.0.1 (2019-06-10)

#### :bug: Bug Fix
* `pagination`
  * [#358](https://github.com/zendeskgarden/react-components/pull/358) fix(pagination): update peerDependencies to match other packages ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `tables`
  * [#360](https://github.com/zendeskgarden/react-components/pull/360) fix(tables): adjust paginated example cell width to accommodate small-sized avatar ([@jzempel](https://github.com/jzempel))
* Other
  * [#357](https://github.com/zendeskgarden/react-components/pull/357) chore(docs): add create-react-app codesandbox example ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#359](https://github.com/zendeskgarden/react-components/pull/359) chore(lint): ensure that no unsafe lifecycle events are used ([@austin94](https://github.com/austin94))
* [#355](https://github.com/zendeskgarden/react-components/pull/355) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* [#356](https://github.com/zendeskgarden/react-components/pull/356) fix(publish): allow version flow to push changelog correctly ([@austin94](https://github.com/austin94))

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

#### New peer dependencies

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

#### Pre v6 changelogs

[react-autocomplete](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/autocomplete/CHANGELOG.md),
[react-avatars](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/avatars/CHANGELOG.md),
[react-breadcrumbs](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/breadcrumbs/CHANGELOG.md),
[react-buttons](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/buttons/CHANGELOG.md),
[react-checkboxes](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/checkboxes/CHANGELOG.md),
[react-chrome](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/chrome/CHANGELOG.md),
[react-dropdowns](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/dropdowns/CHANGELOG.md),
[react-forms](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/forms/CHANGELOG.md),
[react-grid](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/grid/CHANGELOG.md),
[react-loaders](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/loaders/CHANGELOG.md),
[react-menus](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/menus/CHANGELOG.md),
[react-modals](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/modals/CHANGELOG.md),
[react-notifications](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/notifications/CHANGELOG.md),
[react-pagination](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/pagination/CHANGELOG.md),
[react-radios](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/radios/CHANGELOG.md),
[react-ranges](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/ranges/CHANGELOG.md),
[react-select](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/select/CHANGELOG.md),
[react-selection](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/selection/CHANGELOG.md),
[react-tables](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/tables/CHANGELOG.md),
[react-tabs](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/tabs/CHANGELOG.md),
[react-tags](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/tags/CHANGELOG.md),
[react-testing](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/testing/CHANGELOG.md),
[react-textfields](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/textfields/CHANGELOG.md),
[react-theming](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/theming/CHANGELOG.md),
[react-toggles](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/toggles/CHANGELOG.md),
[react-tooltips](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/tooltips/CHANGELOG.md),
[react-typography](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/typography/CHANGELOG.md),
[react-utilities](https://github.com/zendeskgarden/react-components/blob/930d97a0c923a98aa821a475c2557ceda22bec2c/packages/utilities/CHANGELOG.md)
