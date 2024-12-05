/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { DraggableStory } from './DraggableStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<DraggableStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('DraggableStory Component', () => {
  it('renders default DraggableStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders DraggableStory with grip', () => {
    renderAndMatchSnapshot({ hasGrip: true });
  });

  it('renders DraggableStory with children', () => {
    renderAndMatchSnapshot({ children: 'Draggable Item' });
  });

  it('renders DraggableStory with grip and children', () => {
    renderAndMatchSnapshot({ hasGrip: true, children: 'Draggable Item' });
  });

  it('renders DraggableStory with focusInset', () => {
    renderAndMatchSnapshot({ focusInset: true });
  });

  it('renders DraggableStory with isBare styling', () => {
    renderAndMatchSnapshot({ isBare: true });
  });

  it('renders DraggableStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  it('renders DraggableStory as disabled', () => {
    renderAndMatchSnapshot({ isDisabled: true });
  });

  it('renders DraggableStory as grabbed', () => {
    renderAndMatchSnapshot({ isGrabbed: true });
  });

  it('renders DraggableStory as placeholder', () => {
    renderAndMatchSnapshot({ isPlaceholder: true });
  });

  it('renders DraggableStory with a custom tag', () => {
    renderAndMatchSnapshot({ tag: 'section' });
  });

  it('renders DraggableStory with focusInset and grip', () => {
    renderAndMatchSnapshot({ focusInset: true, hasGrip: true });
  });

  it('renders DraggableStory with isBare and children', () => {
    renderAndMatchSnapshot({ isBare: true, children: 'Draggable Item' });
  });

  it('renders DraggableStory with isCompact and grip', () => {
    renderAndMatchSnapshot({ isCompact: true, hasGrip: true });
  });

  it('renders DraggableStory with isDisabled and children', () => {
    renderAndMatchSnapshot({ isDisabled: true, children: 'Draggable Item' });
  });

  it('renders DraggableStory with isGrabbed and grip', () => {
    renderAndMatchSnapshot({ isGrabbed: true, hasGrip: true });
  });

  it('renders DraggableStory with isPlaceholder and children', () => {
    renderAndMatchSnapshot({ isPlaceholder: true, children: 'Draggable Item' });
  });

  it('renders DraggableStory with a custom tag and grip', () => {
    renderAndMatchSnapshot({ tag: 'section', hasGrip: true });
  });

  it('renders DraggableStory with all props', () => {
    renderAndMatchSnapshot({
      hasGrip: true,
      children: 'Draggable Item',
      focusInset: true,
      isBare: true,
      isCompact: true,
      isDisabled: true,
      isGrabbed: true,
      isPlaceholder: true,
      tag: 'section'
    });
  });
});
