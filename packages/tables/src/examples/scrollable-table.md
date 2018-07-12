Scrollable tables can be enabled with the `scrollable` prop. This defines the height of the `<Body>` element.

Similar to native, HTML tables there are some quirks with scrollable rows:

- You must manually define the `width` of all `HeaderCell` and `Cell` components
- You should use the `truncate` prop to ensure text is display correctly in all locales

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

const CustomWidthCell = styled(Cell)`
  width: 25%;
`;

const CustomWidthHeaderCell = styled(HeaderCell)`
  width: 25%;
`;

<Table scrollable="200px">
  <StyledCaption>Your Scrollable Tickets</StyledCaption>
  <Head>
    <Row header>
      <CustomWidthHeaderCell scope="col" truncate>Subject</CustomWidthHeaderCell>
      <CustomWidthHeaderCell scope="col" truncate>Requester</CustomWidthHeaderCell>
      <CustomWidthHeaderCell scope="col" truncate>Requested</CustomWidthHeaderCell>
      <CustomWidthHeaderCell scope="col" truncate>Type</CustomWidthHeaderCell>
    </Row>
  </Head>
  <Body>
    <Row>
      <CustomWidthCell truncate>Where are my shoes?</CustomWidthCell>
      <CustomWidthCell truncate>John Smith</CustomWidthCell>
      <CustomWidthCell truncate>15 minutes ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Was charged twice</CustomWidthCell>
      <CustomWidthCell truncate>Jane Doe</CustomWidthCell>
      <CustomWidthCell truncate>25 minutes ago</CustomWidthCell>
      <CustomWidthCell truncate>Call</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 1</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 2</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 3</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 4</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 5</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 6</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
    <Row>
      <CustomWidthCell truncate>Ticket 7</CustomWidthCell>
      <CustomWidthCell truncate>Unknown</CustomWidthCell>
      <CustomWidthCell truncate>2 months ago</CustomWidthCell>
      <CustomWidthCell truncate>Ticket</CustomWidthCell>
    </Row>
  </Body>
</Table>;
```
