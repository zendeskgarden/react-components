```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { IconButton } = require('@zendeskgarden/react-buttons/src');
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;

<Grid>
  <Row>
    <Col md>
      <Dropdown role="menu" onSelect={item => alert(item)}>
        <Trigger>
          <Button>Default Menu</Button>
        </Trigger>
        <Menu>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    </Col>
    <Col md>
      <Dropdown role="menu" onSelect={item => alert(item)}>
        <Trigger>
          <IconButton aria-label="Settings" title="Settings">
            <SettingsIcon />
          </IconButton>
        </Trigger>
        <Menu placement="end" hasArrow>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
</Grid>;
```
