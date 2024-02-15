/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, act, waitFor } from 'garden-test-utils';
import { TooltipModal } from './TooltipModal';
import { ITooltipModalProps } from '../../types';

describe('TooltipModal', () => {
  const user = userEvent.setup();

  type FixtureProps = {
    noTitle?: boolean;
  };

  const TOOLTIP_MODAL_ID = 'TEST_ID';
  let onCloseSpy: jest.Mock;

  beforeEach(() => {
    onCloseSpy = jest.fn();
  });

  const Example = React.forwardRef<HTMLDivElement, ITooltipModalProps & FixtureProps>(
    ({ onClose, noTitle, ...props }, ref) => {
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
            {!noTitle && <TooltipModal.Title>title</TooltipModal.Title>}
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
        await user.click(getByText('open'));
      });

      expect(getByRole('dialog').parentElement).toHaveAttribute('data-popper-placement', 'left');
    });

    it('renders RTL placement correctly', async () => {
      const { getByRole, getByText } = renderRtl(<Example placement="start" />);

      await act(async () => {
        await user.click(getByText('open'));
      });

      expect(getByRole('dialog').parentElement).toHaveAttribute('data-popper-placement', 'right');
    });
  });

  it('applies backdropProps to Backdrop element', async () => {
    const { getByTestId, getByText } = renderRtl(
      <Example backdropProps={{ 'data-test-id': 'backdrop' } as any} />
    );

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getByTestId('backdrop')).not.toBeNull();
  });

  it('applies aria-labelledby to dialog when Title is present', async () => {
    const { getByText, getByRole } = render(<Example />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    const labelId = getByRole('dialog').getAttribute('aria-labelledby');
    const titleId = getByText('title').getAttribute('id');

    expect(labelId).toStrictEqual(titleId);
  });

  it("doesn't show aria-labelledby to dialog when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noTitle />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getByRole('dialog').hasAttribute('aria-labelledby')).toBe(false);
  });

  it("applies default aria-label to dialog when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noTitle />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    const ariaLabel = getByRole('dialog').getAttribute('aria-label');

    expect(ariaLabel).toBe('Modal dialog');
  });

  it("applies aria-label to dialog prop when Title isn't present", async () => {
    const { getByRole, getByText } = render(<Example noTitle aria-label="Fun dialog" />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getByRole('dialog').getAttribute('aria-label')).toBe('Fun dialog');
  });

  it('applies title a11y attributes to Title element', async () => {
    const { getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getByText('title')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}__title`);
  });

  it('applies content a11y attributes to Body element', async () => {
    const { getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getByText('body')).toHaveAttribute('id', `${TOOLTIP_MODAL_ID}__content`);
  });

  it('applies close a11y attributes to Close element', async () => {
    const { getAllByRole, getByText } = renderRtl(<Example id={TOOLTIP_MODAL_ID} />);

    await act(async () => {
      await user.click(getByText('open'));
    });

    expect(getAllByRole('button')[1]).toHaveAttribute('aria-label', 'Close');
  });

  it('portals the modal as expected', async () => {
    const { container, getByText, rerender } = render(<Example />);
    const trigger = getByText('open');

    // Open modal
    await act(async () => {
      await user.click(trigger);
    });

    expect(container.querySelector('[aria-modal]')).not.toBeNull();

    // Close modal
    await act(async () => {
      await user.click(trigger);
    });

    const node = document.createElement('DIV');

    document.body.appendChild(node);

    rerender(<Example appendToNode={node} />);

    // Open modal
    await act(async () => {
      await user.click(trigger);
    });

    expect(container.querySelector('[aria-modal]')).toBeNull();
    expect(node.querySelector('[aria-modal]')).not.toBeNull();
  });

  describe('onClose()', () => {
    it('is triggered by backdrop click', async () => {
      const { getByTestId, getByText } = render(
        <Example onClose={onCloseSpy} backdropProps={{ 'data-test-id': 'backdrop' } as any} />
      );

      await waitFor(async () => {
        await user.click(getByText('open'));
        await user.click(getByTestId('backdrop'));
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by Close element click', async () => {
      const { getAllByRole, getByText } = render(<Example onClose={onCloseSpy} />);

      await waitFor(async () => {
        await user.click(getByText('open'));
        await user.click(getAllByRole('button')[1]);
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('is triggered by ESC key', async () => {
      const { getByRole, getByText } = render(<Example onClose={onCloseSpy} />);

      await waitFor(async () => {
        await user.click(getByText('open'));
        await user.type(getByRole('dialog'), '{escape}');
      });

      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
