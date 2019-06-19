/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import debounce from 'lodash.debounce';

import { zdSpacingSm } from '@zendeskgarden/css-variables';
import { Dropdown, Menu, Item, Field, Label, Hint, Autocomplete } from '..';

const StyledExampleContainer = styled.div.attrs({ 'data-another': true })`
  min-width: 350px;
  min-height: 400px;
`;

storiesOf('Dropdowns.Autocomplete', module)
  .addDecorator(storyFn => <StyledExampleContainer>{storyFn()}</StyledExampleContainer>)
  .addDecorator(centered)
  .add(
    'default usage with debounce',
    () => {
      const StyledEmoji = styled.span`
        margin-right: ${zdSpacingSm};
      `;

      return React.createElement(() => {
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

        const [selectedItem, setSelectedItem] = useState(options[0]);
        const [inputValue, setInputValue] = useState('');
        const [matchingOptions, setMatchingOptions] = useState(options);

        /**
         * Debounce filtering
         */
        const filterMatchingOptionsRef = React.useRef(
          debounce(value => {
            const updatedMatchingOptions = options.filter(option => {
              return (
                option
                  .trim()
                  .toLowerCase()
                  .indexOf(value.trim().toLowerCase()) !== -1
              );
            });

            setMatchingOptions(updatedMatchingOptions);
          }, 300)
        );

        useEffect(() => {
          filterMatchingOptionsRef.current(inputValue);
        }, [inputValue]);

        const renderOptions = () => {
          if (matchingOptions.length === 0) {
            return <Item disabled>No matches found</Item>;
          }

          return matchingOptions.map(option => (
            <Item key={option} value={option}>
              {option}
            </Item>
          ));
        };

        return (
          <Dropdown
            inputValue={inputValue}
            selectedItem={selectedItem}
            onSelect={(item: any) => {
              setSelectedItem(item);
              action('on-select')(item);
            }}
            onStateChange={(changes: any) => {
              if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
                setInputValue(changes.inputValue);
              }
            }}
            downshiftProps={{ defaultHighlightedIndex: 0 }}
          >
            <Field>
              <Label>Autocomplete with debounce</Label>
              <Hint>This example includes basic debounce logic using Hooks</Hint>
              <Autocomplete>
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <StyledEmoji aria-label="Garden emoji" role="img">
                  🌱
                </StyledEmoji>
                {selectedItem}
              </Autocomplete>
            </Field>
            <Menu
              small={boolean('small', false)}
              maxHeight={text('maxHeight', '260px')}
              animate={boolean('animate', true)}
            >
              {renderOptions()}
            </Menu>
          </Dropdown>
        );
      });
    },
    {
      notes: {
        markdown: `
    The \`<Dropdown>\` package does not include any filtering logic. The simplest way to
    perform filtering is to control the \`inputValue\` and \`onInputValueChange\` props and
    conditionally render \`<Item>\`s as necessary.
      `
      }
    }
  );
