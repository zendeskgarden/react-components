/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Select from './Select';
import Item from '../views/items/Item';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';
import HeaderItem from '../views/items/header/HeaderItem';

describe('Select', () => {
  let wrapper;
  let onChangeSpy;
  const P_KEY_CODE = 80;
  const O_KEY_CODE = 79;

  const basicExample = ({ onChange } = {}) => (
    <Select
      onChange={onChange}
      options={[
        <HeaderItem key="header" data-test-id="header">
          Non-selectable header
        </HeaderItem>,
        <PreviousItem key="previous-item" data-test-id="previous">
          Previous Item
        </PreviousItem>,
        <Item key="1-item" data-test-id="item" textValue="override text value">
          Item 1
        </Item>,
        <Item key="2-item" data-test-id="item" textValue="override text value">
          Item 2
        </Item>,
        <NextItem key="next-item" data-test-id="next">
          Next Item
        </NextItem>,
        <Item data-test-id="disabled" disabled>
          Disabled item
        </Item>
      ]}
    >
      <div data-test-id="select">preview</div>
    </Select>
  );

  const findSelect = enzymeWrapper => enzymeWrapper.find('[data-test-id="select"]');
  const findItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');
  const findDisabledItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="disabled"]');

  beforeEach(() => {
    onChangeSpy = jest.fn();
    jest.useFakeTimers();
    wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
  });

  describe('SelectView', () => {
    describe('onKeyDown', () => {
      it('selects first item with matching first character', () => {
        findSelect(wrapper).simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
        expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
      });

      it('iterates through items with matching first character', () => {
        findSelect(wrapper).simulate('keydown', { keyCode: O_KEY_CODE, key: 'o' });
        findSelect(wrapper).simulate('keydown', { keyCode: O_KEY_CODE, key: 'o' });
        expect(onChangeSpy).toHaveBeenCalledTimes(2);
        expect(onChangeSpy).toHaveBeenLastCalledWith('2-item');
      });
    });
  });

  describe('Standard Items', () => {
    it('onChange is called if item is selected', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      findItems(wrapper)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });

    it('onChange is not called if item is disabled', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      findDisabledItems(wrapper)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('retrieves textValue if children is a string', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findItems(wrapper).at(0);

      menuElement.simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });

    it('overrides textValue if provided', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findItems(wrapper).at(0);

      menuElement.simulate('keydown', { keyCode: O_KEY_CODE, key: 'o' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });
  });

  describe('NextItem', () => {
    it('is selected with right arrow key', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findItems(wrapper).at(0);

      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.RIGHT, key: 'right' });
      expect(onChangeSpy).toHaveBeenCalledWith('next-item');
    });
  });

  describe('PreviousItem', () => {
    it('is selected with left arrow key', () => {
      findSelect(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findItems(wrapper).at(0);

      menuElement.simulate('keydown', { keyCode: KEY_CODES.LEFT, key: 'left' });
      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });
  });
});
