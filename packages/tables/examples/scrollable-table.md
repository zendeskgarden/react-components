Native HTML `<table>` elements are unable to display `overflow` styling.
This requires custom styling and layouts to create scrollable body elements.

To ensure that your table is read correctly by assistive technologies
follow the [W3C Grid accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#grid).

```jsx
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
          </Row>
        ))}
      </Body>
    </Table>
  </StyledScrollableContainer>
</div>;
```
