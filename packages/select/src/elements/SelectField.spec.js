/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import SelectField from './SelectField';
import Select from './Select';
import Item from '../views/items/Item';
import Label from '../views/fields/Label';
import Hint from '../views/fields/Hint';
import Message from '../views/fields/Message';

describe('SelectField', () => {
  let wrapper;

  const basicExample = () => (
    <SelectField>
      <Label>Label</Label>
      <Hint>Hint</Hint>
      <Select options={[<Item key="1-item">Item 1</Item>, <Item key="2-item">Item 2</Item>]}>
        preview
      </Select>
      <Message>Message</Message>
      <div data-test-id="extra">extra information</div>
    </SelectField>
  );

  const findSelect = enzymeWrapper => enzymeWrapper.find(Select);
  const findLabel = enzymeWrapper => enzymeWrapper.find(Label);

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
  });

  describe('Label', () => {
    it('applies hover styling to Select if mouse in', () => {
      findLabel(wrapper).simulate('mouseenter');
      expect(findSelect(wrapper)).toHaveProp('hovered', true);
    });

    it('removes hover styling of Select if mouse out', () => {
      findLabel(wrapper).simulate('mouseenter');
      findLabel(wrapper).simulate('mouseleave');
      expect(findSelect(wrapper)).toHaveProp('hovered', false);
    });

    it('focuses select if clicked', () => {
      findLabel(wrapper).simulate('click');
      expect(wrapper.find('SelectView').contains(document.activeElement)).toBe(true);
    });
  });

  it('does not throw if invalid element is provided as child', () => {
    expect(() => {
      mountWithTheme(
        <SelectField>
          <Label>Label</Label>
          <Select options={[<Item key="1-item">Item 1</Item>, <Item key="2-item">Item 2</Item>]}>
            preview
          </Select>
          <Message>Message</Message>
          extra information
        </SelectField>
      );
    }).not.toThrow();
  });
});
