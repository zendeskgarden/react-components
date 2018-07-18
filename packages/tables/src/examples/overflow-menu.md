Overflow menus are achieved by using the `Menu` component available in
the [@zendeskgarden/react-menus](https://garden.zendesk.com/react-components/menus/)
package.

Based on `Table` positioning and other implementation specific details you may need
to apply manual positioning against the `Menu` to ensure a standard look and feel.

```jsx
const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');
const { Menu, Item } = require('@zendeskgarden/react-menus');

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
        fn: (data) => {
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
      const buttonProps = { innerRef: ref, active: isOpen };

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
      <HeaderCell scope="col">Subject</HeaderCell>
      <HeaderCell scope="col">Requester</HeaderCell>
      <HeaderCell scope="col">Requested</HeaderCell>
      <HeaderCell scope="col">Type</HeaderCell>
      <HeaderCell menu>
        <OverflowMenu isHeader />
      </HeaderCell>
    </Row>
  </Head>
  <Body>
    <Row>
      <Cell>Where are my shoes?</Cell>
      <Cell>John Smith</Cell>
      <Cell>15 minutes ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Was charged twice</Cell>
      <Cell>Jane Doe</Cell>
      <Cell>25 minutes ago</Cell>
      <Cell>Call</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 1</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 2</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
    <Row>
      <Cell>Ticket 3</Cell>
      <Cell>Unknown</Cell>
      <Cell>2 months ago</Cell>
      <Cell>Ticket</Cell>
      <Cell menu>
        <OverflowMenu />
      </Cell>
    </Row>
  </Body>
</Table>;
```
