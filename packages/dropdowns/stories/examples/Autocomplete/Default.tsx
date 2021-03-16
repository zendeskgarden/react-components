/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, useEffect } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  Menu,
  Autocomplete,
  Field,
  Label,
  Item,
  Message
} from '@zendeskgarden/react-dropdowns';
import { Col, Row } from '@zendeskgarden/react-grid';
import debounce from 'lodash.debounce';
import { VALIDATION } from '../../../src/utils/validation';

const options = [
  'Asparagus',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini'
];

interface IStoryProps {
  isCompact: boolean;
  isBare: boolean;
  focusInset: boolean;
  validation: VALIDATION;
  showMessage: boolean;
  disabled: boolean;
}

export const Default: Story<IStoryProps> = ({
  isCompact,
  isBare,
  focusInset,
  validation,
  showMessage,
  disabled
}) => {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState(options);

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(
        option => option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      );

      setMatchingOptions(matchedOptions);
    }, 300)
  );

  useEffect(() => {
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  return (
    <Row justifyContent="center" style={{ minHeight: 450 }}>
      <Col md={3}>
        <Dropdown
          inputValue={inputValue}
          selectedItem={selectedItem}
          onSelect={item => setSelectedItem(item)}
          onInputValueChange={value => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Choose a vegetable</Label>
            <Autocomplete
              focusInset={focusInset}
              isCompact={isCompact}
              isBare={isBare}
              validation={validation}
              disabled={disabled}
            >
              {selectedItem}
            </Autocomplete>
            {showMessage && <Message validation={validation}>Message</Message>}
          </Field>
          <Menu isCompact={isCompact}>
            {matchingOptions.length ? (
              matchingOptions.map(option => (
                <Item key={option} value={option}>
                  <span>{option}</span>
                </Item>
              ))
            ) : (
              <Item disabled>No matches found</Item>
            )}
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

Default.argTypes = {
  isCompact: { name: 'isCompact', control: 'boolean' },
  isOpen: { name: 'isOpen', control: 'disabled' }
};

Default.args = {
  showMessage: false
};
