The `Tag` component exposes a variety of styling options needed to support badges, pills, and tags.

### Shapes

Use pill or round class modifiers to shape a tag. Round tags are intended to contain a minimal
number of characters.

```jsx
<Grid columns={2} stretched>
  <Tag>Default tag</Tag>
  <Tag pill>Pill tag</Tag>
</Grid>
```

### Sizes

```jsx
<Grid columns={3} stretched>
  <Tag size="small">Small tag</Tag>
  <Tag>Default tag</Tag>
  <Tag size="large">Large tag</Tag>
  <Tag size="small" pill>
    Small pill tag
  </Tag>
  <Tag pill>Default pill tag</Tag>
  <Tag size="large" pill>
    Large pill tag
  </Tag>
  <Tag size="small" pill>
    1
  </Tag>
  <Tag pill>2</Tag>
  <Tag size="large" pill>
    12
  </Tag>
</Grid>
```

### Colors

```jsx
<Grid columns={7} stretched>
  <Tag>Default</Tag>
  <Tag type="grey">Grey</Tag>
  <Tag type="blue">Blue</Tag>
  <Tag type="kale">Kale</Tag>
  <Tag type="red">Red</Tag>
  <Tag type="green">Green</Tag>
  <Tag type="yellow">Yellow</Tag>
  <Tag pill>Default</Tag>
  <Tag type="grey" pill>Grey</Tag>
  <Tag type="blue" pill>Blue</Tag>
  <Tag type="kale" pill>Kale</Tag>
  <Tag type="red" pill>Red</Tag>
  <Tag type="green" pill>Green</Tag>
  <Tag type="yellow" pill>Yellow</Tag>
</Grid>
```

### States

```jsx
<Grid columns={2} stretched>
  <Tag size="large">Default tag</Tag>
  <Tag size="large" focused>
    Focused tag
  </Tag>
  <Tag size="large" pill>
    Default pill
  </Tag>
  <Tag size="large" pill focused>
    Focused pill
  </Tag>
</Grid>
```
