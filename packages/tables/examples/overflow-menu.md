Overflow menus are achieved by using the `Dropdown` component available in
the [@zendeskgarden/react-dropdowns](https://zendeskgarden.github.io/react-components/dropdowns/)
package.

Based on `Table` positioning and other implementation specific details you may need
to apply manual positioning against the `Dropdown` to ensure a standard look and feel.

**Accessibility Warning:** All usages of `<OverflowButton />` must contain an `aria-label`
or other assistive technique to have discernible text.

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
const { Well } = require('@zendeskgarden/react-notifications/src');

const StyledCaption = styled(Caption)`
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.space.sm};
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
        preventOverflow: {
          boundariesElement: 'viewport'
        },
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

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

initialState = {
  rowSize: 'medium'
};

<Layout.Grid>
  <Layout.Row>
    <Layout.Col>
      <Well isRecessed>
        <Dropdown selectedItem={state.rowSize} onSelect={rowSize => setState({ rowSize })}>
          <Field>
            <Label>Row Size</Label>
            <Select isCompact>{state.rowSize}</Select>
          </Field>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Layout.Col>
  </Layout.Row>
  <StyledSpacer />
  <Layout.Row>
    <Layout.Col>
      <Table size={state.rowSize}>
        <StyledCaption>Overflow Menus</StyledCaption>
        <Head>
          <HeaderRow>
            <HeaderCell>Subject</HeaderCell>
            <HeaderCell>Requester</HeaderCell>
            <HeaderCell>Requested</HeaderCell>
            <HeaderCell>Type</HeaderCell>
            <HeaderCell hasOverflow>
              <OverflowMenu />
            </HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>Where are my shoes?</Cell>
            <Cell>John Smith</Cell>
            <Cell>15 minutes ago</Cell>
            <Cell>Ticket</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
          <Row>
            <Cell>Was charged twice</Cell>
            <Cell>Jane Doe</Cell>
            <Cell>25 minutes ago</Cell>
            <Cell>Call</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
          <Row>
            <Cell>Ticket 1</Cell>
            <Cell>Unknown</Cell>
            <Cell>2 months ago</Cell>
            <Cell>Ticket</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
          <Row>
            <Cell>Ticket 2</Cell>
            <Cell>Unknown</Cell>
            <Cell>2 months ago</Cell>
            <Cell>Ticket</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
          <Row>
            <Cell>Ticket 3</Cell>
            <Cell>Unknown</Cell>
            <Cell>2 months ago</Cell>
            <Cell>Ticket</Cell>
            <Cell hasOverflow>
              <OverflowMenu />
            </Cell>
          </Row>
        </Body>
      </Table>
    </Layout.Col>
  </Layout.Row>
</Layout.Grid>;
```
