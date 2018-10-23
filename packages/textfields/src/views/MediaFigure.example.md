The `FauxInput` can be used with the `MediaFigure` and `MediaInput` components
to include icons within the input.

```jsx
const SearchIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/search.svg');
const SettingsIcon = require('svg-react-loader?name=Attachment!@zendeskgarden/svg-icons/src/14/settings.svg');

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
