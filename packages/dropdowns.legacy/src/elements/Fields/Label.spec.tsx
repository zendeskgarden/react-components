/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { Dropdown, Menu, Item, Field, Label, Select } from '../..';

describe('Label', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLabelElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Field>
          <Label data-test-id="label" ref={ref}>
            Label
          </Label>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('label')).toBe(ref.current);
  });

  it('applies hover styling through context with onMouseEnter', async () => {
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

    await user.hover(getByTestId('label'));

    expect(getByTestId('select')).toHaveAttribute('data-test-is-hovered', 'true');
  });

  it('remove hover styling through context with onMouseLeave', async () => {
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

    await user.hover(label);
    await user.unhover(label);

    expect(getByTestId('select')).not.toHaveClass('is-hovered');
  });

  it('opens dropdown with onClick', async () => {
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

    await user.click(getByTestId('label'));
    expect(getByTestId('select')).toHaveAttribute('data-test-is-open', 'true');
  });
});
