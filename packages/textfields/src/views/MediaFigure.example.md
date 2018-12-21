The `FauxInput[mediaLayout=true]` can be used with the `MediaFigure` and `MediaInput`
components to include icons within the input.

```jsx
const SearchIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;

<FauxInput mediaLayout>
  <MediaFigure>
    <SearchIcon />
  </MediaFigure>
  <MediaInput aria-label="Media Input Example" placeholder="Example media input" />
  <MediaFigure>
    <SettingsIcon />
  </MediaFigure>
</FauxInput>;
```
