```jsx
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

<Table>
  <StyledCaption>Your Unsolved Tickets</StyledCaption>
  <Head>
    <Row header>
      <HeaderCell>Subject</HeaderCell>
      <HeaderCell>Requester</HeaderCell>
      <HeaderCell>Requested</HeaderCell>
      <HeaderCell>Type</HeaderCell>
    </Row>
  </Head>
  <Body>
    <Row group>
      <Cell colSpan={4}>
        Status <strong>Open</strong>
      </Cell>
    </Row>
    <Row>
      <Cell>Where are my shoes?</Cell>
      <Cell>John Smith</Cell>
      <Cell>15 minutes ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Was charged twice</Cell>
      <Cell>Jane Doe</Cell>
      <Cell>25 minutes ago</Cell>
      <Cell>Call</Cell>
    </Row>
    <Row group>
      <Cell colSpan={4}>
        Status <strong>Closed</strong>
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 1</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Ticket 2</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
    <Row>
      <Cell>Ticket 3</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
    </Row>
  </Body>
</Table>;
```
