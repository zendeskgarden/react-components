/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import RangeField from './RangeField';
import Range from './Range';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

describe('RangeField', () => {
  const RANGE_FIELD_ID = 'test';

  const BasicExample = () => (
    <RangeField id={RANGE_FIELD_ID}>
      <Label data-test-id="label">Label</Label>
      <Hint data-test-id="hint">Hint</Hint>
      <Range data-test-id="range" />
      <Message data-test-id="message">Message</Message>
      <div data-test-id="extra">extra information</div>
    </RangeField>
  );

  it('applies container props to Label', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('label')).toHaveAttribute('id', `${RANGE_FIELD_ID}--label`);
  });

  it('applies container props to Hint', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('hint')).toHaveAttribute('id', `${RANGE_FIELD_ID}--hint`);
  });

  it('applies input props to Range', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('range')).toHaveAttribute('id', `${RANGE_FIELD_ID}--input`);
  });

  it('applies no props to any other element', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('extra').attributes).toHaveLength(1);
  });
});
