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

const items = [
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

  return (
    <Dropdown
      inputValue={inputValue}
      onInputValueChange={value => setInputValue(value)}
      onStateChange={({ highlightedIndex }) => {
        if (highlightedIndex !== null && highlightedIndex !== undefined) {
          setInputValue(items[highlightedIndex]);
        }
      }}
    >
      <Field>
        <Label>Combobox</Label>
        <Combobox placeholder="test" start={<SearchIcon />} />
      </Field>
      <Menu>
        {items.map(item => (
          <Item key={item} value={item}>
            <span>{item}</span>
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};
