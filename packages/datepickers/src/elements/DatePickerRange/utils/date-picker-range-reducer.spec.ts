/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  datepickerRangeReducer,
  IDatePickerRangeState,
  resolveRangeSelection
} from './date-picker-range-reducer';

const FEB_1 = new Date(2019, 1, 1);
const FEB_5 = new Date(2019, 1, 5);
const FEB_10 = new Date(2019, 1, 10);
const MAR_5 = new Date(2019, 2, 5);
const MAR_10 = new Date(2019, 2, 10);

describe('resolveRangeSelection', () => {
  describe('when Start is active', () => {
    it.each([
      ['focused', { isStartActive: true, isEndActive: false }],
      ['focused, even while End is also flagged active', { isStartActive: true, isEndActive: true }]
    ])('keeps a later end value when %s', (_, active) => {
      expect(
        resolveRangeSelection({ date: FEB_10, startValue: FEB_5, endValue: MAR_5, ...active })
      ).toStrictEqual({
        startValue: FEB_10,
        endValue: MAR_5,
        field: 'start',
        isOutOfOrder: false
      });
    });

    it('keeps an end value on the same day', () => {
      expect(
        resolveRangeSelection({
          date: MAR_5,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: true,
          isEndActive: false
        })
      ).toStrictEqual({ startValue: MAR_5, endValue: MAR_5, field: 'start', isOutOfOrder: false });
    });

    it.each([
      ['clears an earlier end value', MAR_5],
      ['leaves an empty end value empty', undefined]
    ])('%s', (_, endValue) => {
      expect(
        resolveRangeSelection({
          date: MAR_10,
          startValue: FEB_5,
          endValue,
          isStartActive: true,
          isEndActive: false
        })
      ).toStrictEqual({
        startValue: MAR_10,
        endValue: undefined,
        field: 'start',
        isOutOfOrder: false
      });
    });
  });

  describe('when End is active', () => {
    it('sets the end value when there is no start value', () => {
      expect(
        resolveRangeSelection({
          date: FEB_10,
          startValue: undefined,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: true
        })
      ).toStrictEqual({
        startValue: undefined,
        endValue: FEB_10,
        field: 'end',
        isOutOfOrder: false
      });
    });

    it('sets the end value for a later day', () => {
      expect(
        resolveRangeSelection({
          date: MAR_10,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: true
        })
      ).toStrictEqual({ startValue: FEB_5, endValue: MAR_10, field: 'end', isOutOfOrder: false });
    });

    it('sets the end value to the start day, reporting it as the start field', () => {
      expect(
        resolveRangeSelection({
          date: new Date(2019, 1, 5),
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: true
        })
      ).toStrictEqual({
        startValue: FEB_5,
        endValue: new Date(2019, 1, 5),
        field: 'start',
        isOutOfOrder: false
      });
    });

    it('restarts the range from an earlier day', () => {
      expect(
        resolveRangeSelection({
          date: FEB_1,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: true
        })
      ).toStrictEqual({
        startValue: FEB_1,
        endValue: undefined,
        field: 'start',
        isOutOfOrder: false
      });
    });
  });

  describe('when neither field is active', () => {
    const inactive = { isStartActive: false, isEndActive: false };

    it('sets the start value when there is none, keeping a later end value', () => {
      expect(
        resolveRangeSelection({ date: FEB_10, startValue: undefined, endValue: MAR_5, ...inactive })
      ).toStrictEqual({ startValue: FEB_10, endValue: MAR_5, field: 'start', isOutOfOrder: false });
    });

    it('flags an out-of-order range when there is no start value and the day is after the end value', () => {
      expect(
        resolveRangeSelection({ date: MAR_10, startValue: undefined, endValue: MAR_5, ...inactive })
      ).toStrictEqual({ startValue: MAR_10, endValue: MAR_5, field: 'start', isOutOfOrder: true });
    });

    it('sets the end value when there is none and the day is not before the start value', () => {
      expect(
        resolveRangeSelection({ date: MAR_10, startValue: FEB_5, endValue: undefined, ...inactive })
      ).toStrictEqual({ startValue: FEB_5, endValue: MAR_10, field: 'end', isOutOfOrder: false });
    });

    it('moves the start value when there is no end value and the day is before the start value', () => {
      expect(
        resolveRangeSelection({ date: FEB_1, startValue: FEB_5, endValue: undefined, ...inactive })
      ).toStrictEqual({
        startValue: FEB_1,
        endValue: undefined,
        field: 'start',
        isOutOfOrder: false
      });
    });

    it('restarts the range when both values are set', () => {
      expect(
        resolveRangeSelection({ date: FEB_10, startValue: FEB_5, endValue: MAR_5, ...inactive })
      ).toStrictEqual({
        startValue: FEB_10,
        endValue: undefined,
        field: 'start',
        isOutOfOrder: false
      });
    });
  });
});

