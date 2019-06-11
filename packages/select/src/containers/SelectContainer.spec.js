/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import SelectContainer from './SelectContainer';

describe('SelectContainer', () => {
  let onChangeSpy;
  const items = ['item-1', 'item-2', 'item-3'];

  const BasicExample = props => (
    <SelectContainer
      selectedKey={undefined}
      {...props}
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
  });

  describe('getTriggerProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      expect(getByTestId('trigger')).toHaveAttribute('role', 'combobox');
    });
  });

  describe('getSelectProps()', () => {
    it('applies correct accessibility attributes', () => {
      const { getByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));

      expect(getByTestId('dropdown')).toHaveAttribute('role', 'listbox');
    });
  });

  describe('onChange', () => {
    it('receives selected item key on select', () => {
      const { getByTestId, getAllByTestId } = render(<BasicExample onChange={onChangeSpy} />);

      fireEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);

      expect(onChangeSpy).toHaveBeenCalledWith('item-1');
    });
  });
});
