/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, renderRtl, fireEvent } from 'garden-test-utils';
import { KEYS } from '@zendeskgarden/container-utilities';
import { Toolbar } from './Toolbar';
import { IToolbarProps } from '../types';

const DEFAULT_PREVIEW_DATE = new Date(2019, 1, 5);

const PREVIOUS_YEAR = 'Previous year: February 2018';
const PREVIOUS_MONTH = 'Previous month: January 2019';
const NEXT_MONTH = 'Next month: March 2019';
const NEXT_YEAR = 'Next year: February 2020';

describe('Toolbar', () => {
  const user = userEvent.setup({ delay: null });

  const renderToolbar = (props: Partial<IToolbarProps> = {}) =>
    render(
      <Toolbar
        previewDate={DEFAULT_PREVIEW_DATE}
        onPreviousYear={jest.fn()}
        onPreviousMonth={jest.fn()}
        onNextMonth={jest.fn()}
        onNextYear={jest.fn()}
        {...props}
      />
    );

  const renderToolbarRtl = (props: Partial<IToolbarProps> = {}) =>
    renderRtl(
      <Toolbar
        previewDate={DEFAULT_PREVIEW_DATE}
        onPreviousYear={jest.fn()}
        onPreviousMonth={jest.fn()}
        onNextMonth={jest.fn()}
        onNextYear={jest.fn()}
        {...props}
      />
    );

  it.each([PREVIOUS_YEAR, PREVIOUS_MONTH, NEXT_MONTH, NEXT_YEAR])(
    'hides the "%s" paddle icon from assistive technology',
    name => {
      const { getByRole } = renderToolbar();

      const icon = getByRole('button', { name }).querySelector('svg');

      expect(icon).toHaveAttribute('aria-hidden', 'true');
    }
  );

  it('gives the toolbar a toolbar role and an accessible name', () => {
    const { getByRole } = renderToolbar();

    expect(getByRole('toolbar')).toHaveAccessibleName('Calendar view');
  });

  it('isolates the toolbar into its own stacking context, so it paints above the overlapping month box', () => {
    const { getByRole } = renderToolbar();

    expect(getByRole('toolbar')).toHaveStyleRule('isolation', 'isolate');
  });

  it('reflects a consumer-provided toolbar label', () => {
    const { getByRole } = renderToolbar({ toolbarLabel: 'Navigation du calendrier' });

    expect(getByRole('toolbar')).toHaveAccessibleName('Navigation du calendrier');
  });

  it.each([
    ['previousYearLabel', 'Année précédente'],
    ['previousMonthLabel', 'Mois précédent'],
    ['nextMonthLabel', 'Mois suivant'],
    ['nextYearLabel', 'Année suivante']
  ])(
    'uses a consumer-provided string "%s" as-is, without appending the date',
    (labelProp, label) => {
      const { getByRole } = renderToolbar({ [labelProp]: label });

      expect(getByRole('button', { name: label })).toBeInTheDocument();
    }
  );

  it('formats the default appended month/year using the provided locale', () => {
    const { getByRole } = renderToolbar({ locale: 'fr-FR' });

    expect(getByRole('button', { name: 'Previous year: février 2018' })).toBeInTheDocument();
  });

  it.each([
    ['previousYearLabel', new Date(2018, 1, 5), 'February 2018'],
    ['previousMonthLabel', new Date(2019, 0, 5), 'January 2019'],
    ['nextMonthLabel', new Date(2019, 2, 5), 'March 2019'],
    ['nextYearLabel', new Date(2020, 1, 5), 'February 2020']
  ])(
    'calls a consumer-provided function "%s" with the target date and its formatted month/year, using its return value as the label',
    (labelProp, expectedDate, expectedFormatted) => {
      const labelFn = jest.fn(
        (date: Date, formattedMonthYear: string) => `Custom: ${formattedMonthYear}`
      );

      const { getByRole } = renderToolbar({ [labelProp]: labelFn });

      expect(labelFn).toHaveBeenCalledWith(expectedDate, expectedFormatted);
      expect(getByRole('button', { name: `Custom: ${expectedFormatted}` })).toBeInTheDocument();
    }
  );

  it('recomputes the appended month/year as previewDate changes', () => {
    const { getByRole, rerender } = renderToolbar();

    expect(getByRole('button', { name: NEXT_MONTH })).toBeInTheDocument();

    rerender(
      <Toolbar
        previewDate={new Date(2019, 2, 5)}
        onPreviousYear={jest.fn()}
        onPreviousMonth={jest.fn()}
        onNextMonth={jest.fn()}
        onNextYear={jest.fn()}
      />
    );

    expect(getByRole('button', { name: 'Next month: April 2019' })).toBeInTheDocument();
  });

  it('gives exactly one paddle tabindex="0" initially, matching the first control', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });
    const nextMonth = getByRole('button', { name: NEXT_MONTH });
    const nextYear = getByRole('button', { name: NEXT_YEAR });

    expect(previousYear).toHaveAttribute('tabindex', '0');
    [previousMonth, nextMonth, nextYear].forEach(button => {
      expect(button).toHaveAttribute('tabindex', '-1');
    });
  });

  it('moves focus to the next paddle when ArrowRight is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.RIGHT });

    expect(previousMonth).toHaveFocus();
    expect(previousMonth).toHaveAttribute('tabindex', '0');
    expect(previousYear).toHaveAttribute('tabindex', '-1');
  });

  it('moves focus to the previous paddle when ArrowLeft is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });
    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.LEFT });

    expect(previousYear).toHaveFocus();
  });

  it('wraps focus from the last paddle to the first when ArrowRight is pressed', () => {
    const { getByRole } = renderToolbar();

    const nextYear = getByRole('button', { name: NEXT_YEAR });
    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });

    act(() => {
      nextYear.focus();
    });
    fireEvent.keyDown(nextYear, { key: KEYS.RIGHT });

    expect(previousYear).toHaveFocus();
  });

  it('wraps focus from the first paddle to the last when ArrowLeft is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const nextYear = getByRole('button', { name: NEXT_YEAR });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

    expect(nextYear).toHaveFocus();
  });

  it('moves focus to the previous paddle when ArrowRight is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.RIGHT });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the next paddle when ArrowLeft is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

    expect(previousMonth).toHaveFocus();
  });

  it('wraps focus from the first paddle to the last when ArrowRight is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });
    const nextYear = getByRole('button', { name: NEXT_YEAR });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.RIGHT });

    expect(nextYear).toHaveFocus();
  });

  it('wraps focus from the last paddle to the first when ArrowLeft is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const nextYear = getByRole('button', { name: NEXT_YEAR });
    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });

    act(() => {
      nextYear.focus();
    });
    fireEvent.keyDown(nextYear, { key: KEYS.LEFT });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the first paddle when Home is pressed', () => {
    const { getByRole } = renderToolbar();

    const nextMonth = getByRole('button', { name: NEXT_MONTH });
    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });

    act(() => {
      nextMonth.focus();
    });
    fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the last paddle when End is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });
    const nextYear = getByRole('button', { name: NEXT_YEAR });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.END });

    expect(nextYear).toHaveFocus();
  });

  it('moves focus to the first paddle when Home is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const nextMonth = getByRole('button', { name: NEXT_MONTH });
    const previousYear = getByRole('button', { name: PREVIOUS_YEAR });

    act(() => {
      nextMonth.focus();
    });
    fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the last paddle when End is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousMonth = getByRole('button', { name: PREVIOUS_MONTH });
    const nextYear = getByRole('button', { name: NEXT_YEAR });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.END });

    expect(nextYear).toHaveFocus();
  });

  it.each([
    [PREVIOUS_YEAR, 'onPreviousYear'],
    [PREVIOUS_MONTH, 'onPreviousMonth'],
    [NEXT_MONTH, 'onNextMonth'],
    [NEXT_YEAR, 'onNextYear']
  ] as const)(
    'calls the corresponding callback when Enter or Space is pressed on the "%s" paddle',
    async (name, callbackProp) => {
      const spy = jest.fn();
      const { getByRole } = renderToolbar({ [callbackProp]: spy });

      const button = getByRole('button', { name });

      act(() => {
        button.focus();
      });
      await user.keyboard('{Enter}');

      expect(spy).toHaveBeenCalledTimes(1);

      await user.keyboard(' ');

      expect(spy).toHaveBeenCalledTimes(2);
    }
  );
});
