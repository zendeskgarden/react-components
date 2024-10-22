import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { MenuStory } from './MenuStory';
import { Items } from './types';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<MenuStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

const mockItems: Items = [
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2', icon: true },
  { value: 'item-3', label: 'Item 3', meta: 'Meta' },
  {
    legend: 'Group 1',
    'aria-label': 'Group 1',
    items: [
      { value: 'group-item-1', label: 'Group Item 1' },
      { value: 'group-item-2', label: 'Group Item 2', icon: true }
    ]
  },
  { isSeparator: true, value: 'separator' },
  { value: 'item-4', label: 'Item 4' }
];

describe('MenuStory Component', () => {
  it('renders default MenuStory', () => {
    renderAndMatchSnapshot({ items: mockItems });
  });

  it('renders MenuStory with compact styling', () => {
    renderAndMatchSnapshot({ items: mockItems, isCompact: true });
  });

  it('renders MenuStory with an arrow', () => {
    renderAndMatchSnapshot({ items: mockItems, hasArrow: true });
  });

  it('renders MenuStory with expanded state', () => {
    renderAndMatchSnapshot({ items: mockItems, isExpanded: true });
  });

  it('renders MenuStory with a custom maxHeight', () => {
    renderAndMatchSnapshot({ items: mockItems, maxHeight: 300 });
  });

  it('renders MenuStory with a custom minHeight', () => {
    renderAndMatchSnapshot({ items: mockItems, minHeight: 100 });
  });

  it('renders MenuStory with a custom zIndex', () => {
    renderAndMatchSnapshot({ items: mockItems, zIndex: 500 });
  });

  it('renders MenuStory with a custom placement', () => {
    renderAndMatchSnapshot({ items: mockItems, placement: 'top' });
  });

  it('renders MenuStory with fallback placements', () => {
    renderAndMatchSnapshot({ items: mockItems, fallbackPlacements: ['top', 'bottom'] });
  });

  it('renders MenuStory with a custom triggerRef', () => {
    const triggerRef = React.createRef<HTMLElement>();
    renderAndMatchSnapshot({ items: mockItems, triggerRef });
  });

  it('renders MenuStory with compact styling and an arrow', () => {
    renderAndMatchSnapshot({ items: mockItems, isCompact: true, hasArrow: true });
  });

  it('renders MenuStory with expanded state and custom placement', () => {
    renderAndMatchSnapshot({ items: mockItems, isExpanded: true, placement: 'bottom' });
  });

  it('renders MenuStory with custom maxHeight, minHeight, and zIndex', () => {
    renderAndMatchSnapshot({ items: mockItems, maxHeight: 400, minHeight: 200, zIndex: 1000 });
  });

  it('renders MenuStory with fallback placements and a custom triggerRef', () => {
    const triggerRef = React.createRef<HTMLElement>();
    renderAndMatchSnapshot({ items: mockItems, fallbackPlacements: ['left', 'right'], triggerRef });
  });

  it('renders MenuStory with compact styling, an arrow, and expanded state', () => {
    renderAndMatchSnapshot({ items: mockItems, isCompact: true, hasArrow: true, isExpanded: true });
  });

  it('renders MenuStory with all custom props', () => {
    const triggerRef = React.createRef<HTMLElement>();
    renderAndMatchSnapshot({
      items: mockItems,
      isCompact: true,
      hasArrow: true,
      isExpanded: true,
      maxHeight: 500,
      minHeight: 150,
      zIndex: 2000,
      placement: 'right',
      fallbackPlacements: ['top', 'bottom'],
      triggerRef
    });
  });
});
