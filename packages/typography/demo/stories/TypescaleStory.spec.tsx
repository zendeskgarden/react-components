import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { TypescaleStory } from './TypescaleStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TypescaleStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TypescaleStory Component', () => {
  it('renders default TypescaleStory (medium size)', () => {
    renderAndMatchSnapshot({});
  });

  it('renders TypescaleStory with small size', () => {
    renderAndMatchSnapshot({ size: 'small' });
  });

  it('renders TypescaleStory with large size', () => {
    renderAndMatchSnapshot({ size: 'large' });
  });

  it('renders TypescaleStory with extra-large size', () => {
    renderAndMatchSnapshot({ size: 'extra-large' });
  });

  it('renders TypescaleStory with 2x-large size', () => {
    renderAndMatchSnapshot({ size: '2x-large' });
  });

  it('renders TypescaleStory with 3x-large size', () => {
    renderAndMatchSnapshot({ size: '3x-large' });
  });

  it('renders TypescaleStory with display name', () => {
    renderAndMatchSnapshot({ hasDisplayName: true });
  });

  it('renders TypescaleStory with bold text', () => {
    renderAndMatchSnapshot({ isBold: true });
  });

  it('renders TypescaleStory with monospace font', () => {
    renderAndMatchSnapshot({ isMonospace: true });
  });

  it('renders TypescaleStory with a custom tag', () => {
    renderAndMatchSnapshot({ tag: 'span' });
  });

  it('renders TypescaleStory with small size and display name', () => {
    renderAndMatchSnapshot({ size: 'small', hasDisplayName: true });
  });

  it('renders TypescaleStory with large size and bold text', () => {
    renderAndMatchSnapshot({ size: 'large', isBold: true });
  });

  it('renders TypescaleStory with extra-large size and monospace font', () => {
    renderAndMatchSnapshot({ size: 'extra-large', isMonospace: true });
  });

  it('renders TypescaleStory with 2x-large size and custom tag', () => {
    renderAndMatchSnapshot({ size: '2x-large', tag: 'h1' });
  });

  it('renders TypescaleStory with 3x-large size, display name, and bold text', () => {
    renderAndMatchSnapshot({ size: '3x-large', hasDisplayName: true, isBold: true });
  });

  it('renders TypescaleStory with small size, monospace font, and custom tag', () => {
    renderAndMatchSnapshot({ size: 'small', isMonospace: true, tag: 'code' });
  });

  it('renders TypescaleStory with large size, display name, bold text, and monospace font', () => {
    renderAndMatchSnapshot({
      size: 'large',
      hasDisplayName: true,
      isBold: true,
      isMonospace: true
    });
  });

  it('renders TypescaleStory with extra-large size, display name, bold text, and custom tag', () => {
    renderAndMatchSnapshot({
      size: 'extra-large',
      hasDisplayName: true,
      isBold: true,
      tag: 'strong'
    });
  });

  it('renders TypescaleStory with 2x-large size, display name, monospace font, and custom tag', () => {
    renderAndMatchSnapshot({
      size: '2x-large',
      hasDisplayName: true,
      isMonospace: true,
      tag: 'pre'
    });
  });

  it('renders TypescaleStory with 3x-large size, display name, bold text, monospace font, and custom tag', () => {
    renderAndMatchSnapshot({
      size: '3x-large',
      hasDisplayName: true,
      isBold: true,
      isMonospace: true,
      tag: 'h2'
    });
  });
});
