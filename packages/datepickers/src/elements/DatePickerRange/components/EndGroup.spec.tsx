/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { DatePickerRange } from '../DatePickerRange';

jest.useFakeTimers();

describe('DatePickerRange.EndGroup', () => {
  const user = userEvent.setup({ delay: null });

  it('focuses the end input when its own wrapper is clicked, not just the input itself', () => {
    const { container, getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose end date" />
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    const group = container.querySelector("[data-garden-id='forms.input_group']");

    fireEvent.click(group!);

    expect(getByTestId('end')).toHaveFocus();
  });

  it('also opens the dialog when clicked, if one is composed', async () => {
    const { getByRole, getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose end date" />
        </DatePickerRange.EndGroup>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    await user.click(getByTestId('end-group'));

    expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');
  });

  it('zeroes the leading corner radius when isEdgeToEdge is set, since it always abuts the preceding StartGroup', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup isEdgeToEdge data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(getByTestId('end-group')).toHaveStyleRule('border-start-start-radius', '0', {
      modifier: '&&'
    });
    expect(getByTestId('end-group')).toHaveStyleRule('border-end-start-radius', '0', {
      modifier: '&&'
    });
  });

  it('overlaps the preceding StartGroup by one border-width when isEdgeToEdge is set, so the two share a single visible border', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup isEdgeToEdge data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(getByTestId('end-group')).toHaveStyleRule(
      'margin-inline-start',
      `-${DEFAULT_THEME.borderWidths.sm}`,
      { modifier: '&&' }
    );
  });

  it('raises z-index on hover when isEdgeToEdge is set, so its border can paint over the abutting sibling', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup isEdgeToEdge data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(getByTestId('end-group')).toHaveStyleRule('z-index', '1', { modifier: '&&:hover' });
  });

  it('raises z-index above a hovered neighbor on focus-within when isEdgeToEdge is set, so a focused border is never re-covered by a merely-hovered one', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup isEdgeToEdge data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(getByTestId('end-group')).toHaveStyleRule('z-index', '2', {
      modifier: '&&:focus-within'
    });
  });

  it('forwards a ref to its own DOM node', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup ref={ref} data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(ref.current).toBe(getByTestId('end-group'));
  });

  it('does not apply any join overrides when isEdgeToEdge is not set', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    expect(getByTestId('end-group')).not.toHaveStyleRule('border-start-start-radius', '0');
    expect(getByTestId('end-group')).not.toHaveStyleRule('border-end-start-radius', '0');
    expect(getByTestId('end-group')).not.toHaveStyleRule('margin-inline-start', expect.any(String));
    expect(getByTestId('end-group')).not.toHaveStyleRule('z-index', expect.any(String), {
      modifier: '&&:hover'
    });
    expect(getByTestId('end-group')).not.toHaveStyleRule('z-index', expect.any(String), {
      modifier: '&&:focus-within'
    });
  });
});
