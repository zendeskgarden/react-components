/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Story } from '@storybook/react';
import { Tag } from '@zendeskgarden/react-tags';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Item,
  Hint,
  Menu,
  Label,
  Field,
  Dropdown,
  Multiselect,
  Message
} from '@zendeskgarden/react-dropdowns';
import { VALIDATION } from '../../../src/utils/validation';
import StarStrokeIcon from '@zendeskgarden/svg-icons/src/12/star-stroke.svg';

interface IStoryProps {
  placement:
    | 'auto'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'end'
    | 'end-top'
    | 'end-bottom'
    | 'start'
    | 'start-top'
    | 'start-bottom';
  isAnimated: boolean;
  hasArrow: boolean;
  isCompact: boolean;
  isBare: boolean;
  disabled: boolean;
  focusInset: boolean;
  placeholder: string;
  validation: VALIDATION;
  maxItems: number;
  showMessage: boolean;
  showStartIcon: boolean;
}

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

export const Default: Story<IStoryProps> = ({
  isAnimated,
  placement,
  isCompact,
  isBare,
  disabled,
  focusInset,
  placeholder,
  validation,
  maxItems,
  showMessage,
  showStartIcon
}) => {
  const [selectedItems, setSelectedItems] = useState([
    options[0],
    options[1],
    options[2],
    options[3],
    options[4],
    options[5]
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState(options);

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const filteredOptions = options.filter(option => {
        return option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
      });

      setMatchingOptions(filteredOptions);
      setIsLoading(false);
    }, 300)
  );

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading items...</Item>;
    }

    if (matchingOptions.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Grid>
      <Row justifyContent="center" style={{ minHeight: 500 }}>
        <Col>
          <Dropdown
            inputValue={inputValue}
            selectedItems={selectedItems}
            onSelect={items => setSelectedItems(items)}
            downshiftProps={{ defaultHighlightedIndex: 0 }}
            onInputValueChange={value => setInputValue(value)}
          >
            <Field>
              <Label>Multiselect with debounce</Label>
              <Hint>This example includes basic debounce logic</Hint>
              <Multiselect
                renderItem={({ value, removeValue }) => (
                  <Tag>
                    <span>{value}</span>
                    <Tag.Close onClick={() => removeValue()} />
                  </Tag>
                )}
                isCompact={isCompact}
                isBare={isBare}
                disabled={disabled}
                focusInset={focusInset}
                placeholder={placeholder}
                validation={validation}
                maxItems={maxItems}
                start={showStartIcon && <StarStrokeIcon />}
              />
              {showMessage && <Message validation={validation}>Message</Message>}
            </Field>
            <Menu placement={placement} isCompact={isCompact} isAnimated={isAnimated}>
              {renderOptions()}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  showMessage: {
    name: 'Message',
    control: 'boolean'
  },
  isAnimated: { name: 'isAnimated', control: 'boolean' },
  placement: {
    name: 'Placement',
    control: {
      type: 'select',
      options: [
        'auto',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'end',
        'end-top',
        'end-bottom',
        'start',
        'start-top',
        'start-bottom'
      ]
    }
  },
  isCompact: { name: 'isCompact', control: 'boolean' },
  isBare: { name: 'isBare', control: 'boolean' },
  disabled: { name: 'disabled', control: 'boolean' },
  focusInset: { name: 'focusInset', control: 'boolean' },
  placeholder: { name: 'placeholder', control: 'text' },
  validation: {
    name: 'validation',
    control: {
      type: 'radio',
      options: ['success', 'error', 'warning']
    }
  },
  maxItems: { name: 'maxItems', control: 'number' },
  showStartIcon: { name: 'Show start icon', control: 'boolean' }
};

Default.args = {
  placement: 'bottom'
};

Default.parameters = {
  docs: {
    description: {
      component: `
When building a table with the \`react-tables\` package follow the
[MDN Table Accessibility Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
guidelines to ensure your implementation is accessible to screen-readers.
      `
    }
  }
};
