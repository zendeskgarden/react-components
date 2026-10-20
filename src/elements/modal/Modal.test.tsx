/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { vi, type Mock } from 'vitest';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { IModalProps } from '../../types/elements';
import { Modal } from './Modal';

vi.mock('../../utils/shared/dom', async importOriginal => ({
  ...(await importOriginal<typeof import('../../utils/shared/dom')>()),
  getScrollbarSize: () => 15
}));

describe('Modal', () => {
  const user = userEvent.setup();

  type FixtureProps = {
    noHeader?: boolean;
  } & IModalProps;

  const MODAL_ID = 'TEST_ID';
  let onCloseSpy: Mock;

  const BasicExample = ({ onClose, noHeader, ...other }: FixtureProps) => (
    <Modal
      {...other}
      id={MODAL_ID}
      onClose={onClose}
      data-test-id="modal"
      backdropProps={{ 'data-test-id': 'backdrop' } as any}
    >
      {!noHeader && <Modal.Header data-test-id="header">Example Header</Modal.Header>}
      <Modal.Body data-test-id="body">Body content</Modal.Body>
      <Modal.Footer data-test-id="footer">
        <button type="button" onClick={() => onClose}>
          Confirm
        </button>
      </Modal.Footer>
      <Modal.Close data-test-id="close" />
    </Modal>
  );

  beforeEach(() => {
    onCloseSpy = vi.fn();
  });

  describe('componentDidMount()', () => {
    it('should disable overflow scrolling for the html element', () => {
      render(<BasicExample />);

      expect(document.querySelector('html')?.style.overflow).toBe('hidden');
    });
  });

  describe('componentWillUnmount()', () => {
    it('should apply previous html overflow style', () => {
      const htmlElement = document.querySelector('html');

      if (htmlElement) {
        htmlElement.style.overflow = 'scroll';

        const { unmount } = render(<BasicExample />);

        expect(htmlElement.style.overflow).toBe('hidden');
        unmount();

        expect(htmlElement.style.overflow).toBe('scroll');
      }
    });
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(<Modal ref={ref} data-test-id="modal" />);

    expect(getByTestId('modal')).toBe(ref.current);
  });

  it('applies backdropProps to Backdrop element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies aria-labelledby to dialog when Title is present', () => {
    const { getByText, getByRole } = render(<BasicExample />);

    const labelId = getByRole('dialog').getAttribute('aria-labelledby');
    const titleId = getByText('Example Header').getAttribute('id');

    expect(labelId).toStrictEqual(titleId);
  });

  it("doesn't show aria-labelledby to dialog when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader />);

    expect(getByRole('dialog').hasAttribute('aria-labelledby')).toBe(false);
  });

  it("applies default aria-label to dialog when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader />);

    const ariaLabel = getByRole('dialog').getAttribute('aria-label');

    expect(ariaLabel).toBe('Modal dialog');
  });

  it("applies aria-label to dialog prop when Title isn't present", () => {
    const { getByRole } = render(<BasicExample noHeader aria-label="Fun dialog" />);

    expect(getByRole('dialog').getAttribute('aria-label')).toBe('Fun dialog');
  });

  it('applies modal props to StyledModal element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('modal')).toHaveAttribute('aria-modal', 'true');
  });

  it('applies title props to Modal.Header element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('header')).toHaveAttribute('id', `${MODAL_ID}__title`);
  });

  it('applies content props to Modal.Body element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('body')).toHaveAttribute('id', `${MODAL_ID}__content`);
  });

  it('applies close props to Modal.Close element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('close')).toHaveAttribute('aria-label', 'Close modal');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.click(getByTestId('backdrop'));
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('is triggered by Modal.Close element click', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.click(getByTestId('close'));
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('is triggered by ESC keydown', async () => {
      const { getByTestId } = render(<BasicExample onClose={onCloseSpy} />);

      await user.type(getByTestId('modal'), '{escape}');
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });

    it('is not triggered when focus moves outside the modal', async () => {
      render(<BasicExample onClose={onCloseSpy} />);

      await user.click(document.body);
      expect(onCloseSpy).not.toHaveBeenCalled();
    });
  });

  describe('appendToNode', () => {
    it('should append the backdrop to the supplied element', () => {
      const { getByTestId, rerender } = render(
        <>
          <div data-test-id="portal" />
          <BasicExample />
        </>
      );

      const portalInstance = getByTestId('portal');

      rerender(
        <>
          <div data-test-id="portal" />
          <BasicExample appendToNode={portalInstance} />
        </>
      );

      expect(portalInstance.firstChild).toHaveAttribute('data-test-id', 'backdrop');
    });
  });

  describe('backdrop styling', () => {
    it('renders default styling', () => {
      const { getByTestId } = render(<BasicExample isCentered={false} isAnimated={false} />);
      const backdrop = getByTestId('backdrop');

      expect(backdrop).not.toHaveStyleRule('direction');
      expect(backdrop).not.toHaveStyleRule('align-items');
      expect(backdrop).not.toHaveStyleRule('justify-content');
      expect(backdrop).not.toHaveStyleRule('animation');
    });

    it('renders RTL styling', () => {
      const { getByTestId } = render(<BasicExample />, { theme: RTL_THEME });

      expect(getByTestId('backdrop')).toHaveStyleRule('direction', 'rtl');
    });

    it('renders centered styling', () => {
      const { getByTestId } = render(<BasicExample isCentered />);

      expect(getByTestId('backdrop')).toHaveStyleRule('align-items', 'center');
      expect(getByTestId('backdrop')).toHaveStyleRule('justify-content', 'center');
    });

    it('renders animated styling', () => {
      const { getByTestId } = render(<BasicExample isAnimated />);

      expect(getByTestId('backdrop')).toHaveStyleRule('animation', /0\.15s ease-in/u);
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the %s mode color', (_mode, theme) => {
      const { getByTestId } = render(<BasicExample />, { theme });

      expect(getByTestId('backdrop')).toHaveStyleRule(
        'background-color',
        getColor({
          theme,
          hue: 'neutralHue',
          transparency: theme.opacity[1000],
          light: { shade: 900 },
          dark: { shade: 1200 }
        })
      );
    });
  });

  describe('modal styling', () => {
    it('renders default styling', () => {
      const { getByTestId } = render(<BasicExample isAnimated={false} isCentered={false} />);
      const modal = getByTestId('modal');

      expect(modal).not.toHaveStyleRule('width');
      expect(modal).toHaveStyleRule('width', DEFAULT_THEME.breakpoints.sm, {
        media: `(min-width: ${DEFAULT_THEME.breakpoints.sm})`
      });
      expect(modal).toHaveStyleRule('margin', `${DEFAULT_THEME.space.base * 12}px`);
      expect(modal).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.xl);
      expect(modal).not.toHaveStyleRule('direction');
      expect(modal).not.toHaveStyleRule('animation');
      expect(modal).toHaveStyleRule(
        'max-height',
        `calc(100vh - ${DEFAULT_THEME.space.base * 24}px)`
      );
      expect(modal).toHaveStyleRule(
        'max-height',
        `calc(100vh - ${DEFAULT_THEME.space.base * 12}px)`,
        {
          media: '(max-height: 399px)'
        }
      );
    });

    it('renders RTL styling', () => {
      const { getByTestId } = render(<BasicExample />, { theme: RTL_THEME });

      expect(getByTestId('modal')).toHaveStyleRule('direction', 'rtl');
    });

    it('renders large styling', () => {
      const { getByTestId } = render(<BasicExample isLarge />);

      expect(getByTestId('modal')).toHaveStyleRule('width', DEFAULT_THEME.breakpoints.md, {
        media: `(min-width: ${DEFAULT_THEME.breakpoints.md})`
      });
    });

    it('renders centered styling', () => {
      const { getByTestId } = render(<BasicExample isCentered />);

      expect(getByTestId('modal')).toHaveStyleRule('margin', '0');
    });

    it('renders animated styling', () => {
      const { getByTestId } = render(<BasicExample isAnimated />);

      expect(getByTestId('modal')).toHaveStyleRule('animation', /0\.3s ease-in/u);
    });
  });

  describe('scroll lock', () => {
    it('pads the body by the scrollbar size while the modal is open', () => {
      const { body } = document;
      const { marginLeft, marginRight, paddingRight } = body.style;

      body.style.marginLeft = '0px';
      body.style.marginRight = '0px';
      body.style.paddingRight = '3px';

      const { unmount } = render(<BasicExample />);

      expect(body.style.paddingRight).toBe('18px');
      unmount();
      expect(body.style.paddingRight).toBe('3px');

      body.style.marginLeft = marginLeft;
      body.style.marginRight = marginRight;
      body.style.paddingRight = paddingRight;
    });

    it('does not lock scrolling when the document has no body', () => {
      const doc = document.implementation.createHTMLDocument();

      doc.body.remove();

      const { queryByRole } = render(<BasicExample />, {
        theme: { ...DEFAULT_THEME, document: doc }
      });

      expect(queryByRole('dialog')).toBeNull();
    });
  });
});
