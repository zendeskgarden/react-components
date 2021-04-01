/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Combobox, Dropdown, Field, Item, Label, Menu } from '@zendeskgarden/react-dropdowns';
import SearchIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const options = [
  'Aster',
  "Bachelor's button",
  'Celosia',
  'Dusty miller',
  'Everlasting winged',
  "Four o'clock",
  'Geranium',
  'Honesty',
  'Impatiens',
  'Johnny jump-up',
  'Kale',
  'Lobelia',
  'Marigold',
  'Nasturtium',
  'Ocimum (basil)',
  'Petunia',
  'Quaking grass',
  'Rose moss',
  'Salvia',
  'Torenia',
  'Ursinia',
  'Verbena',
  'Wax begonia',
  'Xeranthemum',
  'Yellow cosmos',
  'Zinnia'
];

export const Default: Story = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Dropdown
      inputValue={inputValue}
      onInputValueChange={value => setInputValue(value)}
      selectedItem={selectedItem}
      onSelect={item => setSelectedItem(item)}
    >
      <Field>
        <Label>Combobox</Label>
        <Combobox placeholder="test" start={<SearchIcon />} />
      </Field>
      <Menu>
        {options.map(option => (
          <Item key={option} value={option}>
            <span>{option}</span>
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};
