/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Menu from './Menu';
import Item from '../views/items/Item';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';
import HeaderItem from '../views/items/header/HeaderItem';

jest.useFakeTimers();

describe('Menu', () => {
  let onChangeSpy;

  const BasicExample = ({ onChange, maxHeight } = {}) => (
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
      <PreviousItem key="previous-item" data-test-id="item">
        Previous Item
      </PreviousItem>
      <Item key="1-item" data-test-id="item" textValue="override text value">
        1 Item
      </Item>
      <NextItem key="next-item" data-test-id="item">
        Next Item
      </NextItem>
      <Item data-test-id="item" disabled>
        Disabled item
      </Item>
    </Menu>
  );

  beforeEach(() => {
    onChangeSpy = jest.fn();
  });

  describe('Standard Items', () => {
    it('onChange is called if item is selected', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.click(getAllByTestId('item')[1]);

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });

    it('onChange is not called if item is disabled', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();
      fireEvent.click(getAllByTestId('item')[3]);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('retrieves textValue if children is a string', () => {
      const P_KEY_CODE = 80;
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      fireEvent.keyDown(menu, { keyCode: P_KEY_CODE, key: 'p' });
      fireEvent.keyDown(menu, { keyCode: KEY_CODES.ENTER, key: 'enter' });

      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });

    it('overrides textValue if provided', () => {
      const O_KEY_CODE = 79;
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      fireEvent.keyDown(menu, { keyCode: O_KEY_CODE, key: 'o' });
      fireEvent.keyDown(menu, { keyCode: KEY_CODES.ENTER, key: 'enter' });

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });
  });

  describe('NextItem', () => {
    it('is selected with right arrow key', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menu, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menu, { keyCode: KEY_CODES.RIGHT, key: 'right' });

      expect(onChangeSpy).toHaveBeenCalledWith('next-item');
    });
  });

  describe('PreviousItem', () => {
    it('is selected with left arrow key', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      fireEvent.keyDown(menu, { keyCode: KEY_CODES.LEFT, key: 'left' });

      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });
  });

  describe('maxHeight', () => {
    it('does not apply styling if maxHeight is not provided', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      expect(menu).not.toHaveStyleRule('max-height');
      expect(menu).not.toHaveStyleRule('overflow');
    });

    it('applies correct styling if maxHeight is provided', () => {
      const maxHeight = '300px';

      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} maxHeight={maxHeight} />);

      fireEvent.click(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      const menu = getByTestId('menu');

      expect(menu).toHaveStyleRule('max-height', maxHeight);
      expect(menu).toHaveStyleRule('overflow', 'auto');
    });
  });
});
