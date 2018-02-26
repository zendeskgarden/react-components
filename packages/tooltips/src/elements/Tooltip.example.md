The `Tooltip` component acts as a high-abstraction API over the `TooltipContainer` component.

All props passed to the root element are proxied into the visible tooltip.

### Default Usage

```jsx
<Tooltip trigger={<button>Trigger top placement</button>}>This an small tooltip</Tooltip>
```

### Multiple Types and Sizes

You are able to customize the type, size, and placement of the tooltip.

```jsx
<Tooltip
  placement="right"
  type="light"
  size="extra-large"
  trigger={<button>Trigger right placement</button>}
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
</Tooltip>
```

### Custom Events and Props

Example of proxying props to the Tooltip. Applied `onClick` event to the tooltip.

```jsx
<Tooltip
  placement="right"
  type="light"
  size="extra-large"
  trigger={<button>Custom Proxy Events</button>}
  onClick={() => alert('Tooltip clicked')}
  style={{ color: 'red' }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Tooltip>
```

### Boundary Detection

```jsx
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
    <Tooltip
      type="light"
      placement="auto"
      trigger={<button>Scroll to view trigger changes</button>}
    >
      Boundary recognition tooltip
    </Tooltip>
  </ScrollBox>
</Container>;
```
