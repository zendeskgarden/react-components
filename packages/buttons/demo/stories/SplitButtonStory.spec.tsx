/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { SplitButtonStory } from './SplitButtonStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<SplitButtonStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('SplitButtonStory Component', () => {
  it('renders default SplitButtonStory', () => {
    renderAndMatchSnapshot({ children: 'Split Button' });
  });

  it('renders SplitButtonStory with a rotated chevron button', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isRotated: true });
  });

  it('renders SplitButtonStory with danger styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isDanger: true });
  });

  it('renders SplitButtonStory with primary styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isPrimary: true });
  });

  it('renders SplitButtonStory with neutral styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isNeutral: true });
  });

  it('renders SplitButtonStory with basic styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isBasic: true });
  });

  it('renders SplitButtonStory with pill styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', isPill: true });
  });

  it('renders SplitButtonStory with focus inset styling', () => {
    renderAndMatchSnapshot({ children: 'Split Button', focusInset: true });
  });

  it('renders SplitButtonStory with small size', () => {
    renderAndMatchSnapshot({ children: 'Split Button', size: 'small' });
  });

  it('renders SplitButtonStory with large size', () => {
    renderAndMatchSnapshot({ children: 'Split Button', size: 'large' });
  });

  it('renders SplitButtonStory with aria-label', () => {
    renderAndMatchSnapshot({ children: 'Split Button', 'aria-label': 'Split Button Aria' });
  });

  it('renders SplitButtonStory with danger styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      isDanger: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with primary styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      isPrimary: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with neutral styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      isNeutral: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with basic styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      isBasic: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with pill styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      isPill: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with focus inset styling and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      focusInset: true,
      isRotated: true
    });
  });

  it('renders SplitButtonStory with small size and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      size: 'small',
      isRotated: true
    });
  });

  it('renders SplitButtonStory with large size and rotated chevron button', () => {
    renderAndMatchSnapshot({
      children: 'Split Button',
      size: 'large',
      isRotated: true
    });
  });
});
