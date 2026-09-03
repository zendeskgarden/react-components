/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { ClearableInput } from './ClearableInput';
import { Field } from './common/Field';
import { IClearableInputProps } from '../types';
import { StyledInputGroup } from '../styled/input-group/StyledInputGroup';

const ControlledClearableInput = ({
  initialValue = 'hello',
  ...props
}: Partial<IClearableInputProps> & { initialValue?: string }) => {
  const [value, setValue] = useState(initialValue);

  return <ClearableInput value={value} onChange={e => setValue(e.target.value)} {...props} />;
};

describe('ClearableInput', () => {
  it('renders an Input inside a unified InputGroup', () => {
    const { getByRole } = render(<ClearableInput onChange={jest.fn()} />);

    expect(getByRole('group')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it("sets the input's data-garden-id to forms.clearable_input", () => {
    const { getByRole } = render(<ClearableInput onChange={jest.fn()} />);

    expect(getByRole('textbox')).toHaveAttribute('data-garden-id', 'forms.clearable_input');
  });

  it('forwards its ref to the underlying input DOM node', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByRole } = render(<ClearableInput ref={ref} onChange={jest.fn()} />);

    expect(getByRole('textbox')).toBe(ref.current);
  });

  it('passes through standard Input props unchanged', () => {
    const { getByRole } = render(
      <ClearableInput
        value="hello"
        onChange={jest.fn()}
        placeholder="Type to search"
        disabled
        validation="error"
      />
    );

    const input = getByRole('textbox');

    expect(input).toHaveAttribute('placeholder', 'Type to search');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('reflects Input validation on the wrapping unified InputGroup', () => {
    const { getByRole } = render(
      <ClearableInput value="hello" onChange={jest.fn()} validation="error" />
    );
    const errorColor = getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' });

    expect(getByRole('group')).toHaveStyleRule('border-color', errorColor);
  });

  it('forwards isCompact so the InputGroup renders at its compact size', () => {
    const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} isCompact />);

    expect(getByRole('group')).toHaveStyleRule('min-height', '32px');
  });

  it('passes arbitrary props through wrapperProps to the InputGroup', () => {
    const { getByRole } = render(
      <ClearableInput onChange={jest.fn()} wrapperProps={{ className: 'custom-class' }} />
    );

    expect(getByRole('group')).toHaveClass('custom-class');
  });

  it('resolves wrapperRef to the InputGroup DOM node', () => {
    const wrapperRef = React.createRef<HTMLDivElement>();
    const { getByRole } = render(<ClearableInput wrapperRef={wrapperRef} onChange={jest.fn()} />);

    expect(getByRole('group')).toBe(wrapperRef.current);
  });

  it('does not allow wrapperProps to override isUnified, since the InputGroup is always unified here', () => {
    const { getByRole } = render(
      <ClearableInput
        onChange={jest.fn()}
        // @ts-expect-error isUnified is omitted from wrapperProps' type, since it's never respected here; verify the runtime lock-down still holds for a consumer who bypasses the type checker
        wrapperProps={{ isUnified: false }}
      />
    );

    expect(getByRole('group')).toHaveStyleRule('cursor', 'text');
  });

  it('does not allow wrapperProps to override isCompact, since the top-level prop is the single source of truth', () => {
    const { getByRole } = render(
      <ClearableInput
        onChange={jest.fn()}
        isCompact
        // @ts-expect-error isCompact is omitted from wrapperProps' type, since it's never respected here; verify the runtime lock-down still holds for a consumer who bypasses the type checker
        wrapperProps={{ isCompact: false }}
      />
    );

    expect(getByRole('group')).toHaveStyleRule('min-height', '32px');
  });

  it('focuses the input when the wrapper is clicked', () => {
    const { getByRole } = render(<ClearableInput onChange={jest.fn()} />);

    fireEvent.click(getByRole('group'));

    expect(getByRole('textbox')).toHaveFocus();
  });

  it('composes an onClick from wrapperProps with the internal wrapper-click focus handler', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ClearableInput onChange={jest.fn()} wrapperProps={{ onClick }} />
    );

    fireEvent.click(getByRole('group'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(getByRole('textbox')).toHaveFocus();
  });

  describe('clear button', () => {
    it('does not render the clear button when value is empty', () => {
      const { queryByRole } = render(<ClearableInput value="" onChange={jest.fn()} />);

      expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it('does not render the clear button when disabled, even with a non-empty value', () => {
      const { queryByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} disabled />
      );

      expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it('does not render the clear button when readOnly, even with a non-empty value', () => {
      const { queryByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} readOnly />
      );

      expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders the clear button with an accessible name when value is non-empty', () => {
      const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} />);

      expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument();
    });

    it('hides the clear button icon from assistive technology', () => {
      const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} />);

      const icon = getByRole('button', { name: 'Clear' }).querySelector('svg');

      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('drives the controlled value to empty via onChange when the clear button is clicked', () => {
      const { getByRole } = render(<ControlledClearableInput />);

      fireEvent.click(getByRole('button', { name: 'Clear' }));

      expect(getByRole('textbox')).toHaveValue('');
    });

    it('returns focus to the input when the clear button is clicked, because the button unmounts as a result', () => {
      const { getByRole, queryByRole } = render(<ControlledClearableInput />);

      fireEvent.click(getByRole('button', { name: 'Clear' }));

      expect(queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
      expect(getByRole('textbox')).toHaveFocus();
    });

    it('uses a custom clearButtonLabel as the clear button accessible name', () => {
      const { getByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} clearButtonLabel="Clear search" />
      );

      expect(getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
    });

    it('re-syncs the clear button when a controlled value prop changes externally, not via onChange', () => {
      const { getByRole, rerender } = render(<ClearableInput value="hello" onChange={jest.fn()} />);

      expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument();

      rerender(<ClearableInput value="" onChange={jest.fn()} />);

      expect(() => getByRole('button', { name: 'Clear' })).toThrow();
    });

    it('composes an onClick from buttonProps with the internal clear handler', () => {
      const onClick = jest.fn();
      const { getByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} buttonProps={{ onClick }} />
      );

      fireEvent.click(getByRole('button', { name: 'Clear' }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('passes disabled from buttonProps to the clear button', () => {
      const { getByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} buttonProps={{ disabled: true }} />
      );

      expect(getByRole('button', { name: 'Clear' })).toBeDisabled();
    });

    it('allows buttonProps to override the default aria-label', () => {
      const { getByRole } = render(
        <ClearableInput
          value="hello"
          onChange={jest.fn()}
          buttonProps={{ 'aria-label': 'Custom clear label' }}
        />
      );

      expect(getByRole('button', { name: 'Custom clear label' })).toBeInTheDocument();
    });

    it('sets aria-controls on the clear button to a generated input id when there is no Field', () => {
      const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} />);

      const input = getByRole('textbox');
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

      const input = getByRole('textbox');
      const button = getByRole('button', { name: 'Clear' });

      expect(button).toHaveAttribute('aria-controls', input.id);
    });

    it('respects an explicit id prop for both the input and aria-controls', () => {
      const { getByRole } = render(
        <ClearableInput id="custom-id" value="hello" onChange={jest.fn()} />
      );

      const input = getByRole('textbox');
      const button = getByRole('button', { name: 'Clear' });

      expect(input).toHaveAttribute('id', 'custom-id');
      expect(button).toHaveAttribute('aria-controls', 'custom-id');
    });

    describe('uncontrolled usage', () => {
      it('does not render the clear button for an uncontrolled input with no defaultValue', () => {
        const { queryByRole } = render(<ClearableInput />);

        expect(queryByRole('button')).not.toBeInTheDocument();
      });

      it('renders the clear button for an uncontrolled input with a non-empty defaultValue', () => {
        const { getByRole } = render(<ClearableInput defaultValue="hello" />);

        expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument();
      });

      it('shows and hides the clear button as the user types into an uncontrolled input', () => {
        const { getByRole, queryByRole } = render(<ClearableInput />);

        const input = getByRole('textbox');

        fireEvent.change(input, { target: { value: 'abc' } });
        expect(getByRole('button', { name: 'Clear' })).toBeInTheDocument();

        fireEvent.change(input, { target: { value: '' } });
        expect(queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
      });

      it('clears an uncontrolled input by clicking the clear button, with no onChange required', () => {
        const { getByRole, queryByRole } = render(<ClearableInput defaultValue="hello" />);

        fireEvent.click(getByRole('button', { name: 'Clear' }));

        expect(getByRole('textbox')).toHaveValue('');
        expect(queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
      });

      it('returns focus to an uncontrolled input when the clear button is clicked', () => {
        const { getByRole } = render(<ClearableInput defaultValue="hello" />);

        fireEvent.click(getByRole('button', { name: 'Clear' }));

        expect(getByRole('textbox')).toHaveFocus();
      });
    });
  });

  describe('focus ring', () => {
    it('does not apply an inset focus ring to the InputGroup by default', () => {
      const { getByRole } = render(<ClearableInput onChange={jest.fn()} />);

      const wrapper = getByRole('group');

      fireEvent.focus(getByRole('textbox'));
      expect(wrapper).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('applies an inset focus ring to the InputGroup when the top-level focusInset prop is true', () => {
      const { getByRole } = render(<ClearableInput onChange={jest.fn()} focusInset />);

      const wrapper = getByRole('group');

      fireEvent.focus(getByRole('textbox'));
      expect(wrapper).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('applies an inset focus ring to the InputGroup when wrapperProps.focusInset is true', () => {
      const { getByRole } = render(
        <ClearableInput onChange={jest.fn()} wrapperProps={{ focusInset: true }} />
      );

      const wrapper = getByRole('group');

      fireEvent.focus(getByRole('textbox'));
      expect(wrapper).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('allows wrapperProps.focusInset to override the top-level focusInset prop', () => {
      const { getByRole } = render(
        <ClearableInput onChange={jest.fn()} focusInset wrapperProps={{ focusInset: false }} />
      );

      const wrapper = getByRole('group');

      fireEvent.focus(getByRole('textbox'));
      expect(wrapper).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('applies an inset focus ring to the clear button by default', () => {
      const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} />);

      const button = getByRole('button', { name: 'Clear' });

      expect(button).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-visible'
      });
    });

    it('does not apply an inset focus ring to the clear button when isCompact is set', () => {
      const { getByRole } = render(<ClearableInput value="hello" onChange={jest.fn()} isCompact />);

      const button = getByRole('button', { name: 'Clear' });

      expect(button).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-visible'
      });
    });

    it('does not allow buttonProps to override focusInset', () => {
      const { getByRole } = render(
        <ClearableInput value="hello" onChange={jest.fn()} buttonProps={{ focusInset: false }} />
      );

      const button = getByRole('button', { name: 'Clear' });

      expect(button).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: '&:focus-visible'
      });
    });
  });

  describe('isBare', () => {
    it('does not remove the outer border or focus indicator by default', () => {
      const { getByRole } = render(<ClearableInput onChange={jest.fn()} />);

      const wrapper = getByRole('group');

      expect(wrapper).not.toHaveStyleRule('border', 'none', {
        modifier: `&&${StyledInputGroup}`
      });
    });

    it('removes the outer border when the top-level isBare prop is true', () => {
      const { getByRole } = render(<ClearableInput onChange={jest.fn()} isBare />);

      const wrapper = getByRole('group');

      expect(wrapper).toHaveStyleRule('border', 'none', {
        modifier: `&&${StyledInputGroup}`
      });
    });

    it('suppresses the visible focus indicator when the top-level isBare prop is true', () => {
      const { getByRole } = render(<ClearableInput onChange={jest.fn()} isBare />);

      const wrapper = getByRole('group');

      fireEvent.focus(getByRole('textbox'));
      expect(wrapper).toHaveStyleRule('box-shadow', 'none', {
        modifier: `&&${StyledInputGroup}:focus-within`
      });
    });
  });
});
