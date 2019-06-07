The `Close` component is a `<div>` rather than a `<button>`. This is to help
enforce that the global tab element is what should receive focus.

### ACCESSIBILITY WARNING

The `Close` component includes a default `aria-label` in english. If you are
localizing your application you must overwrite this property with your own translation.

More complex examples can be implemented with the
[SelectionContainer component](https://garden.zendesk.com/react-components/next/selection/#selectioncontainer)

```jsx
const { KEY_CODES } = require('@zendeskgarden/react-selection/src');
const { FauxInput } = require('@zendeskgarden/react-forms/src');
const tags = [];

for (let x = 1; x < 10; x++) {
  tags.push({
    id: `tag-${x}`,
    text: `Tag #${x}`
  });
}

const SpacedTag = styled(Tag)`
  margin: 2px;
`;

const removeTag = tagKey => alert(`Tag "${tagKey}" removed`);

<FauxInput tagLayout small>
  {tags.map(tag => (
    <SpacedTag
      key={tag.id}
      tabIndex={0}
      onKeyDown={event => {
        if (event.keyCode === KEY_CODES.DELETE || event.keyCode === KEY_CODES.BACKSPACE) {
          removeTag(tag.id);
        }
      }}
    >
      {tag.text}
      <Close onClick={() => removeTag(tag.id)} />
    </SpacedTag>
  ))}
</FauxInput>;
```
