Virtualized tables can help efficiently render large amounts of data.

This implementation uses the [react-window](https://react-window.now.sh)
library to implement it's virtualization.

```jsx
const { FixedSizeList } = require('react-window');

const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

const rowData = [];

for (let x = 1; x <= 100000; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

<Table scrollable="500px" aria-rowcount={rowData.length} aria-colcount={4}>
  <StyledCaption>{rowData.length.toLocaleString()} Virtualized Tickets</StyledCaption>
  <Head>
    <Row header>
      <HeaderCell truncate width="25%">
        Subject
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Requester
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Requested
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Type
      </HeaderCell>
    </Row>
  </Head>
  <FixedSizeList
    height={500}
    itemCount={rowData.length}
    itemSize={35}
    width="100%"
    outerTagName={Body}
  >
    {({ index, style }) => (
      <Row key={rowData[index].id} style={style} aria-rowindex={index + 1}>
        <Cell truncate width="25%">
          [{rowData[index].id}] {rowData[index].subject}
        </Cell>
        <Cell truncate width="25%">
          {rowData[index].requester}
        </Cell>
        <Cell truncate width="25%">
          {rowData[index].requested}
        </Cell>
        <Cell truncate width="25%">
          {rowData[index].type}
        </Cell>
      </Row>
    )}
  </FixedSizeList>
</Table>;
```
