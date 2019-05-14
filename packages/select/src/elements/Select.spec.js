/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Select from './Select';
import Item from '../views/items/Item';
import NextItem from '../views/items/NextItem';
import PreviousItem from '../views/items/PreviousItem';
import HeaderItem from '../views/items/header/HeaderItem';

describe('Select', () => {
  let onChangeSpy;
  const P_KEY_CODE = 80;
  const O_KEY_CODE = 79;

  const BasicExample = props => (
    <Select
      {...props}
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

  beforeEach(() => {
    onChangeSpy = jest.fn();
    jest.useFakeTimers();
  });

  describe('SelectView', () => {
    describe('onKeyDown', () => {
      it('selects first item with matching first character', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('select'), { keyCode: P_KEY_CODE, key: 'p' });

        expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
      });

      it('iterates through items with matching first character', () => {
        const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

        fireEvent.keyDown(getByTestId('select'), { keyCode: O_KEY_CODE, key: 'o' });
        fireEvent.keyDown(getByTestId('select'), { keyCode: O_KEY_CODE, key: 'o' });

        expect(onChangeSpy).toHaveBeenCalledTimes(2);
        expect(onChangeSpy).toHaveBeenLastCalledWith('2-item');
      });
    });
  });

  describe('Standard Items', () => {
    it('onChange is called if item is selected', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();
      fireEvent.click(getAllByTestId('item')[0]);

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });

    it('onChange is not called if item is disabled', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();
      fireEvent.click(getByTestId('disabled'));

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('retrieves textValue if children is a string', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();

      const menuElement = getAllByTestId('item')[0].parentElement;

      fireEvent.keyDown(menuElement, { keyCode: P_KEY_CODE, key: 'p' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.ENTER, key: 'enter' });

      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });

    it('overrides textValue if provided', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();

      const menuElement = getAllByTestId('item')[0].parentElement;

      fireEvent.keyDown(menuElement, { keyCode: O_KEY_CODE, key: 'o' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.ENTER, key: 'enter' });

      expect(onChangeSpy).toHaveBeenCalledWith('1-item');
    });
  });

  describe('NextItem', () => {
    it('is selected with right arrow key', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();

      const menuElement = getAllByTestId('item')[0].parentElement;

      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.DOWN, key: 'down' });
      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.RIGHT, key: 'right' });

      expect(onChangeSpy).toHaveBeenCalledWith('next-item');
    });
  });

  describe('PreviousItem', () => {
    it('is selected with left arrow key', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('select'));
      jest.runOnlyPendingTimers();

      const menuElement = getAllByTestId('item')[0].parentElement;

      fireEvent.keyDown(menuElement, { keyCode: KEY_CODES.LEFT, key: 'left' });

      expect(onChangeSpy).toHaveBeenCalledWith('previous-item');
    });
  });
});
