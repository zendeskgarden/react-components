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

## v8.54.3 (2022-08-18)

#### :bug: Bug Fix
* `loaders`
  * [#1400](https://github.com/zendeskgarden/react-components/pull/1400) fix(loaders): use text for inline loader label ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.54.2 (2022-08-11)

#### :bug: Bug Fix
* `forms`
  * [#1399](https://github.com/zendeskgarden/react-components/pull/1399) fix(forms): prevent message and hint component from throwing outside of field component ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `tabs`
  * [#1391](https://github.com/zendeskgarden/react-components/pull/1391) fix(tabs): add role when tab is disabled ([@Francois-Esquire](https://github.com/Francois-Esquire))


## v8.54.1 (2022-08-04)

#### :bug: Bug Fix
* `forms`
  * [#1389](https://github.com/zendeskgarden/react-components/pull/1389) fix(forms): add message id to input aria-describedby attribute ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.54.0 (2022-07-21)

#### :rocket: New Feature
* `dropdowns`, `forms`
  * [#1381](https://github.com/zendeskgarden/react-components/pull/1381) feat(forms): add validation label to message component ([@Francois-Esquire](https://github.com/Francois-Esquire))

#### :bug: Bug Fix
* `dropdowns`
  * [#1386](https://github.com/zendeskgarden/react-components/pull/1386) fix(dropdowns): prevent enter key from firing callbacks twice ([@Francois-Esquire](https://github.com/Francois-Esquire))

#### :seedling: Internal
* [#1387](https://github.com/zendeskgarden/react-components/pull/1387) chore(storybook): remove eslint from webpack config ([@Francois-Esquire](https://github.com/Francois-Esquire))
* [#1388](https://github.com/zendeskgarden/react-components/pull/1388) chore(lint-staged): update jest to pass with no tests ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.53.3 (2022-07-14)

#### :bug: Bug Fix
* `grid`
  * [#1382](https://github.com/zendeskgarden/react-components/pull/1382) fix(grid): upgrade `Pane.Splitter` with default aria-label and offscreen drag support ([@jzempel](https://github.com/jzempel))

## v8.53.2 (2022-07-07)

#### :bug: Bug Fix
* `breadcrumbs`, `dropdowns`, `modals`, `pagination`, `tabs`
  * [#1378](https://github.com/zendeskgarden/react-components/pull/1378) fix(breadcrumbs,dropdowns,modals,pagination,tabs): improved a11y with upgraded react-containers ([@jzempel](https://github.com/jzempel))
* `grid`
  * [#1380](https://github.com/zendeskgarden/react-components/pull/1380) fix(grid): address splitter button design and interaction issues ([@jzempel](https://github.com/jzempel))

## v8.53.1 (2022-06-28)

#### :bug: Bug Fix
* `modals`
  * [#1377](https://github.com/zendeskgarden/react-components/pull/1377) fix(modals): typo in nodeRef ([@JamesSingleton](https://github.com/JamesSingleton))

## v8.53.0 (2022-06-16)

#### :rocket: New Feature
* `grid`
  * [#1371](https://github.com/zendeskgarden/react-components/pull/1371) feat(grid): add pane splitter button ([@mtomcal](https://github.com/mtomcal))
* `avatars`
  * [#1358](https://github.com/zendeskgarden/react-components/pull/1358) feat(avatars): extend status prop ([@Francois-Esquire](https://github.com/Francois-Esquire))

#### :bug: Bug Fix
* `tables`
  * [#1373](https://github.com/zendeskgarden/react-components/pull/1373) fix(tables): remove redundant rendering of row component ([@pudewan-zd](https://github.com/pudewan-zd))

#### :seedling: Internal
* `colorpickers`
  * [#1374](https://github.com/zendeskgarden/react-components/pull/1374) chore(colorpickers): remove popper.js direct dependency ([@Francois-Esquire](https://github.com/Francois-Esquire))
* Other
  * [#1375](https://github.com/zendeskgarden/react-components/pull/1375) chore(git): add demo to gitignore ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.52.0 (2022-05-26)

#### :rocket: New Feature
* `breadcrumbs`, `modals`, `theming`
  * [#1357](https://github.com/zendeskgarden/react-components/pull/1357) feat(theming,breadcrumbs,modals): add and apply `useText` utility ([@jzempel](https://github.com/jzempel))
* `grid`
  * [#1356](https://github.com/zendeskgarden/react-components/pull/1356) feat(pane): add providerId ([@mtomcal](https://github.com/mtomcal))

#### :bug: Bug Fix
* `dropdowns`
  * [#1355](https://github.com/zendeskgarden/react-components/pull/1355) fix(multiselect): add useDocument ([@mtomcal](https://github.com/mtomcal))

#### :seedling: Internal
* [#1354](https://github.com/zendeskgarden/react-components/pull/1354) chore(examples): remove ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.51.0 (2022-05-19)

#### :rocket: New Feature
* `grid`
  * [#1339](https://github.com/zendeskgarden/react-components/pull/1339) feat(splitter): add splitter component ([@mtomcal](https://github.com/mtomcal))

#### :bug: Bug Fix
* `forms`
  * [#1349](https://github.com/zendeskgarden/react-components/pull/1349) fix(forms): conditionally render aria-describedby when field has hint ([@Francois-Esquire](https://github.com/Francois-Esquire))
## v8.50.1 (2022-05-16)

#### :bug: Bug Fix
* `dropdowns`
  * [#1351](https://github.com/zendeskgarden/react-components/pull/1351) fix(dropdowns): stop overwriting of autocomplete keydown event ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.50.0 (2022-05-05)

#### :rocket: New Feature
* `accordions`
  * [#1346](https://github.com/zendeskgarden/react-components/pull/1346) feat(accordions): pass icon props to default check icon ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* `dropdowns`
  * [#1348](https://github.com/zendeskgarden/react-components/pull/1348) fix(dropdowns): compose keydown for autocomplete ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `accordions`
  * [#1347](https://github.com/zendeskgarden/react-components/pull/1347) fix(accordions): add missing `Timeline` text styling ([@jzempel](https://github.com/jzempel))

## v8.49.4 (2022-04-21)

#### :bug: Bug Fix
* `accordions`
  * [#1344](https://github.com/zendeskgarden/react-components/pull/1344) fix(accordions): hide inactive content from screen readers ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* `.template`, `grid`
  * [#1341](https://github.com/zendeskgarden/react-components/pull/1341) chore: refactor template interface and add TypeScript documentation ([@jzempel](https://github.com/jzempel))
* `buttons`, `chrome`, `colorpickers`, `forms`, `modals`, `typography`
  * [#1342](https://github.com/zendeskgarden/react-components/pull/1342) chore(demo): add design links ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `breadcrumbs`, `colorpickers`
  * [#1325](https://github.com/zendeskgarden/react-components/pull/1325) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#1343](https://github.com/zendeskgarden/react-components/pull/1343) chore(deps): bump async from 2.6.3 to 2.6.4 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))

## v8.49.3 (2022-04-14)

#### :bug: Bug Fix
* `loaders`, `pagination`, `tabs`, `tags`
  * [#1338](https://github.com/zendeskgarden/react-components/pull/1338) fix(loaders, pagination, tabs, tags): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `notifications`
  * [#1337](https://github.com/zendeskgarden/react-components/pull/1337) fix(notifications): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `datepickers`
  * [#1336](https://github.com/zendeskgarden/react-components/pull/1336) fix(datepickers): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `chrome`
  * [#1335](https://github.com/zendeskgarden/react-components/pull/1335) fix(chrome): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `buttons`
  * [#1333](https://github.com/zendeskgarden/react-components/pull/1333) fix(buttons): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `tables`
  * [#1330](https://github.com/zendeskgarden/react-components/pull/1330) fix(tables): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `dropdowns`, `forms`
  * [#1329](https://github.com/zendeskgarden/react-components/pull/1329) fix(forms, dropdowns): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `colorpickers`, `modals`, `theming`
  * [#1326](https://github.com/zendeskgarden/react-components/pull/1326) fix(theming, modals, colorpickers): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `grid`
  * [#1320](https://github.com/zendeskgarden/react-components/pull/1320) fix(grid): refactor types and interfaces ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `typography`
  * [#1340](https://github.com/zendeskgarden/react-components/pull/1340) chore(typography): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* Other
  * [#1313](https://github.com/zendeskgarden/react-components/pull/1313) chore(scripts): improved local-to-CI linting ([@jzempel](https://github.com/jzempel))
  * [#1312](https://github.com/zendeskgarden/react-components/pull/1312) chore(demo): add StrictMode decorator ([@jzempel](https://github.com/jzempel))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
* `avatars`
  * [#1332](https://github.com/zendeskgarden/react-components/pull/1332) chore(avatars): refactor types and interfaces ([@jzempel](https://github.com/jzempel))
* `accordions`
  * [#1331](https://github.com/zendeskgarden/react-components/pull/1331) chore(accordions): standardize interfaces ([@jzempel](https://github.com/jzempel))
* `datepickers`
  * [#1311](https://github.com/zendeskgarden/react-components/pull/1311) refactor(datepickers): use context rather than prop drilling ([@hzhu](https://github.com/hzhu))
* `tooltips`
  * [#1297](https://github.com/zendeskgarden/react-components/pull/1297) chore(tooltips): refactor types and element interface ([@jzempel](https://github.com/jzempel))

## v8.49.2 (2022-03-31)

#### :bug: Bug Fix
* `datepickers`
  * [#1309](https://github.com/zendeskgarden/react-components/pull/1309) fix(datepickers): fix React state synchronization bug ([@hzhu](https://github.com/hzhu))

## v8.49.1 (2022-03-24)

#### :bug: Bug Fix
* `chrome`, `modals`
  * [#1307](https://github.com/zendeskgarden/react-components/pull/1307) fix(modals): add padding to header when close button is present ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `modals`
  * [#1306](https://github.com/zendeskgarden/react-components/pull/1306) fix(modals): use auto width for responsive layout ([@hzhu](https://github.com/hzhu))
* `buttons`
  * [#1305](https://github.com/zendeskgarden/react-components/pull/1305) fix(buttons): fix precedence boost style bug ([@hzhu](https://github.com/hzhu))

## v8.49.0 (2022-03-03)

#### :rocket: New Feature
* `dropdowns`
  * [#1299](https://github.com/zendeskgarden/react-components/pull/1299) feat(dropdowns): Add `appendToElement` property ([@jeremy8883](https://github.com/jeremy8883))

#### :bug: Bug Fix
* `modals`
  * [#1304](https://github.com/zendeskgarden/react-components/pull/1304) fix(modals): update container-modal & types ([@hzhu](https://github.com/hzhu))
* `accordions`
  * [#1303](https://github.com/zendeskgarden/react-components/pull/1303) fix(stepper): render flash ([@exelarios](https://github.com/exelarios))
* `colorpickers`
  * [#1301](https://github.com/zendeskgarden/react-components/pull/1301) Update pointer and aria label for color chips ([@hzhu](https://github.com/hzhu))

## v8.48.2 (2022-02-10)

#### :bug: Bug Fix
* `accordions`
  * [#1291](https://github.com/zendeskgarden/react-components/pull/1291) fix(accordions): API prop defaults ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#1293](https://github.com/zendeskgarden/react-components/pull/1293) chore(stylelint): correct config and simplify css lint cmd ([@Francois-Esquire](https://github.com/Francois-Esquire))
  * [#1292](https://github.com/zendeskgarden/react-components/pull/1292) chore(chrome/sheet): remove dangling asterisk from type description ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.48.1 (2022-02-03)

#### :bug: Bug Fix
* `datepickers`
  * [#1289](https://github.com/zendeskgarden/react-components/pull/1289) fix(datepickers): add missing DatepickerRange subcomponent display names ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#1286](https://github.com/zendeskgarden/react-components/pull/1286) chore(deps): update dependency eslint-plugin-jest to v26 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1285](https://github.com/zendeskgarden/react-components/pull/1285) chore(deps): update dependency commander to v9 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1282](https://github.com/zendeskgarden/react-components/pull/1282) fix(deps): update dependency prop-types to v15.8.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1280](https://github.com/zendeskgarden/react-components/pull/1280) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1279](https://github.com/zendeskgarden/react-components/pull/1279) chore(deps): pin dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1278](https://github.com/zendeskgarden/react-components/pull/1278) chore(deps): bump trim-off-newlines from 1.0.1 to 1.0.3 ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1275](https://github.com/zendeskgarden/react-components/pull/1275) chore(deps): bump nanoid from 3.1.16 to 3.2.0 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1274](https://github.com/zendeskgarden/react-components/pull/1274) chore(deps): bump nanoid from 3.1.23 to 3.2.0 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1288](https://github.com/zendeskgarden/react-components/pull/1288) chore(renovate): remove post updates from config ([@Francois-Esquire](https://github.com/Francois-Esquire))
  * [#1276](https://github.com/zendeskgarden/react-components/pull/1276) chore(deps): bump nanoid from 3.1.29 to 3.2.0 ([@dependabot[bot]](https://github.com/apps/dependabot))
* `forms`
  * [#1281](https://github.com/zendeskgarden/react-components/pull/1281) chore(deps): update dependency react-dropzone to v11.5.3 ([@renovate[bot]](https://github.com/apps/renovate))

## v8.48.0 (2022-01-27)

#### :rocket: New Feature
* `forms`
  * [#1264](https://github.com/zendeskgarden/react-components/pull/1264) feat(forms): hide semantic Radio, Checkbox, and Toggle inputs more inclusively ([@jgorfine-zendesk](https://github.com/jgorfine-zendesk))

#### :bug: Bug Fix
* `.template`, `accordions`, `avatars`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1273](https://github.com/zendeskgarden/react-components/pull/1273) fix: element component + subcomponent type conventions ([@jzempel](https://github.com/jzempel))
* `chrome`
  * [#1272](https://github.com/zendeskgarden/react-components/pull/1272) fix(chrome): add padding to sheet header when sheet close button is p… ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `dropdowns`
  * [#1277](https://github.com/zendeskgarden/react-components/pull/1277) fix(dropdowns): compose onKeyDown handler for multiselect ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#1271](https://github.com/zendeskgarden/react-components/pull/1271) chore(deps): bump shelljs from 0.8.4 to 0.8.5 ([@dependabot[bot]](https://github.com/apps/dependabot))
* [#1269](https://github.com/zendeskgarden/react-components/pull/1269) chore(deps): bump follow-redirects from 1.9.0 to 1.14.7 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
* [#1268](https://github.com/zendeskgarden/react-components/pull/1268) chore(deps): bump follow-redirects from 1.14.3 to 1.14.7 ([@dependabot[bot]](https://github.com/apps/dependabot))
* [#1270](https://github.com/zendeskgarden/react-components/pull/1270) chore(deps): bump engine.io from 4.1.1 to 4.1.2 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
* [#1267](https://github.com/zendeskgarden/react-components/pull/1267) chore(deps): bump follow-redirects from 1.14.4 to 1.14.7 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))

## v8.47.2 (2022-01-13)

#### :memo: Documentation
* `grid`
  * [#1266](https://github.com/zendeskgarden/react-components/pull/1266) docs(grid): visualize with debug ([@mtomcal](https://github.com/mtomcal))

#### :seedling: Internal
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1265](https://github.com/zendeskgarden/react-components/pull/1265) chore(demo): refactor storybook ([@jzempel](https://github.com/jzempel))
* `avatars`, `chrome`, `dropdowns`, `forms`, `grid`, `loaders`, `theming`
  * [#1261](https://github.com/zendeskgarden/react-components/pull/1261) chore(deps): update dependency @zendeskgarden/eslint-config to v26 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#1263](https://github.com/zendeskgarden/react-components/pull/1263) chore(deps): update dependency babel-plugin-styled-components to v2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1258](https://github.com/zendeskgarden/react-components/pull/1258) chore(deps): update dependency @rollup/plugin-commonjs to v21 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1255](https://github.com/zendeskgarden/react-components/pull/1255) chore(deps): update node orb to v4.9.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1254](https://github.com/zendeskgarden/react-components/pull/1254) fix(deps): update non-major example dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#1260](https://github.com/zendeskgarden/react-components/pull/1260) chore(deps): update dependency @svgr/webpack to v6 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `modals`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`
  * [#1257](https://github.com/zendeskgarden/react-components/pull/1257) fix(deps): update dependency @zendeskgarden/container-utilities to ^0.7.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1256](https://github.com/zendeskgarden/react-components/pull/1256) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.47.1 (2021-12-09)

#### :bug: Bug Fix
* `datepickers`
  * [#1253](https://github.com/zendeskgarden/react-components/pull/1253) fix(datepicker): remove calender dom elements when hidden ([@mtomcal](https://github.com/mtomcal))

## v8.47.0 (2021-12-02)

#### :rocket: New Feature
* `dropdowns`, `theming`
  * [#1246](https://github.com/zendeskgarden/react-components/pull/1246) feat(dropdown): add danger state to menu items ([@exelarios](https://github.com/exelarios))
* `chrome`
  * [#1231](https://github.com/zendeskgarden/react-components/pull/1231) feat(chrome): create sheet components ([@Francois-Esquire](https://github.com/Francois-Esquire))

#### :bug: Bug Fix
* `buttons`
  * [#1250](https://github.com/zendeskgarden/react-components/pull/1250) fix(buttons): Remove repeated word from prop description ([@smritimadan](https://github.com/smritimadan))

#### :seedling: Internal
* `chrome`
  * [#1252](https://github.com/zendeskgarden/react-components/pull/1252) chore(chrome): update size snapshot ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `.template`
  * [#1251](https://github.com/zendeskgarden/react-components/pull/1251) chore: enhance `yarn new` script ([@jzempel](https://github.com/jzempel))

## v8.46.0 (2021-11-24)

#### :rocket: New Feature
* `forms`
  * [#1249](https://github.com/zendeskgarden/react-components/pull/1249) feat(forms): add File component enhancements ([@jzempel](https://github.com/jzempel))

## v8.45.0 (2021-11-17)

#### :rocket: New Feature
* `accordions`
  * [#1242](https://github.com/zendeskgarden/react-components/pull/1242) feat(accordions): add default expanded sections prop ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* `buttons`
  * [#1248](https://github.com/zendeskgarden/react-components/pull/1248) fix(buttons): do not persist link color on click ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#1247](https://github.com/zendeskgarden/react-components/pull/1247) chore(deps): bump color-string from 1.5.3 to 1.6.0 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1245](https://github.com/zendeskgarden/react-components/pull/1245) chore(deps): bump url-parse from 1.4.7 to 1.5.3 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
* `modals`, `notifications`, `tables`
  * [#1244](https://github.com/zendeskgarden/react-components/pull/1244) chore(deps): update @types/react ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.44.2 (2021-11-11)

#### :bug: Bug Fix
* `loaders`
  * [#1233](https://github.com/zendeskgarden/react-components/pull/1233) fix(spinner): fix placeholder proportions ([@mtomcal](https://github.com/mtomcal))

#### :seedling: Internal
* Other
  * [#1243](https://github.com/zendeskgarden/react-components/pull/1243) chore: remove version lifecycle package lockfile updates ([@jzempel](https://github.com/jzempel))
  * [#1240](https://github.com/zendeskgarden/react-components/pull/1240) fix: duplicate characters in `version` script ([@jzempel](https://github.com/jzempel))
  * [#1239](https://github.com/zendeskgarden/react-components/pull/1239) chore(deps): bump path-parse from 1.0.6 to 1.0.7 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1238](https://github.com/zendeskgarden/react-components/pull/1238) chore(deps): update dependency prettier to v2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1236](https://github.com/zendeskgarden/react-components/pull/1236) chore(deps): bump tar from 4.4.13 to 4.4.19 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1235](https://github.com/zendeskgarden/react-components/pull/1235) chore(deps): bump tmpl from 1.0.4 to 1.0.5 in /examples/codesandbox ([@dependabot[bot]](https://github.com/apps/dependabot))
* `dropdowns`
  * [#1241](https://github.com/zendeskgarden/react-components/pull/1241) chore: remove multiple `displayName` assignments per file ([@jzempel](https://github.com/jzempel))
* `forms`, `modals`, `notifications`
  * [#1237](https://github.com/zendeskgarden/react-components/pull/1237) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`, `typography`, `utilities`
  * [#1234](https://github.com/zendeskgarden/react-components/pull/1234) chore: update renovate configuration ([@jzempel](https://github.com/jzempel))

## v8.44.1 (2021-11-03)

#### :bug: Bug Fix
* `colorpickers`
  * [#1230](https://github.com/zendeskgarden/react-components/pull/1230) fix(colorpickers): retain previous indices for uncontrolled color swatch ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* `forms`, `modals`, `notifications`, `tables`
  * [#1232](https://github.com/zendeskgarden/react-components/pull/1232) chore(deps): align root and sub-package @types/react ([@hzhu](https://github.com/hzhu))

## v8.44.0 (2021-10-27)

#### :rocket: New Feature
* `colorpickers`
  * [#1228](https://github.com/zendeskgarden/react-components/pull/1228) feat(colorpickers): add isOpen control prop to dialogs ([@hzhu](https://github.com/hzhu))

## v8.43.0 (2021-10-20)

#### :rocket: New Feature
* `colorpickers`
  * [#1226](https://github.com/zendeskgarden/react-components/pull/1226) feat(colorpickers): expose color swatch dialog state with a change ha… ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* `forms`
  * [#1227](https://github.com/zendeskgarden/react-components/pull/1227) fix(forms): styling precedence boost for `isCompact` label + field styling ([@jzempel](https://github.com/jzempel))

## v8.42.2 (2021-10-13)

#### :bug: Bug Fix
* `chrome`, `typography`
  * [#1225](https://github.com/zendeskgarden/react-components/pull/1225) fix(chrome,typography): use precedence boost notation to apply per instance styling ([@jzempel](https://github.com/jzempel))
* `colorpickers`
  * [#1221](https://github.com/zendeskgarden/react-components/pull/1221) fix(colorpickers): allow no selection on color swatch dialog ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#1223](https://github.com/zendeskgarden/react-components/pull/1223) chore(deps): upgrade webpack to v5 and storybook ([@Francois-Esquire](https://github.com/Francois-Esquire))

## v8.42.1 (2021-10-06)

#### :bug: Bug Fix
* `dropdowns`
  * [#1222](https://github.com/zendeskgarden/react-components/pull/1222) fix(dropdowns): improve `Menu` performance by deferring `getBoundingClientRect` call ([@jzempel](https://github.com/jzempel))
  * [#1220](https://github.com/zendeskgarden/react-components/pull/1220) fix(dropdowns): display compact menu `ItemMeta` info ([@jzempel](https://github.com/jzempel))
* `typography`
  * [#1219](https://github.com/zendeskgarden/react-components/pull/1219) fix(typography): improve fallback handling for invalid `CodeBlock` language ([@jzempel](https://github.com/jzempel))

## v8.42.0 (2021-09-29)

#### :rocket: New Feature
* `typography`
  * [#1216](https://github.com/zendeskgarden/react-components/pull/1216) feat(typography): add diff language styling to `CodeBlock` ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `modals`
  * [#1218](https://github.com/zendeskgarden/react-components/pull/1218) fix(modals): drawer modal backdrop required two clicks to close ([@Francois-Esquire](https://github.com/Francois-Esquire))
* `avatars`, `dropdowns`
  * [#1215](https://github.com/zendeskgarden/react-components/pull/1215) fix(types): export IAvatarProps and ILabelProps ([@mtomcal](https://github.com/mtomcal))

## v8.41.0 (2021-09-24)

#### :rocket: New Feature
* `colorpickers`
  * [#1208](https://github.com/zendeskgarden/react-components/pull/1208) feat(colorpickers): introduce color swatch ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* `dropdowns`
  * [#1176](https://github.com/zendeskgarden/react-components/pull/1176) fix(dropdowns): Ensure the input value is preserved and announced by screen readers ([@smritimadan](https://github.com/smritimadan))

#### :seedling: Internal
* `accordions`, `dropdowns`, `forms`, `tabs`
  * [#1213](https://github.com/zendeskgarden/react-components/pull/1213) refactor(components): replace utility useCombinedRefs with mergeRefs ([@Francois-Esquire](https://github.com/Francois-Esquire))
* Other
  * [#1214](https://github.com/zendeskgarden/react-components/pull/1214) chore(babel): update config for private-property-in-object plugin ([@Francois-Esquire](https://github.com/Francois-Esquire))
  * [#1194](https://github.com/zendeskgarden/react-components/pull/1194) chore(deps): update dependency @rollup/plugin-commonjs to v20 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1212](https://github.com/zendeskgarden/react-components/pull/1212) chore(deps): bump y18n from 4.0.0 to 4.0.3 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1205](https://github.com/zendeskgarden/react-components/pull/1205) chore(deps): update dependency husky to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1210](https://github.com/zendeskgarden/react-components/pull/1210) chore(deps): bump axios from 0.21.1 to 0.21.4 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1211](https://github.com/zendeskgarden/react-components/pull/1211) chore(deps): bump ws from 5.2.2 to 5.2.3 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1201](https://github.com/zendeskgarden/react-components/pull/1201) chore(deps): update dependency @types/jest to v27 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1209](https://github.com/zendeskgarden/react-components/pull/1209) chore(deps): bump glob-parent from 5.1.0 to 5.1.2 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1204](https://github.com/zendeskgarden/react-components/pull/1204) chore(deps): update dependency @zendeskgarden/eslint-config to v21 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1200](https://github.com/zendeskgarden/react-components/pull/1200) fix(deps): update non-major example dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.40.1 (2021-09-15)

#### :bug: Bug Fix
* `tabs`
  * [#1172](https://github.com/zendeskgarden/react-components/pull/1172) fix(tabs): render without a `ThemeProvider` ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `tooltips`
  * [#1206](https://github.com/zendeskgarden/react-components/pull/1206) chore(tooltips): update container-tooltip ([@hzhu](https://github.com/hzhu))
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1203](https://github.com/zendeskgarden/react-components/pull/1203) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `modals`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`
  * [#1193](https://github.com/zendeskgarden/react-components/pull/1193) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#1195](https://github.com/zendeskgarden/react-components/pull/1195) fix(deps): pin dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1202](https://github.com/zendeskgarden/react-components/pull/1202) chore(renovate): refactor config ([@rarkins](https://github.com/rarkins))
  * [#1175](https://github.com/zendeskgarden/react-components/pull/1175) chore(scripts): enhance deploy with added bandwidth checking ([@jzempel](https://github.com/jzempel))
  * [#1192](https://github.com/zendeskgarden/react-components/pull/1192) chore(renovate): update to resolve config warnings ([@jzempel](https://github.com/jzempel))
  * [#1173](https://github.com/zendeskgarden/react-components/pull/1173) chore(storybook): add browser env for disabling addon-docs ([@jzempel](https://github.com/jzempel))
* `colorpickers`, `datepickers`, `notifications`, `tooltips`
  * [#1189](https://github.com/zendeskgarden/react-components/pull/1189) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.40.0 (2021-09-01)

#### :rocket: New Feature
* `colorpickers`
  * [#1171](https://github.com/zendeskgarden/react-components/pull/1171) feat(colorpickers): add `isOpaque` prop for removing alpha controls ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* [#1169](https://github.com/zendeskgarden/react-components/pull/1169) chore: remove bojagi ([@jzempel](https://github.com/jzempel))

## v8.39.1 (2021-08-26)

#### :bug: Bug Fix
* `dropdowns`
  * [#1168](https://github.com/zendeskgarden/react-components/pull/1168) fix(dropdowns): menu item anchor styling ([@jzempel](https://github.com/jzempel))
  * [#1158](https://github.com/zendeskgarden/react-components/pull/1158) fix(dropdowns): add missing data-garden- attributes to menu item icon elements ([@jzempel](https://github.com/jzempel))
* `dropdowns`, `forms`
  * [#1166](https://github.com/zendeskgarden/react-components/pull/1166) fix(forms): refactor `FileList` component ([@jzempel](https://github.com/jzempel))
* `forms`
  * [#1164](https://github.com/zendeskgarden/react-components/pull/1164) fix(forms): input group `Button` margin override ([@jzempel](https://github.com/jzempel))
* `accordions`
  * [#1160](https://github.com/zendeskgarden/react-components/pull/1160) fix(accordions): timeline view styling ([@jzempel](https://github.com/jzempel))
* `pagination`
  * [#1157](https://github.com/zendeskgarden/react-components/pull/1157) fix(pagination): page disabled and background color transition styling ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#1163](https://github.com/zendeskgarden/react-components/pull/1163) chore: add bojagi ([@jzempel](https://github.com/jzempel))
  * [#1161](https://github.com/zendeskgarden/react-components/pull/1161) chore(deps): bump path-parse from 1.0.6 to 1.0.7 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#1154](https://github.com/zendeskgarden/react-components/pull/1154) chore(deps): update dependency @zendeskgarden/css-bedrock to v9 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1153](https://github.com/zendeskgarden/react-components/pull/1153) chore(deps): update dependency @testing-library/react-hooks to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1152](https://github.com/zendeskgarden/react-components/pull/1152) chore(deps): update dependency @testing-library/react to v12 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1151](https://github.com/zendeskgarden/react-components/pull/1151) chore(deps): update dependency @rollup/plugin-replace to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1149](https://github.com/zendeskgarden/react-components/pull/1149) chore(deps): update node orb to v4.5.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1147](https://github.com/zendeskgarden/react-components/pull/1147) chore(deps): update dependency typescript to v3.9.10 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1145](https://github.com/zendeskgarden/react-components/pull/1145) chore(deps): update dependency ora to v5.4.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1144](https://github.com/zendeskgarden/react-components/pull/1144) chore(deps): update dependency jest-styled-components to v7.0.5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1143](https://github.com/zendeskgarden/react-components/pull/1143) chore(deps): update dependency inquirer to v8.1.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1142](https://github.com/zendeskgarden/react-components/pull/1142) chore(deps): update dependency fork-ts-checker-webpack-plugin to v6.2.12 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1141](https://github.com/zendeskgarden/react-components/pull/1141) chore(deps): update dependency envalid to v7.1.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1140](https://github.com/zendeskgarden/react-components/pull/1140) chore(deps): update dependency coveralls to v3.1.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1139](https://github.com/zendeskgarden/react-components/pull/1139) chore(deps): update dependency acorn-jsx to v5.3.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1135](https://github.com/zendeskgarden/react-components/pull/1135) chore(deps): update dependency @types/react-dom to v17.0.9 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1133](https://github.com/zendeskgarden/react-components/pull/1133) chore(deps): update dependency @types/prop-types to v15.7.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1132](https://github.com/zendeskgarden/react-components/pull/1132) chore(deps): update dependency @types/jest to v26.0.24 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1131](https://github.com/zendeskgarden/react-components/pull/1131) chore(deps): update dependency @rollup/plugin-node-resolve to v13.0.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1129](https://github.com/zendeskgarden/react-components/pull/1129) chore(deps): update babel monorepo to v7.14.7 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#1150](https://github.com/zendeskgarden/react-components/pull/1150) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `tables`
  * [#1148](https://github.com/zendeskgarden/react-components/pull/1148) chore(deps): update dependency @types/react-beautiful-dnd to v13.1.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1137](https://github.com/zendeskgarden/react-components/pull/1137) chore(deps): update dependency @types/react-window to v1.8.4 ([@renovate[bot]](https://github.com/apps/renovate))
* `forms`
  * [#1146](https://github.com/zendeskgarden/react-components/pull/1146) chore(deps): update dependency react-dropzone to v11.3.4 ([@renovate[bot]](https://github.com/apps/renovate))
* `pagination`
  * [#1138](https://github.com/zendeskgarden/react-components/pull/1138) chore(deps): update dependency @types/styled-components to v5.1.11 ([@renovate[bot]](https://github.com/apps/renovate))
* `modals`, `notifications`
  * [#1136](https://github.com/zendeskgarden/react-components/pull/1136) chore(deps): update dependency @types/react-transition-group to v4.4.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `dropdowns`, `forms`, `modals`, `notifications`, `tables`
  * [#1134](https://github.com/zendeskgarden/react-components/pull/1134) chore(deps): update dependency @types/react to v17.0.14 ([@renovate[bot]](https://github.com/apps/renovate))
## v8.39.0 (2021-07-14)

#### :rocket: New Feature

- `dropdowns`, `forms`
  - [#1126](https://github.com/zendeskgarden/react-components/pull/1126) feat(forms): create file list component ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- `modals`, `notifications`, `tables`
  - [#1097](https://github.com/zendeskgarden/react-components/pull/1097) chore(deps): update dependency @types/react to v17.0.11 ([@renovate[bot]](https://github.com/apps/renovate))
## v8.38.0 (2021-06-23)

#### :rocket: New Feature

- `accordions`
  - [#1120](https://github.com/zendeskgarden/react-components/pull/1120) feat(accordions): create new timeline component ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation

- [#1123](https://github.com/zendeskgarden/react-components/pull/1123) chore(readme): update copyright year ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  - [#1112](https://github.com/zendeskgarden/react-components/pull/1112) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- Other
  - [#1119](https://github.com/zendeskgarden/react-components/pull/1119) chore(deps): bump dns-packet from 1.3.1 to 1.3.4 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
- `typography`
  - [#1118](https://github.com/zendeskgarden/react-components/pull/1118) chore(typography): use scroll region hook for code block ([@hzhu](https://github.com/hzhu))
## v8.37.1 (2021-05-26)

#### :bug: Bug Fix

- `chrome`
  - [#1117](https://github.com/zendeskgarden/react-components/pull/1117) fix(chrome): recalculate height of subnavs when children change ([@hzhu](https://github.com/hzhu))
- `buttons`, `forms`
  - [#1091](https://github.com/zendeskgarden/react-components/pull/1091) fix(forms, buttons): finesse component group z-index transitions ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal

- Other
  - [#1115](https://github.com/zendeskgarden/react-components/pull/1115) chore(deps): update dependency @rollup/plugin-node-resolve to v13 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1114](https://github.com/zendeskgarden/react-components/pull/1114) fix(deps): update gatsby monorepo (major) ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1113](https://github.com/zendeskgarden/react-components/pull/1113) chore(deps): update dependency @rollup/plugin-commonjs to v19 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1111](https://github.com/zendeskgarden/react-components/pull/1111) chore(deps): update node orb to v4.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1109](https://github.com/zendeskgarden/react-components/pull/1109) chore(deps): update storybook monorepo to v6.2.9 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1108](https://github.com/zendeskgarden/react-components/pull/1108) chore(deps): update dependency ts-jest to v26.5.6 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1107](https://github.com/zendeskgarden/react-components/pull/1107) chore(deps): update dependency micromatch to v4.0.4 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1106](https://github.com/zendeskgarden/react-components/pull/1106) chore(deps): update dependency jest-styled-components to v7.0.4 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1098](https://github.com/zendeskgarden/react-components/pull/1098) chore(deps): update dependency @types/react-dom to v17.0.5 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1105](https://github.com/zendeskgarden/react-components/pull/1105) chore(deps): update dependency glob to v7.1.7 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1104](https://github.com/zendeskgarden/react-components/pull/1104) chore(deps): update dependency fork-ts-checker-webpack-plugin to v6.2.10 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1103](https://github.com/zendeskgarden/react-components/pull/1103) chore(deps): update dependency eslint-plugin-react to v7.23.2 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1102](https://github.com/zendeskgarden/react-components/pull/1102) chore(deps): update dependency eslint-plugin-jest to v24.3.6 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1101](https://github.com/zendeskgarden/react-components/pull/1101) chore(deps): update dependency chalk to v4.1.1 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1100](https://github.com/zendeskgarden/react-components/pull/1100) chore(deps): update dependency @zendeskgarden/svg-icons to v6.30.2 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1096](https://github.com/zendeskgarden/react-components/pull/1096) chore(deps): update dependency @types/jest to v26.0.23 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1094](https://github.com/zendeskgarden/react-components/pull/1094) chore(deps): update dependency @testing-library/react-hooks to v5.1.3 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1093](https://github.com/zendeskgarden/react-components/pull/1093) chore(deps): update dependency @testing-library/react to v11.2.7 ([@renovate[bot]](https://github.com/apps/renovate))
- `accordions`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  - [#1110](https://github.com/zendeskgarden/react-components/pull/1110) chore(deps): update dependency @zendeskgarden/svg-icons to v6.30.2 ([@renovate[bot]](https://github.com/apps/renovate))
- `tables`
  - [#1099](https://github.com/zendeskgarden/react-components/pull/1099) chore(deps): update dependency @types/react-window to v1.8.3 ([@renovate[bot]](https://github.com/apps/renovate))
- `datepickers`
  - [#1095](https://github.com/zendeskgarden/react-components/pull/1095) chore(deps): update dependency @testing-library/user-event to v13.1.9 ([@renovate[bot]](https://github.com/apps/renovate))
## v8.37.0 (2021-05-12)

#### :rocket: New Feature

- `forms`
  - [#1088](https://github.com/zendeskgarden/react-components/pull/1088) feat(forms): add compact styling to Radio, Checkbox, and Toggle components ([@jzempel](https://github.com/jzempel))
  - [#1076](https://github.com/zendeskgarden/react-components/pull/1076) feat(forms): add new fieldset & legend component ([@hzhu](https://github.com/hzhu))
- `buttons`, `colorpickers`, `dropdowns`, `forms`
  - [#1081](https://github.com/zendeskgarden/react-components/pull/1081) feat(buttons,colorpickers,dropdowns,forms): add support for neutral button styling ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix

- `dropdowns`
  - [#1083](https://github.com/zendeskgarden/react-components/pull/1083) fix(dropdowns): handle combobox controlled open ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal

- Other
  - [#1087](https://github.com/zendeskgarden/react-components/pull/1087) chore(deps): bump hosted-git-info from 2.8.5 to 2.8.9 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  - [#1086](https://github.com/zendeskgarden/react-components/pull/1086) chore(deps): bump ua-parser-js from 0.7.21 to 0.7.28 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  - [#1085](https://github.com/zendeskgarden/react-components/pull/1085) chore(deps): bump lodash from 4.17.19 to 4.17.21 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  - [#1084](https://github.com/zendeskgarden/react-components/pull/1084) chore(deps): bump url-parse from 1.4.7 to 1.5.1 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  - [#1082](https://github.com/zendeskgarden/react-components/pull/1082) chore(demo): restore coverage report ([@jzempel](https://github.com/jzempel))
  - [#1077](https://github.com/zendeskgarden/react-components/pull/1077) chore(deps): bump ssri from 6.0.1 to 6.0.2 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
- `.template`
  - [#1080](https://github.com/zendeskgarden/react-components/pull/1080) chore(template): update yarn new ([@hzhu](https://github.com/hzhu))
- `dropdowns`
  - [#1078](https://github.com/zendeskgarden/react-components/pull/1078) chore(dropdowns): update lock & upgrade downshift ([@hzhu](https://github.com/hzhu))
## v8.36.2 (2021-04-21)

#### :bug: Bug Fix

- `colorpickers`
  - [#1075](https://github.com/zendeskgarden/react-components/pull/1075) fix(colorpickers): stabilize slider position styling ([@jzempel](https://github.com/jzempel))
## v8.36.1 (2021-04-07)

#### :bug: Bug Fix

- `colorpickers`
  - [#1074](https://github.com/zendeskgarden/react-components/pull/1074) fix(colorpickers): override tooltip modal width ([@hzhu](https://github.com/hzhu))
## v8.36.0 (2021-04-07)

#### :rocket: New Feature

- `dropdowns`, `forms`
  - [#1073](https://github.com/zendeskgarden/react-components/pull/1073) feat(dropdowns): new combobox component ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix

- `colorpickers`
  - [#1071](https://github.com/zendeskgarden/react-components/pull/1071) fix(colorpickers): allow props to be applied to color dialog trigger ([@hzhu](https://github.com/hzhu))
- `notifications`
  - [#1072](https://github.com/zendeskgarden/react-components/pull/1072) fix(notifications): use IE11 compatible react-uid ([@hzhu](https://github.com/hzhu))
- `dropdowns`
  - [#1059](https://github.com/zendeskgarden/react-components/pull/1059) fix(dropdowns): ensure current theme is passed to underlying FauxInput ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal

- Other
  - [#1068](https://github.com/zendeskgarden/react-components/pull/1068) chore(deps): update dependency inquirer to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1069](https://github.com/zendeskgarden/react-components/pull/1069) chore(deps): update dependency lerna to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1064](https://github.com/zendeskgarden/react-components/pull/1064) chore(deps): update dependency @rollup/plugin-commonjs to v18 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1070](https://github.com/zendeskgarden/react-components/pull/1070) chore: upgrade husky and stylelint ([@jzempel](https://github.com/jzempel))
  - [#1067](https://github.com/zendeskgarden/react-components/pull/1067) chore(deps): update dependency husky to v6 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1066](https://github.com/zendeskgarden/react-components/pull/1066) chore(deps): update dependency @zendeskgarden/stylelint-config to v16 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1061](https://github.com/zendeskgarden/react-components/pull/1061) chore(deps): update node orb to v4.2.1 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#1058](https://github.com/zendeskgarden/react-components/pull/1058) chore: add "primary hue" tool to storybook ([@jzempel](https://github.com/jzempel))
- `datepickers`, `dropdowns`
  - [#1065](https://github.com/zendeskgarden/react-components/pull/1065) chore(deps): update dependency @testing-library/user-event to v13 ([@renovate[bot]](https://github.com/apps/renovate))
- `accordions`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  - [#1063](https://github.com/zendeskgarden/react-components/pull/1063) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  - [#1062](https://github.com/zendeskgarden/react-components/pull/1062) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- `colorpickers`, `forms`, `loaders`, `pagination`
  - [#1051](https://github.com/zendeskgarden/react-components/pull/1051) chore(deps): upgrade styled-components to v5 ([@austingreendev](https://github.com/austingreendev))
- `colorpickers`, `forms`
  - [#1060](https://github.com/zendeskgarden/react-components/pull/1060) chore(forms, colorpickers): provide mechanism for removing Range lower track ([@jzempel](https://github.com/jzempel))
## v8.35.0 (2021-03-24)

#### :rocket: New Feature

- `notifications`
  - [#1055](https://github.com/zendeskgarden/react-components/pull/1055) feat(notifications): allow placement customizations for toast ([@austingreendev](https://github.com/austingreendev))

#### :bug: Bug Fix

- `modals`
  - [#1052](https://github.com/zendeskgarden/react-components/pull/1052) fix(modals): allow pointer-events to pass through fading tooltip modal ([@hzhu](https://github.com/hzhu))
- `accordions`
  - [#1050](https://github.com/zendeskgarden/react-components/pull/1050) fix(accordions): stepper and accordion typeface styling ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation

- `modals`
  - [#1057](https://github.com/zendeskgarden/react-components/pull/1057) chore(modals): update README example to use correct props ([@hzhu](https://github.com/hzhu))
- `.template`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `tables`, `tags`, `theming`, `tooltips`, `utilities`
  - [#1042](https://github.com/zendeskgarden/react-components/pull/1042) chore(docs): remove styleguidist dependencies ([@austingreendev](https://github.com/austingreendev))
- `grid`
  - [#1047](https://github.com/zendeskgarden/react-components/pull/1047) chore(docs): migrate react-grid to storybook ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- `modals`
  - [#1056](https://github.com/zendeskgarden/react-components/pull/1056) chore(modals): remove @types/react-transition-group direct dependency ([@jzempel](https://github.com/jzempel))
  - [#1054](https://github.com/zendeskgarden/react-components/pull/1054) chore(modals): upgrade container-modal ([@hzhu](https://github.com/hzhu))
- `accordions`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `tables`, `tabs`, `typography`
  - [#1004](https://github.com/zendeskgarden/react-components/pull/1004) chore(deps): update dependency @zendeskgarden/eslint-config to v19 ([@renovate[bot]](https://github.com/apps/renovate))
- `avatars`, `chrome`, `dropdowns`, `tables`, `tags`
  - [#1053](https://github.com/zendeskgarden/react-components/pull/1053) chore(docs): remove unused storybook example images ([@jzempel](https://github.com/jzempel))
- Other
  - [#1049](https://github.com/zendeskgarden/react-components/pull/1049) chore(docs): use evergreen bedrock CSS link ([@jzempel](https://github.com/jzempel))

## v8.34.0 (2021-03-17)

#### :rocket: New Feature
* `datepickers`, `dropdowns`, `forms`
  * [#1041](https://github.com/zendeskgarden/react-components/pull/1041) feat(forms): add support for accessibly hidden labels ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `modals`, `notifications`
  * [#1046](https://github.com/zendeskgarden/react-components/pull/1046) fix(modals|notifications): ensure react-transition-group usage works with StrictMode ([@austingreendev](https://github.com/austingreendev))
* `colorpickers`
  * [#1043](https://github.com/zendeskgarden/react-components/pull/1043) fix(colorpickers): add missing react-popper peer dependency ([@jzempel](https://github.com/jzempel))
  * [#1040](https://github.com/zendeskgarden/react-components/pull/1040) fix(colorpickers): add missing popper dependency ([@jzempel](https://github.com/jzempel))
* `dropdowns`
  * [#1039](https://github.com/zendeskgarden/react-components/pull/1039) fix(deps): update dropdowns peer dependencies to include React v17 ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation
* `dropdowns`
  * [#1037](https://github.com/zendeskgarden/react-components/pull/1037) chore(dropdowns): migrate react-dropdowns to Storybook ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#1026](https://github.com/zendeskgarden/react-components/pull/1026) chore(deps): bump elliptic from 6.5.3 to 6.5.4 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))

## v8.33.0 (2021-03-12)

#### :rocket: New Feature
* `.template`, `colorpickers`, `forms`
  * [#1018](https://github.com/zendeskgarden/react-components/pull/1018) feat(colorpickers): introduce color pickers package ([@hzhu](https://github.com/hzhu))
* `modals`, `notifications`, `tables`
  * [#1021](https://github.com/zendeskgarden/react-components/pull/1021) feat(notifications): introduce toast pattern and utilities ([@austingreendev](https://github.com/austingreendev))

#### :bug: Bug Fix
* `colorpickers`, `modals`, `tooltips`
  * [#1033](https://github.com/zendeskgarden/react-components/pull/1033) fix(colorpickers|tooltips): color well and tooltip fixes ([@hzhu](https://github.com/hzhu))
* `modals`
  * [#1035](https://github.com/zendeskgarden/react-components/pull/1035) fix(modals): TooltipModal arrow styling ([@jzempel](https://github.com/jzempel))
  * [#1024](https://github.com/zendeskgarden/react-components/pull/1024) fix(modals): fadeout tooltip modal ([@hzhu](https://github.com/hzhu))
* `colorpickers`
  * [#1034](https://github.com/zendeskgarden/react-components/pull/1034) fix(colorpickers): prevent subpixel slider height increase ([@jzempel](https://github.com/jzempel))
  * [#1031](https://github.com/zendeskgarden/react-components/pull/1031) fix(colorpickers): disable hex spell checking and arrow by default ([@jzempel](https://github.com/jzempel))
  * [#1030](https://github.com/zendeskgarden/react-components/pull/1030) fix(colorpickers): move react-buttons to a direct dependency ([@jzempel](https://github.com/jzempel))
  * [#1029](https://github.com/zendeskgarden/react-components/pull/1029) fix(colorpickers): fix broken color picker dialog test ([@hzhu](https://github.com/hzhu))
  * [#1027](https://github.com/zendeskgarden/react-components/pull/1027) fix(colorpickers): correct ColorpickerDialog displayName ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* `forms`
  * [#1028](https://github.com/zendeskgarden/react-components/pull/1028) chore(docs): migrate react-forms to storybook ([@austingreendev](https://github.com/austingreendev))

#### :seedling: Internal
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `colorpickers`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`, `typography`
  * [#1008](https://github.com/zendeskgarden/react-components/pull/1008) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `modals`
  * [#1025](https://github.com/zendeskgarden/react-components/pull/1025) chore(modals): upgrade container-modal version ([@hzhu](https://github.com/hzhu))
## v8.32.2 (2021-03-03)

#### :bug: Bug Fix

- `avatars`, `typography`
  - [#1023](https://github.com/zendeskgarden/react-components/pull/1023) fix(typography): prevent monospace Code and Span from pixel shifting line heights ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation

- `theming`
  - [#1014](https://github.com/zendeskgarden/react-components/pull/1014) chore(theming): migrate theming documentation to storybook ([@austingreendev](https://github.com/austingreendev))

## v8.32.1 (2021-02-17)

#### :bug: Bug Fix
* `dropdowns`
  * [#1020](https://github.com/zendeskgarden/react-components/pull/1020) fix(dropdowns): allow multiselect to receive focus when state is cont… ([@austingreendev](https://github.com/austingreendev))
* `tables`
  * [#1019](https://github.com/zendeskgarden/react-components/pull/1019) fix(tables): ensure readonly tables don't show focus treatment ([@austingreendev](https://github.com/austingreendev))
* `buttons`
  * [#1017](https://github.com/zendeskgarden/react-components/pull/1017) fix(buttons): danger IconButton foreground color styling ([@jzempel](https://github.com/jzempel))
* `accordions`
  * [#1013](https://github.com/zendeskgarden/react-components/pull/1013) fix(accordions): Stop stepper's counter incrementing twice in React.StrictMode ([@MarkSFrancis](https://github.com/MarkSFrancis))
## v8.32.0 (2021-02-10)

#### :rocket: New Feature

- `typography`
  - [#1012](https://github.com/zendeskgarden/react-components/pull/1012) feat(typography): add line highlighting to CodeBlock component ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix

- `typography`
  - [#1015](https://github.com/zendeskgarden/react-components/pull/1015) fix(typography): simplify DOM structure for list components ([@jzempel](https://github.com/jzempel))
- `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  - [#1011](https://github.com/zendeskgarden/react-components/pull/1011) fix(deps): ensure all packages include prop-types and lodash correctly ([@austingreendev](https://github.com/austingreendev))

## v8.31.1 (2021-02-04)

#### :bug: Bug Fix
* Other
  * [#1010](https://github.com/zendeskgarden/react-components/pull/1010) fix(build): allow version tagging process to complete ([@austingreendev](https://github.com/austingreendev))
* `buttons`
  * [#1009](https://github.com/zendeskgarden/react-components/pull/1009) fix(buttons): disabled IconButton background color ([@jzempel](https://github.com/jzempel))
* `chrome`
  * [#1000](https://github.com/zendeskgarden/react-components/pull/1000) fix(chrome): enable SkipNav fade out transition animation ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#1005](https://github.com/zendeskgarden/react-components/pull/1005) chore(deps): update dependency commander to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1003](https://github.com/zendeskgarden/react-components/pull/1003) chore(deps): update dependency @testing-library/react-hooks to v5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1006](https://github.com/zendeskgarden/react-components/pull/1006) chore(deps): update dependency envalid to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#1007](https://github.com/zendeskgarden/react-components/pull/1007) fix(deps): update react monorepo to v17 (major) ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `loaders`, `tooltips`, `typography`
  * [#1002](https://github.com/zendeskgarden/react-components/pull/1002) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#1001](https://github.com/zendeskgarden/react-components/pull/1001) chore(deps): update dependency @zendeskgarden/svg-icons to v6.28.0 ([@renovate[bot]](https://github.com/apps/renovate))

## v8.31.0 (2021-01-27)

#### :rocket: New Feature
* `chrome`
  * [#994](https://github.com/zendeskgarden/react-components/pull/994) feat(chrome): add SkipNav component ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `accordions`
  * [#993](https://github.com/zendeskgarden/react-components/pull/993) fix(accordions): correct default color of accordion labels ([@austingreendev](https://github.com/austingreendev))
* Other
  * [#997](https://github.com/zendeskgarden/react-components/pull/997) fix(build): ensure typescript declarations are built with correct path ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation
* Other
  * [#998](https://github.com/zendeskgarden/react-components/pull/998) chore: simplify storybook configuration ([@jzempel](https://github.com/jzempel))
* `datepickers`, `tables`, `tags`
  * [#995](https://github.com/zendeskgarden/react-components/pull/995) chore(docs): migrate react-tables to storybook ([@austingreendev](https://github.com/austingreendev))
* `datepickers`
  * [#992](https://github.com/zendeskgarden/react-components/pull/992) chore(docs): migrate datepicker docs to storybook ([@austingreendev](https://github.com/austingreendev))
* `tooltips`
  * [#986](https://github.com/zendeskgarden/react-components/pull/986) chore(tooltips): migrate tooltip example to storybook ([@austingreendev](https://github.com/austingreendev))

#### :seedling: Internal
* [#991](https://github.com/zendeskgarden/react-components/pull/991) chore(deps): bump socket.io from 2.3.0 to 2.4.1 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
## v8.30.0 (2021-01-20)

#### :rocket: New Feature

- `modals`
  - [#988](https://github.com/zendeskgarden/react-components/pull/988) feat(modals): export placement type for tooltip modal ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix

- `dropdowns`, `tables`
  - [#990](https://github.com/zendeskgarden/react-components/pull/990) fix(dropdowns): allow menu usage in table elements ([@austingreendev](https://github.com/austingreendev))
- `theming`
  - [#984](https://github.com/zendeskgarden/react-components/pull/984) fix(theming): allow theming of typescript consumers ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation

- `avatars`, `tags`
  - [#987](https://github.com/zendeskgarden/react-components/pull/987) chore(tags): migrate Tag examples to storybook ([@austingreendev](https://github.com/austingreendev))
- Other
  - [#989](https://github.com/zendeskgarden/react-components/pull/989) docs: Add Modal's Header prop change to V8 migration ([@saescapa](https://github.com/saescapa))

#### :seedling: Internal

- `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  - [#985](https://github.com/zendeskgarden/react-components/pull/985) chore(deps): upgrade all packages to React v17 ([@austingreendev](https://github.com/austingreendev))

## v8.29.3 (2021-01-13)

#### :seedling: Internal
* `accordions`, `avatars`, `buttons`, `chrome`, `dropdowns`, `forms`, `loaders`, `tooltips`, `typography`
  * [#983](https://github.com/zendeskgarden/react-components/pull/983) chore: add missing and fix existing @extends clauses ([@jzempel](https://github.com/jzempel))

## v8.29.2 (2021-01-06)

#### :memo: Documentation
* `accordions`, `avatars`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`, `typography`
  * [#968](https://github.com/zendeskgarden/react-components/pull/968) chore: include @extends tags ([@Mikaelia](https://github.com/Mikaelia))

#### :seedling: Internal
* `accordions`, `avatars`, `buttons`, `datepickers`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#982](https://github.com/zendeskgarden/react-components/pull/982) chore: use @zendeskgarden/eslint-config plugins ([@jzempel](https://github.com/jzempel))

## v8.29.1 (2020-12-30)

#### :bug: Bug Fix
* `tables`
  * [#981](https://github.com/zendeskgarden/react-components/pull/981) fix(tables): sortable cell truncation ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#979](https://github.com/zendeskgarden/react-components/pull/979) chore(deps): update dependency fork-ts-checker-webpack-plugin to v6 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#972](https://github.com/zendeskgarden/react-components/pull/972) chore(deps): update dependency @rollup/plugin-node-resolve to v11 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#980](https://github.com/zendeskgarden/react-components/pull/980) chore(deps): update dependency rollup-plugin-analyzer to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#978](https://github.com/zendeskgarden/react-components/pull/978) chore(deps): update dependency execa to v5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#977](https://github.com/zendeskgarden/react-components/pull/977) chore(deps): update dependency eslint-config-prettier to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#976](https://github.com/zendeskgarden/react-components/pull/976) chore(deps): update dependency @zendeskgarden/stylelint-config to v15 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#971](https://github.com/zendeskgarden/react-components/pull/971) chore(deps): update dependency @rollup/plugin-commonjs to v17 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#975](https://github.com/zendeskgarden/react-components/pull/975) chore(deps): update dependency @zendeskgarden/eslint-config to v17 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#969](https://github.com/zendeskgarden/react-components/pull/969) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`, `typography`
  * [#970](https://github.com/zendeskgarden/react-components/pull/970) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.29.0 (2020-12-23)

#### :rocket: New Feature
* `tables`
  * [#955](https://github.com/zendeskgarden/react-components/pull/955) feat(tables): introduce read-only styling ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation
* `typography`
  * [#967](https://github.com/zendeskgarden/react-components/pull/967) chore(typography): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `tooltips`
  * [#966](https://github.com/zendeskgarden/react-components/pull/966) chore(tooltips): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `tags`
  * [#965](https://github.com/zendeskgarden/react-components/pull/965) chore(tags): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `tabs`
  * [#964](https://github.com/zendeskgarden/react-components/pull/964) chore(tabs): update prop descriptions  ([@Mikaelia](https://github.com/Mikaelia))
* `tables`
  * [#963](https://github.com/zendeskgarden/react-components/pull/963) chore(tables): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `notifications`, `pagination`
  * [#962](https://github.com/zendeskgarden/react-components/pull/962) chore(notifications, pagination): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `modals`
  * [#961](https://github.com/zendeskgarden/react-components/pull/961) chore(modals): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `loaders`
  * [#960](https://github.com/zendeskgarden/react-components/pull/960) chore(loaders): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `grid`
  * [#959](https://github.com/zendeskgarden/react-components/pull/959) chore(grid): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `chrome`, `forms`
  * [#958](https://github.com/zendeskgarden/react-components/pull/958) chore(forms): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `dropdowns`
  * [#957](https://github.com/zendeskgarden/react-components/pull/957) chore(dropdowns): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `datepickers`
  * [#956](https://github.com/zendeskgarden/react-components/pull/956) chore(datepickers): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `chrome`
  * [#954](https://github.com/zendeskgarden/react-components/pull/954) chore(chrome): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))

## v8.28.2 (2020-12-16)

#### :memo: Documentation
* `buttons`
  * [#953](https://github.com/zendeskgarden/react-components/pull/953) chore(buttons): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `avatars`
  * [#952](https://github.com/zendeskgarden/react-components/pull/952) chore(avatars): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))
* `accordions`
  * [#951](https://github.com/zendeskgarden/react-components/pull/951) chore(accordions): update prop descriptions ([@Mikaelia](https://github.com/Mikaelia))

#### :seedling: Internal
* [#950](https://github.com/zendeskgarden/react-components/pull/950) chore(deps): bump ini from 1.3.5 to 1.3.8 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))

## v8.28.1 (2020-12-02)

#### :bug: Bug Fix
* `dropdowns`
  * [#948](https://github.com/zendeskgarden/react-components/pull/948) fix(dropdowns): revert tab selection #943 ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation
* `dropdowns`
  * [#947](https://github.com/zendeskgarden/react-components/pull/947) chore(docs): update Menu arrow usage ([@austingreendev](https://github.com/austingreendev))

## v8.28.0 (2020-11-19)

#### :bug: Bug Fix
* `dropdowns`
  * [#943](https://github.com/zendeskgarden/react-components/pull/943) feat(dropdowns): ensure dropdowns allow space key in Safari with voiceover ([@austingreendev](https://github.com/austingreendev))
  * [#942](https://github.com/zendeskgarden/react-components/pull/942) fix(dropdowns): ensure Tab key selects highlighted items ([@austingreendev](https://github.com/austingreendev))
* Other
  * [#944](https://github.com/zendeskgarden/react-components/pull/944) fix(build): ensure jest is able to run tests in all environments ([@austingreendev](https://github.com/austingreendev))
## v8.27.0 (2020-11-18)

#### :rocket: New Feature

- `typography`
  - [#939](https://github.com/zendeskgarden/react-components/pull/939) feat(typography): add Blockquote size prop to control sibling spacing ([@jzempel](https://github.com/jzempel))
  - [#937](https://github.com/zendeskgarden/react-components/pull/937) feat(typography): add Blockquote component ([@jzempel](https://github.com/jzempel))
  - [#925](https://github.com/zendeskgarden/react-components/pull/925) feat(typography): support anchor-styled code snippets ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix

- `forms`
  - [#940](https://github.com/zendeskgarden/react-components/pull/940) fix(forms): restore relative positioning context on Field container ([@jzempel](https://github.com/jzempel))
- `loaders`
  - [#936](https://github.com/zendeskgarden/react-components/pull/936) fix(loaders): fix Dot loader for IE11 ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- [#941](https://github.com/zendeskgarden/react-components/pull/941) chore: fix production storybook navigation ([@jzempel](https://github.com/jzempel))
## v8.26.0 (2020-11-11)

#### :rocket: New Feature

- `accordions`
  - [#935](https://github.com/zendeskgarden/react-components/pull/935) feat(accordions): allow animation to be turned off ([@hzhu](https://github.com/hzhu))
- `modals`
  - [#929](https://github.com/zendeskgarden/react-components/pull/929) feat(modals): add prop type checks ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation

- `avatars`
  - [#926](https://github.com/zendeskgarden/react-components/pull/926) chore(avatars): update prop descriptions ([@KICKdesigns](https://github.com/KICKdesigns))
- `accordions`
  - [#924](https://github.com/zendeskgarden/react-components/pull/924) chore(accordions): update prop descriptions ([@KICKdesigns](https://github.com/KICKdesigns))
- `modals`
  - [#910](https://github.com/zendeskgarden/react-components/pull/910) chore(docs): migrate react-modals examples to Storybook ([@hzhu](https://github.com/hzhu))
- `breadcrumbs`
  - [#927](https://github.com/zendeskgarden/react-components/pull/927) chore(breadcrumbs): update prop descriptions ([@KICKdesigns](https://github.com/KICKdesigns))

#### :seedling: Internal

- `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `dropdowns`, `forms`, `grid`, `loaders`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  - [#920](https://github.com/zendeskgarden/react-components/pull/920) fix(deps): update dependency polished to v4 ([@renovate[bot]](https://github.com/apps/renovate))
- Other
  - [#917](https://github.com/zendeskgarden/react-components/pull/917) chore(deps): update dependency markdown-loader to v6 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#914](https://github.com/zendeskgarden/react-components/pull/914) chore(deps): update dependency @rollup/plugin-commonjs to v16 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#933](https://github.com/zendeskgarden/react-components/pull/933) chore(deps): update react ([@austingreendev](https://github.com/austingreendev))
  - [#915](https://github.com/zendeskgarden/react-components/pull/915) chore(deps): update dependency @rollup/plugin-node-resolve to v10 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#921](https://github.com/zendeskgarden/react-components/pull/921) fix(deps): update dependency react-scripts to v4 ([@renovate[bot]](https://github.com/apps/renovate))
- `chrome`, `modals`, `tables`
  - [#913](https://github.com/zendeskgarden/react-components/pull/913) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
- `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  - [#912](https://github.com/zendeskgarden/react-components/pull/912) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.25.2 (2020-11-04)

#### :bug: Bug Fix
* `dropdowns`
  * [#923](https://github.com/zendeskgarden/react-components/pull/923) fix(dropdowns): keep focus on multiselect input when navigating previous item ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* [#909](https://github.com/zendeskgarden/react-components/pull/909) chore(docs): update migration doc ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#922](https://github.com/zendeskgarden/react-components/pull/922) chore(deps): update node orb to v4.1.0 ([@renovate[bot]](https://github.com/apps/renovate))
## v8.25.1 (2020-10-28)

#### :bug: Bug Fix

- `modals`
  - [#907](https://github.com/zendeskgarden/react-components/pull/907) fix(modals): align close button ([@hzhu](https://github.com/hzhu))
- `tables`
  - [#904](https://github.com/zendeskgarden/react-components/pull/904) fix(tables): ensure sortable header cells have focus-visible styling ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation

- `pagination`
  - [#905](https://github.com/zendeskgarden/react-components/pull/905) chore(docs): migrate react-pagination examples to storybook ([@hzhu](https://github.com/hzhu))
- `notifications`
  - [#908](https://github.com/zendeskgarden/react-components/pull/908) chore(docs): migrate react-notifications examples to storybook ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- `buttons`, `dropdowns`, `pagination`, `tabs`
  - [#906](https://github.com/zendeskgarden/react-components/pull/906) chore: update selection based containers ([@hzhu](https://github.com/hzhu))

## v8.25.0 (2020-10-21)

#### :rocket: New Feature
* `theming`
  * [#897](https://github.com/zendeskgarden/react-components/pull/897) feat(theming): provide scoping <div> knock-out for ThemeProvider ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `dropdowns`
  * [#902](https://github.com/zendeskgarden/react-components/pull/902) fix(dropdowns): support Safari Voiceover commands ([@austingreendev](https://github.com/austingreendev))

#### :memo: Documentation
* `typography`
  * [#895](https://github.com/zendeskgarden/react-components/pull/895) chore(docs): migrate react-typography to storybook ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* Other
  * [#900](https://github.com/zendeskgarden/react-components/pull/900) chore(deps): bump object-path from 0.11.4 to 0.11.5 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
* `pagination`
  * [#898](https://github.com/zendeskgarden/react-components/pull/898) chore(pagination): get theme from context ([@hzhu](https://github.com/hzhu))

## v8.24.2 (2020-10-15)

#### :bug: Bug Fix
* `modals`, `notifications`
  * [#896](https://github.com/zendeskgarden/react-components/pull/896) fix(modals|notifications): update type definition for button elements ([@hzhu](https://github.com/hzhu))
* `modals`
  * [#894](https://github.com/zendeskgarden/react-components/pull/894) fix(modals): prevent html overflow ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* `avatars`, `dropdowns`
  * [#881](https://github.com/zendeskgarden/react-components/pull/881) chore(docs): migrate react-avatars examples to storybook ([@austingreendev](https://github.com/austingreendev))
## v8.24.1 (2020-10-07)

#### :bug: Bug Fix

- `buttons`
  - [#893](https://github.com/zendeskgarden/react-components/pull/893) fix(buttons): improve stroke/fill icon swap for ToggleIconButton ([@jzempel](https://github.com/jzempel))
- `modals`
  - [#892](https://github.com/zendeskgarden/react-components/pull/892) fix(modals): add backdrop transparency to drawer ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation

- `buttons`
  - [#889](https://github.com/zendeskgarden/react-components/pull/889) chore(docs): migrate react-buttons to storybook ([@hzhu](https://github.com/hzhu))

## v8.24.0 (2020-09-30)

#### :rocket: New Feature
* `modals`
  * [#884](https://github.com/zendeskgarden/react-components/pull/884) feat(modals): introduce drawer modal ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* `theming`
  * [#890](https://github.com/zendeskgarden/react-components/pull/890) fix(theming): update brand spec'd product colors ([@jzempel](https://github.com/jzempel))
* `tables`
  * [#888](https://github.com/zendeskgarden/react-components/pull/888) fix(table): revise cell type definition ([@rossmoody](https://github.com/rossmoody))
* `modals`
  * [#887](https://github.com/zendeskgarden/react-components/pull/887) fix(modals): provide ref object for focusvisible ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* `loaders`
  * [#885](https://github.com/zendeskgarden/react-components/pull/885) chore(docs): migrate react-loaders documentation to Storybook ([@austin94](https://github.com/austin94))
* `chrome`
  * [#883](https://github.com/zendeskgarden/react-components/pull/883) chore(docs): migrate react-chrome to storybook ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `datepickers`
  * [#871](https://github.com/zendeskgarden/react-components/pull/871) chore(deps): update typescript-eslint monorepo to v4 (major) ([@renovate[bot]](https://github.com/apps/renovate))
## v8.23.1 (2020-09-16)

#### :bug: Bug Fix

- `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  - [#882](https://github.com/zendeskgarden/react-components/pull/882) fix(build): ensure ts types directory is relative ([@austin94](https://github.com/austin94))
## v8.23.0 (2020-09-16)

#### :rocket: New Feature

- `forms`
  - [#879](https://github.com/zendeskgarden/react-components/pull/879) feat(forms): add readonly support for text inputs ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix

- `modals`
  - [#876](https://github.com/zendeskgarden/react-components/pull/876) fix(modals): allow Modal to be used in SSR environments ([@austin94](https://github.com/austin94))
- `typography`
  - [#877](https://github.com/zendeskgarden/react-components/pull/877) fix(typography): codeblock styling tweaks ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation

- `breadcrumbs`
  - [#880](https://github.com/zendeskgarden/react-components/pull/880) chore(docs): migrate react-breadcrumbs docs to storybook ([@austin94](https://github.com/austin94))
- `accordions`, `dropdowns`, `forms`
  - [#878](https://github.com/zendeskgarden/react-components/pull/878) chore(docs): migrate react-accordions examples to storybook ([@austin94](https://github.com/austin94))
- `tabs`, `theming`
  - [#873](https://github.com/zendeskgarden/react-components/pull/873) chore(docs): introduce storybook and migrate react-tabs examples ([@austin94](https://github.com/austin94))

#### :seedling: Internal

- `dropdowns`
  - [#867](https://github.com/zendeskgarden/react-components/pull/867) chore(deps): update dependency eslint-plugin-jest to v24 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#872](https://github.com/zendeskgarden/react-components/pull/872) fix(deps): update dependency downshift to v6 ([@renovate[bot]](https://github.com/apps/renovate))
- Other
  - [#865](https://github.com/zendeskgarden/react-components/pull/865) chore(deps): update dependency @zendeskgarden/stylelint-config to v14 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#864](https://github.com/zendeskgarden/react-components/pull/864) chore(deps): update dependency @zendeskgarden/eslint-config to v15 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#870](https://github.com/zendeskgarden/react-components/pull/870) chore(deps): update node orb to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#863](https://github.com/zendeskgarden/react-components/pull/863) chore(deps): update dependency @testing-library/react to v11 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#874](https://github.com/zendeskgarden/react-components/pull/874) chore(deps): bump http-proxy from 1.18.0 to 1.18.1 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
  - [#868](https://github.com/zendeskgarden/react-components/pull/868) chore(deps): update dependency ora to v5 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#866](https://github.com/zendeskgarden/react-components/pull/866) chore(deps): update dependency commander to v6 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#862](https://github.com/zendeskgarden/react-components/pull/862) chore(deps): update dependency @rollup/plugin-node-resolve to v9 ([@renovate[bot]](https://github.com/apps/renovate))
  - [#861](https://github.com/zendeskgarden/react-components/pull/861) chore(deps): update dependency @rollup/plugin-commonjs to v15 ([@renovate[bot]](https://github.com/apps/renovate))

## v8.22.0 (2020-09-09)

#### :rocket: New Feature
* `forms`
  * [#850](https://github.com/zendeskgarden/react-components/pull/850) feat(forms): introduce FileUpload component ([@austin94](https://github.com/austin94))
* `typography`
  * [#854](https://github.com/zendeskgarden/react-components/pull/854) feat(typography): introduce CodeBlock component ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `forms`
  * [#875](https://github.com/zendeskgarden/react-components/pull/875) fix(forms, datepickers, dropdowns): bump input border hover color from blue-400 to blue-600 ([@jzempel](https://github.com/jzempel))
* `accordions`
  * [#845](https://github.com/zendeskgarden/react-components/pull/845) fix(accordions): prevent double trigger invocation on Firefox ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#860](https://github.com/zendeskgarden/react-components/pull/860) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#859](https://github.com/zendeskgarden/react-components/pull/859) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`
  * [#858](https://github.com/zendeskgarden/react-components/pull/858) internal(accordions): update snapshot ([@hzhu](https://github.com/hzhu))

## v8.21.2 (2020-09-03)

#### :bug: Bug Fix
* `datepickers`
  * [#857](https://github.com/zendeskgarden/react-components/pull/857) fix(datepickers): allow event composition on Datepicker inputs ([@austin94](https://github.com/austin94))

## v8.21.1 (2020-09-02)

#### :bug: Bug Fix
* `dropdowns`
  * [#851](https://github.com/zendeskgarden/react-components/pull/851) fix(dropdowns): allow internal elements to receive custom component styles ([@austin94](https://github.com/austin94))
* `pagination`
  * [#852](https://github.com/zendeskgarden/react-components/pull/852) fix(pagination): fix cursor button type definitions ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* `forms`
  * [#847](https://github.com/zendeskgarden/react-components/pull/847) chore(docs): remove primary button from input-group docs ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#848](https://github.com/zendeskgarden/react-components/pull/848) chore(ci): ensure all PRs include semantic release label ([@austin94](https://github.com/austin94))
## v8.21.0 (2020-08-26)

#### :rocket: New Feature

- `forms`
  - [#841](https://github.com/zendeskgarden/react-components/pull/841) feat(forms): introduce InputGroup component ([@austin94](https://github.com/austin94))

## v8.20.0 (2020-08-19)

#### :rocket: New Feature
* `modals`
  * [#828](https://github.com/zendeskgarden/react-components/pull/828) feat(modals): introduce new TooltipModal component ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `forms`
  * [#842](https://github.com/zendeskgarden/react-components/pull/842) fix(forms): workaround shift+click checkbox labels on Firefox ([@hzhu](https://github.com/hzhu))
* `accordions`
  * [#838](https://github.com/zendeskgarden/react-components/pull/838) fix(accordions): remove default button behavior ([@hzhu](https://github.com/hzhu))
* `typography`
  * [#840](https://github.com/zendeskgarden/react-components/pull/840) fix(typography): prevent prop from being added to DOM element ([@jzempel](https://github.com/jzempel))
* `buttons`
  * [#837](https://github.com/zendeskgarden/react-components/pull/837) fix(buttons): apply min-width to icon buttons ([@rossmoody](https://github.com/rossmoody))
  * [#836](https://github.com/zendeskgarden/react-components/pull/836) fix: danger anchor focus color ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* `tooltips`
  * [#839](https://github.com/zendeskgarden/react-components/pull/839) docs(tooltip) fix errors in tooltip docs ([@StaphSynth](https://github.com/StaphSynth))

## v8.19.0 (2020-08-12)

#### :rocket: New Feature
* `forms`
  * [#833](https://github.com/zendeskgarden/react-components/pull/833) feat(forms): new native Select component ([@jzempel](https://github.com/jzempel))
* `dropdowns`, `forms`
  * [#829](https://github.com/zendeskgarden/react-components/pull/829) feat(forms, dropdowns): use FauxInput as the fundamental styling basis for Select, Autocomplete, and Multiselect ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `datepickers`
  * [#830](https://github.com/zendeskgarden/react-components/pull/830) fix(datepickers): format day with NumberFormat utility ([@austin94](https://github.com/austin94))
* `buttons`
  * [#831](https://github.com/zendeskgarden/react-components/pull/831) fix(buttons): allow user selection on link and anchor buttons ([@jzempel](https://github.com/jzempel))
* `notifications`
  * [#823](https://github.com/zendeskgarden/react-components/pull/823) fix(notifications): update notification padding ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* Other
  * [#827](https://github.com/zendeskgarden/react-components/pull/827) chore(deps): bump elliptic from 6.5.2 to 6.5.3 in /examples/gatsby ([@dependabot[bot]](https://github.com/apps/dependabot))
* `accordions`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `pagination`, `tables`, `tabs`, `tooltips`
  * [#822](https://github.com/zendeskgarden/react-components/pull/822) chore(tests): add user-event testing library ([@hzhu](https://github.com/hzhu))
## v8.18.0 (2020-08-05)

#### :rocket: New Feature

- `forms`
  - [#820](https://github.com/zendeskgarden/react-components/pull/820) feat(forms): allow Textarea to dynamically change height ([@austin94](https://github.com/austin94))
- `buttons`
  - [#821](https://github.com/zendeskgarden/react-components/pull/821) feat(buttons): default external links to use safe referrer attributes ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix

- `forms`
  - [#825](https://github.com/zendeskgarden/react-components/pull/825) fix(forms): ensure Textarea autoresizing is calculated with controlled value ([@austin94](https://github.com/austin94))

#### :memo: Documentation

- `buttons`
  - [#826](https://github.com/zendeskgarden/react-components/pull/826) chore(buttons): update Anchor isExternal prop docs ([@austin94](https://github.com/austin94))

## v8.17.1 (2020-07-29)

#### :bug: Bug Fix
* `buttons`, `forms`, `tables`, `tags`, `theming`, `typography`
  * [#819](https://github.com/zendeskgarden/react-components/pull/819) fix: swap invalid garden.zendesk.com URLs for zendeskgarden.github.io ([@jzempel](https://github.com/jzempel))
* `forms`
  * [#812](https://github.com/zendeskgarden/react-components/pull/812) fix(forms): implement label behavior for multi-thumb range ([@hzhu](https://github.com/hzhu))

## v8.17.0 (2020-07-22)

#### :rocket: New Feature
* `theming`
  * [#814](https://github.com/zendeskgarden/react-components/pull/814) feat(theming): add mediaQuery utility ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `dropdowns`
  * [#817](https://github.com/zendeskgarden/react-components/pull/817) fix(dropdowns): allow object values for NextItem selection ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `tables`
  * [#811](https://github.com/zendeskgarden/react-components/pull/811) chore(docs): update Table selection example to allow keyboard ([@austin94](https://github.com/austin94))

## v8.16.0 (2020-07-15)

#### :rocket: New Feature
* `typography`
  * [#796](https://github.com/zendeskgarden/react-components/pull/796) feat(typography): add media components to Span ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `typography`
  * [#810](https://github.com/zendeskgarden/react-components/pull/810) fix(typography): set UnorderedList type default to "disc" ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* Other
  * [#808](https://github.com/zendeskgarden/react-components/pull/808) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#809](https://github.com/zendeskgarden/react-components/pull/809) chore(deps): update dependency @rollup/plugin-commonjs to v14 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#803](https://github.com/zendeskgarden/react-components/pull/803) chore(deps): update dependency @zendeskgarden/eslint-config to v14 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#805](https://github.com/zendeskgarden/react-components/pull/805) chore(deps): update dependency ts-loader to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#801](https://github.com/zendeskgarden/react-components/pull/801) chore(deps): update dependency @rollup/plugin-commonjs to v13 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#807](https://github.com/zendeskgarden/react-components/pull/807) chore(examples): update codesandbox package.json ([@hzhu](https://github.com/hzhu))
  * [#798](https://github.com/zendeskgarden/react-components/pull/798) chore(deps): update node orb to v3.0.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#804](https://github.com/zendeskgarden/react-components/pull/804) chore(deps): update dependency rollup-plugin-delete to v2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#806](https://github.com/zendeskgarden/react-components/pull/806) fix(deps): update dependency @zendeskgarden/css-bedrock to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#802](https://github.com/zendeskgarden/react-components/pull/802) chore(deps): update dependency @types/jest to v26 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#800](https://github.com/zendeskgarden/react-components/pull/800) fix(deps): update dependency react-scripts to v3.4.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#797](https://github.com/zendeskgarden/react-components/pull/797) chore(deps): update dependency @zendeskgarden/svg-icons to v6.19.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `dropdowns`
  * [#799](https://github.com/zendeskgarden/react-components/pull/799) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.15.1 (2020-07-09)

#### :bug: Bug Fix
* `avatars`
  * [#794](https://github.com/zendeskgarden/react-components/pull/794) fix(avatars): use fluid chrome in avatars example ([@hzhu](https://github.com/hzhu))
* `chrome`
  * [#790](https://github.com/zendeskgarden/react-components/pull/790) fix(chrome): add fixed positioning to html element ([@hzhu](https://github.com/hzhu))
## v8.15.0 (2020-07-01)

#### :rocket: New Feature

- `dropdowns`
  - [#787](https://github.com/zendeskgarden/react-components/pull/787) feat(dropdowns): allow Select to search with keyboard interaction ([@austin94](https://github.com/austin94))
- `notifications`
  - [#788](https://github.com/zendeskgarden/react-components/pull/788) feat(notifications): add support for regular weight title ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix

- `forms`
  - [#789](https://github.com/zendeskgarden/react-components/pull/789) fix(forms): override Bedrock CSS [hidden] styling for radios, checkboxes, and toggles ([@jzempel](https://github.com/jzempel))
## v8.14.1 (2020-06-24)

#### :bug: Bug Fix

- `buttons`
  - [#785](https://github.com/zendeskgarden/react-components/pull/785) fix(buttons): inline display for button groups ([@jzempel](https://github.com/jzempel))
- `grid`
  - [#783](https://github.com/zendeskgarden/react-components/pull/783) fix(grid): remove relative position from col ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal

- [#784](https://github.com/zendeskgarden/react-components/pull/784) chore: remove pendo snippet ([@jzempel](https://github.com/jzempel))

## v8.14.0 (2020-06-17)

#### :rocket: New Feature
* `typography`
  * [#781](https://github.com/zendeskgarden/react-components/pull/781) feat(typography): add isMonospace prop to Span component ([@jzempel](https://github.com/jzempel))
* `chrome`, `notifications`, `theming`
  * [#774](https://github.com/zendeskgarden/react-components/pull/774) feat(theming): update palette to match new brand colors ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `tables`
  * [#780](https://github.com/zendeskgarden/react-components/pull/780) fix(tables): cell and overflow padding ([@jzempel](https://github.com/jzempel))
* `accordions`
  * [#777](https://github.com/zendeskgarden/react-components/pull/777) fix(accordions): correct spacing for rotate icon ([@hzhu](https://github.com/hzhu))
* `theming`
  * [#776](https://github.com/zendeskgarden/react-components/pull/776) fix(menus): prevent inherited line-height from affecting positioning ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* `dropdowns`
  * [#779](https://github.com/zendeskgarden/react-components/pull/779) chore(docs): update Multiselect example to allow IME input ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* [#775](https://github.com/zendeskgarden/react-components/pull/775) chore: update renovate schedule ([@jzempel](https://github.com/jzempel))

## v8.13.0 (2020-06-10)

#### :rocket: New Feature
* `buttons`
  * [#758](https://github.com/zendeskgarden/react-components/pull/758) feat(buttons): add support for media button ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `tabs`
  * [#773](https://github.com/zendeskgarden/react-components/pull/773) fix(tabs): remove tabindex from panel ([@jzempel](https://github.com/jzempel))
* `dropdowns`
  * [#772](https://github.com/zendeskgarden/react-components/pull/772) fix(dropdowns): remove type attribute from div ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* Other
  * [#768](https://github.com/zendeskgarden/react-components/pull/768) chore(deps): update node orb to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#771](https://github.com/zendeskgarden/react-components/pull/771) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#764](https://github.com/zendeskgarden/react-components/pull/764) chore(deps): update dependency @zendeskgarden/eslint-config to v13 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#765](https://github.com/zendeskgarden/react-components/pull/765) chore(deps): update dependency @zendeskgarden/stylelint-config to v13 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#767](https://github.com/zendeskgarden/react-components/pull/767) chore(deps): update dependency mockdate to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#763](https://github.com/zendeskgarden/react-components/pull/763) chore(deps): update dependency @rollup/plugin-node-resolve to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#762](https://github.com/zendeskgarden/react-components/pull/762) chore(deps): update dependency @rollup/plugin-commonjs to v12 ([@renovate[bot]](https://github.com/apps/renovate))
* `chrome`, `dropdowns`, `notifications`, `tags`
  * [#769](https://github.com/zendeskgarden/react-components/pull/769) chore(deps): update typescript-eslint monorepo to v3 (major) ([@renovate[bot]](https://github.com/apps/renovate))
* `utilities`
  * [#766](https://github.com/zendeskgarden/react-components/pull/766) chore(deps): update dependency eslint to v7 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#761](https://github.com/zendeskgarden/react-components/pull/761) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#760](https://github.com/zendeskgarden/react-components/pull/760) chore(deps): update dependency @zendeskgarden/svg-icons to v6.17.0 ([@renovate[bot]](https://github.com/apps/renovate))
## v8.12.0 (2020-06-03)

#### :rocket: New Feature

- `buttons`
  - [#757](https://github.com/zendeskgarden/react-components/pull/757) feat(buttons): new toggle button components ([@jzempel](https://github.com/jzempel))
  - [#751](https://github.com/zendeskgarden/react-components/pull/751) feat(buttons): revise button padding ([@rossmoody](https://github.com/rossmoody))

#### :bug: Bug Fix

- `dropdowns`
  - [#759](https://github.com/zendeskgarden/react-components/pull/759) fix(dropdowns): remove type attribute from div ([@hzhu](https://github.com/hzhu))
  - [#756](https://github.com/zendeskgarden/react-components/pull/756) fix(dropdowns): prevent icon box-sizing inheritance ([@jzempel](https://github.com/jzempel))

## v8.11.0 (2020-05-27)

#### :rocket: New Feature
* `tags`
  * [#755](https://github.com/zendeskgarden/react-components/pull/755) feat(tags): support mixed weight content ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `modals`
  * [#754](https://github.com/zendeskgarden/react-components/pull/754) fix(modals): vertically center close button SVG ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `forms`
  * [#741](https://github.com/zendeskgarden/react-components/pull/741) chore(deps): update jest monorepo to v26 (major) ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#753](https://github.com/zendeskgarden/react-components/pull/753) chore(utils): force version tag ([@jzempel](https://github.com/jzempel))
  * [#752](https://github.com/zendeskgarden/react-components/pull/752) chore(scripts): update tag script to force install ([@jzempel](https://github.com/jzempel))

## v8.10.0 (2020-05-20)

#### :rocket: New Feature
* `typography`
  * [#750](https://github.com/zendeskgarden/react-components/pull/750) feat(typography): add Span component and allow Code to inherit ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `accordions`
  * [#748](https://github.com/zendeskgarden/react-components/pull/748) fix(accordions): improve vertical mobile stepper spacing ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#749](https://github.com/zendeskgarden/react-components/pull/749) fix(scripts): support terminal-based editors for changelog step in tag sequence ([@jzempel](https://github.com/jzempel))

## v8.9.0 (2020-05-13)

#### :rocket: New Feature
* `grid`
  * [#746](https://github.com/zendeskgarden/react-components/pull/746) feat(grid): add `textAlign` prop to `Col` component ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `dropdowns`
  * [#747](https://github.com/zendeskgarden/react-components/pull/747) fix(dropdowns): inputValue logic when selected ([@austin94](https://github.com/austin94))
  * [#734](https://github.com/zendeskgarden/react-components/pull/734) fix(dropdowns): use correct aria attributes for menu dropdown ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* `accordions`, `datepickers`, `forms`
  * [#739](https://github.com/zendeskgarden/react-components/pull/739) chore(deps): update dependency eslint-plugin-react-hooks to v4 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#740](https://github.com/zendeskgarden/react-components/pull/740) chore(deps): update dependency ts-loader to v7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#743](https://github.com/zendeskgarden/react-components/pull/743) chore(deps): update @zendeskgarden/scripts ([@jzempel](https://github.com/jzempel))
  * [#738](https://github.com/zendeskgarden/react-components/pull/738) chore(deps): update dependency @zendeskgarden/css-bedrock to v8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#736](https://github.com/zendeskgarden/react-components/pull/736) chore: deploy script improvements ([@jzempel](https://github.com/jzempel))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#745](https://github.com/zendeskgarden/react-components/pull/745) chore(build): update yarn.lock file ([@austin94](https://github.com/austin94))
* `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `loaders`, `pagination`, `tables`, `tabs`, `tooltips`
  * [#737](https://github.com/zendeskgarden/react-components/pull/737) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v8.8.0 (2020-05-06)

#### :rocket: New Feature
* `dropdowns`, `forms`
  * [#733](https://github.com/zendeskgarden/react-components/pull/733) feat(forms/dropdowns): improve start icon sizing ([@austin94](https://github.com/austin94))
* `dropdowns`
  * [#728](https://github.com/zendeskgarden/react-components/pull/728) feat(dropdowns): add start slot to autocomplete and select components ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `breadcrumbs`
  * [#735](https://github.com/zendeskgarden/react-components/pull/735) fix(breadcrumbs): change chevron color from black to grey-600 ([@li-kai](https://github.com/li-kai))

#### :seedling: Internal
* [#731](https://github.com/zendeskgarden/react-components/pull/731) chore(scripts): ensure version commit hits CI, triggering npm publish ([@jzempel](https://github.com/jzempel))

## v8.7.0 (2020-04-29)

#### :rocket: New Feature
* `accordions`
  * [#725](https://github.com/zendeskgarden/react-components/pull/725) feat(accordions): add new accordion component ([@hzhu](https://github.com/hzhu))
* `forms`
  * [#727](https://github.com/zendeskgarden/react-components/pull/727) feat(forms): allow multi-thumb range to allow track mouse interaction ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `forms`
  * [#729](https://github.com/zendeskgarden/react-components/pull/729) fix(forms): retain line height for hidden radio/checkbox/toggle labels ([@jzempel](https://github.com/jzempel))
* `notifications`
  * [#730](https://github.com/zendeskgarden/react-components/pull/730) fix(notifications): restore transition to close button focus & hover styles ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* [#726](https://github.com/zendeskgarden/react-components/pull/726) chore: enhanced scripting workflow ([@jzempel](https://github.com/jzempel))

## v8.6.0 (2020-04-23)

#### :rocket: New Feature
* `typography`
  * [#724](https://github.com/zendeskgarden/react-components/pull/724) feat(typography): add Paragraph component ([@jzempel](https://github.com/jzempel))
  * [#722](https://github.com/zendeskgarden/react-components/pull/722) feat(typography): add bold option ([@jzempel](https://github.com/jzempel))
* `pagination`
  * [#692](https://github.com/zendeskgarden/react-components/pull/692) feat(pagination): create CursorPagination component ([@hzhu](https://github.com/hzhu))

#### :memo: Documentation
* `tabs`
  * [#723](https://github.com/zendeskgarden/react-components/pull/723) chore(tabs): update Tabs API descriptions ([@rossmoody](https://github.com/rossmoody))
* `loaders`
  * [#700](https://github.com/zendeskgarden/react-components/pull/700) chore(loaders): update remaining Loaders API descriptions ([@rossmoody](https://github.com/rossmoody))
* `pagination`
  * [#721](https://github.com/zendeskgarden/react-components/pull/721) fix(pagination): fix styleguidist path ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* `dropdowns`
  * [#698](https://github.com/zendeskgarden/react-components/pull/698) feat(menu): revise menu spacing ([@rossmoody](https://github.com/rossmoody))

## v8.5.0 (2020-04-09)

#### :bug: Bug Fix
* `tooltips`
  * [#697](https://github.com/zendeskgarden/react-components/pull/697) fix(tooltips): ensure updated content triggers new position ([@austin94](https://github.com/austin94))
* `buttons`
  * [#696](https://github.com/zendeskgarden/react-components/pull/696) feat(buttons): allow custom Button type ([@austin94](https://github.com/austin94))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#691](https://github.com/zendeskgarden/react-components/pull/691) fix(forms): replace encoded background images with inline SVGs ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* `loaders`
  * [#699](https://github.com/zendeskgarden/react-components/pull/699) chore(loaders): update Dots API descriptions ([@rossmoody](https://github.com/rossmoody))

#### :seedling: Internal
* Other
  * [#720](https://github.com/zendeskgarden/react-components/pull/720) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#719](https://github.com/zendeskgarden/react-components/pull/719) chore(renovate): allow open ranges for dev dependencies ([@austin94](https://github.com/austin94))
  * [#718](https://github.com/zendeskgarden/react-components/pull/718) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#709](https://github.com/zendeskgarden/react-components/pull/709) chore(deps): update dependency rollup-plugin-license to v2 ([@renovate[bot]](https://github.com/apps/renovate))
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `dropdowns`, `forms`, `grid`, `loaders`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#694](https://github.com/zendeskgarden/react-components/pull/694) chore(theming): upgrade polished and remove deprecated stripUnit usages ([@austin94](https://github.com/austin94))

## v8.4.1 (2020-04-01)

#### :rocket: New Feature
* `avatars`
  * [#689](https://github.com/zendeskgarden/react-components/pull/689) feat(avatars): add XXS avatar size ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `datepickers`, `dropdowns`, `forms`, `theming`
  * [#690](https://github.com/zendeskgarden/react-components/pull/690) fix(dropdowns, datepickers): restore menu theming and prevent autocomplete pixel nudge ([@jzempel](https://github.com/jzempel))

## v8.4.0 (2020-03-25)

#### :rocket: New Feature
* `tags`
  * [#682](https://github.com/zendeskgarden/react-components/pull/682) feat(tags): allow flexible tag hue ([@jzempel](https://github.com/jzempel))

#### :memo: Documentation
* [#688](https://github.com/zendeskgarden/react-components/pull/688) fix: correct build status badge links ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `accordions`
  * [#685](https://github.com/zendeskgarden/react-components/pull/685) chore(steppers): reorganize directory structure ([@hzhu](https://github.com/hzhu))
* Other
  * [#683](https://github.com/zendeskgarden/react-components/pull/683) fix: use default CircleCI node_modules cache ([@jzempel](https://github.com/jzempel))
  * [#681](https://github.com/zendeskgarden/react-components/pull/681) chore: update `format` commands for CI ([@jzempel](https://github.com/jzempel))
  * [#680](https://github.com/zendeskgarden/react-components/pull/680) chore: sync local tags with remote ([@jzempel](https://github.com/jzempel))

## v8.3.0 (2020-03-18)

#### :rocket: New Feature
* `theming`
  * [#676](https://github.com/zendeskgarden/react-components/pull/676) feat(theming): add gather product color ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `forms`
  * [#679](https://github.com/zendeskgarden/react-components/pull/679) fix(tiles): update Tiles label wrapping and Icon colors ([@austin94](https://github.com/austin94))
* `theming`
  * [#678](https://github.com/zendeskgarden/react-components/pull/678) fix(theming): remove Hue usage to allow TS projects to build ([@austin94](https://github.com/austin94))
* `.template`, `accordions`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#667](https://github.com/zendeskgarden/react-components/pull/667) chore: fix CircleCI deploy ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `tables`
  * [#671](https://github.com/zendeskgarden/react-components/pull/671) chore(deps): update dependency react-beautiful-dnd to v13 ([@renovate[bot]](https://github.com/apps/renovate))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`
  * [#669](https://github.com/zendeskgarden/react-components/pull/669) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `datepickers`
  * [#675](https://github.com/zendeskgarden/react-components/pull/675) chore(deps): update dependency @testing-library/react to v10 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#673](https://github.com/zendeskgarden/react-components/pull/673) chore(deps): update dependency rollup to v2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#670](https://github.com/zendeskgarden/react-components/pull/670) chore(deps): update dependency github-markdown-css to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#674](https://github.com/zendeskgarden/react-components/pull/674) chore: update gh-pages deploy ([@jzempel](https://github.com/jzempel))
* `accordions`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `notifications`, `pagination`, `tables`, `tags`
  * [#668](https://github.com/zendeskgarden/react-components/pull/668) chore(deps): update dependency @zendeskgarden/svg-icons to v6.13.1 ([@renovate[bot]](https://github.com/apps/renovate))

## v8.2.0 (2020-03-11)

#### :rocket: New Feature
* `accordions`
  * [#658](https://github.com/zendeskgarden/react-components/pull/658) feat(accordions): introduce new Stepper component ([@hzhu](https://github.com/hzhu))

#### :bug: Bug Fix
* Other
  * [#665](https://github.com/zendeskgarden/react-components/pull/665) chore: fix CircleCI config ([@jzempel](https://github.com/jzempel))
* `modals`
  * [#663](https://github.com/zendeskgarden/react-components/pull/663) fix(modals): include useModal args as props ([@hzhu](https://github.com/hzhu))

#### :seedling: Internal
* Other
  * [#666](https://github.com/zendeskgarden/react-components/pull/666) chore: add /examples to renovate configuration ([@jzempel](https://github.com/jzempel))
* `.template`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#664](https://github.com/zendeskgarden/react-components/pull/664) chore: update to use CircleCI ([@jzempel](https://github.com/jzempel))
Extra `patch` release to correct broken build in `v8` release.


## v8.1.0 (2020-03-04)

#### Upgrade Instructions

This release includes several server-side rendering fixes throughout our packages. To ensure all packages have their required
utilities upgrade to `@zendeskgarden/react-theming@v8.1.0` first.

#### :rocket: New Feature
* `forms`
  * [#654](https://github.com/zendeskgarden/react-components/pull/654) feat(forms): introduce new Tiles component ([@austin94](https://github.com/austin94))
* `.template`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`
  * [#651](https://github.com/zendeskgarden/react-components/pull/651) fix(all): allow server side rendering for all packages ([@austin94](https://github.com/austin94))
* `datepickers`, `dropdowns`, `theming`
  * [#655](https://github.com/zendeskgarden/react-components/pull/655) feat: add utility for menu styles ([@jzempel](https://github.com/jzempel))

#### :bug: Bug Fix
* `modals`
  * [#662](https://github.com/zendeskgarden/react-components/pull/662) feat(modal): update Modal prop type for appendToNode to any ([@austin94](https://github.com/austin94))
* `forms`
  * [#659](https://github.com/zendeskgarden/react-components/pull/659) fix(forms): allow controlled range to render background-size ([@hzhu](https://github.com/hzhu))
* `datepickers`, `dropdowns`, `theming`
  * [#655](https://github.com/zendeskgarden/react-components/pull/655) feat: add utility for menu styles ([@jzempel](https://github.com/jzempel))
* `chrome`
  * [#657](https://github.com/zendeskgarden/react-components/pull/657) fix(chrome): box-shadow and color styling ([@jzempel](https://github.com/jzempel))

#### :seedling: Internal
* `typography`
  * [#653](https://github.com/zendeskgarden/react-components/pull/653) chore(markdown): include package examples in lint:markdown ([@hzhu](https://github.com/hzhu))

## v8.0.1 (2020-02-26)

#### :bug: Bug Fix
* `datepickers`
  * [#646](https://github.com/zendeskgarden/react-components/pull/646) fix(datepickers): ensure animation is positioned correctly ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `modals`
  * [#652](https://github.com/zendeskgarden/react-components/pull/652) docs(modals): include a11y note on restoring focus ([@hzhu](https://github.com/hzhu))
* Other
  * [#648](https://github.com/zendeskgarden/react-components/pull/648) chore: update documentation for v8 ([@jzempel](https://github.com/jzempel))
  * [#643](https://github.com/zendeskgarden/react-components/pull/643) chore(docs): update v7 documentation link ([@austin94](https://github.com/austin94))
  * [#642](https://github.com/zendeskgarden/react-components/pull/642) chore(docs): add link to v7 docs ([@austin94](https://github.com/austin94))
  * [#641](https://github.com/zendeskgarden/react-components/pull/641) feat(examples): migrate create-react-app example to v8 ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `avatars`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `loaders`, `modals`, `notifications`, `tables`, `tags`, `theming`, `tooltips`
  * [#649](https://github.com/zendeskgarden/react-components/pull/649) chore(all): increase test coverage ([@austin94](https://github.com/austin94))
* `modals`
  * [#650](https://github.com/zendeskgarden/react-components/pull/650) chore(modals): update container dependencies ([@hzhu](https://github.com/hzhu))
* `dropdowns`
  * [#628](https://github.com/zendeskgarden/react-components/pull/628) fix(deps): update dependency downshift to v5 ([@renovate[bot]](https://github.com/apps/renovate))
* `.template`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `tables`, `tabs`, `tags`, `tooltips`, `typography`
  * [#645](https://github.com/zendeskgarden/react-components/pull/645) chore(lint): update eslint rules ([@austin94](https://github.com/austin94))

## v8.0.0 (2020-02-18)

#### :boom: Breaking Change
* `.template`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `selection`, `tables`, `tabs`, `tags`, `theming`, `tooltips`, `typography`, `utilities`
  * [#639](https://github.com/zendeskgarden/react-components/pull/639) feat(build): bring master up-to-date with next ([@austin94](https://github.com/austin94))

## v7.1.9 (2020-02-14)

#### :bug: Bug Fix
* `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `loaders`, `modals`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`
  * [#629](https://github.com/zendeskgarden/react-components/pull/629) fix(deps): ensure all garden container packages support ie11 ([@austin94](https://github.com/austin94))
  * [#623](https://github.com/zendeskgarden/react-components/pull/623) fix(build): move from uglify to terser for UMD builds ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `buttons`, `chrome`, `datepickers`, `dropdowns`, `tables`
  * [#625](https://github.com/zendeskgarden/react-components/pull/625) chore(deps): update dependency @zendeskgarden/svg-icons to v6.10.0 ([@renovate[bot]](https://github.com/apps/renovate))
* Other
  * [#626](https://github.com/zendeskgarden/react-components/pull/626) chore(deps): update dependency husky to v4.2.3 ([@renovate[bot]](https://github.com/apps/renovate))

## v7.1.8 (2020-02-10)

#### :bug: Bug Fix
* `dropdowns`
  * [#618](https://github.com/zendeskgarden/react-components/pull/618) fix(dropdowns): allow forwardRef usage of Select component ([@austin94](https://github.com/austin94))
* `loaders`
  * [#609](https://github.com/zendeskgarden/react-components/pull/609) perf(loaders): prevent rerender for dots ([@li-kai](https://github.com/li-kai))

## v7.1.7 (2020-02-06)

#### :bug: Bug Fix
* `dropdowns`
  * [#614](https://github.com/zendeskgarden/react-components/pull/614) fix(dropdowns): conditionally render menu items to correct android rendering ([@austin94](https://github.com/austin94))
  * [#613](https://github.com/zendeskgarden/react-components/pull/613) fix(dropdowns): limit PopperJS computations while dropdowns are closed ([@austin94](https://github.com/austin94))

## v7.1.6 (2020-02-04)

#### :bug: Bug Fix
* `dropdowns`
  * [#607](https://github.com/zendeskgarden/react-components/pull/607) fix(dropdowns): overflow in Multiselect items ([@sunesimonsen](https://github.com/sunesimonsen))
* `pagination`
  * [#608](https://github.com/zendeskgarden/react-components/pull/608) fix(build): correct failing tests ([@austin94](https://github.com/austin94))

## v7.1.5 (2020-01-17)

#### :bug: Bug Fix
* `tooltips`
  * [#593](https://github.com/zendeskgarden/react-components/pull/593) fix(tooltips): improve tooltip rendering performance ([@austin94](https://github.com/austin94))
    * Tooltips now render efficiently when used in large (500+) numbers

#### :seedling: Internal
* Other
  * [#590](https://github.com/zendeskgarden/react-components/pull/590) chore(deps): update dependency stylelint-order to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#589](https://github.com/zendeskgarden/react-components/pull/589) chore(deps): update dependency stylelint to v13 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#592](https://github.com/zendeskgarden/react-components/pull/592) chore(deps): update dependency typescript to v3.7.5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#585](https://github.com/zendeskgarden/react-components/pull/585) chore(deps): update dependency @svgr/webpack to v5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#586](https://github.com/zendeskgarden/react-components/pull/586) chore(deps): update dependency husky to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#571](https://github.com/zendeskgarden/react-components/pull/571) chore(deps): bump handlebars from 4.1.2 to 4.5.3 in /examples/codesandbox/garden-create-react-app ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#568](https://github.com/zendeskgarden/react-components/pull/568) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
  * [#567](https://github.com/zendeskgarden/react-components/pull/567) chore(deps): update dependency lerna-changelog to v1 ([@renovate[bot]](https://github.com/apps/renovate))
* `dropdowns`
  * [#591](https://github.com/zendeskgarden/react-components/pull/591) fix(deps): update dependency downshift to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#565](https://github.com/zendeskgarden/react-components/pull/565) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `chrome`, `datepickers`, `dropdowns`, `forms`, `modals`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`
  * [#584](https://github.com/zendeskgarden/react-components/pull/584) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `forms`
  * [#583](https://github.com/zendeskgarden/react-components/pull/583) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`
  * [#564](https://github.com/zendeskgarden/react-components/pull/564) chore(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `datepickers`
  * [#536](https://github.com/zendeskgarden/react-components/pull/536) chore(deps): update dependency @zendeskgarden/stylelint-config to v12 ([@renovate[bot]](https://github.com/apps/renovate))

## v7.1.4 (2019-12-17)

#### :seedling: Internal
* chore: force-publish all packages to ensure valid `latest` tag in NPM
* [#549](https://github.com/zendeskgarden/react-components/pull/549) chore: apply garden logo to demo pages ([@jzempel](https://github.com/jzempel))

## v7.1.3 (2019-11-27)

#### :rocket: New Feature
* `modals`
  * [#547](https://github.com/zendeskgarden/react-components/pull/547) Allow the portal container to be passed in as a prop ([@luis-almeida](https://github.com/luis-almeida))

## v7.1.2 (2019-11-26)

#### :seedling: Internal
* Other
  * [#537](https://github.com/zendeskgarden/react-components/pull/537) chore(deps): update dependency chalk to v3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#538](https://github.com/zendeskgarden/react-components/pull/538) chore(deps): update dependency commander to v4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#539](https://github.com/zendeskgarden/react-components/pull/539) chore(deps): update dependency eslint-plugin-jest to v23 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#543](https://github.com/zendeskgarden/react-components/pull/543) chore(deps): update dependency core-js to v3.4.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `datepickers`, `dropdowns`
  * [#534](https://github.com/zendeskgarden/react-components/pull/534) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`
  * [#535](https://github.com/zendeskgarden/react-components/pull/535) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v7.1.1 (2019-11-13)

#### :bug: Bug Fix
* `datepickers`
  * [#517](https://github.com/zendeskgarden/react-components/pull/517) fix(datepickers): allow controlled value to update internal state ([@austin94](https://github.com/austin94))
* `forms`
  * [#516](https://github.com/zendeskgarden/react-components/pull/516) fix(forms): allow MultiThumbRange to position correctly in Edge and IE11 ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `tables`
  * [#518](https://github.com/zendeskgarden/react-components/pull/518) chore(docs): remove invalid prop from table docs ([@austin94](https://github.com/austin94))

## v7.1.0 (2019-11-06)

#### :rocket: New Feature
* `dropdowns`
  * [#511](https://github.com/zendeskgarden/react-components/pull/511) feat(dropdowns): add inputRef prop to Autocomplete and Multiselect ([@austin94](https://github.com/austin94))

#### :bug: Bug Fix
* `datepickers`, `dropdowns`
  * [#513](https://github.com/zendeskgarden/react-components/pull/513) fix(build): correct TS usages of react-popper ([@austin94](https://github.com/austin94))
* `dropdowns`
  * [#512](https://github.com/zendeskgarden/react-components/pull/512) fix(dropdowns): allow inline style to override Menu width ([@austin94](https://github.com/austin94))
* `datepickers`
  * [#492](https://github.com/zendeskgarden/react-components/pull/492) chore(datepicker): remove invalid arrow prop ([@austin94](https://github.com/austin94))
* `buttons`
  * [#510](https://github.com/zendeskgarden/react-components/pull/510) fix(buttons): remove invalid disabled prop from Anchor ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* `dropdowns`
  * [#509](https://github.com/zendeskgarden/react-components/pull/509) chore(docs): remove invalid advanced dropdown example ([@austin94](https://github.com/austin94))

## v7.0.2 (2019-10-30)

#### :seedling: Internal
* Other
  * [#501](https://github.com/zendeskgarden/react-components/pull/501) chore(deps): update non-major shared dependencies ([@renovate[bot]](https://github.com/apps/renovate))
* `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `modals`, `notifications`, `pagination`, `tables`, `tabs`, `tags`, `tooltips`
  * [#502](https://github.com/zendeskgarden/react-components/pull/502) fix(deps): update non-major package dependencies ([@renovate[bot]](https://github.com/apps/renovate))

## v7.0.1 (2019-10-22)

#### :bug: Bug Fix
* `buttons`
  * [#498](https://github.com/zendeskgarden/react-components/pull/498) fix(buttons): allow buttons to control type attribute ([@austin94](https://github.com/austin94))

#### :memo: Documentation
* [#496](https://github.com/zendeskgarden/react-components/pull/496) chore(internal): upgrade Garden examples to v7 ([@austin94](https://github.com/austin94))

## v7.0.0 (2019-10-17)

#### :boom: Breaking Change
* `buttons`, `chrome`, `modals`, `pagination`, `selection`, `tabs`, `tooltips`
  * [#486](https://github.com/zendeskgarden/react-components/pull/486) chore(internal): deprecated react-selection and migrate Tabs and Pagination components BREAKING ([@austin94](https://github.com/austin94))
* `breadcrumbs`, `buttons`, `chrome`, `modals`, `pagination`, `tabs`, `tooltips`
  * [#485](https://github.com/zendeskgarden/react-components/pull/485) chore(internal): remove all deprecated render-prop containers BREAKING ([@austin94](https://github.com/austin94))
* `autocomplete`, `checkboxes`, `menus`, `radios`, `ranges`, `select`, `textfields`, `toggles`, `utilities`
  * [#484](https://github.com/zendeskgarden/react-components/pull/484)  chore(internal): remove all deprecated packages BREAKING ([@austin94](https://github.com/austin94))
* `loaders`
  * [#491](https://github.com/zendeskgarden/react-components/pull/491) feat(loaders): deprecate ScheduleContainer BREAKING ([@austin94](https://github.com/austin94))

#### :seedling: Internal
* `.template`, `avatars`, `breadcrumbs`, `buttons`, `chrome`, `datepickers`, `dropdowns`, `forms`, `grid`, `loaders`, `modals`, `notifications`, `pagination`, `selection`, `tables`, `tabs`, `tags`, `tooltips`, `typography`
  * [#495](https://github.com/zendeskgarden/react-components/pull/495) chore(deps): upgrade react-theming peerDependencies to allow v7 ([@austin94](https://github.com/austin94))
* Other
  * [#493](https://github.com/zendeskgarden/react-components/pull/493) chore(deps): bump lodash.template from 4.4.0 to 4.5.0 in /examples/codesandbox/garden-create-react-app ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#494](https://github.com/zendeskgarden/react-components/pull/494) chore(deps): bump mixin-deep from 1.3.1 to 1.3.2 in /examples/codesandbox/garden-create-react-app ([@dependabot[bot]](https://github.com/apps/dependabot))
* `modals`
  * [#475](https://github.com/zendeskgarden/react-components/pull/475) fix(deps): update dependency tabbable to v4 ([@renovate[bot]](https://github.com/apps/renovate))
* `loaders`
  * [#473](https://github.com/zendeskgarden/react-components/pull/473) fix(deps): update dependency polished to v3 ([@renovate[bot]](https://github.com/apps/renovate))
* `datepickers`, `dropdowns`, `tooltips`
  * [#487](https://github.com/zendeskgarden/react-components/pull/487) chore(internal): update react-popper dependencies ([@austin94](https://github.com/austin94))
* `buttons`, `modals`, `selection`, `tables`
  * [#490](https://github.com/zendeskgarden/react-components/pull/490) chore(deps): update dom-helpers ([@hzhu](https://github.com/hzhu))

### Breaking Changes

#### `react-loaders`

* The `Dots` and `Spinner` components no longer accept a `velocity` prop
  * To customize the speed of the animation use the `duration` prop to provide the time in MS.

#### `react-pagination`

* The `focusedKey` prop is no longer accepted
  * This state is no longer controllable
* The `onStateChange` prop is no longer accepted
  * Use the `onChange` prop to receive `currentPage` updates.

#### `react-tabs`

* The `selectedKey` prop has been renamed to `selectedItem`
  * This API now aligns with other components
* All `<TabPanel>` components now require an `item` prop instead of a `key` prop
  * Previously we used the `key` attribute to uniquely identify each tab
  * This created confusion as `key` is also a reserved prop name in React
* The `onStateChange` prop is no longer valid
  * Use the `onChange` prop to receive `selectedItem` updates

#### Removal of deprecated packages

The following deprecated packages have been removed from the repository and will not be upgraded to `v7`:

* `@zendeskgarden/react-autocomplete`
  * Migrate to the `@zendeskgarden/react-dropdowns` package
* `@zendeskgarden/react-checkboxes`
  * Migrate to the `@zendeskgarden/react-forms` package
* `@zendeskgarden/react-menus`
* Migrate to the `@zendeskgarden/react-dropdowns` package
* `@zendeskgarden/react-radios`
  * Migrate to the `@zendeskgarden/react-forms` package
* `@zendeskgarden/react-ranges`
  * Migrate to the `@zendeskgarden/react-forms` package
* `@zendeskgarden/react-select`
  * Migrate to the `@zendeskgarden/react-dropdowns` package
* `@zendeskgarden/react-textfields`
  * Migrate to the `@zendeskgarden/react-forms` package
* `@zendeskgarden/react-toggles`
  * Migrate to the `@zendeskgarden/react-forms` package

#### Removal of deprecated Render-Prop Containers

In previous versions we have included render-prop containers for
the common UX patterns provided in our components. To help make these
assets more flexible, we have created a new repository [react-containers](https://github.com/zendeskgarden/react-containers).

In `v7` all render-prop containers (`*Container`) has been moved to standalone packages.
These containers are now available as standard React Hooks as well as render-props.

### Migration Steps

* Upgrade all Garden React dependencies to their latest `v6.x` version
* Check your console and testing environments to see if any deprecation warnings can be seen
* Remove any usages of deprecated packages and containers
* Upgrade all Garden React dependencies to their latest `v7.x` version
* Update any `react-tabs`, `react-pagination`, and `react-loaders` usages affected by the breaking changes listed above

For this breaking change we were able to allow an open range for our peer dependency of `react-theming` to allow `v6` and `v7` versions.

This allows you to upgrade each package individually if necessary, ending with `react-theming`.
If you have any questions about this process please open an issue.

## v6.9.0 (2019-10-16)

#### :seedling: Internal
* `buttons`, `chrome`, `forms`
  * [#489](https://github.com/zendeskgarden/react-components/pull/489) chore(internal): upgrade @zendeskgarden/container-keyboardfocus ([@austin94](https://github.com/austin94))
* `buttons`, `chrome`
  * [#482](https://github.com/zendeskgarden/react-components/pull/482) feat(buttons|chrome): upgrade to useKeyboardFocus() hook ([@austin94](https://github.com/austin94))

## v6.8.1 (2019-10-11)

#### :bug: Bug Fix
* `datepickers`
  * [#481](https://github.com/zendeskgarden/react-components/pull/481) fix(datepicker): ensure mouse events are propagated correctly ([@austin94](https://github.com/austin94))
* `forms`
  * [#480](https://github.com/zendeskgarden/react-components/pull/480) fix(forms): allow MediaInput to receive all possible ref values ([@austin94](https://github.com/austin94))

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
