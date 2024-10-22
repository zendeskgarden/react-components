import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { RadioStory } from './RadioStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<RadioStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('RadioStory Component', () => {
  it('renders default RadioStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders RadioStory with a label', () => {
    renderAndMatchSnapshot({ hasLabel: true });
  });

  it('renders RadioStory without a label', () => {
    renderAndMatchSnapshot({ hasLabel: false });
  });

  it('renders RadioStory with a hint', () => {
    renderAndMatchSnapshot({ hasHint: true, hint: 'This is a hint' });
  });

  it('renders RadioStory with a message', () => {
    renderAndMatchSnapshot({ hasMessage: true, message: 'This is a message' });
  });

  it('renders RadioStory with a label and hint', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint'
    });
  });

  it('renders RadioStory with a label and message', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasMessage: true,
      message: 'This is a message'
    });
  });

  it('renders RadioStory with a label, hint, and message', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message'
    });
  });

  it('renders RadioStory with compact styling', () => {
    renderAndMatchSnapshot({ isCompact: true });
  });

  it('renders RadioStory with a label and compact styling', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      isCompact: true
    });
  });

  it('renders RadioStory with a label, hint, and compact styling', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      isCompact: true
    });
  });

  it('renders RadioStory with a label, message, and compact styling', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });

  it('renders RadioStory with a label, hint, message, and compact styling', () => {
    renderAndMatchSnapshot({
      hasLabel: true,
      hasHint: true,
      hint: 'This is a hint',
      hasMessage: true,
      message: 'This is a message',
      isCompact: true
    });
  });
});
