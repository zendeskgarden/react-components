The `FauxInput[mediaLayout=true]` can be used with the `MediaFigure` component
to include icons within the input.

```jsx
const SearchIcon = require('svg-react-loader?name=Settings!@zendesk/garden-svg-icons/src/14-search.svg');
const SettingsIcon = require('svg-react-loader?name=Attachment!@zendesk/garden-svg-icons/src/14-settings.svg');

<FauxInput mediaLayout>
  <MediaFigure>
    <SearchIcon />
  </MediaFigure>
  <Input bare placeholder="Example media input" />
  <MediaFigure>
    <SettingsIcon />
  </MediaFigure>
</FauxInput>;
```
