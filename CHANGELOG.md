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

## v6.8.0 (2019-10-09)

#### :rocket: New Feature
* `forms`, `loaders`, `ranges`, `typography`
  * [#463](https://github.com/zendeskgarden/react-components/pull/463) feat(forms): deprecate react-ranges and migrate components to react-forms ([@austin94](https://github.com/austin94))
* `loaders`
  * [#468](https://github.com/zendeskgarden/react-components/pull/468) feat(loaders): introduce Progress component ([@sunesimonsen](https://github.com/sunesimonsen))

#### :seedling: Internal
* `modals`, `pagination`, `tables`, `tags`
  * [#479](https://github.com/zendeskgarden/react-components/pull/479) chore(selection): remove usages of react-selection KEY_CODES and composeEventHandlers ([@austin94](https://github.com/austin94))

## v6.7.1 (2019-10-03)

#### :seedling: Internal
* Other
  * [#478](https://github.com/zendeskgarden/react-components/pull/478) fix(build): revert react-docgen-typescript upgrade ([@austin94](https://github.com/austin94))
* `chrome`, `loaders`
  * [#469](https://github.com/zendeskgarden/react-components/pull/469) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `menus`, `utilities`
  * [#471](https://github.com/zendeskgarden/react-components/pull/471) chore(deps): update dependency @zendeskgarden/eslint-config to v10 ([@renovate[bot]](https://github.com/apps/renovate))
* `autocomplete`, `breadcrumbs`, `buttons`, `checkboxes`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `menus`, `modals`, `notifications`, `pagination`, `radios`, `ranges`, `tables`, `tabs`, `tags`, `textfields`, `toggles`, `tooltips`, `typography`
  * [#470](https://github.com/zendeskgarden/react-components/pull/470) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v6.7.0 (2019-09-25)

#### :construction: Deprecations
* `react-chrome`
  * `AccordionContainer`
    * Migrate to [@zendeskgarden/container-accordion](https://www.npmjs.com/package/@zendeskgarden/container-accordion)
* `react-buttons`
  * `ButtonGroupContainer`
    * Migrate to [@zendeskgarden/container-buttongroup](https://www.npmjs.com/package/@zendeskgarden/container-buttongroup)

#### :rocket: New Feature
* `chrome`
  * [#461](https://github.com/zendeskgarden/react-components/pull/461) feat(chrome): deprecate AccordionContainer ([@austin94](https://github.com/austin94))
* `autocomplete`, `buttons`, `menus`, `tabs`
  * [#460](https://github.com/zendeskgarden/react-components/pull/460) feat(buttons): deprecate ButtonGroupContainer ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `avatars`
  * [#464](https://github.com/zendeskgarden/react-components/pull/464) fix(avatars): prevent badge `content-box` sizing overrides ([@jzempel](https://github.com/jzempel))
* `modals`
  * [#459](https://github.com/zendeskgarden/react-components/pull/459) fix(modals): allow Modal to receive ref prop ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#466](https://github.com/zendeskgarden/react-components/pull/466) chore: update renovate schedule ([@jzempel](https://github.com/jzempel))
* [#455](https://github.com/zendeskgarden/react-components/pull/455) chore(deps): update dependency stylelint to v11 ([@renovate[bot]](https://github.com/apps/renovate))
* [#458](https://github.com/zendeskgarden/react-components/pull/458) chore: update renovate configuration ([@jzempel](https://github.com/jzempel))

## v6.6.0 (2019-09-18)

#### :construction: Deprecations
* `react-modals`
  * `FocusJailContainer`
    * Migrate to [@zendeskgarden/container-focusjail](https://www.npmjs.com/package/@zendeskgarden/container-focusjail)
  * `ModalContainer`
    * Migrate to [@zendeskgarden/container-modal](https://www.npmjs.com/package/@zendeskgarden/container-modal)

#### :rocket: New Feature
* `dropdowns`
  * [#439](https://github.com/zendeskgarden/react-components/pull/439) feat(dropdowns): introduce Multiselect component ([@austin94](https://github.com/austin94))
* `autocomplete`, `menus`, `modals`, `select`
  * [#456](https://github.com/zendeskgarden/react-components/pull/456) feat(modals): deprecate FocusJailContainer and ModalContainer ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#454](https://github.com/zendeskgarden/react-components/pull/454) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v6.5.0 (2019-09-13)

#### Deprecations

Beginning in this release we are deprecating our internal render-prop containers in favor
of our [react-containers](https://github.com/zendeskgarden/react-containers) package.

All render-props will be removed in the next major release.

* `react-pagination`
  * `PaginationContainer`
    * Migrate to [@zendeskgarden/container-pagination](https://www.npmjs.com/package/@zendeskgarden/container-pagination)
* `react-tooltips`
  * `TooltipContainer`
    * Migrate to [@zendeskgarden/container-tooltip](https://www.npmjs.com/package/@zendeskgarden/container-tooltip)
* `react-tabs`
  * `TabsContainer`
    * Migrate to [@zendeskgarden/container-tabs](https://www.npmjs.com/package/@zendeskgarden/container-tabs)
* `react-breadcrumbs`
  * `BreadcrumbContainer`
    * Migrate to [@zendeskgarden/container-breadcrumb](https://www.npmjs.com/package/@zendeskgarden/container-breadcrumb)

#### :rocket: New Feature
* `datepickers`, `dropdowns`, `forms`, `pagination`, `tabs`, `tooltips`
  * [#453](https://github.com/zendeskgarden/react-components/pull/453) feat(pagination): deprecate PaginationContainer and migrate to container-pagination ([@austin94](https://github.com/austin94))
* `autocomplete`, `menus`, `select`, `tooltips`
  * [#451](https://github.com/zendeskgarden/react-components/pull/451) feat(tooltips): deprecate TooltipContainer and migrate to useTooltip ([@austin94](https://github.com/austin94))
* `.template`, `breadcrumbs`, `tabs`
  * [#448](https://github.com/zendeskgarden/react-components/pull/448) feat(tabs): deprecate TabsContainer component ([@austin94](https://github.com/austin94))
* `breadcrumbs`
  * [#444](https://github.com/zendeskgarden/react-components/pull/444) feat(breadcrumbs): deprecate BreadcrumbContainer and migrate to useBreadcrumb() container ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `dropdowns`
  * [#447](https://github.com/zendeskgarden/react-components/pull/447) fix(dropdowns): Fix invalid ARIA role ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* `autocomplete`, `avatars`, `breadcrumbs`, `buttons`, `checkboxes`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `menus`, `modals`, `notifications`, `pagination`, `radios`, `ranges`, `select`, `selection`, `tables`, `tabs`, `tags`, `textfields`, `theming`, `toggles`, `tooltips`, `typography`, `utilities`
  * [#449](https://github.com/zendeskgarden/react-components/pull/449) chore(build): add bundleSize check to all packages ([@austin94](https://github.com/austin94))
* `datepickers`, `dropdowns`
  * [#418](https://github.com/zendeskgarden/react-components/pull/418) chore(deps): update typescript-eslint monorepo to v2 (major) ([@renovate[bot]](https://github.com/apps/renovate))
* `autocomplete`, `buttons`, `checkboxes`, `dropdowns`, `loaders`, `radios`, `select`, `tables`, `tabs`, `toggles`
  * [#446](https://github.com/zendeskgarden/react-components/pull/446) chore(deps): update dependency @zendeskgarden/eslint-config to v9 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#445](https://github.com/zendeskgarden/react-components/pull/445) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#438](https://github.com/zendeskgarden/react-components/pull/438) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#433](https://github.com/zendeskgarden/react-components/pull/433) chore(deps): bump eslint-utils from 1.3.1 to 1.4.2 in /examples/codesandbox/garden-create-react-app ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#437](https://github.com/zendeskgarden/react-components/pull/437) fix(test): mock scrollTo dom-helper utility in tests ([@austin94](https://github.com/austin94))

## v6.4.4 (2019-08-27)

#### :bug: Bug Fix
* `chrome`
  * [#416](https://github.com/zendeskgarden/react-components/pull/416) chore(deps): update css-chrome dependency to correct Chrome overflow issue ([@renovate[bot]](https://github.com/apps/renovate))

#### :memo: Documentation
* `modals`
  * [#434](https://github.com/zendeskgarden/react-components/pull/434) fix(modals): documentation typo ([@sunesimonsen](https://github.com/sunesimonsen))
  * [#435](https://github.com/zendeskgarden/react-components/pull/435) fix(modals): missing import from react-modals documentation ([@sunesimonsen](https://github.com/sunesimonsen))

#### :seedling: Internal
* Other
  * [#430](https://github.com/zendeskgarden/react-components/pull/430) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#429](https://github.com/zendeskgarden/react-components/pull/429) chore(deps): update dependency eslint-loader to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#428](https://github.com/zendeskgarden/react-components/pull/428) chore(deps): update dependency inquirer to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#426](https://github.com/zendeskgarden/react-components/pull/426) chore(deps): update dependency @zendeskgarden/eslint-config to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#417](https://github.com/zendeskgarden/react-components/pull/417) chore(deps): update dependency rimraf to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#427](https://github.com/zendeskgarden/react-components/pull/427) chore(deps): update dependency eslint-plugin-react-hooks to v2 ([@renovate[bot]](https://github.com/apps/renovate))
* `avatars`, `breadcrumbs`, `buttons`, `checkboxes`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `menus`, `modals`, `notifications`, `pagination`, `radios`, `ranges`, `tables`, `tabs`, `tags`, `textfields`, `toggles`, `tooltips`
  * [#416](https://github.com/zendeskgarden/react-components/pull/416) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v6.4.3 (2019-08-23)

#### :bug: Bug Fix
* `datepickers`
  * [#415](https://github.com/zendeskgarden/react-components/pull/415) fix(datepicker): correct minValue and maxValue displays and allow same date selection within Range ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `theming`
  * [#421](https://github.com/zendeskgarden/react-components/pull/421) docs: correct react-theming peer dependencies ([@vhiairrassary](https://github.com/vhiairrassary))
* `forms`
  * [#422](https://github.com/zendeskgarden/react-components/pull/422) docs(forms): Checkbox example in forms is throwing ([@ryanseddon](https://github.com/ryanseddon))

## v6.4.2 (2019-08-16)

#### :bug: Bug Fix
* `dropdowns`
  * [#414](https://github.com/zendeskgarden/react-components/pull/414) fix(dropdowns): persist cursor location in Autocomplete ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#407](https://github.com/zendeskgarden/react-components/pull/407) chore(deps): update dependency commander to v3 ([@renovate[bot]](https://github.com/apps/renovate))
* [#405](https://github.com/zendeskgarden/react-components/pull/405) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* [#406](https://github.com/zendeskgarden/react-components/pull/406) chore(deps): update dependency @testing-library/react to v9 ([@renovate[bot]](https://github.com/apps/renovate))

## v6.4.1 (2019-08-12)

#### :bug: Bug Fix
* `datepickers`
  * [#409](https://github.com/zendeskgarden/react-components/pull/409) fix(build): correct prettier error to allow release ([@austin94](https://github.com/austin94))

## v6.4.0 (2019-08-12)

#### :rocket: New Feature
* `datepickers`
  * [#397](https://github.com/zendeskgarden/react-components/pull/397)  feat(datepickers): introduce DatepickerRange component ([@austin94](https://github.com/austin94))
  * [#397](https://github.com/zendeskgarden/react-components/pull/397) Apply a default locale of `en-US` to all datepickers to align with default browser date parsing.

## v6.3.2 (2019-08-05)

#### :bug: Bug Fix
* `dropdowns`
  * [#402](https://github.com/zendeskgarden/react-components/pull/402) feat(Menu/Items/Item): change Item 'value' requirement to be inclusive of 0 ([@chungkikelly](https://github.com/chungkikelly))

#### :seedling: Internal
* [#400](https://github.com/zendeskgarden/react-components/pull/400) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v6.3.1 (2019-08-02)

#### :bug: Bug Fix
* `buttons`
  * [#398](https://github.com/zendeskgarden/react-components/pull/398) fix(buttons): white-space/word-wrap styling in the Anchor component ([@luis-almeida](https://github.com/luis-almeida))
  * [#396](https://github.com/zendeskgarden/react-components/pull/396) fix(buttons): allow correct ref validation in PropTypes ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `dropdowns`
  * [#394](https://github.com/zendeskgarden/react-components/pull/394) Update autocomplete dropdown example due to google translate issue ([@KaiminHuang](https://github.com/KaiminHuang))
* `datepickers`
  * [#393](https://github.com/zendeskgarden/react-components/pull/393) chore(datepicker): update examples to include correct localization names ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* Other
  * [#395](https://github.com/zendeskgarden/react-components/pull/395) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `avatars`, `breadcrumbs`, `buttons`, `checkboxes`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `menus`, `modals`, `notifications`, `pagination`, `radios`, `ranges`, `tables`, `tabs`, `tags`, `textfields`, `toggles`, `tooltips`
  * [#392](https://github.com/zendeskgarden/react-components/pull/392) chore(deps): update all development non-major dependencies ([@renovate[bot]](https://github.com/apps/renovate))

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
