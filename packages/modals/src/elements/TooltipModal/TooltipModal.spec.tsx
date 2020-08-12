/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, act } from 'garden-test-utils';
import { TooltipModal } from './TooltipModal';

describe('TooltipModal', () => {
  const TOOLTIP_MODAL_ID = 'TEST_ID';
  let onCloseSpy: jest.Mock;

  beforeEach(() => {
    onCloseSpy = jest.fn();
  });

  describe('Placement', () => {
    it('renders LTR placement correctly', async () => {
      const { container, getByTestId, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal referenceElement={container} placement="start" data-test-id="modal">
            <TooltipModal.Title>Title</TooltipModal.Title>
            <TooltipModal.Body>Content</TooltipModal.Body>
            <TooltipModal.Footer>
              <TooltipModal.FooterItem>
                <button>Finish</button>
              </TooltipModal.FooterItem>
            </TooltipModal.Footer>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        );
      });

      expect(getByTestId('modal').parentElement).toHaveAttribute('data-popper-placement', 'left');
    });

    it('renders RTL placement correctly', async () => {
      const { container, getByTestId, rerender } = renderRtl(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal referenceElement={container} placement="start" data-test-id="modal">
            <TooltipModal.Title>Title</TooltipModal.Title>
            <TooltipModal.Body>Content</TooltipModal.Body>
            <TooltipModal.Footer>
              <TooltipModal.FooterItem>
                <button>Finish</button>
              </TooltipModal.FooterItem>
            </TooltipModal.Footer>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        );
      });

      expect(getByTestId('modal').parentElement).toHaveAttribute('data-popper-placement', 'right');
    });
  });

  describe('Body overflow', () => {
    it('applies no overflow styling when not positioned', async () => {
      const { baseElement, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal>
            <TooltipModal.Title>Title</TooltipModal.Title>
            <TooltipModal.Body>Content</TooltipModal.Body>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        );
      });

      expect(baseElement).not.toHaveStyle({
        overflow: 'hidden'
      });
    });

    it('applies overflow hidden styling when positioned', async () => {
      const { container, baseElement, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal referenceElement={container}>
            <TooltipModal.Title>Title</TooltipModal.Title>
            <TooltipModal.Body>Content</TooltipModal.Body>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        );
      });

      expect(baseElement).toHaveStyle({
        overflow: 'hidden'
      });
    });
  });

  it('passes ref to underlying DOM element', async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container, getByTestId, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container} ref={ref} data-test-id="tooltip-modal" />
      );
    });

    expect(getByTestId('tooltip-modal')).toBe(ref.current);
  });

  it('applies backdropProps to Backdrop element', async () => {
    const { container, getByTestId, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container} backdropProps={{ 'data-test-id': 'backdrop' }} />
      );
    });

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies title a11y attributes to Title element', async () => {
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container} id={TOOLTIP_MODAL_ID}>
          <TooltipModal.Title>title</TooltipModal.Title>
        </TooltipModal>
      );
    });

    expect(getByText('title')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}--title`);
  });

  it('applies content a11y attributes to Body element', async () => {
    const { container, getByText, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container} id={TOOLTIP_MODAL_ID}>
          <TooltipModal.Body>body</TooltipModal.Body>
        </TooltipModal>
      );
    });

    expect(getByText('body')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}--content`);
  });

  it('applies close a11y attributes to Close element', async () => {
    const { container, getByRole, rerender } = render(<div />);

    await act(async () => {
      await rerender(
        <TooltipModal referenceElement={container}>
          <TooltipModal.Close />
        </TooltipModal>
      );
    });

    expect(getByRole('button')).toHaveAttribute('aria-label', 'Close modal');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', async () => {
      const { container, getByTestId, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal
            referenceElement={container}
            backdropProps={{ 'data-test-id': 'backdrop' }}
            onClose={onCloseSpy}
          >
            <TooltipModal.Body>body</TooltipModal.Body>
          </TooltipModal>
        );
      });

      userEvent.click(getByTestId('backdrop'));
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by Close element click', async () => {
      const { container, getByRole, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal referenceElement={container} onClose={onCloseSpy}>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        );
      });

      userEvent.click(getByRole('button'));
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by ESC key', async () => {
      const { container, getByTestId, rerender } = render(<div />);

      await act(async () => {
        await rerender(
          <TooltipModal referenceElement={container} onClose={onCloseSpy} data-test-id="modal">
            <TooltipModal.Body>body</TooltipModal.Body>
          </TooltipModal>
        );
      });

      act(() => {
        userEvent.type(getByTestId('modal'), '{esc}');
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
