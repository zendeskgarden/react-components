/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import {
  Combobox,
  Field,
  IComboboxProps,
  IMenuProps,
  Item,
  Menu,
  OptGroup,
  Option,
  Separator
} from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';
import { Span } from '@zendeskgarden/react-typography';
import React, { useEffect, useState } from 'react';

import { ITEMS, OPTIONS, SUB_ITEMS, SUB_OPTION_VALUES, SUB_OPTIONS } from './data';

export const NestedStory: StoryFn<IMenuProps> = args => {
  const [items, setItems] = useState(ITEMS);
  const [options, setOptions] = useState(OPTIONS);
  const [state, setState] = useState<{
    inputValue: NonNullable<IComboboxProps['inputValue']>;
    isExpanded: NonNullable<IComboboxProps['isExpanded']>;
    selectionValue: NonNullable<IComboboxProps['selectionValue']> | null;
  }>({
    inputValue: '',
    isExpanded: false,
    selectionValue: null
  });
  const hasSelection =
    state.selectionValue !== null && SUB_OPTION_VALUES.includes(state.selectionValue as string);

  const handleComboboxChange: IComboboxProps['onChange'] = changes => {
    if (changes.selectionValue === 'Berry') {
      setOptions(SUB_OPTIONS);
    } else if (changes.selectionValue === 'Fruits') {
      setOptions(OPTIONS);
    } else {
      setState({
        inputValue: changes.inputValue || state.inputValue,
        isExpanded: changes.isExpanded === undefined ? state.isExpanded : changes.isExpanded,
        selectionValue:
          changes.selectionValue === undefined ? state.selectionValue : changes.selectionValue
      });
    }
  };

  const handleMenuChange: IMenuProps['onChange'] = ({ type, isExpanded }) => {
    if (type.includes('next')) {
      setItems(SUB_ITEMS);
    } else if (type.includes('previous') || isExpanded === false) {
      setItems(ITEMS);
    }
  };

  useEffect(() => {
    // Reset options on listbox collapse
    let timeout: NodeJS.Timeout;

    if (!state.isExpanded) {
      timeout = setTimeout(() => {
        setOptions(OPTIONS);
      }, 200 /* match listbox opacity transition */);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state.isExpanded]);

  return (
    <Grid>
      <Grid.Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col alignSelf="center" sm={5} textAlign="center">
          <Field>
            <Field.Label hidden>Nested</Field.Label>
            <Combobox isEditable={false} onChange={handleComboboxChange} {...state}>
              {options.map((option, index) =>
                'options' in option ? (
                  <OptGroup key={index} aria-label={option['aria-label']}>
                    {option.options.map(subOption => (
                      <Option key={subOption.value} {...subOption} />
                    ))}
                  </OptGroup>
                ) : (
                  <Option
                    key={option.value}
                    hasSelection={option.type === 'next' && hasSelection}
                    {...option}
                  >
                    {option.value}
                    {option.type === 'next' && !!hasSelection && (
                      <Span hidden>(contains a selected option)</Span>
                    )}
                  </Option>
                )
              )}
            </Combobox>
          </Field>
        </Grid.Col>
        <Grid.Col alignSelf="center" sm={5} textAlign="center">
          <div style={{ display: 'inline-block', position: 'relative', width: 300 }}>
            <Menu {...args} button="Menu" onChange={handleMenuChange}>
              {items.map(item =>
                'isSeparator' in item ? (
                  <Separator key={item.value} />
                ) : (
                  <Item key={item.value} {...item}>
                    {item.value}
                    {item.type === 'next' && <Span hidden>Go to submenu</Span>}
                    {item.type === 'previous' && <Span hidden>Go to previous menu</Span>}
                  </Item>
                )
              )}
            </Menu>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
