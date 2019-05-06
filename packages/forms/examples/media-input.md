```jsx
const SearchIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;
const ShieldIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;

<FieldProvider>
  <Label>Test Label</Label>
  <MediaInput start={<SearchIcon />} end={<ShieldIcon />} />
</FieldProvider>;
```
