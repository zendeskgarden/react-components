The `Tooltip` component acts as a high-abstraction API over the `TooltipContainer` component.

All props passed to the root element are proxied into the visible tooltip.

### Default Usage

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Tooltip trigger={<Button>Trigger top placement</Button>}>This an small tooltip</Tooltip>;
```

### Multiple Types and Sizes

You are able to customize the type, size, and placement of the tooltip.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Tooltip
  placement="end"
  type="light"
  size="extra-large"
  trigger={<Button>Trigger end placement</Button>}
>
  <Title>Example Title</Title>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident...
  </p>
</Tooltip>;
```

### Custom Events and Props

Example of proxying props to the Tooltip. Applied `onClick` event to the tooltip.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Tooltip
  placement="end"
  type="light"
  size="extra-large"
  trigger={<Button>Custom Proxy Events</Button>}
  onClick={() => alert('Tooltip clicked')}
  style={{ color: 'red' }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Tooltip>;
```

### Boundary Detection

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const Container = styled.div`
  height: 450px;
  overflow: auto;
`;

const ScrollBox = styled.div`
  height: 250%;
  display: flex;
  align-content: center;
  align-items: center;
`;

<Container>
  <ScrollBox>
    <Tooltip type="light" trigger={<Button>Scroll to view trigger changes</Button>}>
      Boundary recognition tooltip
    </Tooltip>
  </ScrollBox>
</Container>;
```
