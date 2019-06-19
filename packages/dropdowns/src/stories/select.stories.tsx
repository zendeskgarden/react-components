/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';

import { Dropdown, Menu, Item, Field, Label, Hint, Select } from '..';

const StyledExampleContainer = styled.div.attrs({ 'data-another': true })`
  min-width: 350px;
  min-height: 400px;
`;

storiesOf('Dropdowns.Select', module)
  .addDecorator(storyFn => <StyledExampleContainer>{storyFn()}</StyledExampleContainer>)
  .addDecorator(centered)
  .add(
    'default usage',
    () =>
      React.createElement(() => {
        const options = [
          { label: 'Item 1', value: 'item-1' },
          { label: 'Item 2', value: 'item-2' },
          { label: 'Item 3', value: 'item-3' }
        ];

        const [selectedItem, setSelectedItem] = useState(options[0]);

        return (
          <Dropdown
            selectedItem={selectedItem}
            onSelect={(updatedSelectedItem: any) => {
              setSelectedItem(updatedSelectedItem);
              action('on-select')(updatedSelectedItem);
            }}
            downshiftProps={{ itemToString: (item: any) => item && item.label }}
          >
            <Field>
              <Label>Default Layout</Label>
              <Hint>This is a basic Select</Hint>
              <Select>{selectedItem.label}</Select>
            </Field>
            <Menu
              small={boolean('small', false)}
              maxHeight={text('maxHeight', '400px')}
              animate={boolean('animate', true)}
            >
              {options.map(option => (
                <Item key={option.value} value={option}>
                  {option.label}
                </Item>
              ))}
            </Menu>
          </Dropdown>
        );
      }),
    {
      notes: {
        markdown: `
        The \`<Select>\` and \`<Autocomplete>\` components require a parent \`<Field>\` component.

        This component provides additional styling and attributes necessary
        for an accessible experience. If you do not provide a \`<Label>\` with your implementation
        ensure that an \`aria-label\` is provided with your interactive element.
      `
      }
    }
  )
  .add(
    'advanced customization',
    () => {
      const options = [
        { label: 'Support Green', value: '#78A300' },
        { label: 'Message Green', value: '#37B8AF' },
        { label: 'Explore Blue', value: '#30AABC' },
        { label: 'Guide Pink', value: '#EB4962' },
        { label: 'Connect Red', value: '#EB6651' },
        { label: 'Chat Orange', value: '#F79A3E' },
        { label: 'Talk Yellow', value: '#EFC93D' },
        { label: 'Sell Gold', value: '#D4AE5E' }
      ];

      const ColorSampleSquare = styled.div`
        background-color: ${props => props.color};
        width: 1em;
        height: 1em;
      `;

      const ColorSamplePreview = styled.div`
        display: inline-block;
        cursor: default;
      `;

      const InlineItem = styled.div`
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      `;

      return React.createElement(() => {
        const [selectedItem, setSelectedItem] = useState(options[0]);

        const Color = ({
          name,
          color,
          includeSample
        }: {
          name: string;
          color: string;
          includeSample?: boolean;
        }) =>
          includeSample ? (
            <div>
              <InlineItem>
                <ColorSampleSquare color={color} />
              </InlineItem>
              <InlineItem>{name}</InlineItem>
              <InlineItem>({color})</InlineItem>
            </div>
          ) : (
            <ColorSamplePreview>
              {name} (<span style={{ color }}>{color}</span>)
            </ColorSamplePreview>
          );

        return (
          <Dropdown
            selectedItem={selectedItem}
            onSelect={(updatedSelectedItem: any) => {
              setSelectedItem(updatedSelectedItem);
              action('on-select')(updatedSelectedItem);
            }}
            downshiftProps={{ itemToString: (item: any) => item && item.label }}
          >
            <Field>
              <Label>Product Color</Label>
              <Hint>The branded colors for the Zendesk products</Hint>
              <Select>
                <Color color={selectedItem.value} name={selectedItem.label} />
              </Select>
            </Field>
            <Menu>
              {options.map(option => (
                <Item key={option.value} value={option}>
                  <Color color={option.value} name={option.label} includeSample />
                </Item>
              ))}
            </Menu>
          </Dropdown>
        );
      });
    },
    {
      notes: {
        markdown: `
\`<Item>\`s are able to be nested and customized to show a variety of layouts.
        `
      }
    }
  );
