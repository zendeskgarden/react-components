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

## v9.0.0 (2024-01-10)

#### :boom: Breaking Change
* All breaking changes are detailed in the [Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migration.md). Follow the guide to upgrade from version 8 to version 9.

#### :rocket: New Feature
* all packages
  * feat: new light/dark mode colors ([@geotrev](https://github.com/geotrev), [@jzempel](https://github.com/jzempel), [@ze-flo](https://github.com/ze-flo))
* `theming`
  * [#1704](https://github.com/zendeskgarden/react-components/pull/1704) feat(theming): add arrow/menu position and floating placement utilities ([@jzempel](https://github.com/jzempel))
* `tabs`, `tooltips`, `chrome`, `tables`, `modals`, `notifications`, `dropdowns`, `typography`, `colorpickers`, `datepickers`, `forms`, `grid`
  * feat: adds subcomponent mapping to components ([@geotrev](https://github.com/geotrev))
* `theming`
  * [#1763](https://github.com/zendeskgarden/react-components/pull/1763) feat: add refactored `getColor` utility ([@jzempel](https://github.com/jzempel))
* `theming`
  * [#1782](https://github.com/zendeskgarden/react-components/pull/1782) feat(theming): fill out color variables ([@jzempel](https://github.com/jzempel))
* `theming`
  * [#1797](https://github.com/zendeskgarden/react-components/pull/1797) feat(theming): add system `opacity` values to the theme ([@jzempel](https://github.com/jzempel))
* `colorpickers`, `theming`
  * [#1793](https://github.com/zendeskgarden/react-components/pull/1793) feat(theming): add new `getCheckeredBackground` utility ([@jzempel](https://github.com/jzempel))
* `buttons`, `dropdowns`, `forms`, `notifications`, `pagination`, `tags`, `typography`
  * [#1792](https://github.com/zendeskgarden/react-components/pull/1792) feat: adds StyledBaseIcon to various icon components ([@geotrev](https://github.com/geotrev))
* `accordions`, `theming`
  * [#1791](https://github.com/zendeskgarden/react-components/pull/1791) feat: adds styled icon base component ([@geotrev](https://github.com/geotrev))
* `theming`
  * [#1806](https://github.com/zendeskgarden/react-components/pull/1806) feat(theming): enhance `getColor` to accept rgba and literal color variables ([@jzempel](https://github.com/jzempel))
* `chrome`, `draggable`, `forms`, `grid`, `modals`, `notifications`, `theming`, `tooltips`
  * [#1870](https://github.com/zendeskgarden/react-components/pull/1870) feat(theming): adds shadow variables to theme + updates styled components ([@geotrev](https://github.com/geotrev))
* `chrome`, `dropdowns`, `grid`, `modals`, `tabs`, `theming`
  * [#1873](https://github.com/zendeskgarden/react-components/pull/1873) feat: applies color-scheme to align garden and system themes ([@geotrev](https://github.com/geotrev))
* `accordions`, `avatars`, `tags`, `typography`
  * [#1885](https://github.com/zendeskgarden/react-components/pull/1885) feat: allow color-related props to receive color variable keys in addition to hex values ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* See the `next` prerelease changes below for fixes applied to the v9 release.

## v9.0.0-next.26 (2024-09-12)

#### :bug: Bug Fix
* `chrome`
  * [#1920](https://github.com/zendeskgarden/react-components/pull/1920) fix(chrome): prevent focus on closed `Sheet` ([@jzempel](https://github.com/jzempel))
* `dropdowns`
  * [#1919](https://github.com/zendeskgarden/react-components/pull/1919) fix(dropdowns): forwards menu button ref correctly ([@geotrev](https://github.com/geotrev))
* `modals`
  * [#1917](https://github.com/zendeskgarden/react-components/pull/1917) fix(tooltips): ensure correct padding for `TooltipDialog`'s inner elements if `Close` btn exists ([@ze-flo](https://github.com/ze-flo))
* `dropdowns`, `theming`
  * [#1918](https://github.com/zendeskgarden/react-components/pull/1918) fix(dropdowns): prevents menus focus focusing items early during animation ([@geotrev](https://github.com/geotrev))
* `typography`
  * [#1916](https://github.com/zendeskgarden/react-components/pull/1916) fix(typography): set `CodeBlock` background to `background.recessed` ([@jzempel](https://github.com/jzempel))
  * [#1915](https://github.com/zendeskgarden/react-components/pull/1915) fix(typography): revert `react-prism-renderer` to v1 ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* [#1914](https://github.com/zendeskgarden/react-components/pull/1914) docs: add removal of `theme` default prop ADR ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.25 (2024-09-05)

#### :boom: Breaking Change
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `draggable`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1905](https://github.com/zendeskgarden/react-components/pull/1905) refactor: remove `theme` `defaultProp` ([@ze-flo](https://github.com/ze-flo))

#### :bug: Bug Fix
* `tabs`
  * [#1911](https://github.com/zendeskgarden/react-components/pull/1911) fix(tabs): allow focus ring to resize based on content ([@ze-flo](https://github.com/ze-flo))

#### :seedling: Internal
* [#1909](https://github.com/zendeskgarden/react-components/pull/1909) chore(deps-dev): bump webpack from 5.93.0 to 5.94.0 ([@dependabot[bot]](https://github.com/apps/dependabot))

## v9.0.0-next.24 (2024-08-29)

#### :bug: Bug Fix
* `tabs`
  * [#1908](https://github.com/zendeskgarden/react-components/pull/1908) fix(tabs): border styling ([@jzempel](https://github.com/jzempel))
  * [#1904](https://github.com/zendeskgarden/react-components/pull/1904) fix(tabs): add border-color transition for smoother animation ([@ze-flo](https://github.com/ze-flo))
* `avatars`
  * [#1901](https://github.com/zendeskgarden/react-components/pull/1901) fix(avatars): rectify `StatusIndicator` sizing and position ([@ze-flo](https://github.com/ze-flo))

#### :memo: Documentation
* `tags`
  * [#1907](https://github.com/zendeskgarden/react-components/pull/1907) fix(tags): ensure prop sheet refers to internal website URL ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* [#1906](https://github.com/zendeskgarden/react-components/pull/1906) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v9.0.0-next.23 (2024-08-22)

#### :boom: Breaking Change
* `colorpickers`, `modals`
  * [#1892](https://github.com/zendeskgarden/react-components/pull/1892) chore(modals)!: rename `TooltipModal` to `TooltipDialog` ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `theming`, `tooltips`
  * [#1902](https://github.com/zendeskgarden/react-components/pull/1902) fix(tooltips): fix arrow position when using `end-bottom` placement ([@ze-flo](https://github.com/ze-flo))
* `avatars`
  * [#1897](https://github.com/zendeskgarden/react-components/pull/1897) fix(avatars): use default background surfaceColor with statuses ([@geotrev](https://github.com/geotrev))
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `draggable`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1893](https://github.com/zendeskgarden/react-components/pull/1893) fix: React peer dependency ranges ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* [#1900](https://github.com/zendeskgarden/react-components/pull/1900) docs: enhance migration guide ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `accordions`, `avatars`, `buttons`, `datepickers`, `draggable`, `dropdowns.legacy`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `tables`, `typography`
  * [#1825](https://github.com/zendeskgarden/react-components/pull/1825) chore(deps): update dependency eslint to v9 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `buttons`, `chrome`, `colorpickers`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tags`, `theming`, `typography`
  * [#1879](https://github.com/zendeskgarden/react-components/pull/1879) chore(deps): update dependency @zendeskgarden/stylelint-config to v22 ([@renovate[bot]](https://github.com/apps/renovate))
* `colorpickers`
  * [#1875](https://github.com/zendeskgarden/react-components/pull/1875) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#1880](https://github.com/zendeskgarden/react-components/pull/1880) chore(deps): update dependency inquirer to v10 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1889](https://github.com/zendeskgarden/react-components/pull/1889) chore(deps-dev): bump axios from 1.6.7 to 1.7.4 ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1877](https://github.com/zendeskgarden/react-components/pull/1877) chore(deps): update dependency @rollup/plugin-commonjs to v26 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `draggable`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#1876](https://github.com/zendeskgarden/react-components/pull/1876) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `draggable`, `dropdowns.legacy`, `dropdowns.next`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#1899](https://github.com/zendeskgarden/react-components/pull/1899) chore: merge v9 `next` to `main` ([@jzempel](https://github.com/jzempel))
* `modals`, `theming`
  * [#1891](https://github.com/zendeskgarden/react-components/pull/1891) chore(theming): remove `PALETTE_V8` export ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.22 (2024-08-15)

#### :rocket: New Feature
* `accordions`, `avatars`, `tags`, `typography`
  * [#1885](https://github.com/zendeskgarden/react-components/pull/1885) feat: allow color-related props to receive color variable keys in addition to hex values ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* [#1887](https://github.com/zendeskgarden/react-components/pull/1887) chore(theming): add `withTheme` removal to migration guide ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `dropdowns`, `forms`
  * [#1890](https://github.com/zendeskgarden/react-components/pull/1890) chore: sync `next` with `main` ([@ze-flo](https://github.com/ze-flo))
* `chrome`
  * [#1884](https://github.com/zendeskgarden/react-components/pull/1884) fix(chrome): update Nav.List displayName ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.21 (2024-08-12)

#### :bug: Bug Fix
* `chrome`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tooltips`
  * [#1883](https://github.com/zendeskgarden/react-components/pull/1883) fix: updates displayNames to match subcomponent properties ([@geotrev](https://github.com/geotrev))
* `dropdowns.legacy`, `dropdowns`, `theming`, `tooltips`
  * [#1882](https://github.com/zendeskgarden/react-components/pull/1882) fix(tooltips): renders correct arrow dimensions based on tooltip size ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.20 (2024-08-01)

#### :rocket: New Feature
* `chrome`, `dropdowns`, `grid`, `modals`, `tabs`, `theming`
  * [#1873](https://github.com/zendeskgarden/react-components/pull/1873) feat: applies color-scheme to align garden and system themes ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* `dropdowns`
  * [#1874](https://github.com/zendeskgarden/react-components/pull/1874) chore: sync `next` with `main` ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.19 (2024-07-25)

#### :boom: Breaking Change
* `draggable`
  * [#1868](https://github.com/zendeskgarden/react-components/pull/1868) feat(draggable)!: renames drag-drop package to draggable ([@geotrev](https://github.com/geotrev))
* `typography`
  * [#1864](https://github.com/zendeskgarden/react-components/pull/1864) feat(typography)!: recolor `CodeBlock` and migrate to `prism-react-renderer` v2 ([@jzempel](https://github.com/jzempel))

#### :rocket: New Feature
* `datepickers`
  * [#1860](https://github.com/zendeskgarden/react-components/pull/1860) feat(datepickers): adds light/dark mode colors ([@geotrev](https://github.com/geotrev))
* `dropdowns.legacy`
  * [#1867](https://github.com/zendeskgarden/react-components/pull/1867) feat(dropdowns.legacy): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `chrome`, `draggable`, `forms`, `grid`, `modals`, `notifications`, `theming`, `tooltips`
  * [#1870](https://github.com/zendeskgarden/react-components/pull/1870) feat(theming): adds shadow variables to theme + updates styled components ([@geotrev](https://github.com/geotrev))
* `colorpickers`
  * [#1862](https://github.com/zendeskgarden/react-components/pull/1862) feat(colorpickers): adds light/dark mode colors ([@ze-flo](https://github.com/ze-flo))

#### :bug: Bug Fix
* `buttons`
  * [#1871](https://github.com/zendeskgarden/react-components/pull/1871) feat(buttons): underline `Anchor` by default ([@jzempel](https://github.com/jzempel))
* `typography`
  * [#1869](https://github.com/zendeskgarden/react-components/pull/1869) fix(typography): `CodeBlock` colors ([@jzempel](https://github.com/jzempel))
* `tooltips`
  * [#1866](https://github.com/zendeskgarden/react-components/pull/1866) fix(tooltips): increase arrow size for small / med tooltips ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.18 (2024-07-18)

#### :rocket: New Feature
* `avatars`
  * [#1852](https://github.com/zendeskgarden/react-components/pull/1852) feat(avatars): adds light/dark mode colors ([@geotrev](https://github.com/geotrev))
* `accordions`
  * [#1850](https://github.com/zendeskgarden/react-components/pull/1850) feat(accordions): new light/dark mode colors  ([@ze-flo](https://github.com/ze-flo))

#### :seedling: Internal
* [#1865](https://github.com/zendeskgarden/react-components/pull/1865) chore: sync `next` with `main` ([@geotrev](https://github.com/geotrev))
* [#1858](https://github.com/zendeskgarden/react-components/pull/1858) chore: sync `next` with `main` ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.17 (2024-07-11)

#### :rocket: New Feature
* `chrome`
  * [#1849](https://github.com/zendeskgarden/react-components/pull/1849) feat(chrome): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `breadcrumbs`
  * [#1848](https://github.com/zendeskgarden/react-components/pull/1848) feat(breadcrumbs): adds light/dark mode colors ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* [#1855](https://github.com/zendeskgarden/react-components/pull/1855) chore(next): updates from `main` ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.16 (2024-07-02)

#### :rocket: New Feature
* `pagination`
  * [#1846](https://github.com/zendeskgarden/react-components/pull/1846) feat(pagination): new light/dark mode colors ([@geotrev](https://github.com/geotrev))

#### :seedling: Internal
* [#1847](https://github.com/zendeskgarden/react-components/pull/1847) chore: sync changes since `v8.76.4` from `main` ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.15 (2024-06-28)

#### :rocket: New Feature
* `notifications`
  * [#1842](https://github.com/zendeskgarden/react-components/pull/1842) feat(notifications): new light/dark mode colors ([@geotrev](https://github.com/geotrev))
* `tabs`
  * [#1843](https://github.com/zendeskgarden/react-components/pull/1843) feat(tabs): new light/dark mode colors ([@ze-flo](https://github.com/ze-flo))
* `modals`
  * [#1840](https://github.com/zendeskgarden/react-components/pull/1840) feat(modals): new light/dark mode colors for `TooltipModal` and `Drawer` ([@ze-flo](https://github.com/ze-flo))

- Florent ([@ze-flo](https://github.com/ze-flo))
- George Treviranus ([@geotrev](https://github.com/geotrev))


## v9.0.0-next.14 (2024-06-20)

#### :rocket: New Feature
* `buttons`, `forms`, `theming`
  * [#1838](https://github.com/zendeskgarden/react-components/pull/1838) feat(forms): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `grid`
  * [#1839](https://github.com/zendeskgarden/react-components/pull/1839) feat(grid): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `tables`
  * [#1833](https://github.com/zendeskgarden/react-components/pull/1833) feat(tables): new light/dark mode colors ([@geotrev](https://github.com/geotrev))

## v9.0.0-next.13 (2024-06-07)

#### :rocket: New Feature
* `typography`
  * [#1820](https://github.com/zendeskgarden/react-components/pull/1820) feat(typography): new light/dark mode colors (excluding CodeBlock) ([@ze-flo](https://github.com/ze-flo))
* `loaders`
  * [#1818](https://github.com/zendeskgarden/react-components/pull/1818) feat(loaders): new light/dark mode colors ([@ze-flo](https://github.com/ze-flo))
* `dropdowns`, `forms`, `theming`
  * [#1816](https://github.com/zendeskgarden/react-components/pull/1816) feat(dropdowns): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `tooltips`
  * [#1811](https://github.com/zendeskgarden/react-components/pull/1811) feat(tooltips): new light/dark mode colors ([@ze-flo](https://github.com/ze-flo))

#### :bug: Bug Fix
* Other
  * [#1835](https://github.com/zendeskgarden/react-components/pull/1835) fix: package and package-lock JSON ([@jzempel](https://github.com/jzempel))
* `dropdowns.legacy`, `dropdowns`, `theming`
  * [#1814](https://github.com/zendeskgarden/react-components/pull/1814) fix: refine `arrowStyles` CSS to avoid overcast issues with drop shadows ([@ze-flo](https://github.com/ze-flo))

#### :seedling: Internal
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `drag-drop`, `dropdowns.legacy`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1834](https://github.com/zendeskgarden/react-components/pull/1834) fix(deps): sync `main` to `next` ([@geotrev](https://github.com/geotrev))
* `theming`
  * [#1832](https://github.com/zendeskgarden/react-components/pull/1832) refactor(theming): improves custom color scale generation ([@ze-flo](https://github.com/ze-flo))
* `tooltips`
  * [#1819](https://github.com/zendeskgarden/react-components/pull/1819) test: add `getRenderFn` utility ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.12 (2024-05-23)

#### :rocket: New Feature
* `tags`
  * [#1809](https://github.com/zendeskgarden/react-components/pull/1809) feat(tags): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `modals`
  * [#1808](https://github.com/zendeskgarden/react-components/pull/1808) feat(Modal): new light/dark mode colors ([@ze-flo](https://github.com/ze-flo))

#### :bug: Bug Fix
* `buttons`
  * [#1815](https://github.com/zendeskgarden/react-components/pull/1815) fix(buttons): update `IconButton` foreground color ([@jzempel](https://github.com/jzempel))
* `modals`
  * [#1813](https://github.com/zendeskgarden/react-components/pull/1813) fix(modals): increase `box-shadow` opacity in dark mode  ([@ze-flo](https://github.com/ze-flo))

#### :seedling: Internal
* `buttons`, `colorpickers`, `dropdowns`, `grid`, `notifications`
  * [#1804](https://github.com/zendeskgarden/react-components/pull/1804) fix(Buttons): correctly support overriding default `data-garden-id` attribute ([@ze-flo](https://github.com/ze-flo))

## v9.0.0-next.11 (2024-05-16)

#### :rocket: New Feature
* `drag-drop`
  * [#1805](https://github.com/zendeskgarden/react-components/pull/1805) feat(drag-drop): adds light/dark mode colors ([@geotrev](https://github.com/geotrev))
* `buttons`
  * [#1807](https://github.com/zendeskgarden/react-components/pull/1807) feat(buttons): new light/dark mode colors ([@jzempel](https://github.com/jzempel))
* `theming`
  * [#1806](https://github.com/zendeskgarden/react-components/pull/1806) feat(theming): enhance `getColor` to accept rgba and literal color variables ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `theming`
  * [#1803](https://github.com/zendeskgarden/react-components/pull/1803) chore(storybook): add global dark/light color variables control ([@jzempel](https://github.com/jzempel))

## v9.0.0-next.10 (2024-05-02)

#### :seedling: Internal
* Other
  * [#1802](https://github.com/zendeskgarden/react-components/pull/1802) chore(CHANGELOG): remove extra lines ([@ze-flo](https://github.com/ze-flo))
* `datepickers`, `forms`
  * [#1801](https://github.com/zendeskgarden/react-components/pull/1801) chore(next): update from `main@8.76.2` ([@ze-flo](https://github.com/ze-flo))

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
