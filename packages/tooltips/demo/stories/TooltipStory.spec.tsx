/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { TooltipStory } from './TooltipStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TooltipStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TooltipStory Component (isVisible = true)', () => {
  const defaultContent = {
    title: 'Tooltip Title',
    paragraph: 'This is a tooltip paragraph.'
  };

  it('renders TooltipStory with isVisible', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true });
  });

  it('renders TooltipStory with isVisible and placement', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, placement: 'top' });
  });

  it('renders TooltipStory with isVisible and ', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true });
  });

  it('renders TooltipStory with isVisible and zIndex', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, zIndex: 1000 });
  });

  it('renders TooltipStory with isVisible and hasArrow', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, hasArrow: true });
  });

  it('renders TooltipStory with isVisible and isAnimated', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, isAnimated: true });
  });

  it('renders TooltipStory with isVisible and a custom id', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, id: 'custom-tooltip-id' });
  });

  it('renders TooltipStory with isVisible and a custom maxWidth', () => {
    renderAndMatchSnapshot({ content: defaultContent, isVisible: true, maxWidth: '300px' });
  });

  it('renders TooltipStory with isVisible, and zIndex', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      zIndex: 1500
    });
  });

  it('renders TooltipStory with isVisible, hasArrow, and placement', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      hasArrow: true,
      placement: 'left'
    });
  });

  it('renders TooltipStory with isVisible, isAnimated, and placement', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      isAnimated: true,
      placement: 'bottom'
    });
  });

  it('renders TooltipStory with isVisible, placement, and zIndex', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      placement: 'right',
      zIndex: 1500
    });
  });

  it('renders TooltipStory with isVisible, placement, isAnimated, and maxWidth', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      placement: 'top',
      isAnimated: true,
      maxWidth: '250px'
    });
  });

  it('renders TooltipStory with all custom props and isVisible', () => {
    renderAndMatchSnapshot({
      content: defaultContent,
      isVisible: true,
      placement: 'bottom',
      zIndex: 3000,
      hasArrow: true,
      isAnimated: true,
      id: 'tooltip-all-props',
      maxWidth: '350px'
    });
  });
});
