/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, createRef, forwardRef } from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from 'garden-test-utils';
import { Drawer } from './Drawer';
import { IDrawerProps } from '../../types';

describe('Drawer', () => {
  const user = userEvent.setup();

  const DRAWER_MODAL_ID = 'TEST_ID';

  type FixtureProps = {
    noHeader?: boolean;
  } & IDrawerProps;

  const Example = forwardRef<HTMLDivElement, FixtureProps>(({ noHeader, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={buttonRef} onClick={() => setIsOpen(true)}>
          Open Drawer
        </button>
        <Drawer ref={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
          {!noHeader && <Drawer.Header>title</Drawer.Header>}
          <Drawer.Close />
          <Drawer.Body>body</Drawer.Body>
          <Drawer.Footer>
            <Drawer.FooterItem>
              <button>Click</button>
            </Drawer.FooterItem>
          </Drawer.Footer>
        </Drawer>
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

  it('applies aria-labelledby to dialog when Title is present', async () => {
    const { getByText, getByRole } = render(<Example />);

    await user.click(getByText('Open Drawer'));

    const labelId = getByRole('dialog').getAttribute('aria-labelledby');
    const titleId = getByText('title').getAttribute('id');

    expect(labelId).toStrictEqual(titleId);
  });

  it("doesn't show aria-labelledby to dialog when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noHeader />);

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog').hasAttribute('aria-labelledby')).toBe(false);
  });

  it("applies default aria-label to dialog when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noHeader />);

    await user.click(getByText('Open Drawer'));

    const ariaLabel = getByRole('dialog').getAttribute('aria-label');

    expect(ariaLabel).toBe('Modal dialog');
  });

  it("applies aria-label to dialog prop when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noHeader aria-label="Fun dialog" />);

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog').getAttribute('aria-label')).toBe('Fun dialog');
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

  describe('focus management', () => {
    it('correctly focuses on the Drawer when open', async () => {
      const { getByText, getByRole } = render(<Example />);

      await user.click(getByText('Open Drawer'));

      expect(getByRole('dialog')).toBe(document.activeElement);
    });

    it('restores focus to the trigger button after close', async () => {
      const { getByText, getByRole, queryByRole } = render(<Example />);

      await user.click(getByText('Open Drawer'));

      expect(getByRole('dialog')).toBe(document.activeElement);

      await user.type(getByRole('dialog'), '{escape}');

      await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument());

      expect(getByText('Open Drawer')).toBe(document.activeElement);
    });
  });
});
