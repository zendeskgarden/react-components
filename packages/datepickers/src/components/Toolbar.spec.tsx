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

describe('Toolbar', () => {
  const user = userEvent.setup({ delay: null });

  const renderToolbar = (props: Partial<IToolbarProps> = {}) =>
    render(
      <Toolbar
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
        onPreviousYear={jest.fn()}
        onPreviousMonth={jest.fn()}
        onNextMonth={jest.fn()}
        onNextYear={jest.fn()}
        {...props}
      />
    );

  it.each(['Previous year', 'Previous month', 'Next month', 'Next year'])(
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

  it('sets lang="en" on the default toolbar label', () => {
    const { getByRole } = renderToolbar();

    expect(getByRole('toolbar')).toHaveAttribute('lang', 'en');
  });

  it('reflects a consumer-provided toolbar label without setting lang', () => {
    const { getByRole } = renderToolbar({ toolbarLabel: 'Navigation du calendrier' });

    const toolbar = getByRole('toolbar');

    expect(toolbar).toHaveAccessibleName('Navigation du calendrier');
    expect(toolbar).not.toHaveAttribute('lang');
  });

  it.each(['Previous year', 'Previous month', 'Next month', 'Next year'])(
    'sets lang="en" on the default "%s" paddle label',
    defaultName => {
      const { getByRole } = renderToolbar();

      expect(getByRole('button', { name: defaultName })).toHaveAttribute('lang', 'en');
    }
  );

  it.each([
    ['previousYearLabel', 'Année précédente'],
    ['previousMonthLabel', 'Mois précédent'],
    ['nextMonthLabel', 'Mois suivant'],
    ['nextYearLabel', 'Année suivante']
  ])('reflects a consumer-provided "%s" without setting lang', (labelProp, label) => {
    const { getByRole } = renderToolbar({ [labelProp]: label });

    expect(getByRole('button', { name: label })).not.toHaveAttribute('lang');
  });

  it('gives exactly one paddle tabindex="0" initially, matching the first control', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const previousMonth = getByRole('button', { name: 'Previous month' });
    const nextMonth = getByRole('button', { name: 'Next month' });
    const nextYear = getByRole('button', { name: 'Next year' });

    expect(previousYear).toHaveAttribute('tabindex', '0');
    [previousMonth, nextMonth, nextYear].forEach(button => {
      expect(button).toHaveAttribute('tabindex', '-1');
    });
  });

  it('moves focus to the next paddle when ArrowRight is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const previousMonth = getByRole('button', { name: 'Previous month' });

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

    const previousMonth = getByRole('button', { name: 'Previous month' });
    const previousYear = getByRole('button', { name: 'Previous year' });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.LEFT });

    expect(previousYear).toHaveFocus();
  });

  it('wraps focus from the last paddle to the first when ArrowRight is pressed', () => {
    const { getByRole } = renderToolbar();

    const nextYear = getByRole('button', { name: 'Next year' });
    const previousYear = getByRole('button', { name: 'Previous year' });

    act(() => {
      nextYear.focus();
    });
    fireEvent.keyDown(nextYear, { key: KEYS.RIGHT });

    expect(previousYear).toHaveFocus();
  });

  it('wraps focus from the first paddle to the last when ArrowLeft is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const nextYear = getByRole('button', { name: 'Next year' });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

    expect(nextYear).toHaveFocus();
  });

  it('moves focus to the previous paddle when ArrowRight is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const previousMonth = getByRole('button', { name: 'Previous month' });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.RIGHT });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the next paddle when ArrowLeft is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const previousMonth = getByRole('button', { name: 'Previous month' });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

    expect(previousMonth).toHaveFocus();
  });

  it('wraps focus from the first paddle to the last when ArrowRight is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousYear = getByRole('button', { name: 'Previous year' });
    const nextYear = getByRole('button', { name: 'Next year' });

    act(() => {
      previousYear.focus();
    });
    fireEvent.keyDown(previousYear, { key: KEYS.RIGHT });

    expect(nextYear).toHaveFocus();
  });

  it('wraps focus from the last paddle to the first when ArrowLeft is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const nextYear = getByRole('button', { name: 'Next year' });
    const previousYear = getByRole('button', { name: 'Previous year' });

    act(() => {
      nextYear.focus();
    });
    fireEvent.keyDown(nextYear, { key: KEYS.LEFT });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the first paddle when Home is pressed', () => {
    const { getByRole } = renderToolbar();

    const nextMonth = getByRole('button', { name: 'Next month' });
    const previousYear = getByRole('button', { name: 'Previous year' });

    act(() => {
      nextMonth.focus();
    });
    fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the last paddle when End is pressed', () => {
    const { getByRole } = renderToolbar();

    const previousMonth = getByRole('button', { name: 'Previous month' });
    const nextYear = getByRole('button', { name: 'Next year' });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.END });

    expect(nextYear).toHaveFocus();
  });

  it('moves focus to the first paddle when Home is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const nextMonth = getByRole('button', { name: 'Next month' });
    const previousYear = getByRole('button', { name: 'Previous year' });

    act(() => {
      nextMonth.focus();
    });
    fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

    expect(previousYear).toHaveFocus();
  });

  it('moves focus to the last paddle when End is pressed, in RTL', () => {
    const { getByRole } = renderToolbarRtl();

    const previousMonth = getByRole('button', { name: 'Previous month' });
    const nextYear = getByRole('button', { name: 'Next year' });

    act(() => {
      previousMonth.focus();
    });
    fireEvent.keyDown(previousMonth, { key: KEYS.END });

    expect(nextYear).toHaveFocus();
  });

  it.each([
    ['Previous year', 'onPreviousYear'],
    ['Previous month', 'onPreviousMonth'],
    ['Next month', 'onNextMonth'],
    ['Next year', 'onNextYear']
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

  describe('Keyboard event bubbling', () => {
    const renderToolbarWithAncestorSpy = (ancestorKeyDownSpy: jest.Mock) =>
      render(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={ancestorKeyDownSpy}>
          <Toolbar
            onPreviousYear={jest.fn()}
            onPreviousMonth={jest.fn()}
            onNextMonth={jest.fn()}
            onNextYear={jest.fn()}
          />
        </div>
      );

    it.each([KEYS.RIGHT, KEYS.LEFT, KEYS.UP, KEYS.DOWN, KEYS.HOME, KEYS.END])(
      'does not let "%s" bubble past the toolbar to an ancestor',
      key => {
        const ancestorKeyDownSpy = jest.fn();
        const { getByRole } = renderToolbarWithAncestorSpy(ancestorKeyDownSpy);

        const previousYear = getByRole('button', { name: 'Previous year' });

        act(() => {
          previousYear.focus();
        });
        fireEvent.keyDown(previousYear, { key });

        expect(ancestorKeyDownSpy).not.toHaveBeenCalled();
      }
    );
  });
});
