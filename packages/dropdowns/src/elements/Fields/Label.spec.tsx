/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Menu, Item, Field, Label, Select } from '../..';

describe('Label', () => {
  it('applies hover styling through context with onMouseEnter', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Test Label</Label>
          <Select data-test-id="select">Select</Select>
        </Field>
        <Menu>
          <Item value="item-1">Item 1</Item>
        </Menu>
      </Dropdown>
    );

    fireEvent.mouseEnter(getByTestId('label'));
    expect(getByTestId('select')).toHaveAttribute('data-test-is-hovered', 'true');
  });

  it('remove hover styling through context with onMouseLeave', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Test Label</Label>
          <Select data-test-id="select">Select</Select>
        </Field>
        <Menu>
          <Item value="item-1">Item 1</Item>
        </Menu>
      </Dropdown>
    );

    const label = getByTestId('label');

    fireEvent.mouseEnter(label);
    fireEvent.mouseLeave(label);

    expect(getByTestId('select')).not.toHaveClass('is-hovered');
  });

  it('opens dropdown with onClick', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Test Label</Label>
          <Select data-test-id="select">Select</Select>
        </Field>
        <Menu>
          <Item value="item-1">Item 1</Item>
        </Menu>
      </Dropdown>
    );

    fireEvent.click(getByTestId('label'));
    expect(getByTestId('select')).toHaveAttribute('data-test-is-open', 'true');
  });
});
