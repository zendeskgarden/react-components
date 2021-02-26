/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, act } from 'garden-test-utils';
import { TooltipModal, ITooltipModalProps } from './TooltipModal';

jest.useFakeTimers();

describe('TooltipModal', () => {
  const TOOLTIP_MODAL_ID = 'TEST_ID';
  let onCloseSpy: jest.Mock;

  beforeEach(() => {
    onCloseSpy = jest.fn();
  });

  const Example = React.forwardRef<HTMLDivElement, ITooltipModalProps>(
    ({ onClose, ...props }, ref) => {
      const [isOpen, setIsOpen] = useState(false);
      const buttonRef = React.useRef<HTMLButtonElement>(null);

      return (
        <>
          <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
            open
          </button>
          <TooltipModal
            ref={ref}
            onClose={e => {
              setIsOpen(false);
              onClose && onClose(e);
            }}
            referenceElement={isOpen && buttonRef.current ? buttonRef.current : undefined}
            {...props}
          >
            <TooltipModal.Title>title</TooltipModal.Title>
            <TooltipModal.Body>body</TooltipModal.Body>
            <TooltipModal.Footer>footer</TooltipModal.Footer>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        </>
      );
    }
  );

  Example.displayName = 'Example';

  describe('Placement', () => {
    it('renders LTR placement correctly', async () => {
      const { getByRole, getByText } = render(<Example placement="start" />);

      await act(async () => {
        await userEvent.click(getByText('open'));
      });

      expect(getByRole('dialog').parentElement).toHaveAttribute('data-popper-placement', 'left');
    });

    it('renders RTL placement correctly', async () => {
      const { getByRole, getByText } = renderRtl(<Example placement="start" />);

      await act(async () => {
        await userEvent.click(getByText('open'));
      });

      expect(getByRole('dialog').parentElement).toHaveAttribute('data-popper-placement', 'right');
    });
  });

  it('applies backdropProps to Backdrop element', async () => {
    const { getByTestId, getByText } = renderRtl(
      <Example backdropProps={{ 'data-test-id': 'backdrop' }} />
    );

    await act(async () => {
      await userEvent.click(getByText('open'));
    });

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies title a11y attributes to Title element', async () => {
    const { getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await userEvent.click(getByText('open'));
    });

    expect(getByText('title')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}--title`);
  });

  it('applies content a11y attributes to Body element', async () => {
    const { getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await userEvent.click(getByText('open'));
    });

    expect(getByText('body')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}--content`);
  });

  it('applies close a11y attributes to Close element', async () => {
    const { getAllByRole, getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await userEvent.click(getByText('open'));
    });

    expect(getAllByRole('button')[1]).toHaveAttribute('aria-label', 'Close');
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', async () => {
      const { getByTestId, getByText } = render(
        <Example onClose={onCloseSpy} backdropProps={{ 'data-test-id': 'backdrop' }} />
      );

      await act(async () => {
        await userEvent.click(getByText('open'));
        jest.runOnlyPendingTimers();

        await userEvent.click(getByTestId('backdrop'));
        jest.runOnlyPendingTimers();
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by Close element click', async () => {
      const { getAllByRole, getByText } = render(<Example onClose={onCloseSpy} />);

      await act(async () => {
        await userEvent.click(getByText('open'));
        jest.runOnlyPendingTimers();

        await userEvent.click(getAllByRole('button')[1]);
        jest.runOnlyPendingTimers();
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by ESC key', async () => {
      const { getByRole, getByText } = render(<Example onClose={onCloseSpy} />);

      await act(async () => {
        await userEvent.click(getByText('open'));
        jest.runOnlyPendingTimers();

        await userEvent.type(getByRole('dialog'), '{esc}');
        jest.runOnlyPendingTimers();
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
