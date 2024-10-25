import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { DrawerStory } from './DrawerStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<DrawerStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('DrawerStory Component', () => {
  it('renders default DrawerStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders DrawerStory with a header', () => {
    renderAndMatchSnapshot({ hasHeader: true, header: 'Drawer Header' });
  });

  it('renders DrawerStory with a custom tag for the header', () => {
    renderAndMatchSnapshot({ hasHeader: true, header: 'Drawer Header', tag: 'h2' });
  });

  it('renders DrawerStory with a body', () => {
    renderAndMatchSnapshot({ hasBody: true, body: 'This is the drawer body' });
  });

  it('renders DrawerStory with a footer', () => {
    renderAndMatchSnapshot({
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ]
    });
  });

  it('renders DrawerStory with a close button', () => {
    renderAndMatchSnapshot({ hasClose: true, closeAriaLabel: 'Close Drawer' });
  });

  it('renders DrawerStory with a header, body, and footer', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ]
    });
  });

  it('renders DrawerStory with a header, body, footer, and close button', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close Drawer'
    });
  });

  it('renders DrawerStory with a header and aria-label for the dialog', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders DrawerStory with a body and aria-label for the dialog', () => {
    renderAndMatchSnapshot({
      hasBody: true,
      body: 'This is the drawer body',
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders DrawerStory with a footer and aria-label for the dialog', () => {
    renderAndMatchSnapshot({
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders DrawerStory with a header, body, footer, close button, and aria-label for the dialog', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close Drawer',
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders DrawerStory with a header and custom footer items', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasFooter: true,
      footerItems: [{ text: 'Custom Action', type: 'primary' }]
    });
  });

  it('renders DrawerStory with a body and custom footer items', () => {
    renderAndMatchSnapshot({
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [{ text: 'Custom Action', type: 'primary' }]
    });
  });

  it('renders DrawerStory with a header, body, and custom footer items', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [{ text: 'Custom Action', type: 'primary' }]
    });
  });

  it('renders DrawerStory with a header, body, footer, and custom close button aria-label', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Custom Close Label'
    });
  });

  it('renders DrawerStory with a header, body, footer, and custom dialog aria-label', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });

  it('renders DrawerStory with a header, body, footer, close button, and custom dialog aria-label', () => {
    renderAndMatchSnapshot({
      hasHeader: true,
      header: 'Drawer Header',
      hasBody: true,
      body: 'This is the drawer body',
      hasFooter: true,
      footerItems: [
        { text: 'Cancel', type: 'basic' },
        { text: 'Submit', type: 'primary' }
      ],
      hasClose: true,
      closeAriaLabel: 'Close Drawer',
      dialogAriaLabel: 'Custom Dialog Label'
    });
  });
});
