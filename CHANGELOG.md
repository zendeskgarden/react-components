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

## v9.0.0-next.9 (2024-04-25)

#### :boom: Breaking Change
* `chrome`, `theming`
  * [#1794](https://github.com/zendeskgarden/react-components/pull/1794) feat!: removes stale product colors from palette ([@geotrev](https://github.com/geotrev))

#### :rocket: New Feature
* `theming`
  * [#1797](https://github.com/zendeskgarden/react-components/pull/1797) feat(theming): add system `opacity` values to the theme ([@jzempel](https://github.com/jzempel))
* `colorpickers`, `theming`
  * [#1793](https://github.com/zendeskgarden/react-components/pull/1793) feat(theming): add new `getCheckeredBackground` utility ([@jzempel](https://github.com/jzempel))
* `buttons`, `dropdowns`, `forms`, `notifications`, `pagination`, `tags`, `typography`
  * [#1792](https://github.com/zendeskgarden/react-components/pull/1792) feat: adds StyledBaseIcon to various icon components ([@geotrev](https://github.com/geotrev))
* `accordions`, `theming`
  * [#1791](https://github.com/zendeskgarden/react-components/pull/1791) feat: adds styled icon base component ([@geotrev](https://github.com/geotrev))

#### :bug: Bug Fix
* `theming`
  * [#1795](https://github.com/zendeskgarden/react-components/pull/1795) fix(theming): update palette color values ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `notifications`
  * [#1796](https://github.com/zendeskgarden/react-components/pull/1796) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.8 (2024-04-12)

#### :boom: Breaking Change
* `chrome`
  * [#1787](https://github.com/zendeskgarden/react-components/pull/1787) feat(chrome)!: removes Subnav component ([@ze-flo](https://github.com/ze-flo))
* `avatars`, `chrome`
  * [#1784](https://github.com/zendeskgarden/react-components/pull/1784) feat(chrome)!: improves markup structure for `Nav` items ([@geotrev](https://github.com/geotrev))
* `buttons`, `chrome`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `theming`
  * [#1785](https://github.com/zendeskgarden/react-components/pull/1785) fix(theming)!: update utilities for refactored `getColor` ([@jzempel](https://github.com/jzempel))

#### :rocket: New Feature
* `theming`
  * [#1782](https://github.com/zendeskgarden/react-components/pull/1782) feat(theming): fill out color variables ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`, `typography`
  * [#1789](https://github.com/zendeskgarden/react-components/pull/1789) fix(deps): use -next versions for react-theming peer dep ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1788](https://github.com/zendeskgarden/react-components/pull/1788) chore: update with `main` ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.7 (2024-04-04)

#### :boom: Breaking Change
* `chrome`
  * [#1774](https://github.com/zendeskgarden/react-components/pull/1774) feat(chrome)!: removes `Sidebar` component ([@geotrev](https://github.com/geotrev))
* `dropdowns`
  * [#1773](https://github.com/zendeskgarden/react-components/pull/1773) feat(dropdowns)!: removes object type from Option `value` prop ([@geotrev](https://github.com/geotrev))
* `accordions`, `buttons`, `chrome`, `colorpickers`, `dropdowns`, `forms`, `grid`, `modals`, `pagination`, `tabs`, `theming`
  * [#1771](https://github.com/zendeskgarden/react-components/pull/1771) feat(theming)!: remove focusVisibleRef prop and polyfill scoping element ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `.template`, `accordions`, `buttons`, `chrome`, `colorpickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `typography`
  * [#1779](https://github.com/zendeskgarden/react-components/pull/1779) fix: update theming peer dependencies to ^9.0.0 ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `dropdowns`, `forms`, `grid`
  * [#1781](https://github.com/zendeskgarden/react-components/pull/1781) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.6 (2024-03-29)

#### :boom: Breaking Change
* `chrome`
  * [#1761](https://github.com/zendeskgarden/react-components/pull/1761) feat(chrome)!: detect Footer automatically with Context ([@geotrev](https://github.com/geotrev))
* `accordions`, `buttons`, `dropdowns.legacy`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `tables`, `tags`, `theming`, `typography`
  * [#1762](https://github.com/zendeskgarden/react-components/pull/1762) feat(theming)!: update `PALETTE` with redesigned 100-1200 shades ([@jzempel](https://github.com/jzempel))
* `colorpickers`, `theming`
  * [#1755](https://github.com/zendeskgarden/react-components/pull/1755) feat(theming)!: add `variables` to theme `colors` ([@jzempel](https://github.com/jzempel))
* `accordions`, `breadcrumbs`, `chrome`, `forms`, `typography`
  * [#1752](https://github.com/zendeskgarden/react-components/pull/1752) feat: updates icon component and prop types for cross-package consistency ([@geotrev](https://github.com/geotrev))

#### :rocket: New Feature
* `theming`
  * [#1763](https://github.com/zendeskgarden/react-components/pull/1763) feat: add refactored `getColor` utility ([@jzempel](https://github.com/jzempel))
* Other
  * [#1759](https://github.com/zendeskgarden/react-components/pull/1759) feat: use strict mode as storybook default ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* Other
  * [#1760](https://github.com/zendeskgarden/react-components/pull/1760) chore(deps): update non-major shared dependencies from main ([@geotrev](https://github.com/geotrev))
* `.template`, `accordions`, `avatars`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `tables`, `tags`, `theming`, `tooltips`, `typography`
  * [#1757](https://github.com/zendeskgarden/react-components/pull/1757) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.5 (2024-03-14)

#### :rocket: New Feature
* `modals`
  * [#1750](https://github.com/zendeskgarden/react-components/pull/1750) feat(modals): adds subcomponent mapping to Modal ([@geotrev](https://github.com/geotrev))
* `notifications`
  * [#1748](https://github.com/zendeskgarden/react-components/pull/1748) feat(notifications): adds subcomponent mapping ([@geotrev](https://github.com/geotrev))
* `dropdowns`, `typography`
  * [#1745](https://github.com/zendeskgarden/react-components/pull/1745) feat(dropdowns): adds subcomponent mapping to Field ([@geotrev](https://github.com/geotrev))
* `chrome`, `colorpickers`, `datepickers`, `forms`, `tables`
  * [#1742](https://github.com/zendeskgarden/react-components/pull/1742) feat(forms): adds subcomponent mapping to Field ([@geotrev](https://github.com/geotrev))
* `grid`
  * [#1741](https://github.com/zendeskgarden/react-components/pull/1741) feat(grid): adds subcomponent mapping to Grid ([@geotrev](https://github.com/geotrev))

#### :bug: Bug Fix
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1740](https://github.com/zendeskgarden/react-components/pull/1740) fix: bumps styled-components peer dep to 5.3.1 ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1746](https://github.com/zendeskgarden/react-components/pull/1746) chore(theming): rename `getColor` => `getColorV8` ([@jzempel](https://github.com/jzempel))
* `avatars`, `chrome`, `colorpickers`, `datepickers`, `dropdowns.legacy`, `dropdowns`, `forms`, `modals`, `notifications`, `theming`, `tooltips`, `typography`
  * [#1744](https://github.com/zendeskgarden/react-components/pull/1744) chore: updates Grid.Row and Grid.Col references in stories ([@geotrev](https://github.com/geotrev))
* `tables`
  * [#1743](https://github.com/zendeskgarden/react-components/pull/1743) fix(tables): moves deprecation comments to component definitions ([@geotrev](https://github.com/geotrev))
* `chrome`, `tabs`, `tooltips`
  * [#1739](https://github.com/zendeskgarden/react-components/pull/1739) fix: moves deprecation comments to component definitions for chrome, tabs, and tooltips ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.4 (2024-03-07)

#### :boom: Breaking Change
* `dropdowns`
  * [#1729](https://github.com/zendeskgarden/react-components/pull/1729) feat(dropdowns)!: replaces label prop with legend in OptGroup ([@geotrev](https://github.com/geotrev))

#### :rocket: New Feature
* `tabs`, `tooltips`
  * [#1734](https://github.com/zendeskgarden/react-components/pull/1734) feat: adds subcomponent mapping to tabs and tooltips ([@geotrev](https://github.com/geotrev))
* `chrome`
  * [#1736](https://github.com/zendeskgarden/react-components/pull/1736) feat(chrome): adds subcomponent mapping ([@geotrev](https://github.com/geotrev))
* `tables`
  * [#1733](https://github.com/zendeskgarden/react-components/pull/1733) feat(tables): adds subcomponent mapping ([@geotrev](https://github.com/geotrev))

#### :bug: Bug Fix
* `chrome`
  * [#1737](https://github.com/zendeskgarden/react-components/pull/1737) fix(chrome): use correct names in chrome subcomponents ([@geotrev](https://github.com/geotrev))
* `datepickers`, `dropdowns`, `modals`, `tooltips`
  * [#1732](https://github.com/zendeskgarden/react-components/pull/1732) fix: adds rtl fix for floating ui implementations ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* `dropdowns`
  * [#1738](https://github.com/zendeskgarden/react-components/pull/1738) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.3 (2024-02-29)

#### :boom: Breaking Change
* `accordions`, `avatars`, `buttons`, `chrome`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `theming`
  * [#1725](https://github.com/zendeskgarden/react-components/pull/1725) feat!: renames and prunes type/constant exports from packages ([@geotrev](https://github.com/geotrev))
* `dropdowns`, `notifications`
  * [#1723](https://github.com/zendeskgarden/react-components/pull/1723) feat!: renames react-dropdowns.next to react-dropdowns ([@geotrev](https://github.com/geotrev))
* `avatars`, `dropdowns.legacy`, `notifications`, `typography`
  * [#1722](https://github.com/zendeskgarden/react-components/pull/1722) feat!: renames `react-dropdowns` to `react-dropdowns.legacy` ([@geotrev](https://github.com/geotrev))
* `buttons`, `forms`
  * [#1720](https://github.com/zendeskgarden/react-components/pull/1720) chore!: remove `ButtonGroup` and `MultiThumbRange` components ([@jzempel](https://github.com/jzempel))
* `colorpickers`
  * [#1719](https://github.com/zendeskgarden/react-components/pull/1719) feat!: renames Colorpicker(Dialog) to ColorPicker(Dialog) ([@geotrev](https://github.com/geotrev))

#### :bug: Bug Fix
* `dropdowns.legacy`, `grid`
  * [#1727](https://github.com/zendeskgarden/react-components/pull/1727) fix: updates constant imports in grid story and lingering dropdowns.next references ([@geotrev](https://github.com/geotrev))
* `colorpickers`
  * [#1726](https://github.com/zendeskgarden/react-components/pull/1726) fix(colorpickers): `ColorSwatch` focus styling ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `theming`
  * [#1721](https://github.com/zendeskgarden/react-components/pull/1721) chore: add Storybook tool for dark mode ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.2 (2024-02-22)

#### :boom: Breaking Change
* `datepickers`
  * [#1716](https://github.com/zendeskgarden/react-components/pull/1716) feat!: renames Datepicker components to DatePicker ([@geotrev](https://github.com/geotrev))
* `modals`
  * [#1715](https://github.com/zendeskgarden/react-components/pull/1715) feat!: rename DrawerModal to Drawer ([@geotrev](https://github.com/geotrev))
* `pagination`
  * [#1712](https://github.com/zendeskgarden/react-components/pull/1712) feat: renames Pagination to OffsetPagination with revised API ([@geotrev](https://github.com/geotrev))
* `colorpickers`, `datepickers`, `dropdowns.next`, `modals`, `theming`, `tooltips`
  * [#1709](https://github.com/zendeskgarden/react-components/pull/1709) chore!: replace Popper with Floating UI ([@jzempel](https://github.com/jzempel))
* `colorpickers`
  * [#1711](https://github.com/zendeskgarden/react-components/pull/1711) feat(colorpickers)!: refactor `ColorSwatch` with improved accessibility backed by a native input (radio or checkbox) group ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `datepickers`
  * [#1717](https://github.com/zendeskgarden/react-components/pull/1717) fix: rename datepickers folder name in storybook UI ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* [#1718](https://github.com/zendeskgarden/react-components/pull/1718) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

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
