/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { RenderResult, render, fireEvent, waitFor } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { ClearableInput, Field, Input, MediaInput } from '@zendeskgarden/react-forms';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { DatePicker } from './DatePicker';
import { IDatePickerProps } from '../../types';

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

const ClearableExample = (props: Omit<IDatePickerProps, 'children'>) => (
  <>
    <DatePicker {...props}>
      <ClearableInput data-test-id="input" />
    </DatePicker>
    <button data-test-id="outside" type="button">
      Outside
    </button>
  </>
);

jest.useFakeTimers();

describe('DatePicker', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Calendar selection', () => {
    it('updates input value when controlled value is updated', () => {
      const { getByTestId, rerender } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      expect(input).toHaveValue('February 5, 2019');

      rerender(<Example value={addDays(DEFAULT_DATE, 1)} onChange={onChangeSpy} />);

      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(input).toHaveValue('February 6, 2019');
    });

    it('reformats the input when only the locale prop changes', () => {
      const { getByTestId, rerender } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} locale="en-US" />
      );
      const input = getByTestId('input');

      expect(input).toHaveValue('February 5, 2019');

      rerender(<Example value={DEFAULT_DATE} onChange={onChangeSpy} locale="fr-FR" />);

      expect(input).toHaveValue('5 février 2019');
    });

    it('uses custom formatDate method when a date is selected from the calendar', async () => {
      const FORMATTED_DATE = 'test';
      const { getAllByRole, getByRole, getByTestId } = render(
        <Example onChange={onChangeSpy} formatDate={() => FORMATTED_DATE} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));
      fireEvent.click(getAllByRole('gridcell')[1]);

      expect(getByTestId('input')).toHaveValue(FORMATTED_DATE);
    });

    it('does not warn about updating a component while rendering another when controlled', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());

      const Controlled = () => {
        const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

        return (
          <DatePicker value={value} onChange={setValue}>
            <input data-test-id="input" />
          </DatePicker>
        );
      };

      const { getAllByRole, getByTestId } = render(<Controlled />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      fireEvent.click(getAllByRole('gridcell')[1]);

      const hasRenderPhaseUpdateWarning = consoleErrorSpy.mock.calls.some(
        args => typeof args[0] === 'string' && args[0].includes('Cannot update a component')
      );

      expect(hasRenderPhaseUpdateWarning).toBe(false);

      consoleErrorSpy.mockRestore();
    });

    it('does not call onChange when a typed date falls outside minValue/maxValue', async () => {
      const { getByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('onValueSettled', () => {
    let onValueSettledSpy: (result: { date?: Date; inputValue: string; valid: boolean }) => void;

    beforeEach(() => {
      onValueSettledSpy = jest.fn();
    });

    it('reports a valid date when blurring after typing a parseable date', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('reports invalid when blurring after typing unparseable text', () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    it('reports valid when blurring an empty, non-required field', () => {
      const { getByTestId } = render(
        <Example onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('reports invalid when blurring an empty, required field', () => {
      const RequiredExample = (props: Omit<IDatePickerProps, 'children'>) => (
        <DatePicker {...props}>
          <input data-test-id="input" required />
        </DatePicker>
      );
      const { getByTestId } = render(
        <RequiredExample onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: false,
        reason: 'required'
      });
    });

    it('reports a valid date when a day is selected from the calendar', async () => {
      const { getAllByRole, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));
      fireEvent.click(getAllByRole('gridcell')[1]);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 28),
        inputValue: 'January 28, 2019',
        valid: true
      });
    });

    it('does not report a stale value when a day is selected from the calendar', async () => {
      const { getAllByRole, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));
      fireEvent.click(getAllByRole('gridcell')[1]);

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
    });

    it('reports invalid when blurring after typing a date outside minValue/maxValue', () => {
      const { getByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: '1/4/2019' } });
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '1/4/2019',
        valid: false,
        reason: 'out-of-range'
      });
    });

    it('does not move the calendar view when blurring after typing a date outside minValue/maxValue', async () => {
      const ControlledExample = () => {
        const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

        return (
          <Example
            value={value}
            onChange={setValue}
            minValue={subDays(DEFAULT_DATE, 2)}
            maxValue={addDays(DEFAULT_DATE, 2)}
          />
        );
      };
      const { getByRole, getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      fireEvent.change(input, { target: { value: '1/1/2020' } });
      fireEvent.blur(input);

      expect(getByRole('heading', { hidden: true })).toHaveTextContent('February 2019');
    });

    it('reports invalid when closing the calendar by clicking outside after typing unparseable text', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    it('reports a valid date when closing the calendar by clicking outside after typing a parseable date', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('does not affect the existing onChange behavior', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('settles immediately when the input is manually cleared, without waiting for blur', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('settles immediately when a ClearableInput clear button is clicked, without waiting for blur', async () => {
      const { getByRole } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      await user.click(getByRole('button', { name: 'Clear' }));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('does not settle when focus moves to another focusable element inside the input group, like a ClearableInput clear button', async () => {
      const { getByTestId } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.tab();

      expect(onValueSettledSpy).not.toHaveBeenCalled();
    });

    it('settles once focus actually leaves the input group, after passing through a clear button', async () => {
      const { getByTestId } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');
      await user.tab();
      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    describe('when the already-selected day is picked after an invalid entry', () => {
      const pickSelectedDayAfterInvalidEntry = async (keepTypedInput?: boolean) => {
        const result = render(
          <Example
            value={DEFAULT_DATE}
            keepTypedInput={keepTypedInput}
            onChange={onChangeSpy}
            onValueSettled={onValueSettledSpy}
          />
        );
        const input = result.getByTestId('input');

        fireEvent.change(input, { target: { value: 'garbage' } });
        fireEvent.blur(input);

        await user.click(result.getByRole('button', { name: CHOOSE_DATE }));
        await user.click(result.container.querySelector('[data-test-today="true"]')!);

        return result;
      };

      it.each([true, false])(
        'reports the selection as valid without calling onChange, with keepTypedInput=%s',
        async keepTypedInput => {
          await pickSelectedDayAfterInvalidEntry(keepTypedInput);

          expect(onValueSettledSpy).toHaveBeenLastCalledWith({
            date: DEFAULT_DATE,
            inputValue: 'February 5, 2019',
            valid: true
          });
          expect(onChangeSpy).not.toHaveBeenCalled();
        }
      );

      it('shows the day as selected when the calendar reopens', async () => {
        const { getByRole, container } = await pickSelectedDayAfterInvalidEntry();

        await user.click(getByRole('button', { name: CHOOSE_DATE }));

        expect(container.querySelector('[data-test-today="true"]')).toHaveAttribute(
          'aria-selected',
          'true'
        );
      });
    });
  });

  describe('wrapper click', () => {
    it('focuses the input when the outer wrapper itself is clicked, not just the input', () => {
      const { container, getByTestId } = render(<Example onChange={onChangeSpy} />);

      const outerGroup = container.querySelector("[data-garden-id='forms.input_group']");

      fireEvent.click(outerGroup!);

      expect(getByTestId('input')).toHaveFocus();
    });
  });

  describe('group semantics within a labelled Field', () => {
    const renderInField = (child: React.ReactElement) =>
      render(
        <Field>
          <Field.Label>Date</Field.Label>
          <DatePicker value={DEFAULT_DATE}>{child}</DatePicker>
        </Field>
      );

    it("keeps a single labelled group around a ClearableInput child and the calendar button, dropping the ClearableInput's own", () => {
      const { getByRole, getAllByRole, getByTestId } = renderInField(
        <ClearableInput data-test-id="input" />
      );
      const groups = getAllByRole('group');

      expect(groups).toHaveLength(1);
      expect(groups[0]).toContainElement(getByTestId('input'));
      expect(groups[0]).toContainElement(getByRole('button', { name: CHOOSE_DATE }));
      expect(groups[0]).toHaveAccessibleName('Date');
    });

    it("keeps a consumer's own ClearableInput wrapperProps, including an explicit role", () => {
      const { getByTestId } = renderInField(
        <ClearableInput
          data-test-id="input"
          wrapperProps={{ role: 'group', 'aria-label': 'Custom', 'data-test-id': 'inner' } as any}
        />
      );
      const inner = getByTestId('inner');

      expect(inner).toHaveAttribute('role', 'group');
      expect(inner).toHaveAttribute('aria-label', 'Custom');
    });

    it('keeps a single labelled group around a plain Input child', () => {
      const { getAllByRole } = renderInField(<Input data-test-id="input" />);

      expect(getAllByRole('group')).toHaveLength(1);
    });
  });

  describe('validation', () => {
    const errorColor = getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' });

    it("reflects a ClearableInput child's validation on the outer widget group", () => {
      const { container } = render(
        <DatePicker value={DEFAULT_DATE}>
          <ClearableInput data-test-id="input" validation="error" />
        </DatePicker>
      );

      const outerGroup = container.querySelector("[data-garden-id='forms.input_group']");

      expect(outerGroup).toHaveStyleRule('border-color', errorColor);
    });

    it("reflects a plain Input child's validation on the outer widget group", () => {
      const { container } = render(
        <DatePicker value={DEFAULT_DATE}>
          <Input data-test-id="input" validation="error" />
        </DatePicker>
      );

      const outerGroup = container.querySelector("[data-garden-id='forms.input_group']");

      expect(outerGroup).toHaveStyleRule('border-color', errorColor);
    });

    it('does not warn about multiple validation-bearing Inputs for a plain Input child', () => {
      const environment = process.env.NODE_ENV;
      const consoleWarning = console.warn;

      process.env.NODE_ENV = 'development';
      console.warn = jest.fn();

      render(
        <DatePicker value={DEFAULT_DATE}>
          <Input data-test-id="input" validation="error" />
        </DatePicker>
      );

      expect(console.warn).not.toHaveBeenCalledWith(expect.stringContaining('<InputGroup>'));

      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });
  });

  describe.each([
    { prop: 'disabled', label: 'disabled' },
    { prop: 'readOnly', label: 'read-only' }
  ] as const)('when the input is $label', ({ prop, label }) => {
    const DisabledOrReadOnlyExample = ({
      isDisabledOrReadOnly = true,
      ...props
    }: Omit<IDatePickerProps, 'children'> & { isDisabledOrReadOnly?: boolean }) => (
      <>
        <label data-test-id="label" htmlFor="input">
          Label
        </label>
        <DatePicker {...props}>
          <input data-test-id="input" id="input" {...{ [prop]: isDisabledOrReadOnly }} />
        </DatePicker>
      </>
    );

    const CLOSED = { menu: 'false', input: 'false', button: 'false' };

    const getOpenState = (
      getByTestId: RenderResult['getByTestId'],
      getByRole: RenderResult['getByRole']
    ) => ({
      menu: getByRole('dialog', { hidden: true }).getAttribute('data-test-open'),
      input: getByTestId('input').getAttribute('aria-expanded'),
      button: getByRole('button', { name: CHOOSE_DATE }).getAttribute('aria-expanded')
    });

    it('still renders the trigger button, with the native disabled attribute', () => {
      const { getByRole } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      expect(getByRole('button', { name: CHOOSE_DATE })).toBeDisabled();
    });

    it('does not open the calendar when the trigger is clicked', () => {
      const { getByRole, getByTestId } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      fireEvent.click(getByRole('button', { name: CHOOSE_DATE }));

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it('does not open the calendar when the input is clicked', () => {
      const { getByRole, getByTestId } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      fireEvent.mouseDown(getByTestId('input'));
      fireEvent.click(getByTestId('input'));

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it('does not open the calendar when the associated label is clicked', () => {
      const { getByRole, getByTestId } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      fireEvent.click(getByTestId('label'));

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it('does not open the calendar when the surrounding input group is clicked', () => {
      const { getByRole, container, getByTestId } = render(
        <DisabledOrReadOnlyExample value={DEFAULT_DATE} />
      );

      fireEvent.click(container.querySelector("[data-garden-id='forms.input_group']")!);

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it.each([
      ['Down Arrow', {}],
      ['Alt+Down Arrow', { altKey: true }]
    ])('does not open the calendar on %s from the input', (_, modifiers) => {
      const { getByRole, getByTestId } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      fireEvent.keyDown(getByTestId('input'), { key: KEYS.DOWN, ...modifiers });

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it(`closes an already-open calendar once the input becomes ${label}`, async () => {
      const { getByRole, getByTestId, rerender } = render(
        <DisabledOrReadOnlyExample value={DEFAULT_DATE} isDisabledOrReadOnly={false} />
      );

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');

      rerender(<DisabledOrReadOnlyExample value={DEFAULT_DATE} isDisabledOrReadOnly />);

      expect(getOpenState(getByTestId, getByRole)).toStrictEqual(CLOSED);
    });

    it(`opens normally again once the input is no longer ${label}`, async () => {
      const { getByRole, rerender } = render(<DisabledOrReadOnlyExample value={DEFAULT_DATE} />);

      rerender(<DisabledOrReadOnlyExample value={DEFAULT_DATE} isDisabledOrReadOnly={false} />);

      expect(getByRole('button', { name: CHOOSE_DATE })).toBeEnabled();

      await user.click(getByRole('button', { name: CHOOSE_DATE }));

      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('hasTrigger={false}', () => {
    const NoTriggerExample = ({
      child = <input data-test-id="input" id="input" />,
      ...props
    }: Omit<IDatePickerProps, 'children'> & { child?: React.ReactElement }) => (
      <>
        <label data-test-id="label" htmlFor="input">
          Label
        </label>
        <DatePicker hasTrigger={false} value={DEFAULT_DATE} onChange={onChangeSpy} {...props}>
          {child}
        </DatePicker>
        <button data-test-id="outside" type="button">
          Outside
        </button>
      </>
    );

    const isOpen = (getByRole: RenderResult['getByRole']) =>
      getByRole('dialog', { hidden: true }).getAttribute('data-test-open') === 'true';

    it('renders no calendar button', () => {
      const { queryByRole } = render(<NoTriggerExample />);

      expect(queryByRole('button', { name: CHOOSE_DATE })).not.toBeInTheDocument();
    });

    it.each([
      ['a native input', <input key="input" data-test-id="input" id="input" />],
      ['a MediaInput', <MediaInput key="media" data-test-id="input" id="input" end={<span />} />]
    ])("renders %s child without DatePicker's own input group around it", (_, child) => {
      const { container } = render(<NoTriggerExample child={child} />);

      expect(container.querySelector("[data-garden-id='forms.input_group']")).toBeNull();
    });

    it('does not pass hasTrigger on to the DOM', () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      const { getByTestId } = render(<NoTriggerExample />);

      // The menu, where unrecognized DatePicker props land, only renders while open.
      fireEvent.keyDown(getByTestId('input'), { key: KEYS.DOWN });

      expect(consoleError).not.toHaveBeenCalledWith(
        expect.stringContaining('React does not recognize the `%s` prop on a DOM element'),
        'hasTrigger',
        expect.anything(),
        expect.anything()
      );

      consoleError.mockRestore();
    });

    it('still opens the calendar when the input is clicked', async () => {
      const { getByRole, getByTestId } = render(<NoTriggerExample />);

      await user.click(getByTestId('input'));

      expect(isOpen(getByRole)).toBe(true);
    });

    it('still opens on Down Arrow and moves focus onto the selected day', () => {
      const { getByRole, getAllByRole, getByTestId } = render(<NoTriggerExample />);

      fireEvent.keyDown(getByTestId('input'), { key: KEYS.DOWN });

      expect(isOpen(getByRole)).toBe(true);
      expect(getAllByRole('gridcell')[9]).toHaveFocus();
    });

    it.each([
      ['a default', undefined, CHOOSE_DATE],
      ['a consumer-provided', 'Pick a day', 'Pick a day']
    ])(
      'gives the dialog %s accessible name, without a button to take it from',
      (_, label, name) => {
        const { getByRole, getByTestId } = render(<NoTriggerExample toggleCalendarLabel={label} />);

        // A closed dialog is aria-hidden, so it has no accessible name either way.
        fireEvent.keyDown(getByTestId('input'), { key: KEYS.DOWN });

        expect(getByRole('dialog', { hidden: true })).toHaveAccessibleName(name);
      }
    );

    it('settles typed text and closes the calendar when focus leaves the input', async () => {
      const onValueSettledSpy = jest.fn();
      const { getByRole, getByTestId } = render(
        <NoTriggerExample onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.clear(input);
      await user.type(input, 'garbage', { skipClick: true });

      expect(isOpen(getByRole)).toBe(true);

      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith(
        expect.objectContaining({ valid: false, reason: 'malformed' })
      );
      expect(isOpen(getByRole)).toBe(false);
    });

    it("keeps a ClearableInput child's own labelled group, since there's no outer group", () => {
      const { getAllByRole } = render(
        <Field>
          <Field.Label>Date</Field.Label>
          <DatePicker hasTrigger={false} value={DEFAULT_DATE}>
            <ClearableInput data-test-id="input" />
          </DatePicker>
        </Field>
      );
      const groups = getAllByRole('group');

      expect(groups).toHaveLength(1);
      expect(groups[0]).toHaveAccessibleName('Date');
    });
  });

  describe('refKey', () => {
    const RefKeyExample = ({ inputRef }: { inputRef?: React.Ref<HTMLInputElement> }) => (
      <DatePicker
        hasTrigger={false}
        refKey="wrapperRef"
        value={DEFAULT_DATE}
        onChange={onChangeSpy}
      >
        <MediaInput
          ref={inputRef}
          data-test-id="input"
          end={<span />}
          wrapperProps={{ 'data-test-id': 'wrapper' } as React.HTMLAttributes<HTMLDivElement>}
        />
      </DatePicker>
    );

    const mockRect = (element: HTMLElement, left: number) => {
      element.getBoundingClientRect = jest.fn(
        () =>
          ({
            width: 100,
            height: 10,
            top: 100,
            left,
            bottom: 110,
            right: left + 100,
            x: left,
            y: 100
          }) as DOMRect
      );
    };

    it('positions the calendar against the element refKey names', async () => {
      const { getByRole, getByTestId } = render(<RefKeyExample />);

      mockRect(getByTestId('wrapper'), 120);
      mockRect(getByTestId('input'), 160);

      await user.click(getByTestId('input'));

      await waitFor(() => {
        const match = getByRole('dialog', { hidden: true }).style.transform.match(
          /translate\((?<x>[-\d.]+)px/u
        );

        expect(match ? parseFloat(match.groups!.x) : NaN).toBe(120);
      });
    });

    it('returns focus to the input on Escape from the calendar', async () => {
      const { getByTestId } = render(<RefKeyExample />);
      const input = getByTestId('input');

      await user.click(input);
      await user.keyboard('{ArrowDown}');

      expect(input).not.toHaveFocus();

      await user.keyboard('{Escape}');

      expect(input).toHaveFocus();
    });

    it('returns focus to the input after selecting a day with Enter', async () => {
      const { getByRole, getByTestId } = render(<RefKeyExample />);
      const input = getByTestId('input');

      await user.click(input);
      await user.keyboard('{ArrowDown}{ArrowRight}{Enter}');

      expect(getByRole('dialog', { hidden: true })).toHaveAttribute('data-test-open', 'false');
      expect(input).toHaveFocus();
    });

    it("still gives the child's own ref the input", () => {
      const inputRef = React.createRef<HTMLInputElement>();
      const { getByTestId } = render(<RefKeyExample inputRef={inputRef} />);

      expect(inputRef.current).toBe(getByTestId('input'));
    });
  });

  describe("when formatDate's output can't be read back by the default parser", () => {
    const formatDayMonthYear = (date: Date) =>
      `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

    it.each([true, false])(
      'keeps a calendar-picked date as picked when focus leaves the field, with keepTypedInput=%s',
      async keepTypedInput => {
        const onValueSettledSpy = jest.fn();
        const ControlledExample = () => {
          const [value, setValue] = useState<Date | undefined>();

          return (
            <Example
              value={value}
              formatDate={formatDayMonthYear}
              keepTypedInput={keepTypedInput}
              onChange={setValue}
              onValueSettled={onValueSettledSpy}
            />
          );
        };
        const { getAllByRole, getByTestId } = render(<ControlledExample />);

        await user.click(getByTestId('input'));
        await user.click(
          getAllByRole('gridcell').find(day => day.textContent?.includes('February 1, 2019'))!
        );
        await user.click(getByTestId('outside'));

        expect(onValueSettledSpy).toHaveBeenLastCalledWith(
          expect.objectContaining({ date: new Date(2019, 1, 1), valid: true })
        );
        expect(getByTestId('input')).toHaveValue('01/02/2019');
      }
    );
  });

  describe('keepTypedInput', () => {
    const ControlledExample = ({
      keepTypedInput,
      onValueSettled
    }: Pick<IDatePickerProps, 'keepTypedInput' | 'onValueSettled'>) => {
      const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

      return (
        <>
          <DatePicker
            value={value}
            onChange={setValue}
            onValueSettled={onValueSettled}
            keepTypedInput={keepTypedInput}
            minValue={new Date(2019, 0, 1)}
          >
            <input data-test-id="input" />
          </DatePicker>
          <button data-test-id="outside" type="button">
            Outside
          </button>
        </>
      );
    };

    // First in this block: React only logs its unknown-prop warning once per prop name.
    it('does not pass keepTypedInput on to the DOM', () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);
      const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);

      fireEvent.keyDown(getByTestId('input'), { key: KEYS.DOWN });

      expect(consoleError).not.toHaveBeenCalledWith(
        expect.stringContaining('React does not recognize the `%s` prop on a DOM element'),
        'keepTypedInput',
        expect.anything(),
        expect.anything()
      );

      consoleError.mockRestore();
    });

    const SETTLE_ACTIONS = [
      [
        'clicking outside',
        async (getByTestId: (id: string) => HTMLElement) => {
          await user.click(getByTestId('outside'));
        }
      ],
      [
        'pressing Enter',
        async () => {
          await user.keyboard('{Enter}');
        }
      ],
      [
        'pressing Escape',
        async () => {
          await user.keyboard('{Escape}');
        }
      ]
    ] as const;

    const typeInto = async (input: HTMLElement, text: string) => {
      await user.click(input);
      await user.clear(input);
      await user.type(input, text, { skipClick: true });
    };

    describe.each(SETTLE_ACTIONS)('when settling by %s', (_, settle) => {
      it('keeps unparseable typed text by default', async () => {
        const { getByTestId } = render(<ControlledExample />);
        const input = getByTestId('input');

        await typeInto(input, 'garbage');
        await settle(getByTestId);

        expect(input).toHaveValue('garbage');
      });

      it('reverts unparseable typed text to the current value when false', async () => {
        const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
        const input = getByTestId('input');

        await typeInto(input, 'garbage');
        await settle(getByTestId);

        expect(input).toHaveValue('February 5, 2019');
      });

      it('reverts an out-of-range typed date to the current value when false', async () => {
        const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
        const input = getByTestId('input');

        await typeInto(input, '1/1/2018');
        await settle(getByTestId);

        expect(input).toHaveValue('February 5, 2019');
      });

      it('keeps a valid typed date in the format it was typed in by default', async () => {
        const { getByTestId } = render(<ControlledExample />);
        const input = getByTestId('input');

        await typeInto(input, '2/10/2019');
        await settle(getByTestId);

        expect(input).toHaveValue('2/10/2019');
      });

      it('reformats a valid typed date to the committed value when false, as in earlier versions', async () => {
        const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
        const input = getByTestId('input');

        await typeInto(input, '2/10/2019');
        await settle(getByTestId);

        expect(input).toHaveValue('February 10, 2019');
      });

      it('still reports what was typed through onValueSettled, before reverting, when false', async () => {
        const onValueSettledSpy = jest.fn();
        const { getByTestId } = render(
          <ControlledExample keepTypedInput={false} onValueSettled={onValueSettledSpy} />
        );

        await typeInto(getByTestId('input'), 'garbage');
        onValueSettledSpy.mockClear();
        await settle(getByTestId);

        expect(onValueSettledSpy).toHaveBeenCalledWith(
          expect.objectContaining({ inputValue: 'garbage', valid: false, reason: 'malformed' })
        );
      });

      it('keeps an emptied field empty by default', async () => {
        const { getByTestId } = render(<ControlledExample />);
        const input = getByTestId('input');

        await user.click(input);
        await user.clear(input);
        await settle(getByTestId);

        expect(input).toHaveValue('');
      });

      it('restores the committed value in an emptied field when false, as in earlier versions', async () => {
        const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
        const input = getByTestId('input');

        await user.click(input);
        await user.clear(input);
        await settle(getByTestId);

        expect(input).toHaveValue('February 5, 2019');
      });
    });
  });

  describe('clearing', () => {
    const ClearingExample = ({
      child = <input data-test-id="input" />,
      ...props
    }: Omit<IDatePickerProps, 'children'> & { child?: React.ReactElement }) => (
      <>
        <DatePicker value={DEFAULT_DATE} onChange={onChangeSpy} {...props}>
          {child}
        </DatePicker>
        <button data-test-id="outside" type="button">
          Outside
        </button>
      </>
    );

    it.each([
      ['by default', undefined],
      ['when keepTypedInput is false', false]
    ])(
      'does not call onChange with undefined when the field is emptied, %s',
      async (_, keepTypedInput) => {
        const { getByTestId } = render(<ClearingExample keepTypedInput={keepTypedInput} />);

        await user.clear(getByTestId('input'));
        await user.click(getByTestId('outside'));

        expect(onChangeSpy).not.toHaveBeenCalled();
      }
    );

    it('reports a keyboard clear through onValueSettled only once, even after leaving the field', async () => {
      const onValueSettledSpy = jest.fn();
      const { getByTestId } = render(<ClearingExample onValueSettled={onValueSettledSpy} />);

      await user.clear(getByTestId('input'));
      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('reports a clear button clear through onValueSettled only once, even after leaving the field', async () => {
      const onValueSettledSpy = jest.fn();
      const { getByRole, getByTestId } = render(
        <ClearingExample
          onValueSettled={onValueSettledSpy}
          child={<ClearableInput data-test-id="input" />}
        />
      );

      await user.click(getByRole('button', { name: 'Clear' }));
      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
    });

    it('does not restore the committed value mid-edit when keepTypedInput is false, only once the field settles', async () => {
      const { getByTestId } = render(<ClearingExample keepTypedInput={false} />);
      const input = getByTestId('input');

      await user.clear(input);

      expect(input).toHaveValue('');

      await user.type(input, 'Feb 1');

      expect(input).toHaveValue('Feb 1');
    });
  });
});
