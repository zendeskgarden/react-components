/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, getAllByTestId as globalGetAllByTestId, renderRtl } from 'garden-test-utils';
import { addDays, subDays, addMonths, subMonths } from 'date-fns';
import mockDate from 'mockdate';
import { DatepickerRange } from './DatepickerRange';
import { IDatepickerRangeProps } from '../../types';

const DEFAULT_START_VALUE = new Date(2019, 1, 5);
const DEFAULT_END_VALUE = new Date(2019, 2, 5);

const Example = (props: IDatepickerRangeProps) => (
  <DatepickerRange {...props}>
    <DatepickerRange.Start>
      <input data-test-id="start" />
    </DatepickerRange.Start>
    <DatepickerRange.End>
      <input data-test-id="end" />
    </DatepickerRange.End>
    <DatepickerRange.Calendar />
  </DatepickerRange>
);

describe('DatepickerRange', () => {
  const user = userEvent.setup();

  let onChangeSpy: (values: { startValue?: Date; endValue?: Date }) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_START_VALUE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Calendar display', () => {
    it('displays dates with correct previous styling', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      for (let x = 0; x < firstMonthDays.length; x++) {
        if (x <= 4) {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else if (x >= 33) {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'false');
        }
      }

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      for (let x = 0; x < secondMonthDays.length; x++) {
        if (x <= 4) {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else if (x >= 36) {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'false');
        }
      }
    });

    it('displays dates with selected and today styling', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      expect(firstMonthDays[9]).toHaveAttribute('data-test-selected', 'true');
      expect(firstMonthDays[9]).toHaveAttribute('data-test-today', 'true');

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      expect(secondMonthDays[9]).toHaveAttribute('data-test-selected', 'true');
    });

    it('displays "Sun" as default first day of week', () => {
      const { getAllByTestId } = render(<Example />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Sun');
    });

    it('display locale based first day of week', () => {
      const { getAllByTestId } = render(<Example locale="en-GB" />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Mon');
    });

    it('display custom first day of week', () => {
      const { getAllByTestId } = render(<Example locale="en-GB" weekStartsOn={3} />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Wed');
    });

    it('displays highlighted days correctly if both values are provided', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthHighlights = globalGetAllByTestId(calendarWrappers[0], 'highlight');

      for (let x = 0; x < firstMonthHighlights.length; x++) {
        const highlight = firstMonthHighlights[x];

        if (x < 4) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthHighlights = globalGetAllByTestId(calendarWrappers[1], 'highlight');

      for (let x = 0; x < secondMonthHighlights.length; x++) {
        const highlight = secondMonthHighlights[x];

        if (x < 5) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly if both values are provided in RTL mode', () => {
      const { getAllByTestId } = renderRtl(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthHighlights = globalGetAllByTestId(calendarWrappers[0], 'highlight');

      for (let x = 0; x < firstMonthHighlights.length; x++) {
        const highlight = firstMonthHighlights[x];

        if (x < 4) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthHighlights = globalGetAllByTestId(calendarWrappers[1], 'highlight');

      for (let x = 0; x < secondMonthHighlights.length; x++) {
        const highlight = secondMonthHighlights[x];

        if (x < 5) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly when moused', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthHighlights = globalGetAllByTestId(calendarWrappers[0], 'highlight');
      const secondMonthHighlights = globalGetAllByTestId(calendarWrappers[1], 'highlight');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);

      for (let x = 0; x < firstMonthHighlights.length; x++) {
        const highlight = firstMonthHighlights[x];

        if (x < 4) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthHighlights.length; x++) {
        const highlight = secondMonthHighlights[x];

        if (x < 5) {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(highlight).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('removes highlighted days when moused away', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthHighlights = globalGetAllByTestId(calendarWrappers[0], 'highlight');
      const secondMonthHighlights = globalGetAllByTestId(calendarWrappers[1], 'highlight');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);
      await user.unhover(getAllByTestId('calendar-internal-wrapper')[1]);

      firstMonthHighlights.forEach(highlight => {
        expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthHighlights.forEach(highlight => {
        expect(highlight).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('displays disabled styling for minimum and maximum values', () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={subDays(DEFAULT_START_VALUE, 2)}
          maxValue={addDays(DEFAULT_END_VALUE, 1)}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      for (let x = 0; x < firstMonthDays.length; x++) {
        const element = firstMonthDays[x];

        if (x < 5) {
          expect(element).not.toHaveAttribute('data-test-disabled');
        } else if (x < 7) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else if (x >= 7 && x <= 32) {
          expect(element).toHaveAttribute('data-test-disabled', 'false');
        } else {
          expect(element).not.toHaveAttribute('data-test-disabled');
        }
      }

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      for (let x = 0; x < secondMonthDays.length; x++) {
        const element = secondMonthDays[x];

        if (x < 5) {
          expect(element).not.toHaveAttribute('data-test-disabled');
        } else if (x >= 5 && x < 11) {
          expect(element).toHaveAttribute('data-test-disabled', 'false');
        } else if (x >= 11 && x < 36) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else {
          expect(element).not.toHaveAttribute('data-test-disabled');
        }
      }
    });

    it('displays preview months in correct format', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('displays previous month if previous paddle is clicked', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getAllByTestId('previous-month')[0]);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('January 2019');
      expect(monthDisplays[1]).toHaveTextContent('February 2019');
    });

    it('displays next month if next paddle is clicked', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getAllByTestId('next-month')[1]);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('displays current month if no value is provided', () => {
      const { getAllByTestId } = render(<Example />);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if start value is updated while outside of visible range', async () => {
      const { getAllByTestId, rerender } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const previousPaddle = getAllByTestId('previous-month')[0];

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      rerender(<Example startValue={addMonths(DEFAULT_START_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('resets preview date if end value is updated while outside of visible range', async () => {
      const { getAllByTestId, rerender } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const nextPaddle = getAllByTestId('next-month')[1];

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      rerender(<Example endValue={subMonths(DEFAULT_END_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if start input is focused while outside of visible range', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousPaddle = getAllByTestId('previous-month')[0];

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      await user.click(getByTestId('start'));

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if end input is focused while outside of visible range', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextPaddle = getAllByTestId('next-month')[1];

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      await user.click(getByTestId('end'));

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('renders compact styling correctly', () => {
      const { getAllByTestId, rerender } = render(<Example isCompact />);
      const calendarWrappers = getAllByTestId('calendar-wrapper');

      expect(calendarWrappers[0]).toHaveStyleRule('margin', '16px');
      rerender(<Example />);
      expect(calendarWrappers[0]).toHaveStyleRule('margin', '20px');
    });
  });

  describe('Calendar selection', () => {
    it('clears end value when date is selected', async () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 2),
        endValue: undefined
      });
    });

    it('selects end value when additional date is selected', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} onChange={onChangeSpy} />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 5),
        endValue: new Date(2019, 2, 2)
      });
    });

    it('selects start value if no values are selected', async () => {
      const { getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 2),
        endValue: undefined
      });
    });

    it('updates start value when clicked date is before end value', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} onChange={onChangeSpy} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[0], 'day')[5]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 1),
        endValue: undefined
      });
    });

    it('updates start input value when date is changed', () => {
      const { getByTestId, rerender } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      rerender(
        <Example
          startValue={new Date(2019, 1, 10)}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('start')).toHaveValue('February 10, 2019');
    });

    it('updates end input value when date is changed', () => {
      const { getByTestId, rerender } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      rerender(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={new Date(2019, 2, 15)}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('end')).toHaveValue('March 15, 2019');
    });

    it('does not select date if before minDate', async () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_START_VALUE, 2)}
          maxValue={addDays(DEFAULT_END_VALUE, 2)}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      await user.click(firstMonthDays[4]);
      await user.click(secondMonthDays[33]);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('updates valid start value when start input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('start'));
      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 8),
        endValue: new Date(2019, 2, 5)
      });
    });

    it('updates invalid start value when start input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('start'));
      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 8),
        endValue: undefined
      });
    });

    it('updates valid end value when end input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('end'));
      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 5),
        endValue: new Date(2019, 2, 8)
      });
    });

    it('updates invalid end value when end input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('end'));
      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[8]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 4),
        endValue: undefined
      });
    });
  });

  describe('customParseDate()', () => {
    it('uses customParseDate to determine date validitiy if provided', async () => {
      const MOCK_DATE = new Date(2019, 0, 1);
      const customParseDateSpy: (input?: string) => Date = jest.fn().mockReturnValue(MOCK_DATE);
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          customParseDate={customParseDateSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: MOCK_DATE,
        endValue: DEFAULT_END_VALUE
      });
    });

    it('does not call onChange if parsed date is the current value', async () => {
      const customParseDateSpy: (input?: string) => Date = jest
        .fn()
        .mockReturnValue(DEFAULT_END_VALUE);
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          customParseDate={customParseDateSpy}
        />
      );
      const endInput = getByTestId('end');

      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('formatDate()', () => {
    it('uses custom formatDate method if provided', () => {
      const FORMATTED_DATE = 'test';
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          formatDate={() => FORMATTED_DATE}
        />
      );
      const startInput = getByTestId('start');

      expect(startInput).toHaveValue(FORMATTED_DATE);
    });
  });
});
