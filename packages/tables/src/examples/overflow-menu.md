Overflow menus are achieved by using the `Menu` component available in
the [@zendeskgarden/react-menus](https://garden.zendesk.com/react-components/menus/)
package.

Based on `Table` positioning and other implementation specific details you may need
to apply manual positioning against the `Menu` to ensure a standard look and feel.

**Accessibility Warning:** All usages of `<OverflowButton />` must contain an `aria-label`
or other assistive technique to have discernible text.

```jsx
const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');
const { Menu, Item } = require('@zendeskgarden/react-menus/src');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

const OverflowMenu = ({ isHeader = false }) => (
  <Menu
    onChange={selectedKey => alert(selectedKey)}
    placement="bottom-end"
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
           * Have to ensure that popper is placed relative
           * to the trigger
           **/
          data.offsets.popper.top -= isHeader ? 12 : 8;
          return data;
        }
      }
    }}
    trigger={({ ref, isOpen }) => {
      const buttonProps = { innerRef: ref, active: isOpen, 'aria-label': 'Row Actions' };

      if (isOpen) {
        buttonProps.focused = false;
      }

      return (
        <OverflowButton
          {...buttonProps}
          onBlur={e => {
            /** Used to keep visual focus within row once menu is exanded */
            if (isOpen) {
              e.preventDefault();
            }
          }}
        />
      );
    }}
  >
    <Item key="item-1">Option 1</Item>
    <Item key="item-2">Option 2</Item>
  </Menu>
);

<Table>
  <StyledCaption>Overflow Menu</StyledCaption>
  <Head>
    <Row header>
      <HeaderCell width="25%">Subject</HeaderCell>
      <HeaderCell width="25%">Requester</HeaderCell>
      <HeaderCell width="25%">Requested</HeaderCell>
      <HeaderCell width="25%">Type</HeaderCell>
      <HeaderCell menu>
        <OverflowMenu isHeader />
      </HeaderCell>
    </Row>
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
