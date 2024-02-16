# Changelog

> **Tags:**
>
> - :boom: Breaking Change
> - :rocket: New Feature
> - :bug: Bug Fix
> - :memo: Documentation
> - :seedling: Internal

_Note: Gaps between patch versions are faulty, broken or test releases._

<!-- DO NOT MODIFY BELOW THIS COMMENT -->
<!-- insert-new-changelog-here -->

## v9.0.0-next.1 (2024-02-08)

#### :boom: Breaking Change
* Other
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1703](https://github.com/zendeskgarden/react-components/pull/1703) feat: bump peer dep styled-components to v5.1.0 minimum ([@geotrev](https://github.com/geotrev))
* `theming`
  * [#1702](https://github.com/zendeskgarden/react-components/pull/1702) feat: removes isRtl and getDocument helpers from @zendeskgarden/react-theming ([@geotrev](https://github.com/geotrev))
* `utilities`
  * [#1700](https://github.com/zendeskgarden/react-components/pull/1700) feat: removes @zendeskgarden/react-utilities ([@geotrev](https://github.com/geotrev))

#### :rocket: New Feature
* Other
* `theming`
  * [#1704](https://github.com/zendeskgarden/react-components/pull/1704) feat(theming): add arrow/menu position and floating placement utilities ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* Other
  * [#1706](https://github.com/zendeskgarden/react-components/pull/1706) chore: fix corrupt `package-lock.json` ([@jzempel](https://github.com/jzempel))
* `dropdowns.next`
  * [#1705](https://github.com/zendeskgarden/react-components/pull/1705) fix(combobox): prevent controlled input cursor jump ([@jzempel](https://github.com/jzempel))
  * [#1699](https://github.com/zendeskgarden/react-components/pull/1699) fix(combobox): prevent disabled combobox from swapping static/input values on click ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* [#1698](https://github.com/zendeskgarden/react-components/pull/1698) chore: configure `next` branch ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.0 (2024-02-06)

#### :memo: Documentation

- [#1696](https://github.com/zendeskgarden/react-components/pull/1696) chore(docs): split up CHANGELOG by major version ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal

- Other
  - [#1701](https://github.com/zendeskgarden/react-components/pull/1701) chore(scripts): fix `tag` to release on `next` branch ([@jzempel](https://github.com/jzempel))
  - [#1698](https://github.com/zendeskgarden/react-components/pull/1698) chore: configure `next` branch ([@jzempel](https://github.com/jzempel))
  - [#1697](https://github.com/zendeskgarden/react-components/pull/1697) chore: fix config to support `next` prerelease ([@jzempel](https://github.com/jzempel))
  - [#1695](https://github.com/zendeskgarden/react-components/pull/1695) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1693](https://github.com/zendeskgarden/react-components/pull/1693) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1694](https://github.com/zendeskgarden/react-components/pull/1694) chore(deps): update dependency commander to v12 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1691](https://github.com/zendeskgarden/react-components/pull/1691) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1690](https://github.com/zendeskgarden/react-components/pull/1690) fix(deps): update dependency react-popper to v2 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1685](https://github.com/zendeskgarden/react-components/pull/1685) chore(deps): update dependency ora to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1684](https://github.com/zendeskgarden/react-components/pull/1684) chore(deps): update dependency husky to v9 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1683](https://github.com/zendeskgarden/react-components/pull/1683) chore(deps): update dependency @zendeskgarden/stylelint-config to v21 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1682](https://github.com/zendeskgarden/react-components/pull/1682) chore(deps): update dependency @zendeskgarden/eslint-config to v37 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1681](https://github.com/zendeskgarden/react-components/pull/1681) chore(deps): update node orb to v5.2.0 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1679](https://github.com/zendeskgarden/react-components/pull/1679) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- `chrome`
  - [#1692](https://github.com/zendeskgarden/react-components/pull/1692) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- `datepickers`
  - [#1687](https://github.com/zendeskgarden/react-components/pull/1687) fix(deps): update dependency date-fns to v3 ([@renovate[bot]](https://github.com/apps/renovate))
- `buttons`, `chrome`, `dropdowns.next`, `dropdowns`, `forms`, `grid`, `modals`, `tabs`, `tooltips`
  - [#1689](https://github.com/zendeskgarden/react-components/pull/1689) fix(deps): update dependency react-merge-refs to v2 ([@renovate[bot]](https://github.com/apps/renovate))
- `accordions`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns.next`, `dropdowns`, `forms`, `grid`, `modals`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`
  - [#1686](https://github.com/zendeskgarden/react-components/pull/1686) fix(deps): update dependency @zendeskgarden/container-utilities to v2 ([@renovate[bot]](https://github.com/apps/renovate))
- `tables`
  - [#1680](https://github.com/zendeskgarden/react-components/pull/1680) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8 changelog

https://github.com/zendeskgarden/react-components/blob/main/docs/changelogs/v8.md
