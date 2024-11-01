/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { SkeletonStory } from './SkeletonStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<SkeletonStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('SkeletonStory Component', () => {
  it('renders default SkeletonStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders SkeletonStory with a custom background color', () => {
    renderAndMatchSnapshot({ backgroundColor: '#f0f0f0' });
  });

  it('renders SkeletonStory with light mode enabled', () => {
    renderAndMatchSnapshot({ isLight: true });
  });

  it('renders SkeletonStory with multiple skeletons (count = 3)', () => {
    renderAndMatchSnapshot({ count: 3 });
  });

  it('renders SkeletonStory with small typescale', () => {
    renderAndMatchSnapshot({ typescale: 'small' });
  });

  it('renders SkeletonStory with medium typescale', () => {
    renderAndMatchSnapshot({ typescale: 'medium' });
  });

  it('renders SkeletonStory with large typescale', () => {
    renderAndMatchSnapshot({ typescale: 'large' });
  });

  it('renders SkeletonStory with extra-large typescale', () => {
    renderAndMatchSnapshot({ typescale: 'extra-large' });
  });

  it('renders SkeletonStory with 2x-large typescale', () => {
    renderAndMatchSnapshot({ typescale: '2x-large' });
  });

  it('renders SkeletonStory with 3x-large typescale', () => {
    renderAndMatchSnapshot({ typescale: '3x-large' });
  });

  it('renders SkeletonStory with custom background color and light mode', () => {
    renderAndMatchSnapshot({ backgroundColor: '#f0f0f0', isLight: true });
  });

  it('renders SkeletonStory with custom background color and multiple skeletons', () => {
    renderAndMatchSnapshot({ backgroundColor: '#f0f0f0', count: 3 });
  });

  it('renders SkeletonStory with light mode and multiple skeletons', () => {
    renderAndMatchSnapshot({ isLight: true, count: 3 });
  });

  it('renders SkeletonStory with small typescale and multiple skeletons', () => {
    renderAndMatchSnapshot({ typescale: 'small', count: 3 });
  });

  it('renders SkeletonStory with medium typescale and light mode', () => {
    renderAndMatchSnapshot({ typescale: 'medium', isLight: true });
  });

  it('renders SkeletonStory with large typescale and custom background color', () => {
    renderAndMatchSnapshot({ typescale: 'large', backgroundColor: '#f0f0f0' });
  });

  it('renders SkeletonStory with extra-large typescale, light mode, and multiple skeletons', () => {
    renderAndMatchSnapshot({ typescale: 'extra-large', isLight: true, count: 3 });
  });

  it('renders SkeletonStory with 2x-large typescale, custom background color, and multiple skeletons', () => {
    renderAndMatchSnapshot({ typescale: '2x-large', backgroundColor: '#f0f0f0', count: 3 });
  });

  it('renders SkeletonStory with 3x-large typescale, light mode, and custom background color', () => {
    renderAndMatchSnapshot({ typescale: '3x-large', isLight: true, backgroundColor: '#f0f0f0' });
  });
});
