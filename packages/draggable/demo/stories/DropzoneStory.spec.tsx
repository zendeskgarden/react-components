/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { DropzoneStory } from './DropzoneStory';
import ReplaceIcon from '@zendeskgarden/svg-icons/src/16/arrow-retweet-stroke.svg';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<DropzoneStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('DropzoneStory Component', () => {
  it('renders default DropzoneStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders DropzoneStory with children', () => {
    renderAndMatchSnapshot({ children: 'Drop files here' });
  });

  it('renders DropzoneStory with an icon', () => {
    renderAndMatchSnapshot({ hasIcon: true });
  });

  it('renders DropzoneStory with children and an icon', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true });
  });

  it('renders DropzoneStory with active state', () => {
    renderAndMatchSnapshot({ isActive: true });
  });

  it('renders DropzoneStory with vertical alignment', () => {
    renderAndMatchSnapshot({ isVertical: true });
  });

  it('renders DropzoneStory with danger styling', () => {
    renderAndMatchSnapshot({ isDanger: true });
  });

  it('renders DropzoneStory with disabled state', () => {
    renderAndMatchSnapshot({ isDisabled: true });
  });

  it('renders DropzoneStory with highlighted state', () => {
    renderAndMatchSnapshot({ isHighlighted: true });
  });

  it('renders DropzoneStory with a custom tag', () => {
    renderAndMatchSnapshot({ tag: 'section' });
  });

  it('renders DropzoneStory with children, icon, and active state', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, isActive: true });
  });

  it('renders DropzoneStory with children, icon, and vertical alignment', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, isVertical: true });
  });

  it('renders DropzoneStory with children, icon, and danger styling', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, isDanger: true });
  });

  it('renders DropzoneStory with children, icon, and disabled state', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, isDisabled: true });
  });

  it('renders DropzoneStory with children, icon, and highlighted state', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, isHighlighted: true });
  });

  it('renders DropzoneStory with children, icon, and custom tag', () => {
    renderAndMatchSnapshot({ children: 'Drop files here', hasIcon: true, tag: 'section' });
  });

  it('renders DropzoneStory with children, icon, active state, and vertical alignment', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, and danger styling', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, and danger styling', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, and danger styling', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, and disabled state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, danger styling, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDanger: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, danger styling, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, disabled state, and highlighted state', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, disabled state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, vertical alignment, danger styling, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });

  it('renders DropzoneStory with children, icon, active state, vertical alignment, danger styling, disabled state, highlighted state, and custom tag', () => {
    renderAndMatchSnapshot({
      children: 'Drop files here',
      hasIcon: true,
      isActive: true,
      isVertical: true,
      isDanger: true,
      isDisabled: true,
      isHighlighted: true,
      tag: 'section'
    });
  });
});
