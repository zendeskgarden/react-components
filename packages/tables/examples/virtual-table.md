Virtualized tables can help efficiently render large amounts of data.

This implementation uses the [react-window](https://react-window.now.sh)
library to implement its virtualization.

```jsx
const { FixedSizeList } = require('react-window');

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

const ScrollableTable = styled(Table).attrs({ role: 'presentation' })`
  display: block !important;
`;

const ScrollableHead = styled(Head)`
  display: block;
`;

const ScrollableHeaderRow = styled(HeaderRow).attrs({ role: 'row' })`
  display: table !important;
  table-layout: fixed;
  width: 100%;
`;

const ScrollableHeaderCell = styled(HeaderCell).attrs({ role: 'columnheader' })``;

const ScrollableBody = styled(Body)`
  display: block !important;
`;

const ScrollableRow = styled(Row).attrs({ role: 'row' })`
  display: table !important;
  table-layout: fixed;
`;

const ScrollableCell = styled(Cell).attrs({ role: 'cell' })``;

<div role="grid" aria-rowcount={rowData.length} aria-colcount="4">
  <ScrollableTable>
    <ScrollableHead>
      <ScrollableHeaderRow>
        <ScrollableHeaderCell>Subject</ScrollableHeaderCell>
        <ScrollableHeaderCell>Requester</ScrollableHeaderCell>
        <ScrollableHeaderCell>Requested</ScrollableHeaderCell>
        <ScrollableHeaderCell>Type</ScrollableHeaderCell>
      </ScrollableHeaderRow>
    </ScrollableHead>
  </ScrollableTable>
  <FixedSizeList
    height={500}
    itemCount={rowData.length}
    itemSize={35}
    width="100%"
    outerElementType={ScrollableTable}
    innerElementType={ScrollableBody}
  >
    {({ index, style }) => (
      <ScrollableRow key={rowData[index].id} style={style} aria-rowindex={index + 1}>
        <ScrollableCell isTruncated>
          [{rowData[index].id}] {rowData[index].subject}
        </ScrollableCell>
        <ScrollableCell isTruncated>{rowData[index].requester}</ScrollableCell>
        <ScrollableCell isTruncated>{rowData[index].requested}</ScrollableCell>
        <ScrollableCell isTruncated>{rowData[index].type}</ScrollableCell>
      </ScrollableRow>
    )}
  </FixedSizeList>
</div>;
```
