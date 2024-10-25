import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { TooltipDialogStory } from './TooltipDialogStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TooltipDialogStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TooltipDialogStory Component', () => {
  it('renders default TooltipDialogStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders TooltipDialogStory with a title', () => {
    renderAndMatchSnapshot({ hasTitle: true, title: 'Dialog Title' });
  });

  it('renders TooltipDialogStory with a body', () => {
    renderAndMatchSnapshot({ hasBody: true, body: 'This is the body content' });
  });

  it('renders TooltipDialogStory with a footer', () => {
    renderAndMatchSnapshot({ hasFooter: true });
  });

  it('renders TooltipDialogStory with a close button', () => {
    renderAndMatchSnapshot({ hasClose: true, closeAriaLabel: 'Close dialog' });
  });

  it('renders TooltipDialogStory with a custom tag for the title', () => {
    renderAndMatchSnapshot({ hasTitle: true, title: 'Dialog Title', tag: 'h2' });
  });

  it('renders TooltipDialogStory with a custom aria-label for the dialog', () => {
    renderAndMatchSnapshot({ dialogAriaLabel: 'Custom aria label' });
  });

  it('renders TooltipDialogStory with a custom placement', () => {
    renderAndMatchSnapshot({ placement: 'top-end' });
  });

  it('renders TooltipDialogStory with an arrow', () => {
    renderAndMatchSnapshot({ hasArrow: true });
  });

  it('renders TooltipDialogStory with a custom zIndex', () => {
    renderAndMatchSnapshot({ zIndex: 1000 });
  });

  it('renders TooltipDialogStory with multiple avatars (count = 3)', () => {
    renderAndMatchSnapshot({ count: 3 });
  });

  it('renders TooltipDialogStory with a title, body, and footer', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, and close button', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog'
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, close button, and custom placement', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      placement: 'bottom-start'
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, close button, and custom zIndex', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      zIndex: 2000
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, close button, and arrow', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      hasArrow: true
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, close button, arrow, and custom placement', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      hasArrow: true,
      placement: 'top-end'
    });
  });

  it('renders TooltipDialogStory with a title, body, footer, close button, arrow, custom placement, and custom zIndex', () => {
    renderAndMatchSnapshot({
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      hasArrow: true,
      placement: 'bottom-end',
      zIndex: 3000
    });
  });

  it('renders TooltipDialogStory with multiple avatars and a title', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title'
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, and a body', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content'
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, and footer', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, footer, and close button', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog'
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, footer, close button, and custom placement', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      placement: 'bottom'
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, footer, close button, and custom zIndex', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      zIndex: 1500
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, footer, close button, arrow, and custom placement', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      hasArrow: true,
      placement: 'top'
    });
  });

  it('renders TooltipDialogStory with multiple avatars, a title, body, footer, close button, arrow, custom placement, and custom zIndex', () => {
    renderAndMatchSnapshot({
      count: 3,
      hasTitle: true,
      title: 'Dialog Title',
      hasBody: true,
      body: 'This is the body content',
      hasFooter: true,
      hasClose: true,
      closeAriaLabel: 'Close dialog',
      hasArrow: true,
      placement: 'bottom-start',
      zIndex: 2500
    });
  });
});
