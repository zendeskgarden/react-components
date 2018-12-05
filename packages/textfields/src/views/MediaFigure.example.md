The `FauxInput[mediaLayout=true]` can be used with the `MediaFigure` and `MediaInput`
components to include icons within the input.

```jsx
const SearchIcon = require('@zendeskgarden/svg-icons/src/14/search.svg').default;
const SettingsIcon = require('@zendeskgarden/svg-icons/src/14/settings.svg').default;

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
