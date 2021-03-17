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
  Hint,
  Message
} from '@zendeskgarden/react-dropdowns';
import { Col, Row } from '@zendeskgarden/react-grid';
import debounce from 'lodash.debounce';
import { VALIDATION } from '../../../src/utils/validation';
import StarStrokeIcon from '@zendeskgarden/svg-icons/src/12/star-stroke.svg';

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
  isHidden: boolean;
  focusInset: boolean;
  validation: VALIDATION;
  showHint: boolean;
  showMessage: boolean;
  disabled: boolean;
  showStartIcon: boolean;
}

export const Default: Story<IStoryProps> = ({
  isCompact,
  isBare,
  isHidden,
  focusInset,
  validation,
  showHint,
  showMessage,
  disabled,
  showStartIcon
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
            <Label hidden={isHidden}>Choose a vegetable</Label>
            {showHint && <Hint>Veggies are good for you</Hint>}
            <Autocomplete
              focusInset={focusInset}
              isCompact={isCompact}
              isBare={isBare}
              validation={validation}
              disabled={disabled}
              start={showStartIcon && <StarStrokeIcon />}
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
  isHidden: { name: 'Hidden label', control: 'boolean' },
  isOpen: { name: 'isOpen', control: 'disabled' },
  showHint: { name: 'Hint' },
  showMessage: { name: 'Message' },
  showStartIcon: { name: 'Show start icon', control: 'boolean' }
};

Default.args = {
  showHint: true,
  showMessage: true
};
