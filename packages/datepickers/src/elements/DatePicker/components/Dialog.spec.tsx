/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, renderRtl, waitFor } from 'garden-test-utils';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

const CHOOSE_DATE = 'Choose date';
const DEFAULT_DATE = new Date(2019, 1, 5);

const mockNarrowReferenceRect = (element: HTMLElement) => {
  element.getBoundingClientRect = jest.fn(
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
};

/** Near the viewport's bottom edge, so `flip()` places the dialog above instead of below. */
const mockNarrowBottomReferenceRect = (element: HTMLElement) => {
  element.getBoundingClientRect = jest.fn(
    () =>
      ({
        width: 10,
        height: 10,
        top: 700,
        left: 250,
        bottom: 710,
        right: 260,
        x: 250,
        y: 700
      }) as DOMRect
  );
};

const Example = (props: Omit<IDatePickerProps, 'children'>) => (
  <>
    <label data-test-id="label" htmlFor="input">
      Label
    </label>
    <DatePicker {...props}>
      <input data-test-id="input" id="input" />
    </DatePicker>
    <button data-test-id="outside" type="button">
      Outside
    </button>
    <div data-test-id="outside-background">Non-interactive background</div>
  </>
);

jest.useFakeTimers();

describe('Dialog', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('doesnt render calendar elements when hidden', () => {
    const { queryByRole } = render(<Example value={DEFAULT_DATE} />);

    expect(queryByRole('dialog', { hidden: true })).toBeEmptyDOMElement();
  });

  it('has dialog role, aria-modal="true", and an accessible name matching the calendar button', async () => {
    const { getByRole } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

    await user.click(getByRole('button', { name: CHOOSE_DATE }));

    const dialog = getByRole('dialog', { name: CHOOSE_DATE });

    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('applies LTR classes by default', async () => {
    const { getByRole } = render(<Example value={DEFAULT_DATE} />);

    await user.click(getByRole('button', { name: CHOOSE_DATE }));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-rtl', 'false');
  });

  it('applies RTL classes if provided', async () => {
    const { getByRole } = renderRtl(<Example value={DEFAULT_DATE} />);

    await user.click(getByRole('button', { name: CHOOSE_DATE }));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-rtl', 'true');
  });

  it('portals as expected', () => {
    const { container, rerender } = render(<Example />);
    const selector = '[data-test-id="datepicker-menu"]';

    expect(container.querySelector(selector)).not.toBeNull();

    const node = document.createElement('DIV');

    document.body.appendChild(node);

    rerender(<Example appendToNode={node} />);

    expect(container.querySelector(selector)).toBeNull();
    expect(node.querySelector(selector)).not.toBeNull();
  });

  it('closes the calendar and returns focus to the input on Escape, without selecting a date', async () => {
    const { getAllByRole, getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByRole('button', { name: CHOOSE_DATE });

    await user.click(button);
    expect(getAllByRole('gridcell')[9]).toHaveFocus();

    fireEvent.keyDown(getAllByRole('gridcell')[9], { key: KEYS.ESCAPE });

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
    expect(getByTestId('input')).toHaveFocus();
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar on Escape when focus never left the input', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    await user.click(input);

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');
    expect(input).toHaveFocus();

    await user.keyboard('{Escape}');

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar when clicking outside of the widget', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByRole('button', { name: CHOOSE_DATE });

    await user.click(button);
    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside'));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when clicking a non-interactive element outside the widget', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByRole('button', { name: CHOOSE_DATE });

    await user.click(button);
    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside-background'));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when the input receives focus', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByRole('button', { name: CHOOSE_DATE });

    await user.click(button);
    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('input'));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar on Tab from the input, moving focus past it rather than into it', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} isAnimated={false} />
    );

    await user.click(getByTestId('input'));
    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');

    await user.tab();

    expect(getByTestId('outside')).toHaveFocus();
    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
  });

  it('is inert while closed, including during its exit animation, so nothing inside it can take focus', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const dialog = getByRole('dialog', { hidden: true });

    expect(dialog).toHaveAttribute('inert', '');

    await user.click(getByTestId('input'));

    expect(dialog).not.toHaveAttribute('inert');

    await user.keyboard('{Escape}');

    expect(getByRole('grid', { hidden: true })).toBeInTheDocument();
    expect(dialog).toHaveAttribute('inert', '');
  });

  describe('Escape propagation', () => {
    const escapeCalls = (spy: jest.Mock) =>
      spy.mock.calls.filter(([e]) => e.key === KEYS.ESCAPE).length;

    it.each([
      ['the grid', true],
      ['the input', false]
    ])(
      'keeps an Escape that closes the calendar from %s from reaching ancestors, e.g. a Modal',
      async (_, fromGrid) => {
        const onAncestorKeyDown = jest.fn();
        const { getByRole, getByTestId } = render(
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div onKeyDown={onAncestorKeyDown}>
            <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
          </div>
        );

        await user.click(
          fromGrid ? getByRole('button', { name: CHOOSE_DATE }) : getByTestId('input')
        );
        await user.keyboard('{Escape}');

        expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
        expect(escapeCalls(onAncestorKeyDown)).toBe(0);
      }
    );

    it('lets Escape reach ancestors while the calendar is closed', async () => {
      const onAncestorKeyDown = jest.fn();
      const { getByTestId } = render(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={onAncestorKeyDown}>
          <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
        </div>
      );

      await user.click(getByTestId('input'));
      await user.keyboard('{Escape}');
      await user.keyboard('{Escape}');

      expect(escapeCalls(onAncestorKeyDown)).toBe(1);
    });
  });

  describe('Roving tabindex invariant', () => {
    it('keeps exactly one day cell tabindex="0", matching the actually-focused cell, when reopening after a mouse-click selection', async () => {
      const ControlledExample = ({
        value: initialValue,
        ...props
      }: Omit<IDatePickerProps, 'children'>) => {
        const [value, setValue] = useState(initialValue);

        return <Example {...props} value={value} onChange={setValue} />;
      };

      const { getAllByRole, getByRole } = render(<ControlledExample value={DEFAULT_DATE} />);
      const button = getByRole('button', { name: CHOOSE_DATE });

      await user.click(button);
      await user.click(getAllByRole('gridcell')[1]);

      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');

      await user.click(button);

      const focusableDays = getAllByRole('gridcell').filter(
        day => day.getAttribute('tabindex') === '0'
      );

      expect(focusableDays).toHaveLength(1);
      expect(focusableDays[0]).toHaveFocus();
      expect(focusableDays[0]).toHaveAttribute('data-test-selected', 'true');
    });
  });

  describe('Focus trapping', () => {
    // jsdom does no layout, so getClientRects() is always empty and `tabbable()`
    // (used by the focus jail) treats every element as display:none, finding no
    // tabbables. Give elements a rect so the jail's Tab wrap can be exercised.
    // Precedent: ColorSwatchDialog's spec patches HTMLElement.prototype.matches
    // for a similar jsdom gap (`:focus-visible`).
    let getClientRectsSpy: jest.SpyInstance;

    beforeEach(() => {
      getClientRectsSpy = jest
        .spyOn(HTMLElement.prototype, 'getClientRects')
        .mockReturnValue([{ width: 1, height: 1 }] as unknown as DOMRectList);
    });

    afterEach(() => {
      getClientRectsSpy.mockRestore();
    });

    it('wraps Tab from the focused day cell back to the first tabbable element, keeping the dialog open', async () => {
      const { getAllByRole, getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      // focusIntoDialog focuses the selected day cell, the dialog's last tabbable element.
      expect(getAllByRole('gridcell')[9]).toHaveFocus();

      await user.tab();

      expect(getByRole('button', { name: /^Previous year/u })).toHaveFocus();
      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');
      expect(getByTestId('outside')).not.toHaveFocus();
    });

    it('wraps Shift+Tab from the first tabbable element back to the day cell, keeping the dialog open', async () => {
      const { getAllByRole, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      await user.tab();
      expect(getByRole('button', { name: /^Previous year/u })).toHaveFocus();

      await user.tab({ shift: true });

      expect(getAllByRole('gridcell')[9]).toHaveFocus();
      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('viewport overflow', () => {
    beforeEach(() => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        value: 300
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        configurable: true,
        value: 800
      });
    });

    afterEach(() => {
      delete (document.documentElement as { clientWidth?: number }).clientWidth;
      delete (document.documentElement as { clientHeight?: number }).clientHeight;
    });

    it('constrains its own max size to the available viewport space', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThanOrEqual(300);
      });
    });

    it('does not move the dialog away from its reference element, unlike shift()', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const match = dialog.style.transform.match(/translate\((?<x>[-\d.]+)px/u);
        const x = match ? parseFloat(match.groups!.x) : NaN;

        expect(x).not.toBeNaN();
        expect(x).toBe(250);
      });
    });

    it("does not clip its own overflow, so it never hides StyledMenu's box-shadow or fights the open animation's transform - StyledCalendarGrid's own overflow: auto is the actual scroll container", async () => {
      const { getByRole, container, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        expect(dialog.style.maxWidth).not.toBe('');
        expect(dialog.style.overflow).not.toBe('hidden');

        const calendarGrid = container.querySelector<HTMLElement>(
          "[data-garden-id='datepickers.calendar_grid']"
        );

        expect(calendarGrid && window.getComputedStyle(calendarGrid).overflow).toBe('auto');
      });
    });

    it('gives the overflow:auto calendar grid a real pixel max-height matching the available space, so it actually scrolls instead of just rendering past the wrapper', async () => {
      const { getByRole, container, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const calendarGrid = container.querySelector<HTMLElement>(
          "[data-garden-id='datepickers.calendar_grid']"
        );
        const dialogMaxHeight = parseFloat(dialog.style.maxHeight);

        expect(dialogMaxHeight).not.toBeNaN();
        // A percentage (e.g. "100%", like StyledMenu gets below) would also parse
        // to a number here, so also assert it's expressed in real pixels - a
        // percentage can't resolve against an ancestor whose own height is
        // `auto`, which is exactly why the grid never actually scrolled before.
        expect(calendarGrid?.style.maxHeight.endsWith('px')).toBe(true);
        expect(parseFloat(calendarGrid?.style.maxHeight || '')).toBe(dialogMaxHeight);
      });
    });

    it("caps StyledMenu (the wrapper's inline-block child) to its parent's now-constrained width", async () => {
      const { getByRole, container, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      await waitFor(() => {
        const menu = container.querySelector<HTMLElement>("[data-garden-id='datepickers.menu']");

        expect(menu?.style.maxWidth).toBe('100%');
        expect(menu?.style.maxHeight).toBe('100%');
      });
    });

    it('leaves a gap between the dialog and the viewport edge, instead of touching it exactly', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);
        const edgeToEdgeWidth = 300 - 250;

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThan(edgeToEdgeWidth);
      });
    });

    it('leaves the same gap beneath the dialog and the viewport edge, not just to the sides', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const maxHeight = parseFloat(dialog.style.maxHeight);
        const edgeToEdgeHeight = 800 - 110;

        expect(maxHeight).not.toBeNaN();
        expect(maxHeight).toBeLessThan(edgeToEdgeHeight);
      });
    });

    it('leaves the same gap above the dialog and the viewport edge when flip() opens it upward', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowBottomReferenceRect(getByTestId('input').parentElement as HTMLElement);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      const dialog = getByRole('dialog', { hidden: true });

      await waitFor(() => {
        const maxHeight = parseFloat(dialog.style.maxHeight);
        const edgeToEdgeHeight = 700 - 0;

        expect(maxHeight).not.toBeNaN();
        expect(maxHeight).toBeLessThan(edgeToEdgeHeight);
      });
    });

    it('uses a smaller gap when compact, leaving more available space than the default spacing', async () => {
      const {
        getByTestId: getByDefaultTestId,
        getByRole: getByDefaultRole,
        unmount
      } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      mockNarrowReferenceRect(getByDefaultTestId('input').parentElement as HTMLElement);

      await user.click(getByDefaultRole('button', { name: CHOOSE_DATE }));

      let defaultMaxWidth: number;

      await waitFor(() => {
        defaultMaxWidth = parseFloat(getByDefaultRole('dialog', { hidden: true }).style.maxWidth);
        expect(defaultMaxWidth).not.toBeNaN();
      });

      unmount();

      const { getByTestId: getByCompactTestId, getByRole: getByCompactRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} isCompact />
      );

      mockNarrowReferenceRect(getByCompactTestId('input').parentElement as HTMLElement);

      await user.click(getByCompactRole('button', { name: CHOOSE_DATE }));

      await waitFor(() => {
        const compactMaxWidth = parseFloat(
          getByCompactRole('dialog', { hidden: true }).style.maxWidth
        );

        expect(compactMaxWidth).not.toBeNaN();
        expect(compactMaxWidth).toBeGreaterThan(defaultMaxWidth);
      });
    });
  });

  describe('reference element', () => {
    it('anchors to the input group, not just the input', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');
      const group = input.parentElement as HTMLElement;

      mockNarrowReferenceRect(group);
      input.getBoundingClientRect = jest.fn(
        () =>
          ({
            width: 10,
            height: 10,
            top: 300,
            left: 300,
            bottom: 310,
            right: 310,
            x: 300,
            y: 300
          }) as DOMRect
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      await waitFor(() => {
        const dialog = getByRole('dialog', { hidden: true });
        const match = dialog.style.transform.match(/translate\((?<x>[-\d.]+)px/u);
        const x = match ? parseFloat(match.groups!.x) : NaN;

        expect(x).toBe(250);
      });
    });

    it('anchors to the input itself when hasTrigger is false, since there is no group', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} hasTrigger={false} />
      );
      const input = getByTestId('input');

      mockNarrowReferenceRect(input);

      await user.click(input);

      await waitFor(() => {
        const dialog = getByRole('dialog', { hidden: true });
        const match = dialog.style.transform.match(/translate\((?<x>[-\d.]+)px/u);
        const x = match ? parseFloat(match.groups!.x) : NaN;

        expect(x).toBe(250);
      });
    });
  });
});
