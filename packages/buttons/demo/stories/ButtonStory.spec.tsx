import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ButtonStory } from './ButtonStory';
const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ButtonStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ButtonStory Component', () => {
  it('renders default ButtonStory', () => {
    renderAndMatchSnapshot({ children: 'Button' });
  });

  it('renders ButtonStory with a start icon', () => {
    renderAndMatchSnapshot({ children: 'Button', hasStartIcon: true });
  });

  it('renders ButtonStory with an end icon', () => {
    renderAndMatchSnapshot({ children: 'Button', hasEndIcon: true });
  });

  it('renders ButtonStory with both start and end icons', () => {
    renderAndMatchSnapshot({ children: 'Button', hasStartIcon: true, hasEndIcon: true });
  });

  it('renders ButtonStory with a rotated start icon', () => {
    renderAndMatchSnapshot({ children: 'Button', hasStartIcon: true, isStartIconRotated: true });
  });

  it('renders ButtonStory with a rotated end icon', () => {
    renderAndMatchSnapshot({ children: 'Button', hasEndIcon: true, isEndIconRotated: true });
  });

  it('renders ButtonStory with both rotated start and end icons', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      isStartIconRotated: true,
      hasEndIcon: true,
      isEndIconRotated: true
    });
  });

  it('renders ButtonStory with danger styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isDanger: true });
  });

  it('renders ButtonStory with primary styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isPrimary: true });
  });

  it('renders ButtonStory with neutral styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isNeutral: true });
  });

  it('renders ButtonStory with basic styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isBasic: true });
  });

  it('renders ButtonStory with link styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isLink: true });
  });

  it('renders ButtonStory with pill styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isPill: true });
  });

  it('renders ButtonStory with focus inset styling', () => {
    renderAndMatchSnapshot({ children: 'Button', focusInset: true });
  });

  it('renders ButtonStory with stretched styling', () => {
    renderAndMatchSnapshot({ children: 'Button', isStretched: true });
  });

  it('renders ButtonStory with small size', () => {
    renderAndMatchSnapshot({ children: 'Button', size: 'small' });
  });

  it('renders ButtonStory with large size', () => {
    renderAndMatchSnapshot({ children: 'Button', size: 'large' });
  });

  it('renders ButtonStory with start icon, end icon, and danger styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      isDanger: true
    });
  });

  it('renders ButtonStory with start icon, end icon, and primary styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      isPrimary: true
    });
  });

  it('renders ButtonStory with start icon, end icon, and pill styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      isPill: true
    });
  });

  it('renders ButtonStory with start icon, end icon, and stretched styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      isStretched: true
    });
  });

  it('renders ButtonStory with start icon, end icon, and focus inset styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      focusInset: true
    });
  });

  it('renders ButtonStory with start icon, end icon, and large size', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      size: 'large'
    });
  });

  it('renders ButtonStory with start icon, end icon, and small size', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      hasEndIcon: true,
      size: 'small'
    });
  });

  it('renders ButtonStory with start icon, end icon, rotated icons, and danger styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      isStartIconRotated: true,
      hasEndIcon: true,
      isEndIconRotated: true,
      isDanger: true
    });
  });

  it('renders ButtonStory with start icon, end icon, rotated icons, and primary styling', () => {
    renderAndMatchSnapshot({
      children: 'Button',
      hasStartIcon: true,
      isStartIconRotated: true,
      hasEndIcon: true,
      isEndIconRotated: true,
      isPrimary: true
    });
  });
});
