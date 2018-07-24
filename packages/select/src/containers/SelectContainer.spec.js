/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

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
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    onChangeSpy = jest.fn();
    wrapper = mount(basicExample(onChangeSpy));
  });

  const findTrigger = enzymeWrapper => enzymeWrapper.find('[data-test-id="trigger"]');
  const findItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');

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
