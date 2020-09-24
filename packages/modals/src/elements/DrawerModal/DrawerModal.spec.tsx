/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, createRef, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from 'garden-test-utils';
import { DrawerModal, IDrawerModalProps } from './DrawerModal';

describe('DrawerModal', () => {
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

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByRole, getByText } = render(<Example ref={ref} />);

    userEvent.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBe(ref.current);
  });

  it('only locks page scrolling when drawer modal is opened', async () => {
    const { getByText, getByRole, queryByRole } = render(<Example />);

    expect(queryByRole('dialog')).toBeNull();
    expect(document.body).not.toHaveAttribute('style', 'overflow: hidden;');

    userEvent.click(getByText('Open Drawer'));

    expect(queryByRole('dialog')).not.toBeNull();
    expect(document.body).toHaveAttribute('style', 'overflow: hidden;');

    userEvent.type(getByRole('dialog'), '{esc}');

    await waitFor(() => {
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      expect(document.body).not.toHaveAttribute('style', 'overflow: hidden;');
    });
  });

  it('applies backdropProps to Backdrop element', () => {
    const { getByTestId, getByText } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' }} />
    );

    userEvent.click(getByText('Open Drawer'));

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies title a11y attributes to Title element', () => {
    const { getByText } = render(<Example id={DRAWER_MODAL_ID} />);

    userEvent.click(getByText('Open Drawer'));

    expect(getByText('title')).toHaveAttribute('id', `${DRAWER_MODAL_ID}--title`);
  });

  it('applies content a11y attributes to Body element', () => {
    const { getByText } = render(<Example id={DRAWER_MODAL_ID} />);

    userEvent.click(getByText('Open Drawer'));

    expect(getByText('body')).toHaveAttribute('id', `${DRAWER_MODAL_ID}--content`);
  });

  it('applies close a11y attributes to Close element', () => {
    const { getAllByRole, getByText } = render(<Example id={DRAWER_MODAL_ID} />);

    userEvent.click(getByText('Open Drawer'));

    expect(getAllByRole('button')[1]).toHaveAttribute('aria-label', 'Close modal');
  });

  it('closes the drawer modal when user clicks the close modal button', async () => {
    const { getByText, getByLabelText, queryByRole } = render(<Example />);

    userEvent.click(getByText('Open Drawer'));

    expect(queryByRole('dialog')).toBeInTheDocument();

    userEvent.click(getByLabelText('Close modal'));

    await waitFor(() => {
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes the drawer modal when user clicks the modal backdrop', async () => {
    const { getByText, queryByRole, getByTestId } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' }} />
    );

    userEvent.click(getByText('Open Drawer'));

    expect(queryByRole('dialog')).toBeInTheDocument();

    userEvent.click(getByTestId('backdrop'));

    await waitFor(() => {
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes the drawer modal when user presses the ESC key', async () => {
    const { getByText, getByRole, queryByRole } = render(
      <Example backdropProps={{ 'data-test-id': 'backdrop' }} />
    );

    userEvent.click(getByText('Open Drawer'));

    expect(queryByRole('dialog')).toBeInTheDocument();

    userEvent.type(getByRole('dialog'), '{esc}');

    await waitFor(() => {
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
