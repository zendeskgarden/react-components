/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import Toggle from './Toggle';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';
import Input from '../views/Input';

describe('Toggle', () => {
  const TOGGLE_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <Toggle id={TOGGLE_ID}>
      <Label>Label</Label>
      <Hint>Hint</Hint>
      <Message>Message</Message>
      <div data-test-id="extra">extra information</div>
    </Toggle>
  );

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  it('applies container props to Label', () => {
    expect(wrapper.find(Label)).toHaveProp('id', `${TOGGLE_ID}--label`);
  });

  it('applies container props to Hint', () => {
    expect(wrapper.find(Hint)).toHaveProp('id', `${TOGGLE_ID}--hint`);
  });

  it('applies container props to Message', () => {
    expect(wrapper.find(Message)).toHaveProp('id', `${TOGGLE_ID}--message`);
  });

  it('applies no props to any other element', () => {
    expect(Object.keys(wrapper.find('[data-test-id="extra"]').props())).toHaveLength(2);
  });

  it('applies input props correctly', () => {
    expect(wrapper.find(Input)).toHaveProp('id', `${TOGGLE_ID}--input`);
  });

  it('applies focused prop to Label if keyboard focused', () => {
    wrapper.find(Input).simulate('focus');
    expect(wrapper.find(Label)).toHaveProp('focused', true);
  });

  it('does not apply focused prop to Label if clicked', () => {
    wrapper.find(Input).simulate('click');
    expect(wrapper.find(Label)).toHaveProp('focused', false);
  });
});
