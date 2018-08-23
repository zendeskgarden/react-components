/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import TextField from './TextField';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';
import Input from '../views/Input';
import Textarea from '../views/Textarea';

describe('TextField', () => {
  const TEXT_FIELD_ID = 'test';
  let wrapper;

  const basicExample = (textElement = <Input />) => (
    <TextField id={TEXT_FIELD_ID}>
      <Label>Label</Label>
      <Hint>Hint</Hint>
      {textElement}
      <Message>Message</Message>
      <div data-test-id="extra">extra information</div>
    </TextField>
  );

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  it('applies container props to Label', () => {
    expect(wrapper.find(Label)).toHaveProp('id', `${TEXT_FIELD_ID}--label`);
  });

  it('applies container props to Hint', () => {
    expect(wrapper.find(Hint)).toHaveProp('id', `${TEXT_FIELD_ID}--hint`);
  });

  it('applies container props to Message', () => {
    expect(wrapper.find(Message)).toHaveProp('role', 'alert');
  });

  it('applies no props to any other element', () => {
    expect(Object.keys(wrapper.find('[data-test-id="extra"]').props())).toHaveLength(2);
  });

  describe('with Input', () => {
    it('applies input props correctly', () => {
      expect(wrapper.find(Input)).toHaveProp('id', `${TEXT_FIELD_ID}--input`);
    });
  });

  describe('with Textarea', () => {
    it('applies input props correctly', () => {
      wrapper = mountWithTheme(basicExample(<Textarea />));
      expect(wrapper.find(Textarea)).toHaveProp('id', `${TEXT_FIELD_ID}--input`);
    });
  });
});
