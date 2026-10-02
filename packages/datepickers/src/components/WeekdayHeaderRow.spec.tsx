/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, within } from 'garden-test-utils';
import { WeekdayHeaderRow } from './WeekdayHeaderRow';

const START_DATE = new Date(2019, 0, 27);

/** The visible, abbreviated label in a weekday column header (the full name is visually hidden). */
const getAbbreviatedDayLabel = (header: HTMLElement) =>
  within(header).getByText(content => content.length > 0, { ignore: 'script, style, [hidden]' });

describe('WeekdayHeaderRow', () => {
  it('renders one abbreviated weekday label per day of the week, starting from startDate', () => {
    const { getAllByRole } = render(
      <table>
        <tbody>
          <WeekdayHeaderRow startDate={START_DATE} locale="en-US" />
        </tbody>
      </table>
    );

    const headers = getAllByRole('columnheader');

    expect(headers.map(header => getAbbreviatedDayLabel(header).textContent)).toStrictEqual([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]);
  });

  it('hides the abbreviated label from assistive technology, pairing it with a visually-hidden full name', () => {
    const { getAllByRole } = render(
      <table>
        <tbody>
          <WeekdayHeaderRow startDate={START_DATE} locale="en-US" />
        </tbody>
      </table>
    );

    const header = getAllByRole('columnheader')[0];

    expect(getAbbreviatedDayLabel(header)).toHaveTextContent('Sun');
    expect(getAbbreviatedDayLabel(header)).toHaveAttribute('aria-hidden', 'true');
    expect(within(header).getByText('Sunday')).toHaveAttribute('hidden');
  });
});
