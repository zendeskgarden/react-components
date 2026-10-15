/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useRef, useState, createRef, forwardRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { IDrawerProps } from '../../types/elements';
import { Drawer } from './Drawer';

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
        <button type="button" ref={buttonRef} onClick={() => setIsOpen(true)}>
          Open Drawer
        </button>
        <Drawer ref={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
          {!noHeader && <Drawer.Header>title</Drawer.Header>}
          <Drawer.Close />
          <Drawer.Body>body</Drawer.Body>
          <Drawer.Footer>
            <Drawer.FooterItem>
              <button type="button">Click</button>
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

  it('does not close the drawer modal when focus moves outside', async () => {
    const { getByText, getByRole } = render(<Example />);

    await user.click(getByText('Open Drawer'));

    expect(getByRole('dialog')).toBeInTheDocument();

    await user.click(document.body);

    expect(getByRole('dialog')).toBeInTheDocument();
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

  describe('styling', () => {
    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders in %s mode', (_mode, theme) => {
      const { getByRole } = render(<Drawer isOpen />, { theme });
      const drawer = getByRole('dialog');

      expect(drawer).toHaveStyleRule(
        'background-color',
        getColor({ theme, variable: 'background.raised' })
      );
      expect(drawer).toHaveStyleRule(
        'border-color',
        getColor({ theme, variable: 'border.default' })
      );
    });

    it('renders default styling', () => {
      const { getByRole } = render(<Drawer isOpen />);
      const drawer = getByRole('dialog');

      expect(drawer).not.toHaveStyleRule('direction');
      expect(drawer).toHaveStyleRule('border-left', DEFAULT_THEME.borders.sm);
      expect(drawer).toHaveStyleRule('right', '0');
    });

    it('renders RTL styling', () => {
      const { getByRole } = render(<Drawer isOpen />, { theme: RTL_THEME });
      const drawer = getByRole('dialog');

      expect(drawer).toHaveStyleRule('direction', 'rtl');
      expect(drawer).toHaveStyleRule('border-right', DEFAULT_THEME.borders.sm);
      expect(drawer).toHaveStyleRule('left', '0');
    });
  });

  describe('appendToNode', () => {
    it('appends the backdrop to the supplied element', () => {
      const { getByTestId, rerender } = render(<div data-test-id="portal" />);

      rerender(
        <>
          <div data-test-id="portal" />
          <Drawer
            isOpen
            appendToNode={getByTestId('portal')}
            backdropProps={{ 'data-test-id': 'backdrop' } as any}
          />
        </>
      );

      expect(getByTestId('portal')).toContainElement(getByTestId('backdrop'));
    });
  });
});
