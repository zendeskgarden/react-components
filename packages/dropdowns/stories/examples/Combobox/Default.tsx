/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Dropdown,
  Field,
  Hint,
  Item,
  Label,
  Menu,
  Message
} from '@zendeskgarden/react-dropdowns';
import SearchIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

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

export const Default: Story = ({
  hidden,
  isCompact,
  isBare,
  disabled,
  focusInset,
  placeholder,
  start,
  end,
  validation,
  hint,
  message
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Grid>
      <Row justifyContent="center">
        <Col sm={5}>
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
              <Label hidden={hidden}>Combobox</Label>
              {hint && <Hint>Hint text</Hint>}
              <Combobox
                isCompact={isCompact}
                isBare={isBare}
                disabled={disabled}
                focusInset={focusInset}
                placeholder={placeholder}
                start={start && <SearchIcon />}
                end={end && <LeafIcon />}
                validation={validation}
              />
              {message && <Message validation={validation}>Message</Message>}
            </Field>
            <Menu isCompact={isCompact}>
              {items.map(item => (
                <Item key={item} value={item}>
                  <span>{item}</span>
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  hidden: { name: 'hidden label', control: 'boolean' },
  start: { name: 'start icon', control: 'boolean' },
  end: { name: 'end icon', control: 'boolean' }
};

Default.args = {
  placeholder: 'Search',
  start: true,
  hint: true,
  message: true
};
