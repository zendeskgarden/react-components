The `FauxInput[mediaLayout=true]` can be used with the `MediaFigure` component
to include icons within the input.

```jsx
const SearchIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/search.svg');
const SettingsIcon = require('svg-react-loader?name=Attachment!@zendeskgarden/svg-icons/src/14/settings.svg');

<FauxInput mediaLayout>
  <MediaFigure>
    <SearchIcon />
  </MediaFigure>
  <Input aria-label="Media Input Example" placeholder="Example media input" bare />
  <MediaFigure>
    <SettingsIcon />
  </MediaFigure>
</FauxInput>;
```
