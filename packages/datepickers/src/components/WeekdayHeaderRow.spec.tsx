/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { WeekdayHeaderRow } from './WeekdayHeaderRow';

const START_DATE = new Date(2019, 0, 27);

describe('WeekdayHeaderRow', () => {
  it('renders one abbreviated weekday label per day of the week, starting from startDate', () => {
    const { getAllByTestId } = render(
      <table>
        <tbody>
          <WeekdayHeaderRow startDate={START_DATE} locale="en-US" />
        </tbody>
      </table>
    );

    const labels = getAllByTestId('day-label').map(label => label.textContent);

    expect(labels).toStrictEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });

  it('hides the abbreviated label from assistive technology, pairing it with a visually-hidden full name', () => {
    const { getAllByTestId } = render(
      <table>
        <tbody>
          <WeekdayHeaderRow startDate={START_DATE} locale="en-US" />
        </tbody>
      </table>
    );

    const abbreviated = getAllByTestId('day-label')[0];
    const full = getAllByTestId('day-label-full')[0];

    expect(abbreviated).toHaveAttribute('aria-hidden', 'true');
    expect(full).toHaveTextContent('Sunday');
  });
});
