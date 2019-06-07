Overflow menus are achieved by using the `Menu` component available in
the [@zendeskgarden/react-menus](https://garden.zendesk.com/react-components/menus/)
package.

Based on `Table` positioning and other implementation specific details you may need
to apply manual positioning against the `Menu` to ensure a standard look and feel.

**Accessibility Warning:** All usages of `<OverflowButton />` must contain an `aria-label`
or other assistive technique to have discernible text.

```jsx
const { zdSpacingSm } = require('@zendeskgarden/css-variables');
const { Dropdown, Trigger, Menu, Item } = require('@zendeskgarden/react-dropdowns/src');
const { XL } = require('@zendeskgarden/react-typography/src');

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

<Table>
  <XL tag={Caption} style={{ marginBottom: zdSpacingSm }}>
    Overflow Menus
  </XL>
  <Head>
    <HeaderRow>
      <HeaderCell width="25%">Subject</HeaderCell>
      <HeaderCell width="25%">Requester</HeaderCell>
      <HeaderCell width="25%">Requested</HeaderCell>
      <HeaderCell width="25%">Type</HeaderCell>
      <HeaderCell menu>
        <OverflowMenu isHeader />
      </HeaderCell>
    </HeaderRow>
  </Head>
  <Body>
    <Row>
      <Cell width="25%">Where are my shoes?</Cell>
      <Cell width="25%">John Smith</Cell>
      <Cell width="25%">15 minutes ago</Cell>
      <Cell width="25%">Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">Was charged twice</Cell>
      <Cell width="25%">Jane Doe</Cell>
      <Cell width="25%">25 minutes ago</Cell>
      <Cell width="25%">Call</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 1</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 2</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 3</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
  </Body>
</Table>;
```
