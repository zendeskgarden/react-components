/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from 'garden-test-utils';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

const CHOOSE_DATE = 'Choose date';
const DEFAULT_DATE = new Date(2019, 1, 5);

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

describe('Input', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('displays provided value', () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

    expect(getByTestId('input')).toHaveValue('February 5, 2019');
  });

  it('displays empty string if no value provided', () => {
    const { getByTestId } = render(<Example onChange={onChangeSpy} />);

    expect(getByTestId('input')).toHaveValue('');
  });

  it('opens the calendar when the input is clicked, without moving focus into the grid', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(input).toHaveFocus();
  });

  describe('when the input is clicked while it already has focus and the calendar is closed', () => {
    it.each([
      {
        label: 'after tabbing into it',
        focus: async () => {
          await user.tab();
        }
      },
      {
        label: 'after tabbing into it and typing',
        focus: async () => {
          await user.tab();
          await user.keyboard('2/10');
        }
      },
      {
        label: 'after closing the calendar with Escape',
        focus: async (input: HTMLElement) => {
          await user.click(input);
          await user.keyboard('{Escape}');
        }
      },
      {
        label: 'after closing the calendar with Enter',
        focus: async (input: HTMLElement) => {
          await user.click(input);
          await user.keyboard('{Enter}');
        }
      }
    ])('opens the calendar $label', async ({ focus }) => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await focus(input);

      expect(input).toHaveFocus();
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');

      await user.click(input);

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(input).toHaveFocus();
    });
  });

  it('closes the calendar when the input is clicked while it is open, keeping focus in the input', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(input).toHaveFocus();
  });

  it('does not open the calendar when the input receives keyboard focus', async () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    await user.tab();

    expect(getByTestId('input')).toHaveFocus();
    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('does not open the datepicker on Up Arrow', () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    fireEvent.keyDown(input, { key: KEYS.UP });

    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('typing into the input does not open the calendar if it is not already open', () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    input.focus();
    fireEvent.change(input, { target: { value: '1/4/2019' } });

    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('does not revert in-progress typed text on Enter/Escape while the calendar is closed', () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'Jan' } });
    fireEvent.keyDown(input, { key: KEYS.ENTER });

    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(input).toHaveValue('Jan');

    fireEvent.change(input, { target: { value: 'Jan 4' } });
    fireEvent.keyDown(input, { key: KEYS.ESCAPE });

    expect(input).toHaveValue('Jan 4');
  });

  it('opens the calendar when the associated label is clicked, without moving focus into the grid', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

    await user.click(getByTestId('label'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(getByTestId('input')).toHaveFocus();
  });

  it('leaves datepicker open if calendar is moused down', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    await user.click(getByRole('button', { name: CHOOSE_DATE }));
    fireEvent.click(getByTestId('calendar-wrapper'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
  });

  it('calls onChange with provided date if manually added in short format', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, '1/4/2019');

    expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
  });

  it('calls onChange with provided date if manually added in medium format', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, 'Jan 4, 2019');

    expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
  });

  it('calls onChange with provided date if manually added in long format', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, 'January 4th, 2019');

    expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
  });

  it('does not call onChange with provided date if invalid', () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'invalid date' } });

    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('updates input value when controlled value is changed', () => {
    const { getByTestId, rerender } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    expect(getByTestId('input')).toHaveValue('February 5, 2019');

    rerender(<Example value={new Date(2019, 1, 6)} onChange={onChangeSpy} />);

    expect(getByTestId('input')).toHaveValue('February 6, 2019');
  });

  it('preserves the typed format after the controlled value round-trips through onChange', async () => {
    const ControlledExample = () => {
      const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

      return <Example value={value} onChange={setValue} />;
    };
    const { getByTestId } = render(<ControlledExample />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, '1/4/2019');

    expect(input).toHaveValue('1/4/2019');
  });

  it('reformats to the canonical format if the controlled value changes to a different date', async () => {
    const ControlledExample = () => {
      const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

      return (
        <>
          <Example value={value} onChange={setValue} />
          <button
            type="button"
            data-test-id="set-externally"
            onClick={() => setValue(new Date(2019, 1, 6))}
          >
            Fill date
          </button>
        </>
      );
    };
    const { getByTestId } = render(<ControlledExample />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, '1/4/2019');
    await user.click(getByTestId('set-externally'));

    expect(input).toHaveValue('February 6, 2019');
  });

  it('preserves the typed format after closing the calendar without selecting a different day', async () => {
    const ControlledExample = () => {
      const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

      return <Example value={value} onChange={setValue} />;
    };
    const { getByRole, getByTestId } = render(<ControlledExample />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, '1/4/2019');
    await user.click(getByRole('button', { name: CHOOSE_DATE }));
    fireEvent.keyDown(input, { key: KEYS.ESCAPE });

    expect(input).toHaveValue('1/4/2019');
  });

  it('preserves the typed format after closing the calendar by clicking outside', async () => {
    const ControlledExample = () => {
      const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

      return <Example value={value} onChange={setValue} />;
    };
    const { getByRole, getByTestId } = render(<ControlledExample />);
    const input = getByTestId('input');

    await user.clear(input);
    await user.type(input, '1/4/2019');
    await user.click(getByRole('button', { name: CHOOSE_DATE }));

    await user.click(getByTestId('outside'));

    expect(input).toHaveValue('1/4/2019');
  });

  it('does not discard unparseable typed text when closing the calendar by clicking outside', async () => {
    const { getByRole, getByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'invalid date' } });
    await user.click(getByRole('button', { name: CHOOSE_DATE }));

    await user.click(getByTestId('outside'));

    expect(input).toHaveValue('invalid date');
  });

  describe('Combobox attributes', () => {
    it('exposes the input as a combobox with haspopup, autocomplete, and controls attributes', () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByRole('combobox', { expanded: false });
      const menu = getByTestId('datepicker-menu');

      expect(input).toHaveAttribute('aria-haspopup', 'dialog');
      expect(input).toHaveAttribute('aria-autocomplete', 'none');
      expect(input).toHaveAttribute('aria-controls', menu.id);
    });

    it('sets a native `autocomplete="off"` attribute by default', () => {
      const { getByRole } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByRole('combobox', { expanded: false });

      expect(input).toHaveAttribute('autocomplete', 'off');
    });

    it('allows the native `autocomplete` attribute to be overridden', () => {
      const { getByTestId } = render(
        <DatePicker value={DEFAULT_DATE} onChange={onChangeSpy}>
          <input data-test-id="input" autoComplete="username" />
        </DatePicker>
      );

      expect(getByTestId('input')).toHaveAttribute('autocomplete', 'username');
    });

    it('sets aria-expanded to true when the calendar opens', async () => {
      const { getByRole } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      expect(getByRole('combobox', { expanded: true })).toBeInTheDocument();
    });
  });

  describe('Opening the calendar from the input', () => {
    it('opens on Down Arrow and moves focus onto the selected day', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it('opens on Alt+Down Arrow and moves focus onto the selected day', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN, altKey: true });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it("moves focus onto today's date on Down Arrow when no value is selected", () => {
      const { getByTestId, getAllByTestId } = render(<Example onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });

      const days = getAllByTestId('day');
      const today = days.find(day => day.getAttribute('data-test-today') === 'true');

      expect(today).toHaveFocus();
    });

    it('does not close or error on Down Arrow while already open', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });
      fireEvent.keyDown(input, { key: KEYS.DOWN });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('Enter in the input', () => {
    it('closes an open calendar, keeping focus in the input', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

      await user.keyboard('{Enter}');

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
      expect(input).toHaveFocus();
    });

    it('settles the typed text when it closes the calendar', async () => {
      const onValueSettledSpy = jest.fn();
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.clear(input);
      await user.type(input, 'garbage', { skipClick: true });
      onValueSettledSpy.mockClear();
      await user.keyboard('{Enter}');

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
      expect(onValueSettledSpy).toHaveBeenCalledWith(
        expect.objectContaining({ inputValue: 'garbage', valid: false, reason: 'malformed' })
      );
      expect(input).toHaveValue('garbage');
    });

    it('does not prevent the default action, so an enclosing form can still submit', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);

      expect(fireEvent.keyDown(input, { key: KEYS.ENTER })).toBe(true);
    });

    it('does not settle while the calendar is closed', () => {
      const onValueSettledSpy = jest.fn();
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'garbage' } });
      onValueSettledSpy.mockClear();
      fireEvent.keyDown(input, { key: KEYS.ENTER });

      expect(onValueSettledSpy).not.toHaveBeenCalled();
    });
  });

  describe('customParseDate()', () => {
    it('uses customParseDate to determine date validitiy if provided', async () => {
      const MOCK_DATE = new Date(2019, 0, 1);
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(MOCK_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith(MOCK_DATE);
    });

    it('does not call onChange if parsed date is the current value', async () => {
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(DEFAULT_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('formatDate()', () => {
    it('uses custom formatDate method if provided', () => {
      const FORMATTED_DATE = 'test';
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} formatDate={() => FORMATTED_DATE} />
      );
      const input = getByTestId('input');

      expect(input).toHaveValue(FORMATTED_DATE);
    });
  });
});
