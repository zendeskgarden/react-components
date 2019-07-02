### Theme ids

Each component has a `COMPONENT_ID` applied so you can target it in your own
theme object to override the default look and feel. This table contains all
the ids and which package they apply to.

```jsx noeditor
<CIDTable>See https://zendeskgarden.github.io/react-components/theming</CIDTable>
```

### WARNING

Theming is meant to be used for small, global changes to a component
(i.e accent color, padding changes, etc.)

If you find yourself "skinning" a component, it may be much easier (and
maintainable) if you were to create these presentation assets as standalone
components and use them with our advanced
[`Container`](https://zendeskgarden.github.io/react-containers) abstractions.
