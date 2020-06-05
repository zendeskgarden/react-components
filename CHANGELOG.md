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
