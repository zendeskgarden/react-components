/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { render, renderRtl } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { IMenuProps } from '../../types';
import { Menu } from './Menu';
import { ItemGroup } from './ItemGroup';
import { Item } from './Item';
import { Separator } from './Separator';
import { PALETTE } from '@zendeskgarden/react-theming';

interface TestMenuProps extends Omit<IMenuProps, 'button'> {
  button?: IMenuProps['button'];
}

const TestMenu = forwardRef<HTMLUListElement, TestMenuProps>(
  ({ button = 'trigger', children, ...props }, ref) => (
    <Menu data-test-id="menu" button={button} {...props} ref={ref}>
      {children}
    </Menu>
  )
);

TestMenu.displayName = 'TestMenu';

/**
 * Flush floating-ui-related microtasks before interacting with test fixture
 * https://floating-ui.com/docs/react#testing
 */
// eslint-disable-next-line require-await
const floating = async () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return act(async () => {});
};

describe('Menu', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLUListElement>();
    const { getByTestId } = render(<TestMenu ref={ref} />);

    await floating();
    const menu = getByTestId('menu');

    expect(menu).toBe(ref.current);
  });

  it('renders in rtl', async () => {
    const { getByTestId } = renderRtl(
      <TestMenu>
        <Item value="item" />
      </TestMenu>
    );

    await floating();

    expect(getByTestId('menu')).toBeTruthy();
  });

  it('renders with button label', async () => {
    const { getByRole } = render(<TestMenu button="click me" />);

    await floating();
    const button = getByRole('button');

    expect(button).toHaveTextContent('click me');
  });

  it('renders with button callback', async () => {
    const { getByTestId } = render(
      <TestMenu
        button={props => (
          <span {...props} data-test-id="custom-trigger">
            Custom trigger
          </span>
        )}
      />
    );

    await floating();
    const trigger = getByTestId('custom-trigger');

    expect(trigger).toBeTruthy();
    expect(trigger).toHaveAttribute('role', 'button');
  });

  it('passes disabled from buttonProps to container props', async () => {
    const { getByRole } = render(<TestMenu button="click me" buttonProps={{ disabled: true }} />);

    await floating();
    const trigger = getByRole('button');

    expect(trigger).toHaveAttribute('disabled');
  });

  it('passes handlers from buttonProps to container props', async () => {
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    const { getByRole } = render(
      <TestMenu button="click me" buttonProps={{ onClick, onKeyDown }} />
    );

    await floating();
    const trigger = getByRole('button');

    await user.click(trigger);
    expect(onClick).toHaveBeenCalled();

    trigger.focus();
    await user.keyboard(' ');
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('applies `defaultExpanded`', async () => {
    const { getByText } = render(
      <TestMenu defaultExpanded>
        <Item value="Flower" />
      </TestMenu>
    );

    await floating();
    const item = getByText('Flower');

    expect(item).toBeVisible();
  });

  it('applies `defaultFocusedValue` after a keyboard event opens the menu', async () => {
    const { getByTestId, getByRole } = render(
      <TestMenu defaultFocusedValue="Cactus">
        <Item value="Flower" data-test-id="item-01">
          Flower
          <Item.Meta>Smooth</Item.Meta>
        </Item>
        <Separator />
        <Item value="Cactus" data-test-id="item-02">
          Cactus
          <Item.Meta>Pointy</Item.Meta>
        </Item>
      </TestMenu>
    );

    await floating();
    const trigger = getByRole('button');

    // open menu with onClick
    await user.click(trigger);
    const item = getByTestId('item-02');
    // focus remains on trigger with mouseEvents
    expect(trigger).toHaveFocus();

    // close menu
    await user.click(trigger);
    expect(item).not.toBeVisible();

    // open menu with keyboard
    trigger.focus();
    await user.keyboard(' ');
    // focus is on the focused item associated with `defaultFocusedValue`
    expect(item).toHaveFocus();
  });

  it('applies `isCompact` styling', async () => {
    const renderButton = jest.fn();

    const { getByTestId } = render(
      <TestMenu isCompact isExpanded button={renderButton}>
        <Item value="Flower" data-test-id="item-01" />
        <Item value="Cactus" data-test-id="item-02" />
      </TestMenu>
    );

    await floating();
    const item = getByTestId('item-01');

    expect(renderButton).toHaveBeenCalledWith(expect.objectContaining({ size: 'small' }));
    expect(item).toHaveStyleRule('min-height', '28px');
  });

  it('portals the menu with `appendToNode`', async () => {
    const { container, rerender } = render(<TestMenu />);

    await floating();

    expect(container.querySelector('[role="menu"]')).not.toBeNull();

    const node = document.createElement('DIV');

    document.body.appendChild(node);

    rerender(<TestMenu appendToNode={node} />);
    await floating();

    expect(container.querySelector('[role="menu"]')).toBeNull();
    expect(node.querySelector('[role="menu"]')).not.toBeNull();
  });

  it('renders with correct `maxHeight`', async () => {
    const { getByRole } = render(
      <TestMenu maxHeight="100px" defaultExpanded>
        {['Apple', 'Cherry', 'Aster', 'Daisy', 'Ivy', 'Poppy'].map(item => (
          <Item value={item} key={item}>
            {item}
          </Item>
        ))}
      </TestMenu>
    );

    await floating();
    const menu = getByRole('menu');

    expect(menu).toHaveStyleRule('max-height', '100px');
  });

  it('renders with correct `minHeight`', async () => {
    const { getByRole } = render(
      <TestMenu minHeight="150px" defaultExpanded>
        {['Apple', 'Cherry', 'Aster', 'Daisy', 'Ivy', 'Poppy'].map(item => (
          <Item value={item} key={item}>
            {item}
          </Item>
        ))}
      </TestMenu>
    );

    await floating();
    const menu = getByRole('menu');

    expect(menu).toHaveStyleRule('min-height', '150px');
  });

  it('renders with correct `zIndex`', async () => {
    const { getByRole } = render(
      <TestMenu zIndex={50} defaultExpanded>
        <Item value="item-01">Apple</Item>
      </TestMenu>
    );

    await floating();
    const floatingElement = getByRole('menu').parentElement!;

    expect(floatingElement).toHaveStyleRule('z-index', '50');
  });

  describe('Item', () => {
    it('renders with icon', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" icon={<svg data-test-id="icon" />} data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const item = getByTestId('item');
      const icon = getByTestId('icon');

      expect(icon).not.toBeNull();
      expect(icon.closest('[role="menuitem"]')).toBe(item);
    });

    it('renders as disabled', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" isDisabled data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const item = getByTestId('item');

      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders as "next" type', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" type="next" data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const icon = getByTestId('item').querySelector('svg')!;

      expect(icon).toBeVisible();
    });

    it('renders as "previous" type', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" type="previous" data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const icon = getByTestId('item').querySelector('svg')!;

      expect(icon).toBeVisible();
    });

    it('renders as "danger" type', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" type="danger" data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const item = getByTestId('item');
      const icon = item.querySelector('svg')!;

      expect(item).toHaveStyleRule('color', PALETTE.red[700]);
      expect(icon).not.toBeVisible();
    });

    it('renders as "add" type', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" type="add" data-test-id="item">
            Apple
          </Item>
        </TestMenu>
      );

      await floating();
      const icon = getByTestId('item').querySelector('svg')!;

      expect(icon).toBeVisible();
    });

    it('applies `items` with default selection', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded defaultFocusedValue="Cactus">
          <ItemGroup legend="Plants" type="checkbox">
            <Item value="Flower" data-test-id="flower" />
            <Item value="Cactus" data-test-id="cactus" isSelected />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const itemOne = getByTestId('flower').querySelector('svg');
      const itemTwo = getByTestId('cactus').querySelector('svg');

      expect(itemOne).not.toBeVisible();
      expect(itemTwo).toBeVisible();
    });
  });

  describe('ItemGroup', () => {
    it('renders with legend', async () => {
      const { getByText } = render(
        <TestMenu defaultExpanded>
          <ItemGroup legend="Plants">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const legend = getByText('Plants');

      expect(legend).toBeVisible();
    });

    it('renders separator with legend', async () => {
      const { getByRole } = render(
        <TestMenu defaultExpanded>
          <ItemGroup data-test-id="group" legend="Plants">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const separator = getByRole('group').firstElementChild!;

      expect(separator).toBeVisible();
      expect(separator).toBeEmptyDOMElement();
    });

    it('renders with aria-label', async () => {
      const { getByRole } = render(
        <TestMenu defaultExpanded>
          <ItemGroup data-test-id="group" type="checkbox" aria-label="Select a plant">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const group = getByRole('group');

      expect(group).toHaveAttribute('aria-label', 'Select a plant');
    });

    it('renders with legend icon', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <ItemGroup icon={<svg data-test-id="icon" />} legend="Plants">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const icon = getByTestId('icon');

      expect(icon).toBeVisible();
    });

    it('overrides label with content if provided', async () => {
      const { getByText } = render(
        <TestMenu defaultExpanded>
          <ItemGroup legend="Plants" content="stnalP">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const content = getByText('stnalP');

      expect(content).toBeVisible();
    });

    it('does not render icon without visual label', async () => {
      const { queryByTestId } = render(
        <TestMenu defaultExpanded>
          <ItemGroup icon={<svg data-test-id="group-icon" />} aria-label="Plants">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const icon = queryByTestId('group-icon');

      expect(icon).toBeNull();
    });

    it('renders icon with content', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <ItemGroup icon={<svg data-test-id="group-icon" />} legend="Plants">
            <Item value="Flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const icon = getByTestId('group-icon');

      expect(icon).toBeVisible();
    });
  });

  /**
   * These are meant to validate that container-menu is
   * hooked up correctly and in the correct places, rather
   * than exhaustive functional tests
   */
  describe('interaction', () => {
    it('opens menu on button click', async () => {
      const { queryByTestId, getByRole } = render(
        <TestMenu>
          <Item value="Flower" data-test-id="item-01" />
          <Item value="Cactus" />
        </TestMenu>
      );

      await floating();
      const button = getByRole('button');

      await act(async () => {
        await user.click(button);
      });

      expect(queryByTestId('item-01')).not.toBeNull();
    });

    it('closes menu on item click', async () => {
      const { queryByTestId, getByTestId, getByRole } = render(
        <TestMenu>
          <Item value="Flower" data-test-id="item-01" />
          <Item value="Cactus" />
        </TestMenu>
      );

      await floating();
      const button = getByRole('button');

      await act(async () => {
        await user.click(button);
      });

      const item = getByTestId('item-01')!;

      expect(item).not.toBeNull();

      await act(async () => {
        await user.click(item);
      });

      expect(queryByTestId('item')).toBeNull();
    });

    it('correctly selects checkbox item', async () => {
      const { getByTestId } = render(
        <TestMenu isExpanded>
          <ItemGroup type="checkbox" aria-label="Plants">
            <Item value="Flower" data-test-id="flower" />
            <Item value="Cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const item = getByTestId('flower');

      await act(async () => {
        await user.click(item);
      });

      expect(item).toHaveAttribute('aria-checked', 'true');
    });

    it('correctly selects radio item', async () => {
      const { getByTestId } = render(
        <TestMenu isExpanded>
          <ItemGroup type="radio" aria-label="Plants">
            <Item value="Flower" name="plants" data-test-id="flower" />
            <Item value="Cactus" name="plants" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const item1 = getByTestId('flower');

      await act(async () => {
        await user.click(item1);
      });

      expect(item1).toHaveAttribute('aria-checked', 'true');
    });

    it('correctly moves radio item selection', async () => {
      const { getByTestId } = render(
        <TestMenu isExpanded>
          <ItemGroup type="radio" aria-label="Plants">
            <Item value="Flower" name="plants" data-test-id="flower" />
            <Item value="Cactus" name="plants" data-test-id="cactus" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      const item1 = getByTestId('flower');
      const item2 = getByTestId('cactus');

      await act(async () => {
        await user.click(item1);
      });

      expect(item1).toHaveAttribute('aria-checked', 'true');

      await act(async () => {
        await user.click(item2);
      });

      expect(item1).toHaveAttribute('aria-checked', 'false');
      expect(item2).toHaveAttribute('aria-checked', 'true');
    });

    it('renders with `fallbackPlacements`', async () => {
      const { getByRole } = render(
        <TestMenu defaultExpanded fallbackPlacements={['top-start']}>
          <Item value="item" />
        </TestMenu>
      );

      await floating();

      expect(getByRole('menu')).toBeTruthy();
    });
  });

  describe('controlled', () => {
    const handleChange = jest.fn();

    beforeEach(() => {
      handleChange.mockReset();
    });

    it('calls onChange as expected', async () => {
      const { getByRole, getByTestId } = render(
        <TestMenu isExpanded focusedValue="Cactus" onChange={handleChange}>
          <Item value="Flower" data-test-id="flower" />
          <Item value="Cactus" />
        </TestMenu>
      );

      await floating();
      const trigger = getByRole('button');
      const item1 = getByTestId('flower');

      await act(async () => {
        await user.click(item1);
      });

      const changeTypes = handleChange.mock.calls.map(([change]) => change.type);

      expect(changeTypes).toMatchObject(['menuItem:mouseMove', 'menuItem:click']);
      expect(trigger).toHaveFocus();
    });

    it('handles `focusedValue` and `isExpanded` as expected', async () => {
      const { getByTestId, getByRole } = render(
        <TestMenu isExpanded focusedValue="Cactus">
          <Item value="Flower" />
          <Item value="Cactus" data-test-id="cactus" />
        </TestMenu>
      );

      await floating();
      const focusedItem = getByTestId('cactus');

      expect(getByRole('menu')).toBeVisible();
      expect(focusedItem).toHaveFocus();
    });

    it('handles `selectedItems` as expected', async () => {
      const { getByTestId } = render(
        <TestMenu
          isExpanded
          selectedItems={[
            { value: 'Apple', type: 'checkbox' },
            { value: 'Grape', type: 'checkbox' }
          ]}
        >
          <ItemGroup type="checkbox" aria-label="Fruits">
            <Item value="Apple" data-test-id="apple" />
            <Item value="Orange" />
            <Item value="Grape" data-test-id="grape" />
          </ItemGroup>
        </TestMenu>
      );

      await floating();
      expect(getByTestId('apple')).toHaveAttribute('aria-checked', 'true');
      expect(getByTestId('grape')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', async () => {
      const { getByRole } = render(<TestMenu button="click me" />);

      await floating();
      const button = getByRole('button');

      expect(button).toHaveAttribute('data-garden-id', 'buttons.button');
    });
  });

  describe('Item link behavior', () => {
    it('renders with href as anchor tag', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" href="https://example.com" isExternal data-test-id="item">
            Example Link
          </Item>
        </TestMenu>
      );
      await floating();
      const item = getByTestId('item');
      expect(item.tagName).toBe('A');
      expect(item).toHaveAttribute('href', 'https://example.com');
      expect(item).toHaveAttribute('target', '_blank');
      expect(item).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders with isExternal=false correctly', async () => {
      const { getByTestId } = render(
        <TestMenu defaultExpanded>
          <Item value="item-01" href="https://example.com" isExternal={false} data-test-id="item">
            Internal Link
          </Item>
        </TestMenu>
      );
      await floating();
      const item = getByTestId('item');
      expect(item.tagName).toBe('A');
      expect(item).toHaveAttribute('href', 'https://example.com');
      expect(item).not.toHaveAttribute('target');
      expect(item).not.toHaveAttribute('rel');
    });

    it('throws error when href is used with a selection type', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      expect(() => {
        render(
          <TestMenu defaultExpanded>
            <ItemGroup type="checkbox" aria-label="Plants">
              <Item value="Flower" href="https://example.com" />
            </ItemGroup>
          </TestMenu>
        );
      }).toThrow(/can't use selection type/u);

      consoleSpy.mockRestore();
    });

    it('throws error when href is used with option type', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      expect(() => {
        render(
          <TestMenu defaultExpanded>
            <Item value="item-01" href="https://example.com" type="add" />
          </TestMenu>
        );
      }).toThrow(/can't use type/u);

      consoleSpy.mockRestore();
    });
  });
});
