/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Menu from './Menu';
import Item from '../views/items/Item';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';
import HeaderItem from '../views/items/header/HeaderItem';

/**
 * Mocks popper.js calls within react-popper due to virtual testing environment
 */
jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js');

  return class Popper {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {
          // mock implementation
        },
        scheduleUpdate: () => {
          // mock implementation
        }
      };
    }
  };
});

jest.useFakeTimers();

describe('Menu', () => {
  let wrapper;
  let onChangeSpy;

  const basicExample = ({ onChange, maxHeight } = {}) => (
    <Menu
      data-test-id="menu"
      onChange={onChange}
      maxHeight={maxHeight}
      trigger={({ ref }) => (
        <button ref={ref} data-test-id="trigger">
          trigger
        </button>
      )}
    >
      <HeaderItem data-test-id="header">Non-selectable header</HeaderItem>
      <PreviousItem key="previous-item" data-test-id="previous">
        Previous Item
      </PreviousItem>
      <Item key="1-item" data-test-id="item" textValue="override text value">
        1 Item
      </Item>
      <NextItem key="next-item" data-test-id="next">
        Next Item
      </NextItem>
      <Item data-test-id="disabled" disabled>
        Disabled item
      </Item>
    </Menu>
  );

  const findTrigger = enzymeWrapper => enzymeWrapper.find('[data-test-id="trigger"]');
  const findMenu = enzymeWrapper => enzymeWrapper.find('[data-test-id="menu"]');
  const findItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="item"]');
  const findDisabledItems = enzymeWrapper => enzymeWrapper.find('[data-test-id="disabled"]');

  beforeEach(() => {
    onChangeSpy = jest.fn();
    wrapper = mountWithTheme(basicExample({ onChange: onChangeSpy }));
  });

  describe('Standard Items', () => {
    it('onChange is called if item is selected', () => {
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      findItems(wrapper)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });

    it('onChange is not called if item is disabled', () => {
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      findDisabledItems(wrapper)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('retrieves textValue if children is a string', () => {
      const P_KEY_CODE = 80;

      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findMenu(wrapper).at(3);

      menuElement.simulate('keydown', { keyCode: P_KEY_CODE, key: 'p' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });

    it('overrides textValue if provided', () => {
      const O_KEY_CODE = 79;

      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findMenu(wrapper).at(3);

      menuElement.simulate('keydown', { keyCode: O_KEY_CODE, key: 'o' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.ENTER, key: 'enter' });
      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });
  });

  describe('NextItem', () => {
    it('is selected with right arrow key', () => {
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findMenu(wrapper).at(3);

      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.DOWN, key: 'down' });
      menuElement.simulate('keydown', { keyCode: KEY_CODES.RIGHT, key: 'right' });
      expect(onChangeSpy).toHaveBeenCalledWith('next-item');
    });
  });

  describe('PreviousItem', () => {
    it('is selected with left arrow key', () => {
      findTrigger(wrapper).simulate('click');
      jest.runOnlyPendingTimers();
      wrapper.update();
      const menuElement = findMenu(wrapper).at(3);

      menuElement.simulate('keydown', { keyCode: KEY_CODES.LEFT, key: 'left' });
      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });
  });
});
