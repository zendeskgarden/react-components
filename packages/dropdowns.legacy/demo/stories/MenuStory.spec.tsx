import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { MenuStory } from './MenuStory';
import { MENU_ITEMS } from './data';
import { Dropdown } from '@zendeskgarden/react-dropdowns.legacy';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(
    <Dropdown
      {...props}
      downshiftProps={{
        itemToString: (item?: any) => item && item.value,
        ...props.downshiftProps
      }}
    >
      <MenuStory {...props} />
      );
    </Dropdown>
  );

  expect(container.firstChild).toMatchSnapshot();
};

describe('MenuStory Component', () => {
  it('renders default MenuStory', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS });
  });

  it('renders MenuStory with compact styling', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, isCompact: true });
  });

  it('renders MenuStory with a custom placement', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, placement: 'top' });
  });

  it('renders MenuStory with a custom maxHeight', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, maxHeight: '200px' });
  });

  it('renders MenuStory with a custom maxHeight and compact styling', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, maxHeight: '200px', isCompact: true });
  });

  it('renders MenuStory with a custom maxHeight, compact styling, and animated transitions', () => {
    renderAndMatchSnapshot({
      items: MENU_ITEMS,
      maxHeight: '200px',
      isCompact: true
    });
  });

  it('renders MenuStory with a custom itemProps (disabled)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { disabled: true } });
  });

  it('renders MenuStory with a custom itemProps (isFocused)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { isFocused: true } });
  });

  it('renders MenuStory with a custom itemProps (isHovered)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { isHovered: true } });
  });

  it('renders MenuStory with a custom itemProps (isActive)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { isActive: true } });
  });

  it('renders MenuStory with a custom itemProps (isCompact)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { isCompact: true } });
  });

  it('renders MenuStory with a custom itemProps (isCompact and isActive)', () => {
    renderAndMatchSnapshot({ items: MENU_ITEMS, itemProps: { isCompact: true, isActive: true } });
  });

  it('renders MenuStory with a custom itemProps (disabled and isCompact)', () => {
    renderAndMatchSnapshot({
      items: MENU_ITEMS,
      itemProps: {
        disabled: true,
        isCompact: true
      }
    });
  });
});
