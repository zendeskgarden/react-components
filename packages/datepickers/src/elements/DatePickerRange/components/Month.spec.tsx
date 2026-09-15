/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  fireEvent,
  getAllByTestId as globalGetAllByTestId,
  within,
  renderRtl
} from 'garden-test-utils';
import { KEYS } from '@zendeskgarden/container-utilities';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { ClearableInput } from '@zendeskgarden/react-forms';
import { DatePickerRange } from '../DatePickerRange';
import { IDatePickerRangeProps } from '../../../types';

const DEFAULT_START_VALUE = new Date(2019, 1, 5);
const DEFAULT_END_VALUE = new Date(2019, 2, 5);

const Example = (props: IDatePickerRangeProps) => (
  <DatePickerRange {...props}>
    <DatePickerRange.Start>
      <input data-test-id="start" />
    </DatePickerRange.Start>
    <DatePickerRange.End>
      <input data-test-id="end" />
    </DatePickerRange.End>
    <DatePickerRange.Calendar />
  </DatePickerRange>
);

describe('Month', () => {
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

    it('renders a visually-hidden date instead of a disabled button in empty previous-month cells', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const emptyDay = firstMonthDays[0];

      expect(emptyDay.tagName).not.toBe('BUTTON');
      expect(emptyDay).toHaveTextContent('27, January 2019');
      expect(emptyDay).toHaveAttribute('data-test-hidden', 'true');
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

    it('marks the committed start and end values with aria-pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      expect(firstMonthDays[9]).toHaveAttribute('aria-pressed', 'true');
      expect(firstMonthDays[8]).toHaveAttribute('aria-pressed', 'false');

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      expect(secondMonthDays[9]).toHaveAttribute('aria-pressed', 'true');
    });

    it('never renders aria-selected in the grid', () => {
      const { container } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(container.querySelector('[aria-selected]')).toBeNull();
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
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly if both values are provided in RTL mode', () => {
      const { getAllByTestId } = renderRtl(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly when moused', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly when hovering the day cell instead of its button', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');
      const hoveredButton = globalGetAllByTestId(calendarWrappers[1], 'day')[9];

      await user.hover(hoveredButton.closest('[data-test-id="day-cell"]') as HTMLElement);

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('highlights backward from a hovered day cell to the end value when only the end value is set', async () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');
      const hoveredButton = globalGetAllByTestId(calendarWrappers[0], 'day')[6];

      await user.hover(hoveredButton.closest('[data-test-id="day-cell"]') as HTMLElement);

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 1) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 1) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('highlights backward from a hovered day to the end value when only the end value is set', async () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[0], 'day')[6]);

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 1) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 1) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('shows no highlight when hovering a day after the end value, with no start value set', async () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[14]);

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('shows no tint at all for a hovered end candidate on the first day of its row', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const hoverButton = globalGetAllByTestId(calendarWrappers[0], 'day')[14]; // Feb 10, 2019 - a Sunday
      const hoverCell = hoverButton.closest('[data-test-id="day-cell"]') as HTMLElement;

      await user.hover(hoverCell);

      expect(hoverCell).toHaveAttribute('data-test-end', 'true');
      expect(hoverCell).not.toHaveStyleRule('background-image');
      expect(hoverCell).not.toHaveStyleRule('background-color', 'rgba(31,115,183,0.08)');
    });

    it('shows no tint at all for a hovered start candidate on the last day of its row', async () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const hoverButton = globalGetAllByTestId(calendarWrappers[0], 'day')[13]; // Feb 9, 2019 - a Saturday
      const hoverCell = hoverButton.closest('[data-test-id="day-cell"]') as HTMLElement;

      await user.hover(hoverCell);

      expect(hoverCell).toHaveAttribute('data-test-start', 'true');
      expect(hoverCell).not.toHaveStyleRule('background-image');
      expect(hoverCell).not.toHaveStyleRule('background-color', 'rgba(31,115,183,0.08)');
    });

    it('removes highlighted days when moused away', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);
      await user.unhover(getAllByTestId('calendar-internal-wrapper')[1]);

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('clears the highlight when moving from a hovered start candidate onto the committed end value', () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');
      const endButton = globalGetAllByTestId(calendarWrappers[1], 'day')[9]; // March 5, 2019
      const endCell = endButton.closest('[data-test-id="day-cell"]') as HTMLElement;
      const candidateCell = globalGetAllByTestId(calendarWrappers[1], 'day')[6] // March 2, 2019
        .closest('[data-test-id="day-cell"]') as HTMLElement;

      expect(endButton).toHaveAttribute('aria-pressed', 'true');

      // fireEvent.mouseEnter is used instead of user.hover so no synthetic
      // leave events are dispatched on ancestors along the way - matching
      // moving the mouse directly from one cell to an adjacent one.
      fireEvent.mouseEnter(candidateCell);
      fireEvent.mouseEnter(endCell);

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('clears the highlight when moving from a hovered end candidate onto the committed start value', () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');
      const startButton = globalGetAllByTestId(calendarWrappers[0], 'day')[9]; // Feb 5, 2019
      const startCell = startButton.closest('[data-test-id="day-cell"]') as HTMLElement;
      const candidateCell = globalGetAllByTestId(calendarWrappers[0], 'day')[12] // Feb 8, 2019
        .closest('[data-test-id="day-cell"]') as HTMLElement;

      expect(startButton).toHaveAttribute('aria-pressed', 'true');

      fireEvent.mouseEnter(candidateCell);
      fireEvent.mouseEnter(startCell);

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
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
  });

  describe('Calendar grid structure', () => {
    it('renders each month as a table with th day-labels and td days', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-internal-wrapper');

      calendarWrappers.forEach(wrapper => {
        expect(wrapper.tagName).toBe('TABLE');

        const dayLabels = globalGetAllByTestId(wrapper, 'day-label');
        const days = globalGetAllByTestId(wrapper, 'day');

        dayLabels.forEach(label => {
          expect(label.closest('th')).not.toBeNull();
        });
        days.forEach(day => {
          expect(day.closest('td')).not.toBeNull();
        });
      });
    });

    it('groups day-label cells and each week of days into table rows', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const wrapper = getAllByTestId('calendar-internal-wrapper')[0];
      const days = globalGetAllByTestId(wrapper, 'day');
      const rows = within(wrapper).getAllByRole('row');
      const headerRow = rows.find(row => within(row).queryAllByRole('columnheader').length > 0);
      const weekRows = rows.filter(row => row !== headerRow);

      expect(headerRow).toBeDefined();
      expect(within(headerRow!).getAllByRole('columnheader')).toHaveLength(7);
      expect(weekRows).toHaveLength(days.length / 7);
      weekRows.forEach(row => {
        expect(within(row).getAllByRole('gridcell')).toHaveLength(7);
      });
    });
  });

  describe('Calendar grid roles', () => {
    it('gives each month table a grid role labelled by its own month/year heading', () => {
      const { getAllByTestId, getAllByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const grids = getAllByRole('grid');

      expect(grids).toHaveLength(2);

      calendarWrappers.forEach((wrapper, index) => {
        const heading = within(wrapper).getByRole('heading', { level: 2 });

        expect(grids[index]).toHaveAttribute('aria-labelledby', heading.id);
      });
    });

    it('hides the abbreviated day-label from screen readers in favor of a visually-hidden full weekday name', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const wrapper = getAllByTestId('calendar-wrapper')[0];
      const columnHeaders = within(wrapper).getAllByRole('columnheader');
      const dayLabels = globalGetAllByTestId(wrapper, 'day-label');
      const fullDayLabels = globalGetAllByTestId(wrapper, 'day-label-full');

      expect(columnHeaders[0]).not.toHaveAttribute('abbr');
      expect(dayLabels[0]).toHaveTextContent('Sun');
      expect(dayLabels[0]).toHaveAttribute('aria-hidden', 'true');
      expect(fullDayLabels[0]).toHaveTextContent('Sunday');
      expect(fullDayLabels[0]).toHaveAttribute('hidden');
    });
  });

  describe('In-range description', () => {
    it('renders a visually-hidden span immediately after each highlighted day button, describing only that button', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      expect(within(firstMonthCells[0]).queryByTestId('in-range-description')).toBeNull();
      expect(within(secondMonthCells[5]).queryByTestId('in-range-description')).toBeNull();

      const startButton = within(firstMonthCells[4]).getByTestId('day');
      const startDescription = within(firstMonthCells[4]).getByTestId('in-range-description');

      expect(startDescription).toHaveAttribute('hidden');
      expect(startButton).toHaveAttribute('aria-describedby', startDescription.id);
      expect(startButton.nextElementSibling).toBe(startDescription);

      const endButton = within(secondMonthCells[4]).getByTestId('day');
      const endDescription = within(secondMonthCells[4]).getByTestId('in-range-description');

      expect(endButton).toHaveAttribute('aria-describedby', endDescription.id);
      expect(endDescription.id).not.toBe(startDescription.id);
    });

    it('labels the range boundaries as "start of range"/"end of range", and interior days as "included in range"', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      const startDescription = within(firstMonthCells[4]).getByTestId('in-range-description');
      const interiorDescription = within(firstMonthCells[5]).getByTestId('in-range-description');
      const endDescription = within(secondMonthCells[4]).getByTestId('in-range-description');

      expect(startDescription).toHaveTextContent('(start of range)');
      expect(interiorDescription).toHaveTextContent('(included in range)');
      expect(endDescription).toHaveTextContent('(end of range)');
    });

    it('accepts custom startOfRangeLabel, endOfRangeLabel and inRangeLabel', () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          startOfRangeLabel="début de la plage"
          endOfRangeLabel="fin de la plage"
          inRangeLabel="dans la plage"
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      expect(within(firstMonthCells[4]).getByTestId('in-range-description')).toHaveTextContent(
        'début de la plage'
      );
      expect(within(firstMonthCells[5]).getByTestId('in-range-description')).toHaveTextContent(
        'dans la plage'
      );
      expect(within(secondMonthCells[4]).getByTestId('in-range-description')).toHaveTextContent(
        'fin de la plage'
      );
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

    it('advances from start to end again after clearing both fields via ClearableInput', async () => {
      const ControlledExample = ({
        startValue: initialStartValue,
        endValue: initialEndValue,
        ...props
      }: IDatePickerRangeProps) => {
        const [startValue, setStartValue] = useState(initialStartValue);
        const [endValue, setEndValue] = useState(initialEndValue);

        return (
          <DatePickerRange
            {...props}
            startValue={startValue}
            endValue={endValue}
            onChange={value => {
              setStartValue(value.startValue);
              setEndValue(value.endValue);
            }}
            onValueSettled={result => {
              if (result.valid) {
                if (result.field === 'start') {
                  setStartValue(result.date);
                } else {
                  setEndValue(result.date);
                }
              }
            }}
          >
            <DatePickerRange.Start>
              <ClearableInput data-test-id="start" />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <ClearableInput data-test-id="end" />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
        );
      };

      const { getAllByTestId, getByTestId, getAllByRole } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const clearButtons = getAllByRole('button', { name: 'Clear' });

      await user.click(clearButtons[1]);
      await user.click(clearButtons[0]);

      await user.click(globalGetAllByTestId(calendarWrappers[0], 'day')[6]);
      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(getByTestId('start')).toHaveValue('February 2, 2019');
      expect(getByTestId('end')).toHaveValue('March 2, 2019');
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

    it('does not select a disabled date via keyboard, but keeps it focusable', async () => {
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
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day').filter(
        day => day.tagName === 'BUTTON'
      );
      const disabledDay = firstMonthDays[0];

      expect(disabledDay).toHaveAttribute('data-test-disabled', 'true');
      expect(disabledDay).toHaveAttribute('aria-disabled', 'true');
      expect(disabledDay).not.toHaveAttribute('disabled');

      disabledDay.focus();

      expect(disabledDay).toHaveFocus();

      await user.keyboard('{Enter}');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('selects start value via keyboard when no values are selected', async () => {
      const { getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const day = globalGetAllByTestId(calendarWrappers[1], 'day')[6];

      day.focus();
      await user.keyboard('{Enter}');

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 2),
        endValue: undefined
      });
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

  describe('Keyboard navigation', () => {
    const getDayButtons = (wrapper: HTMLElement) =>
      within(wrapper)
        .getAllByRole('button')
        .filter(button => button.getAttribute('data-test-id') === 'day');

    it('gives exactly one day button tabindex="0" across both months, matching the start value', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);
      const secondMonthDays = getDayButtons(calendarWrappers[1]);
      const focusedDay = firstMonthDays[4];

      expect(focusedDay).toHaveAttribute('tabindex', '0');

      [...firstMonthDays, ...secondMonthDays]
        .filter(day => day !== focusedDay)
        .forEach(day => {
          expect(day).toHaveAttribute('tabindex', '-1');
        });
    });

    it('moves focus to the next day when ArrowRight is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.RIGHT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[5]).toHaveFocus();
      expect(days[5]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous day when ArrowLeft is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.LEFT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[3]).toHaveFocus();
      expect(days[3]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous day when ArrowRight is pressed, in RTL', () => {
      const { getAllByTestId } = renderRtl(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.RIGHT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[3]).toHaveFocus();
      expect(days[3]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the next day when ArrowLeft is pressed, in RTL', () => {
      const { getAllByTestId } = renderRtl(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.LEFT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[5]).toHaveFocus();
      expect(days[5]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus one week forward when ArrowDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.DOWN });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[11]).toHaveFocus();
    });

    it('moves focus one week back when ArrowUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[11], { key: KEYS.UP });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[4]).toHaveFocus();
    });

    it('moves focus into the second month grid when ArrowRight crosses the month boundary', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);
      const lastDayOfFebruary = firstMonthDays[firstMonthDays.length - 1];

      fireEvent.keyDown(lastDayOfFebruary, { key: KEYS.RIGHT });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);

      expect(secondMonthDays[0]).toHaveFocus();
      expect(secondMonthDays[0]).toHaveTextContent('1');
    });

    it('moves focus to the start of the week when Home is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.HOME });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[2]).toHaveFocus();
      expect(days[2]).toHaveTextContent('3');
    });

    it('moves focus to the end of the week when End is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.END });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[8]).toHaveFocus();
      expect(days[8]).toHaveTextContent('9');
    });

    it('moves focus to the same day next month, into the second grid, when PageDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);

      expect(secondMonthDays[4]).toHaveFocus();
      expect(secondMonthDays[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day previous month, shifting the window, when PageUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_UP });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('January 2019');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('February 2019');

      const days = getDayButtons(wrappers[0]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day next year when Shift+PageDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN, shiftKey: true });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('January 2020');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('February 2020');

      const days = getDayButtons(wrappers[1]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day previous year when Shift+PageUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_UP, shiftKey: true });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('February 2018');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('March 2018');

      const days = getDayButtons(wrappers[0]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('clamps to the last day of the month when PageDown lands on a day that does not exist', () => {
      mockDate.set(new Date(2019, 0, 31));

      const { getAllByTestId } = render(<Example startValue={new Date(2019, 0, 31)} />);

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);
      const selectedDay = firstMonthDays.find(
        day => day.getAttribute('data-test-selected') === 'true'
      )!;

      fireEvent.keyDown(selectedDay, { key: KEYS.PAGE_DOWN });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);
      const focusedDay = secondMonthDays.find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('28');
    });

    it('highlights the candidate range as focus moves via keyboard, matching mouse hover', () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN });

      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }
      }
    });

    it('highlights backward from the focused day to the end value when only the end value is set, matching mouse hover', () => {
      const { getAllByTestId } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.LEFT });

      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 3) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 3) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }
      }
    });
  });

  describe('Day navigation keyboard event bubbling', () => {
    const getDayButtons = (wrapper: HTMLElement) =>
      within(wrapper)
        .getAllByRole('button')
        .filter(button => button.getAttribute('data-test-id') === 'day');

    it.each([
      KEYS.RIGHT,
      KEYS.LEFT,
      KEYS.UP,
      KEYS.DOWN,
      KEYS.HOME,
      KEYS.END,
      KEYS.PAGE_UP,
      KEYS.PAGE_DOWN
    ])('does not let "%s" bubble past the day grid to an ancestor', key => {
      const ancestorKeyDownSpy = jest.fn();
      const { getAllByTestId } = render(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={ancestorKeyDownSpy}>
          <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
        </div>
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key });

      expect(ancestorKeyDownSpy).not.toHaveBeenCalled();
    });
  });
});
