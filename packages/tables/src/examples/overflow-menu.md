```jsx
const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');
const { Menu, Item } = require('@zendeskgarden/react-menus');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

const OverflowMenu = () => (
  <Menu
    onChange={selectedKey => alert(selectedKey)}
    placement="bottom-end"
    trigger={({ ref, isOpen }) => (
      <OverflowButton
        innerRef={ref}
        active={isOpen}
        onBlur={e => {
          /** Used to keep visual focus within row once menu is exanded */
          if (isOpen) {
            e.preventDefault();
          }
        }}
      />
    )}
  >
    <Item key="item-1">Option 1</Item>
    <Item key="item-2">Option 2</Item>
  </Menu>
);

<Table>
  <StyledCaption>Overflow Menu</StyledCaption>
  <Head>
    <Row header>
      <HeaderCell>Subject</HeaderCell>
      <HeaderCell>Requester</HeaderCell>
      <HeaderCell>Requested</HeaderCell>
      <HeaderCell>Type</HeaderCell>
      <HeaderCell menu>
        <OverflowMenu />
      </HeaderCell>
    </Row>
  </Head>
  <Body>
    <Row>
      <Cell>Where are my shoes?</Cell>
      <Cell>John Smith</Cell>
      <Cell>15 minutes ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Was charged twice</Cell>
      <Cell>Jane Doe</Cell>
      <Cell>25 minutes ago</Cell>
      <Cell>Call</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 1</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 2</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 3</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
  </Body>
</Table>;
```
