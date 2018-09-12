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
      <HeaderCell width="25%">Subject</HeaderCell>
      <HeaderCell width="25%">Requester</HeaderCell>
      <HeaderCell width="25%">Requested</HeaderCell>
      <HeaderCell width="25%">Type</HeaderCell>
    </Row>
  </Head>
  <Body>
    <Row group>
      <Cell width="100%">
        Status <strong>Open</strong>
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">
        Where are my shoes? this is some super long text to test the wrapping ability of everything
      </Cell>
      <Cell width="25%">John Smith</Cell>
      <Cell width="25%">15 minutes ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Was charged twice</Cell>
      <Cell width="25%">Jane Doe</Cell>
      <Cell width="25%">25 minutes ago</Cell>
      <Cell width="25%">Call</Cell>
    </Row>
    <Row group>
      <Cell width="100%">
        Status <strong>Closed</strong>
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 1</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 2</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 3</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
  </Body>
</Table>;
```
