/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, renderRtl, waitFor } from 'garden-test-utils';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

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
    const { queryByTestId } = render(<Example value={DEFAULT_DATE} />);

    expect(queryByTestId('datepicker-menu')).toBeEmptyDOMElement();
  });

  it('has dialog role, aria-modal="false", and an accessible name matching the calendar button', async () => {
    const { getByTestId, getByRole } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    await user.click(getByTestId('calendar-button'));

    const dialog = getByRole('dialog', { name: 'Choose date' });

    expect(dialog).toHaveAttribute('aria-modal', 'false');
  });

  it('applies LTR classes by default', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

    await user.click(getByTestId('calendar-button'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'false');
  });

  it('applies RTL classes if provided', async () => {
    const { getByTestId } = renderRtl(<Example value={DEFAULT_DATE} />);

    await user.click(getByTestId('calendar-button'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'true');
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
    const { getByTestId, getAllByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getAllByTestId('day')[9]).toHaveFocus();

    fireEvent.keyDown(getAllByTestId('day')[9], { key: KEYS.ESCAPE });

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(getByTestId('input')).toHaveFocus();
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar on Escape when focus never left the input', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(input).toHaveFocus();

    await user.keyboard('{Escape}');

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar when clicking outside of the widget', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when clicking a non-interactive element outside the widget', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside-background'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when the input receives focus', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('input'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
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
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      mockNarrowReferenceRect(getByTestId('input'));

      await user.click(getByTestId('calendar-button'));

      const dialog = getByTestId('datepicker-menu');

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThanOrEqual(300);
      });
    });

    it('does not move the dialog away from its reference element, unlike shift()', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      mockNarrowReferenceRect(getByTestId('input'));

      await user.click(getByTestId('calendar-button'));

      const dialog = getByTestId('datepicker-menu');

      await waitFor(() => {
        const match = dialog.style.transform.match(/translate\((?<x>[-\d.]+)px/u);
        const x = match ? parseFloat(match.groups!.x) : NaN;

        expect(x).not.toBeNaN();
        expect(x).toBe(250);
      });
    });

    it('clips at its own bounds via overflow: hidden', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      mockNarrowReferenceRect(getByTestId('input'));

      await user.click(getByTestId('calendar-button'));

      const dialog = getByTestId('datepicker-menu');

      await waitFor(() => {
        expect(dialog.style.maxWidth).not.toBe('');
        expect(dialog.style.overflow).toBe('hidden');
      });
    });

    it("caps StyledMenu (the wrapper's inline-block child) to its parent's now-constrained width", async () => {
      const { container, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByTestId('input'));

      await user.click(getByTestId('calendar-button'));

      await waitFor(() => {
        const menu = container.querySelector<HTMLElement>("[data-garden-id='datepickers.menu']");

        expect(menu?.style.maxWidth).toBe('100%');
        expect(menu?.style.maxHeight).toBe('100%');
      });
    });

    it('leaves a gap between the dialog and the viewport edge, instead of touching it exactly', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      mockNarrowReferenceRect(getByTestId('input'));

      await user.click(getByTestId('calendar-button'));

      const dialog = getByTestId('datepicker-menu');

      await waitFor(() => {
        const maxWidth = parseFloat(dialog.style.maxWidth);
        const edgeToEdgeWidth = 300 - 250;

        expect(maxWidth).not.toBeNaN();
        expect(maxWidth).toBeLessThan(edgeToEdgeWidth);
      });
    });

    it('uses a smaller gap when compact, leaving more available space than the default spacing', async () => {
      const { getByTestId: getByDefaultTestId, unmount } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      mockNarrowReferenceRect(getByDefaultTestId('input'));

      await user.click(getByDefaultTestId('calendar-button'));

      let defaultMaxWidth: number;

      await waitFor(() => {
        defaultMaxWidth = parseFloat(getByDefaultTestId('datepicker-menu').style.maxWidth);
        expect(defaultMaxWidth).not.toBeNaN();
      });

      unmount();

      const { getByTestId: getByCompactTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} isCompact />
      );

      mockNarrowReferenceRect(getByCompactTestId('input'));

      await user.click(getByCompactTestId('calendar-button'));

      await waitFor(() => {
        const compactMaxWidth = parseFloat(getByCompactTestId('datepicker-menu').style.maxWidth);

        expect(compactMaxWidth).not.toBeNaN();
        expect(compactMaxWidth).toBeGreaterThan(defaultMaxWidth);
      });
    });
  });
});