describe('resolveRangeSelection with a disabled or read-only field', () => {
  describe('when Start is disabled or read-only', () => {
    it('commits to End, even while Start is active', () => {
      expect(
        resolveRangeSelection({
          date: MAR_10,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: true,
          isEndActive: false,
          disabledOrReadOnlyField: 'start'
        })
      ).toStrictEqual({ startValue: FEB_5, endValue: MAR_10, field: 'end', isOutOfOrder: false });
    });

    it('commits to End, rather than restarting the range, when neither field is active', () => {
      expect(
        resolveRangeSelection({
          date: FEB_10,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: false,
          disabledOrReadOnlyField: 'start'
        })
      ).toStrictEqual({ startValue: FEB_5, endValue: FEB_10, field: 'end', isOutOfOrder: false });
    });

    it('commits to End when Start is empty', () => {
      expect(
        resolveRangeSelection({
          date: FEB_10,
          startValue: undefined,
          endValue: undefined,
          isStartActive: false,
          isEndActive: false,
          disabledOrReadOnlyField: 'start'
        })
      ).toStrictEqual({
        startValue: undefined,
        endValue: FEB_10,
        field: 'end',
        isOutOfOrder: false
      });
    });
  });

  describe('when End is disabled or read-only', () => {
    it('commits to Start, even while End is active', () => {
      expect(
        resolveRangeSelection({
          date: FEB_1,
          startValue: FEB_5,
          endValue: MAR_5,
          isStartActive: false,
          isEndActive: true,
          disabledOrReadOnlyField: 'end'
        })
      ).toStrictEqual({ startValue: FEB_1, endValue: MAR_5, field: 'start', isOutOfOrder: false });
    });

    it('commits to Start, rather than moving End, when neither field is active', () => {
      expect(
        resolveRangeSelection({
          date: FEB_10,
          startValue: FEB_5,
          endValue: undefined,
          isStartActive: false,
          isEndActive: false,
          disabledOrReadOnlyField: 'end'
        })
      ).toStrictEqual({
        startValue: FEB_10,
        endValue: undefined,
        field: 'start',
        isOutOfOrder: false
      });
    });
  });
});

describe('datepickerRangeReducer CLICK_DATE', () => {
  const baseState: IDatePickerRangeState = {
    previewDate: FEB_5,
    focusedDate: FEB_5,
    isStartFocused: false,
    isEndFocused: false,
    isStartValueInvalid: false,
    isEndValueInvalid: false,
    startInputValue: 'February 5, 2019',
    endInputValue: 'March 5, 2019'
  };

  it('formats the selected field and leaves an unchanged field as typed', () => {
    const state = datepickerRangeReducer(
      { ...baseState, isEndFocused: true, isStartValueInvalid: true, startInputValue: 'garbage' },
      {
        type: 'CLICK_DATE',
        previousStartValue: FEB_5,
        previousEndValue: MAR_5,
        selection: { startValue: FEB_10, endValue: MAR_5, field: 'start', isOutOfOrder: false }
      }
    );

    expect(state).toMatchObject({
      startInputValue: 'February 10, 2019',
      endInputValue: 'March 5, 2019',
      isStartFocused: false,
      isEndFocused: false,
      isStartValueInvalid: false
    });
  });

  it('reformats the selected field even when its value does not change', () => {
    const state = datepickerRangeReducer(
      { ...baseState, isEndValueInvalid: true, endInputValue: 'garbage' },
      {
        type: 'CLICK_DATE',
        previousStartValue: FEB_5,
        previousEndValue: MAR_5,
        selection: { startValue: FEB_5, endValue: MAR_5, field: 'end', isOutOfOrder: false }
      }
    );

    expect(state).toMatchObject({
      startInputValue: 'February 5, 2019',
      endInputValue: 'March 5, 2019',
      isEndValueInvalid: false
    });
  });

  it('empties a field whose value the selection clears', () => {
    const state = datepickerRangeReducer(baseState, {
      type: 'CLICK_DATE',
      previousStartValue: FEB_5,
      previousEndValue: MAR_5,
      selection: { startValue: FEB_10, endValue: undefined, field: 'start', isOutOfOrder: false }
    });

    expect(state).toMatchObject({ startInputValue: 'February 10, 2019', endInputValue: '' });
  });

  it('uses the provided locale and formatDate', () => {
    const state = datepickerRangeReducer(baseState, {
      type: 'CLICK_DATE',
      previousStartValue: FEB_5,
      previousEndValue: MAR_5,
      selection: { startValue: FEB_10, endValue: MAR_5, field: 'start', isOutOfOrder: false },
      formatDate: (date: Date) => `custom ${date.getDate()}`
    });

    expect(state.startInputValue).toBe('custom 10');
  });
});
