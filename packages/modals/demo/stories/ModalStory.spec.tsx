/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ModalStory } from './ModalStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ModalStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ModalStory Component', () => {
  it('renders default ModalStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders ModalStory with visible modal', () => {
    renderAndMatchSnapshot({ isVisible: true });
  });

  it('renders ModalStory with a header', () => {
    renderAndMatchSnapshot({ isVisible: true, hasHeader: true, header: 'Modal Header' });
  });

  it('renders ModalStory with a danger header', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Danger Header',
      isDanger: true
    });
  });

  it('renders ModalStory with a custom tag in the header', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Custom Tag Header',
      tag: 'h3'
    });
  });

  it('renders ModalStory with a body', () => {
    renderAndMatchSnapshot({ isVisible: true, hasBody: true, body: 'This is the modal body' });
  });

  it('renders ModalStory with a footer', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ]
    });
  });

  it('renders ModalStory with a danger footer', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasFooter: true,
      isDanger: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Delete', type: 'primary' }
      ]
    });
  });

  it('renders ModalStory with a close button', () => {
    renderAndMatchSnapshot({ isVisible: true, hasClose: true, closeAriaLabel: 'Close modal' });
  });

  it('renders ModalStory with a dialog aria label', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: false,
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders ModalStory with a large button', () => {
    renderAndMatchSnapshot({ isVisible: true, isLarge: true });
  });

  it('renders ModalStory with a centered modal', () => {
    renderAndMatchSnapshot({ isVisible: true, isCentered: true });
  });

  it('renders ModalStory with an animated modal', () => {
    renderAndMatchSnapshot({ isVisible: true, isAnimated: true });
  });

  it('renders ModalStory with focus on mount', () => {
    renderAndMatchSnapshot({ isVisible: true, focusOnMount: true });
  });

  it('renders ModalStory with restore focus on close', () => {
    renderAndMatchSnapshot({ isVisible: true, restoreFocus: true });
  });

  it('renders ModalStory with a header, body, and footer', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ]
    });
  });

  it('renders ModalStory with a header, body, footer, and close button', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal'
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and danger styling', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Danger Modal',
      isDanger: true,
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Delete', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal'
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and large button', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal',
      isLarge: true
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and centered modal', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal',
      isCentered: true
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and animated modal', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal',
      isAnimated: true
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and focus on mount', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal',
      focusOnMount: true
    });
  });

  it('renders ModalStory with a header, body, footer, close button, and restore focus on close', () => {
    renderAndMatchSnapshot({
      isVisible: true,
      hasHeader: true,
      header: 'Modal Header',
      hasBody: true,
      body: 'This is the modal body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close modal',
      restoreFocus: true
    });
  });
});
