Native HTML `<table>` elements are unable to display `overflow` styling.
This requires custom styling and layouts to create scrollable body elements.

To ensure that your table is read correctly by assistive technologies
follow the [W3C Grid accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#grid).

```jsx
const {
  Dropdown,
  Trigger,
  Menu,
  Item,
  Field,
  Label,
  Select
} = require('@zendeskgarden/react-dropdowns/src');
const StyledCaption = styled(Caption)`
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.space.sm};
`;

const rowData = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

const StyledScrollableContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const OverflowMenu = () => (
  <Dropdown onSelect={selectedKey => alert(selectedKey)}>
    <Trigger>
      <OverflowButton aria-label="Row actions" />
    </Trigger>
    <Menu
      placement="bottom-end"
      style={{ marginTop: 0 }}
      popperModifiers={{
        flip: {
          enabled: false
        },
        offset: {
          fn: data => {
            /**
             * Ensure correct placement relative to trigger
             **/
            data.offsets.popper.top -= 2;
            return data;
          }
        }
      }}
    >
      <Item value="item-1">Option 1</Item>
      <Item value="item-2">Option 2</Item>
    </Menu>
  </Dropdown>
);

<div role="grid" aria-rowcount={rowData.length} aria-labelledby="caption">
  <Table role="presentation">
    <StyledCaption id="caption">Your Scrollable Tickets</StyledCaption>
    <Head>
      <HeaderRow role="row">
        <HeaderCell isTruncated role="columnheader">
          Subject
        </HeaderCell>
        <HeaderCell isTruncated role="columnheader">
          Requester
        </HeaderCell>
        <HeaderCell isTruncated role="columnheader">
          Requested
        </HeaderCell>
        <HeaderCell isTruncated role="columnheader">
          Type
        </HeaderCell>
        <HeaderCell hasOverflow>
          <OverflowMenu />
        </HeaderCell>
      </HeaderRow>
    </Head>
  </Table>
  <StyledScrollableContainer>
    <Table role="presentation">
      <Body>
        {rowData.map(data => (
          <Row key={data.id} role="row">
            <Cell isTruncated role="cell">
              {data.subject}
            </Cell>
            <Cell isTruncated role="cell">
              {data.requester}
            </Cell>
            <Cell isTruncated role="cell">
              {data.requested}
            </Cell>
            <Cell isTruncated role="cell">
              {data.type}
            </Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  </StyledScrollableContainer>
</div>;
```
