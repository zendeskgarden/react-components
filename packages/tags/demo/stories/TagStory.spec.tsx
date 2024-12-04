/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { TagStory } from './TagStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TagStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TagStory Component', () => {
  it('renders default TagStory', () => {
    renderAndMatchSnapshot({ children: 'Default Tag' });
  });

  it('renders TagStory with an avatar', () => {
    renderAndMatchSnapshot({ children: 'Tag with Avatar', hasAvatar: true });
  });

  it('renders TagStory with a close button', () => {
    renderAndMatchSnapshot({ children: 'Tag with Close', hasClose: true });
  });

  it('renders TagStory with a close button and aria-label', () => {
    renderAndMatchSnapshot({
      children: 'Tag with Close and Aria Label',
      hasClose: true,
      closeAriaLabel: 'Close Tag'
    });
  });

  it('renders TagStory with an avatar and close button', () => {
    renderAndMatchSnapshot({
      children: 'Tag with Avatar and Close',
      hasAvatar: true,
      hasClose: true
    });
  });

  it('renders TagStory with pill styling', () => {
    renderAndMatchSnapshot({ children: 'Pill Tag', isPill: true });
  });

  it('renders TagStory with round styling', () => {
    renderAndMatchSnapshot({ children: 'Round Tag', isRound: true });
  });

  it('renders TagStory with regular font weight', () => {
    renderAndMatchSnapshot({ children: 'Regular Font Tag', isRegular: true });
  });

  it('renders TagStory with a custom hue', () => {
    renderAndMatchSnapshot({ children: 'Custom Hue Tag', hue: '#ff0000' });
  });

  it('renders TagStory with a small size', () => {
    renderAndMatchSnapshot({ children: 'Small Tag', size: 'small' });
  });

  it('renders TagStory with a large size', () => {
    renderAndMatchSnapshot({ children: 'Large Tag', size: 'large' });
  });

  it('renders TagStory with pill styling and an avatar', () => {
    renderAndMatchSnapshot({
      children: 'Pill Tag with Avatar',
      isPill: true,
      hasAvatar: true
    });
  });

  it('renders TagStory with round styling and a close button', () => {
    renderAndMatchSnapshot({
      children: 'Round Tag with Close',
      isRound: true,
      hasClose: true
    });
  });

  it('renders TagStory with regular font weight and a custom hue', () => {
    renderAndMatchSnapshot({
      children: 'Regular Font Tag with Custom Hue',
      isRegular: true,
      hue: '#00ff00'
    });
  });

  it('renders TagStory with pill styling, an avatar, and a close button', () => {
    renderAndMatchSnapshot({
      children: 'Pill Tag with Avatar and Close',
      isPill: true,
      hasAvatar: true,
      hasClose: true
    });
  });

  it('renders TagStory with round styling, a close button, and aria-label', () => {
    renderAndMatchSnapshot({
      children: 'Round Tag with Close and Aria Label',
      isRound: true,
      hasClose: true,
      closeAriaLabel: 'Close Tag'
    });
  });

  it('renders TagStory with regular font weight, a custom hue, and a large size', () => {
    renderAndMatchSnapshot({
      children: 'Regular Font Tag with Custom Hue and Large Size',
      isRegular: true,
      hue: '#0000ff',
      size: 'large'
    });
  });

  it('renders TagStory with pill styling, an avatar, a close button, and aria-label', () => {
    renderAndMatchSnapshot({
      children: 'Pill Tag with Avatar, Close, and Aria Label',
      isPill: true,
      hasAvatar: true,
      hasClose: true,
      closeAriaLabel: 'Close Tag'
    });
  });

  it('renders TagStory with round styling, a close button, aria-label, and a small size', () => {
    renderAndMatchSnapshot({
      children: 'Round Tag with Close, Aria Label, and Small Size',
      isRound: true,
      hasClose: true,
      closeAriaLabel: 'Close Tag',
      size: 'small'
    });
  });

  it('renders TagStory with regular font weight, a custom hue, a large size, and pill styling', () => {
    renderAndMatchSnapshot({
      children: 'Regular Font Tag with Custom Hue, Large Size, and Pill Styling',
      isRegular: true,
      hue: '#ff00ff',
      size: 'large',
      isPill: true
    });
  });
});
