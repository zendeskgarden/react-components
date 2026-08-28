/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { ClearableInput } from './ClearableInput';
import { Field } from './common/Field';
import { IClearableInputProps } from '../types';

/** Mirrors how a real consumer wires up a controlled ClearableInput. */
const ControlledClearableInput = ({
  initialValue = 'hello',
  ...props
}: Partial<IClearableInputProps> & { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <ClearableInput
      aria-label="Search"
      value={value}
      onChange={e => setValue(e.target.value)}
      {...props}
    />
  );
};

describe('ClearableInput', () => {
  it('renders an Input inside a seamless InputGroup', () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="" onChange={jest.fn()} />
    );

    expect(getByRole('group')).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Search' })).toBeInTheDocument();
  });

  it("sets the input's data-garden-id to forms.clearable_input", () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="" onChange={jest.fn()} />
    );

    expect(getByRole('textbox', { name: 'Search' })).toHaveAttribute(
      'data-garden-id',
      'forms.clearable_input'
    );
  });

  it('does not apply an inset focus ring to the InputGroup by default', () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="" onChange={jest.fn()} />
    );

    const wrapper = getByRole('group');

    fireEvent.focus(getByRole('textbox', { name: 'Search' }));
    expect(wrapper).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-within:not(:has(button:focus-visible))'
    });
  });

  it('applies an inset focus ring to the InputGroup when wrapperProps.focusInset is true', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value=""
        onChange={jest.fn()}
        wrapperProps={{ focusInset: true }}
      />
    );

    const wrapper = getByRole('group');

    fireEvent.focus(getByRole('textbox', { name: 'Search' }));
    expect(wrapper).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-within:not(:has(button:focus-visible))'
    });
  });

  it('does not render the clear button when value is empty', () => {
    const { queryByRole } = render(
      <ClearableInput aria-label="Search" value="" onChange={jest.fn()} />
    );

    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the clear button with an accessible name when value is non-empty', () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="hello" onChange={jest.fn()} />
    );

    expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('drives the controlled value to empty via onChange when the clear button is clicked', () => {
    const { getByRole } = render(<ControlledClearableInput />);

    fireEvent.click(getByRole('button', { name: 'Clear' }));

    expect(getByRole('textbox', { name: 'Search' })).toHaveValue('');
  });

  it('calls onClear, in addition to clearing the value, when the clear button is clicked', () => {
    const onClear = jest.fn();
    const { getByRole } = render(<ControlledClearableInput onClear={onClear} />);

    fireEvent.click(getByRole('button', { name: 'Clear' }));

    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('returns focus to the input when the clear button is clicked, even though the button unmounts as a result', () => {
    const { getByRole, queryByRole } = render(<ControlledClearableInput />);

    fireEvent.click(getByRole('button', { name: 'Clear' }));

    expect(queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Search' })).toHaveFocus();
  });

  it('uses a custom clearButtonLabel as the clear button accessible name', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value="hello"
        onChange={jest.fn()}
        clearButtonLabel="Clear search"
      />
    );

    expect(getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
  });

  it('composes an onClick from buttonProps with the internal clear handler', () => {
    const onClear = jest.fn();
    const onClick = jest.fn();
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value="hello"
        onChange={jest.fn()}
        onClear={onClear}
        buttonProps={{ onClick }}
      />
    );

    fireEvent.click(getByRole('button', { name: 'Clear' }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('passes disabled from buttonProps to the clear button', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value="hello"
        onChange={jest.fn()}
        buttonProps={{ disabled: true }}
      />
    );

    expect(getByRole('button', { name: 'Clear' })).toBeDisabled();
  });

  it('allows buttonProps to override the default aria-label', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value="hello"
        onChange={jest.fn()}
        buttonProps={{ 'aria-label': 'Custom clear label' }}
      />
    );

    expect(getByRole('button', { name: 'Custom clear label' })).toBeInTheDocument();
  });

  it('forwards its ref to the underlying input DOM node', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByRole } = render(
      <ClearableInput ref={ref} aria-label="Search" value="" onChange={jest.fn()} />
    );

    expect(getByRole('textbox', { name: 'Search' })).toBe(ref.current);
  });

  it('passes through standard Input props unchanged', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value="hello"
        onChange={jest.fn()}
        placeholder="Type to search"
        disabled
        validation="error"
      />
    );

    const input = getByRole('textbox', { name: 'Search' });

    expect(input).toHaveAttribute('placeholder', 'Type to search');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards isCompact so the InputGroup renders at its compact size', () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="hello" onChange={jest.fn()} isCompact />
    );

    expect(getByRole('group')).toHaveStyleRule('min-height', '32px');
  });

  it('passes arbitrary props through wrapperProps to the InputGroup', () => {
    const { getByRole } = render(
      <ClearableInput
        aria-label="Search"
        value=""
        onChange={jest.fn()}
        wrapperProps={{ className: 'custom-class' }}
      />
    );

    expect(getByRole('group')).toHaveClass('custom-class');
  });

  it('resolves wrapperRef to the InputGroup DOM node', () => {
    const wrapperRef = React.createRef<HTMLDivElement>();
    const { getByRole } = render(
      <ClearableInput wrapperRef={wrapperRef} aria-label="Search" value="" onChange={jest.fn()} />
    );

    expect(getByRole('group')).toBe(wrapperRef.current);
  });

  it('sets aria-controls on the clear button to a generated input id when there is no Field', () => {
    const { getByRole } = render(
      <ClearableInput aria-label="Search" value="hello" onChange={jest.fn()} />
    );

    const input = getByRole('textbox', { name: 'Search' });
    const button = getByRole('button', { name: 'Clear' });

    expect(input.id).toBeTruthy();
    expect(button).toHaveAttribute('aria-controls', input.id);
  });

  it('sets aria-controls to the Field-generated input id when rendered inside a Field', () => {
    const { getByRole } = render(
      <Field>
        <Field.Label>Search</Field.Label>
        <ClearableInput value="hello" onChange={jest.fn()} />
      </Field>
    );

    const input = getByRole('textbox', { name: 'Search' });
    const button = getByRole('button', { name: 'Clear' });

    expect(button).toHaveAttribute('aria-controls', input.id);
  });

  it('respects an explicit id prop for both the input and aria-controls', () => {
    const { getByRole } = render(
      <ClearableInput id="custom-id" aria-label="Search" value="hello" onChange={jest.fn()} />
    );

    const input = getByRole('textbox', { name: 'Search' });
    const button = getByRole('button', { name: 'Clear' });

    expect(input).toHaveAttribute('id', 'custom-id');
    expect(button).toHaveAttribute('aria-controls', 'custom-id');
  });
});
