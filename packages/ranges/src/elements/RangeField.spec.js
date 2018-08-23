/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import RangeField from './RangeField';
import Range from './Range';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

describe('RangeField', () => {
  const RANGE_FIELD_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <RangeField id={RANGE_FIELD_ID}>
      <Label>Label</Label>
      <Hint>Hint</Hint>
      <Range />
      <Message>Message</Message>
      <div data-test-id="extra">extra information</div>
    </RangeField>
  );

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  it('applies container props to Label', () => {
    expect(wrapper.find(Label)).toHaveProp('id', `${RANGE_FIELD_ID}--label`);
  });

  it('applies container props to Hint', () => {
    expect(wrapper.find(Hint)).toHaveProp('id', `${RANGE_FIELD_ID}--hint`);
  });

  it('applies container props to Message', () => {
    expect(wrapper.find(Message)).toHaveProp('role', 'alert');
  });

  it('applies input props to Range', () => {
    expect(wrapper.find(Range)).toHaveProp('id', `${RANGE_FIELD_ID}--input`);
  });

  it('applies no props to any other element', () => {
    expect(Object.keys(wrapper.find('[data-test-id="extra"]').props())).toHaveLength(2);
  });
});
