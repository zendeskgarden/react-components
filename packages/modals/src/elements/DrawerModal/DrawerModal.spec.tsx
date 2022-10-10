/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, createRef, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from 'garden-test-utils';
import { DrawerModal } from './DrawerModal';
import { IDrawerModalProps } from '../../types';

describe('DrawerModal', () => {
  const user = userEvent.setup();

  const DRAWER_MODAL_ID = 'TEST_ID';

  const Example = forwardRef<HTMLDivElement, IDrawerModalProps>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={buttonRef} onClick={() => setIsOpen(true)}>
          Open Drawer
        </button>
        <DrawerModal ref={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
          <DrawerModal.Header>title</DrawerModal.Header>
          <DrawerModal.Close />
          <DrawerModal.Body>body</DrawerModal.Body>
          <DrawerModal.Footer>
            <DrawerModal.FooterItem>
              <button>Click</button>
            </DrawerModal.FooterItem>
          </DrawerModal.Footer>
        </DrawerModal>
      </>
    );
  });

  Example.displayName = 'Example';

  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLDivElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBe(ref.current);
  });

  it('only locks page scrolling when drawer modal is opened', async () => {
    const { getByText, getByRole, queryByRole } = render(<Example />);
    const htmlElement = document.querySelector('html');

    expect(queryByRole('dialog')).not.toBeInTheDocument();
    expect(htmlElement).not.toHaveAttribute('style', 'overflow: hidden;');

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute('style', 'overflow: hidden;');

    await user.type(getByRole('dialog'), '{escape}');

    await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument());
    expect(htmlElement).not.toHaveAttribute('style', 'overflow: hidden;');
  });

  it('applies backdropProps to Backdrop element', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' } as any} />
    );

    expect(queryByTestId('backdrop')).not.toBeInTheDocument();

    await user.click(getByText('Open Drawer'));

    expect(getByTestId('backdrop')).toBeInTheDocument();
  });

  it('applies title a11y attributes to Title element', async () => {
    const { getByText } = render(<Example id={DRAWER_MODAL_ID} />);

    await user.click(getByText('Open Drawer'));

    expect(getByText('title')).toHaveAttribute('id', `${DRAWER_MODAL_ID}__title`);
  });

  it('applies content a11y attributes to Body element', async () => {
    const { getByText } = render(<Example id={DRAWER_MODAL_ID} />);

    await user.click(getByText('Open Drawer'));

    expect(getByText('body')).toHaveAttribute('id', `${DRAWER_MODAL_ID}__content`);
  });

  it('closes the drawer modal when user clicks the close modal button', async () => {
    const { getByText, queryByRole, getByRole } = render(<Example />);

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Close drawer/iu }));

    await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('closes the drawer modal when user clicks the modal backdrop', async () => {
    const { getByText, queryByRole, getByRole, getByTestId } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' } as any} />
    );

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBeInTheDocument();

    await user.click(getByTestId('backdrop'));

    await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('closes the drawer modal when user presses the ESC key', async () => {
    const { getByText, getByRole, queryByRole } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' } as any} />
    );

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBeInTheDocument();

    await user.type(getByRole('dialog'), '{escape}');

    await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument());
  });
});
