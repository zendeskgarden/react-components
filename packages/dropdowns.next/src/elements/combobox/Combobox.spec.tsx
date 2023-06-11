/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes, forwardRef } from 'react';
import { render } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';
import { PALETTE } from '@zendeskgarden/react-theming';
import { IComboboxProps } from '../../types';
import { Combobox } from './Combobox';
import { Option } from './Option';
import { Field } from './Field';
import { Label } from './Label';
import { Hint } from './Hint';
import { Message } from './Message';

interface ITestComboboxProps extends IComboboxProps {
  fieldTestId?: string;
  labelTestId?: string;
  hintTestId?: string;
  comboboxTestId?: string;
  inputTestId?: string;
  messageTestId?: string;
  validationLabel?: string;
}

const TestCombobox = forwardRef<HTMLDivElement, ITestComboboxProps>(
  (
    {
      fieldTestId = 'field',
      labelTestId = 'label',
      hintTestId = 'hint',
      comboboxTestId = 'combobox',
      inputTestId = 'input',
      messageTestId = 'message',
      inputProps,
      validation,
      validationLabel,
      children,
      ...props
    },
    ref
  ) => (
    <Field data-test-id={fieldTestId}>
      <Label data-test-id={labelTestId}>Label</Label>
      <Hint data-test-id={hintTestId}>Hint</Hint>
      <Combobox
        data-test-id={comboboxTestId}
        inputProps={
          { 'data-test-id': inputTestId, ...inputProps } as InputHTMLAttributes<HTMLInputElement>
        }
        validation={validation}
        {...props}
        ref={ref}
      >
        {children}
      </Combobox>
      <Message
        data-test-id={messageTestId}
        validation={validation}
        validationLabel={validationLabel}
      >
        Message
      </Message>
    </Field>
  )
);

TestCombobox.displayName = 'TestCombobox';

describe('Combobox', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<TestCombobox ref={ref} />);
    const combobox = getByTestId('combobox');

    expect(combobox).toBe(ref.current);
  });

  it('applies correct styling on label hover', async () => {
    const { getByTestId } = render(<TestCombobox />);
    const label = getByTestId('label');
    const combobox = getByTestId('combobox');

    await user.hover(label);

    expect(combobox.firstChild).toHaveStyleRule('border-color', PALETTE.blue[600], {
      modifier: ':hover'
    });
  });

  it('focuses input on label click', async () => {
    const { getByTestId } = render(<TestCombobox />);
    const label = getByTestId('label');
    const input = getByTestId('input');

    await user.click(label);

    expect(input).toHaveFocus();
  });

  it('renders icons if provided', () => {
    const { getByTestId } = render(
      <TestCombobox
        startIcon={<svg data-test-id="start-icon" />}
        endIcon={<svg data-test-id="end-icon" />}
      />
    );

    expect(getByTestId('start-icon')).not.toBeNull();
    expect(getByTestId('end-icon')).not.toBeNull();
  });

  it('handles `defaultExpanded` as expected', () => {
    const { getByTestId } = render(<TestCombobox defaultExpanded />);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('handles `defaultActiveIndex` as expected', () => {
    const { getByTestId } = render(
      <TestCombobox defaultExpanded defaultActiveIndex={1}>
        <Option value="inactive" />
        <Option data-test-id="option" value="active" />
      </TestCombobox>
    );
    const input = getByTestId('input');
    const option = getByTestId('option');

    expect(input).toHaveAttribute('aria-activedescendant', option.id);
  });

  it('applies `id` as expected', () => {
    const { getByTestId } = render(<TestCombobox id="test" />);
    const combobox = getByTestId('combobox');

    expect(combobox).toHaveAttribute('id', 'test');
  });

  it('applies `inputProps` as expected', () => {
    const { getByTestId } = render(<TestCombobox inputProps={{ type: 'search' }} />);
    const input = getByTestId('input');

    expect(input).toHaveAttribute('type', 'search');
  });

  it('renders `isAutocomplete` as expected', () => {
    const { getByTestId, rerender } = render(<TestCombobox />);
    const input = getByTestId('input');

    expect(input).not.toHaveAttribute('aria-autocomplete');

    rerender(<TestCombobox isAutocomplete />);

    expect(input).toHaveAttribute('aria-autocomplete', 'list');
  });

  it('renders `isBare` styling as expected', () => {
    const { getByTestId } = render(<TestCombobox isBare />);
    const combobox = getByTestId('combobox');

    expect(combobox.firstChild).toHaveStyleRule('border', 'none');
  });
});
