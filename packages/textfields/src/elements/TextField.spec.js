/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import TextField from './TextField';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';
import Input from '../views/Input';
import Textarea from '../views/Textarea';

describe('TextField', () => {
  const TEXT_FIELD_ID = 'test';

  const BasicExample = ({ textElement = <Input data-test-id="input" /> }) => (
    <TextField id={TEXT_FIELD_ID}>
      <Label data-test-id="label">Label</Label>
      <Hint data-test-id="hint">Hint</Hint>
      {textElement}
      <Message data-test-id="message">Message</Message>
      <div data-test-id="extra">extra information</div>
    </TextField>
  );

  it('applies container props to Label', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('label')).toHaveAttribute('id', `${TEXT_FIELD_ID}--label`);
  });

  it('applies container props to Hint', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('hint')).toHaveAttribute('id', `${TEXT_FIELD_ID}--hint`);
  });

  it('applies no props to any other element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('extra').attributes).toHaveLength(1);
  });

  describe('with Input', () => {
    it('applies input props correctly', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('input')).toHaveAttribute('id', `${TEXT_FIELD_ID}--input`);
    });
  });

  describe('with Textarea', () => {
    it('applies input props correctly', () => {
      const { getByTestId } = render(
        <BasicExample textElement={<Textarea data-test-id="textarea" />} />
      );

      expect(getByTestId('textarea')).toHaveAttribute('id', `${TEXT_FIELD_ID}--input`);
    });
  });
});
