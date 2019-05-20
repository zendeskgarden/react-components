/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import SelectField from './SelectField';
import Select from './Select';
import Item from '../views/items/Item';
import Label from '../views/fields/Label';
import Hint from '../views/fields/Hint';
import Message from '../views/fields/Message';

describe('SelectField', () => {
  const BasicExample = () => (
    <SelectField>
      <Label data-test-id="label">Label</Label>
      <Hint data-test-id="hint'">Hint</Hint>
      <Select
        data-test-id="select"
        options={[
          <Item key="1-item" data-test-id="item">
            Item 1
          </Item>,
          <Item key="2-item" data-test-id="item">
            Item 2
          </Item>
        ]}
      >
        preview
      </Select>
      <Message data-test-id="message">Message</Message>
      <div data-test-id="extra">extra information</div>
    </SelectField>
  );

  describe('Label', () => {
    it('applies hover styling to Select if mouse in', () => {
      const { getByTestId } = render(<BasicExample />);

      fireEvent.mouseEnter(getByTestId('label'));

      expect(getByTestId('select')).toHaveClass('is-hovered');
    });

    it('removes hover styling of Select if mouse out', () => {
      const { getByTestId } = render(<BasicExample />);
      const label = getByTestId('label');
      const select = getByTestId('select');

      fireEvent.mouseEnter(label);
      fireEvent.mouseLeave(label);

      expect(select).not.toHaveClass('is-hovered');
    });

    it('focuses select if clicked', () => {
      const { getByTestId } = render(<BasicExample />);

      fireEvent.click(getByTestId('label'));

      expect(getByTestId('select')).toHaveFocus();
    });
  });

  it('does not throw if invalid element is provided as child', () => {
    expect(() => {
      render(
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
