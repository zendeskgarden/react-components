/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import SelectContainer from './SelectContainer';

describe('SelectContainer', () => {
  let wrapper;
  let onChangeSpy;
  const items = ['item-1', 'item-2', 'item-3'];

  const basicExample = onChange => (
    <SelectContainer
      selectedKey={undefined}
      onChange={onChange}
      trigger={({ getTriggerProps, triggerRef }) => (
        <div
          {...getTriggerProps({
            ref: triggerRef,
            'data-test-id': 'trigger'
          })}
        >
          nothing chosen
        </div>
      )}
    >
      {({ getSelectProps, getItemProps, dropdownRef }) => (
        <div
          {...getSelectProps({
            ref: dropdownRef,
            'data-test-id': 'dropdown'
          })}
        >
          {items.map(key => (
            <div
              {...getItemProps({
                key,
                textValue: key,
                'data-test-id': 'item'
              })}
            >
              {key}
            </div>
          ))}
        </div>
      )}
    </SelectContainer>
  );

  beforeEach(() => {
    onChangeSpy = jest.fn();
    wrapper = mountWithTheme(basicExample(onChangeSpy));
  });

  const findTrigger = enzymeWrapper => enzymeWrapper.find('[data-test-id="trigger"]');
  const findDropdown = enzymeWrapper => enzymeWrapper.find('[data-test-id="dropdown"]');
  const findItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');

  describe('getTriggerProps()', () => {
    it('applies correct accessibility attributes', () => {
      expect(findTrigger(wrapper)).toHaveProp('role', 'combobox');
    });
  });

  describe('getSelectProps()', () => {
    it('applies correct accessibility attributes', () => {
      findTrigger(wrapper).simulate('click');
      wrapper.update();
      expect(findDropdown(wrapper)).toHaveProp('role', 'listbox');
    });
  });

  describe('onChange', () => {
    it('receives selected item key on select', () => {
      findTrigger(wrapper).simulate('click');
      wrapper.update();
      findItems(wrapper)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith('item-1');
    });
  });
});
