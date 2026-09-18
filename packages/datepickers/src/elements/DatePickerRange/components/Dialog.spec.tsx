/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ComponentProps } from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, renderRtl, waitFor } from 'garden-test-utils';
import { DatePickerRange } from '../DatePickerRange';
import { IDatePickerRangeProps } from '../../../types';
import { Dialog } from './Dialog';

jest.useFakeTimers();

const Example = ({
  dialogProps,
  ...props
}: IDatePickerRangeProps & { dialogProps?: Partial<ComponentProps<typeof Dialog>> }) => (
  <>
    <DatePickerRange {...props}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
        <DatePickerRange.Trigger data-test-id="trigger" />
        <DatePickerRange.Dialog {...dialogProps}>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </div>
    </DatePickerRange>
    <button data-test-id="outside" type="button">
      Outside
    </button>
    <div data-test-id="outside-background">Non-interactive background</div>
  </>
);

describe('DatePickerRange.Dialog', () => {
  const user = userEvent.setup({ delay: null });

  describe('Styled menu', () => {
    it('applies StyledMenuWrapper and StyledMenu Garden component IDs', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      const dialog = getByTestId('range-dialog');

      expect(dialog).toHaveAttribute('data-garden-id', 'datepickers.menu_wrapper');
      expect(dialog.firstChild).toHaveAttribute('data-garden-id', 'datepickers.menu');
    });
  });

  describe('Dialog role', () => {
    it('has dialog role and aria-modal="false"', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('trigger'));

      const dialog = getByRole('dialog');

      expect(dialog).toHaveAttribute('aria-modal', 'false');
    });
  });

  describe('Closing', () => {
    it('closes the dialog and returns focus to the field on Escape, without selecting a date', async () => {
      const onChangeSpy = jest.fn();
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);
      const startInput = getByTestId('start');

      await user.click(startInput);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.keyboard('{Escape}');

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(startInput).toHaveFocus();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('closes the dialog on Escape when focus never left the End field', async () => {
      const onChangeSpy = jest.fn();
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);
      const endInput = getByTestId('end');

      await user.click(endInput);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
      expect(endInput).toHaveFocus();

      await user.keyboard('{Escape}');

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('closes the dialog when clicking outside of the widget', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('outside'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes the dialog when clicking a non-interactive element outside the widget', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('outside-background'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
    });
  });

  describe('Automatic combobox wiring', () => {
    it('opens the dialog when Start is clicked', async () => {
      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger data-test-id="trigger" />
          <DatePickerRange.Dialog>
            <DatePickerRange.Calendar />
          </DatePickerRange.Dialog>
        </DatePickerRange>
      );
      const startInput = getByTestId('start');

      await user.click(startInput);

      expect(startInput).toHaveAttribute('aria-expanded', 'true');
      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('Focus containment', () => {
    it('does not close when mousedown lands on non-interactive toolbar space', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.pointer([{ target: getByRole('toolbar'), keys: '[MouseLeft]' }]);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('Consumer passthrough props', () => {
    it('applies a consumer className to StyledMenu, not the outer positioned wrapper', async () => {
      const { getByTestId } = render(<Example dialogProps={{ className: 'consumer-class' }} />);

      await user.click(getByTestId('trigger'));

      const dialog = getByTestId('range-dialog');

      expect(dialog).not.toHaveClass('consumer-class');
      expect(dialog.firstChild).toHaveClass('consumer-class');
    });

    it('does not let a consumer-supplied style.transform override the floating-ui positioning transform', async () => {
      const { getByTestId } = render(
        <Example dialogProps={{ style: { transform: 'translate(9999px, 9999px)' } }} />
      );

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog').style.transform).not.toBe('translate(9999px, 9999px)');
    });
  });

  describe('Combobox semantics', () => {
    it('exposes combobox semantics on Start/End once a Dialog is composed, tracking isOpen', async () => {
      const { getByTestId } = render(<Example />);
      const startInput = getByTestId('start');
      const dialog = getByTestId('range-dialog');

      expect(startInput).toHaveAttribute('role', 'combobox');
      expect(startInput).toHaveAttribute('aria-haspopup', 'dialog');
      expect(startInput).toHaveAttribute('aria-controls', dialog.id);
      expect(startInput).toHaveAttribute('aria-expanded', 'false');

      await user.click(getByTestId('trigger'));

      expect(startInput).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');

      expect(startInput).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Accessible name', () => {
    it('has a default accessible name', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByRole('dialog', { name: 'Choose dates' })).toBeInTheDocument();
    });

    it('reflects a consumer-provided aria-label', async () => {
      const { getByTestId, getByRole } = render(
        <Example dialogProps={{ 'aria-label': 'Custom label' }} />
      );

      await user.click(getByTestId('trigger'));

      expect(getByRole('dialog', { name: 'Custom label' })).toBeInTheDocument();
    });
  });

  describe('Mount/animation behavior', () => {
    it('stays mounted while closed, hidden via aria-hidden, without rendering its children', () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(getByTestId('range-dialog')).toHaveAttribute('aria-hidden', 'true');
      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });

    it('renders its children and clears aria-hidden once open', async () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
      expect(getByTestId('range-dialog')).not.toHaveAttribute('aria-hidden');
      expect(queryByTestId('range-calendar')).toBeInTheDocument();
    });

    it('keeps rendering its children briefly after closing to allow the exit animation, then removes them', async () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));
      await user.keyboard('{Escape}');

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(queryByTestId('range-calendar')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(200);
      });

      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });

    it('removes its children immediately on close when isAnimated is false', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example dialogProps={{ isAnimated: false }} />
      );

      await user.click(getByTestId('trigger'));
      await user.keyboard('{Escape}');

      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });
  });

  describe('Cross-field focus', () => {
    it('stays open when focus moves directly from Start to End', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('start'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('end'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });

    it('stays open when focus moves directly from End to Start', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('end'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('start'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('Multiple triggers', () => {
    const TwoTriggerExample = (props: IDatePickerRangeProps) => (
      <DatePickerRange {...props}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger data-test-id="start-trigger" />
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger data-test-id="end-trigger" />
          <DatePickerRange.Dialog>
            <DatePickerRange.Calendar />
          </DatePickerRange.Dialog>
        </div>
      </DatePickerRange>
    );

    it('stays open when focus moves directly between two Trigger buttons', async () => {
      const { getByTestId } = render(<TwoTriggerExample />);

      await user.click(getByTestId('end-trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      // Moves focus directly (no click), so Trigger's own unconditional
      // open-on-click can't mask a tracking bug in the blur handler itself.
      act(() => {
        getByTestId('start-trigger').focus();
      });

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('RTL', () => {
    it('applies LTR classes by default', () => {
      const { getByTestId } = render(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', () => {
      const { getByTestId } = renderRtl(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-rtl', 'true');
    });
  });

  describe('appendToNode', () => {
    it('portals as expected', () => {
      const { container, rerender } = render(<Example />);
      const selector = '[data-test-id="range-dialog"]';

      expect(container.querySelector(selector)).not.toBeNull();

      const node = document.createElement('div');

      document.body.appendChild(node);
      rerender(<Example dialogProps={{ appendToNode: node }} />);

      expect(container.querySelector(selector)).toBeNull();
      expect(node.querySelector(selector)).not.toBeNull();
    });
  });

  describe('referenceElement override', () => {
    let customReferenceElement: HTMLButtonElement;

    beforeEach(() => {
      customReferenceElement = document.createElement('button');
      document.body.appendChild(customReferenceElement);
      customReferenceElement.getBoundingClientRect = jest.fn(
        () =>
          ({
            width: 10,
            height: 10,
            top: 500,
            left: 500,
            bottom: 510,
            right: 510,
            x: 500,
            y: 500
          }) as DOMRect
      );
    });

    afterEach(() => {
      document.body.removeChild(customReferenceElement);
    });

    it('anchors to a consumer-provided referenceElement instead of the default Start/End/Trigger chain', async () => {
      const { getByTestId: getByDefaultTestId, unmount } = render(<Example />);

      await user.click(getByDefaultTestId('trigger'));

      const defaultTransform = getByDefaultTestId('range-dialog').style.transform;

      unmount();

      const { getByTestId: getByOverrideTestId } = render(
        <Example dialogProps={{ referenceElement: customReferenceElement }} />
      );

      await user.click(getByOverrideTestId('trigger'));

      await waitFor(() => {
        expect(getByOverrideTestId('range-dialog').style.transform).not.toBe(defaultTransform);
      });
    });

    it('falls back to the default Start/End/Trigger chain when referenceElement is undefined', async () => {
      const { getByTestId: getByDefaultTestId, unmount } = render(<Example />);

      await user.click(getByDefaultTestId('trigger'));

      const defaultTransform = getByDefaultTestId('range-dialog').style.transform;

      unmount();

      const { getByTestId: getByExplicitTestId } = render(
        <Example dialogProps={{ referenceElement: undefined }} />
      );

      await user.click(getByExplicitTestId('trigger'));

      await waitFor(() => {
        expect(getByExplicitTestId('range-dialog').style.transform).toBe(defaultTransform);
      });
    });
  });

  describe('viewport overflow', () => {
    let referenceElement: HTMLButtonElement;

    beforeEach(() => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        value: 300
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        configurable: true,
        value: 800
      });

      referenceElement = document.createElement('button');
      document.body.appendChild(referenceElement);
      referenceElement.getBoundingClientRect = jest.fn(
        () =>
          ({
            width: 10,
            height: 10,
            top: 100,
            left: 250,
            bottom: 110,
            right: 260,
            x: 250,
            y: 100
          }) as DOMRect
      );
    });

    afterEach(() => {
      document.body.removeChild(referenceElement);
      delete (document.documentElement as { clientWidth?: number }).clientWidth;
      delete (document.documentElement as { clientHeight?: number }).clientHeight;
    });

    it('constrains its own max size to the available viewport space, in LTR', async () => {
      const { getByTestId } = render(<Example dialogProps={{ referenceElement }} />);

      const dialog = getByTestId('range-dialog');

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThanOrEqual(300);
      });
    });

    it('constrains its own max size to the available viewport space, in RTL', async () => {
      const { getByTestId } = renderRtl(<Example dialogProps={{ referenceElement }} />);

      const dialog = getByTestId('range-dialog');

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThanOrEqual(300);
      });
    });

    it('does not move the dialog away from its reference element, unlike shift()', async () => {
      const { getByTestId } = render(<Example dialogProps={{ referenceElement }} />);

      const dialog = getByTestId('range-dialog');

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        const match = dialog.style.transform.match(/translate\((?<x>[-\d.]+)px/u);
        const x = match ? parseFloat(match.groups!.x) : NaN;

        expect(x).not.toBeNaN();
        expect(x).toBe(250);
      });
    });

    it("clips at its own bounds via overflow: hidden, leaving StyledRangeCalendar's own overflow: auto as the actual scroll container", async () => {
      const { container, getByTestId } = render(<Example dialogProps={{ referenceElement }} />);

      const dialog = getByTestId('range-dialog');

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        expect(dialog.style.maxWidth).not.toBe('');
        expect(dialog.style.overflow).toBe('hidden');

        const calendar = container.querySelector<HTMLElement>(
          "[data-garden-id='datepickers.range_calendar']"
        );

        expect(calendar && window.getComputedStyle(calendar).overflow).toBe('auto');
      });
    });

    it("also caps StyledMenu (the wrapper's inline-block child) to its parent's now-constrained width, so the constraint actually reaches the calendar instead of StyledMenu shrink-to-fitting past it", async () => {
      const { container, getByTestId } = render(<Example dialogProps={{ referenceElement }} />);

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        const menu = container.querySelector<HTMLElement>("[data-garden-id='datepickers.menu']");

        expect(menu?.style.maxWidth).toBe('100%');
        expect(menu?.style.maxHeight).toBe('100%');
      });
    });

    it('leaves a gap between the dialog and the viewport edge, instead of touching it exactly', async () => {
      const { getByTestId } = render(<Example dialogProps={{ referenceElement }} />);

      const dialog = getByTestId('range-dialog');

      await user.click(getByTestId('trigger'));

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);
        const edgeToEdgeWidth = 300 - 250;

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThan(edgeToEdgeWidth);
      });
    });

    it('uses a smaller gap when compact, leaving more available space than the default spacing', async () => {
      const { getByTestId: getByDefaultTestId, unmount } = render(
        <Example dialogProps={{ referenceElement }} />
      );

      await user.click(getByDefaultTestId('trigger'));

      let defaultMaxWidth: number;

      await waitFor(() => {
        defaultMaxWidth = parseFloat(getByDefaultTestId('range-dialog').style.maxWidth);
        expect(defaultMaxWidth).not.toBeNaN();
      });

      unmount();

      const { getByTestId: getByCompactTestId } = render(
        <Example isCompact dialogProps={{ referenceElement }} />
      );

      await user.click(getByCompactTestId('trigger'));

      await waitFor(() => {
        const compactMaxWidth = parseFloat(getByCompactTestId('range-dialog').style.maxWidth);

        expect(compactMaxWidth).not.toBeNaN();
        expect(compactMaxWidth).toBeGreaterThan(defaultMaxWidth);
      });
    });
  });
});
