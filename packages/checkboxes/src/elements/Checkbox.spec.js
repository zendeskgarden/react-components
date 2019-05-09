/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Checkbox from './Checkbox';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

describe('Checkbox', () => {
  const CHECKBOX_ID = 'test';

  const BasicExample = () => (
    <Checkbox data-test-id="input" id={CHECKBOX_ID}>
      <Label data-test-id="label">Label</Label>
      <Hint data-test-id="hint">Hint</Hint>
      <Message data-test-id="message">Message</Message>
      <div data-test-id="extra">extra information</div>
    </Checkbox>
  );

  it('applies container props to Label', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('label')).toHaveAttribute('id', `${CHECKBOX_ID}--label`);
  });

  it('applies container props to Hint', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('hint')).toHaveAttribute('id', `${CHECKBOX_ID}--hint`);
  });

  it('applies no props to any other element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(Object.keys(getByTestId('extra').attributes)).toHaveLength(1);
  });

  it('applies input props correctly', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('input')).toHaveAttribute('id', `${CHECKBOX_ID}--input`);
  });

  it('applies focused prop to Label if keyboard focused', () => {
    const { getByTestId } = render(<BasicExample />);

    fireEvent.focus(getByTestId('input'));

    expect(getByTestId('label')).toHaveClass('is-focused');
  });

  it('does not apply focused prop to Label if clicked', () => {
    const { getByTestId } = render(<BasicExample />);

    fireEvent.click(getByTestId('input'));

    expect(getByTestId('label')).not.toHaveClass('is-focused');
  });
});
