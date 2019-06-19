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
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button, IconButton, Icon } from '@zendeskgarden/react-buttons';
import { zdColorGrey200 } from '@zendeskgarden/css-variables';
import SettingsIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import GroupIcon from '@zendeskgarden/svg-icons/src/16/user-group-stroke.svg';
import ClipboardSvg from '@zendeskgarden/svg-icons/src/12/clipboard-list-stroke.svg';
import BoxSvg from '@zendeskgarden/svg-icons/src/12/box-3d-stroke.svg';
import DatabaseSvg from '@zendeskgarden/svg-icons/src/12/database-stroke.svg';
import {
  Dropdown,
  Trigger,
  Menu,
  Item,
  HeaderItem,
  Separator,
  MediaItem,
  MediaBody,
  MediaFigure,
  ItemMeta,
  PreviousItem,
  NextItem,
  GARDEN_PLACEMENTS
} from '..';

const GARDEN_PLACEMENT_OPTIONS = Object.values(GARDEN_PLACEMENTS);

storiesOf('Dropdowns.Menu', module)
  .addDecorator(centered)
  .add(
    'default usage',
    () => (
      <Dropdown onSelect={action('item-selected')}>
        <Trigger>
          <Button>Default Menu</Button>
        </Trigger>
        <Menu
          placement={select('placement', GARDEN_PLACEMENT_OPTIONS, GARDEN_PLACEMENTS.BOTTOM_START)}
          arrow={boolean('arrow', false)}
          small={boolean('small', false)}
          maxHeight={text('maxHeight', '400px')}
          animate={boolean('animate', true)}
        >
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    ),
    {
      notes: {
        markdown: `
For all examples the \`<Menu>\` implementations are interchangeable.
      `
      }
    }
  )
  .add('IconButton usage', () => (
    <Dropdown onSelect={action('item-selected')}>
      <Trigger>
        <IconButton aria-label="Settings" title="Settings">
          <Icon>
            <SettingsIcon />
          </Icon>
        </IconButton>
      </Trigger>
      <Menu
        placement={select('placement', GARDEN_PLACEMENT_OPTIONS, GARDEN_PLACEMENTS.END)}
        arrow={boolean('arrow', true)}
        small={boolean('small', false)}
        maxHeight={text('maxHeight', '400px')}
        animate={boolean('animate', true)}
      >
        <Item value="option-1">Option 1</Item>
        <Item value="option-2">Option 2</Item>
        <Item value="option-3">Option 3</Item>
      </Menu>
    </Dropdown>
  ))
  .add(
    'advanced layout',
    () => {
      const StyledItemWrapper = styled.div`
        display: flex;

        /* stylelint-disable */
        li:not(:last-child) {
          border-right: 1px solid ${zdColorGrey200};
        }
      `;

      return React.createElement(() => {
        const [isOpen, setIsOpen] = useState<boolean>(false);

        return (
          <Dropdown
            isOpen={isOpen}
            onStateChange={(changes: any) => {
              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                setIsOpen(changes.isOpen);
              }
            }}
            onSelect={action('item-selected')}
          >
            <Trigger>
              <Button active={isOpen}>Advanced Layout</Button>
            </Trigger>
            <Menu placement="end" arrow>
              <HeaderItem>Header Item</HeaderItem>
              <Separator />
              <Item value="profile">Option 1</Item>
              <Item value="settings">Option 2</Item>
              <Item disabled>Disabled item</Item>
              <Separator />
              <MediaItem value="image">
                <MediaFigure>
                  <img src="images/amir.png" alt="Example Avatar" />
                </MediaFigure>
                <MediaBody>
                  Image Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="icon">
                <MediaFigure>
                  <GroupIcon />
                </MediaFigure>
                <MediaBody>
                  Icon Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <Separator />
              <StyledItemWrapper>
                <Item value="clipboard-action">
                  <ClipboardSvg />
                </Item>
                <Item value="box-action">
                  <BoxSvg />
                </Item>
                <Item value="database-action">
                  <DatabaseSvg />
                </Item>
              </StyledItemWrapper>
            </Menu>
          </Dropdown>
        );
      });
    },
    {
      notes: {
        markdown: `
All \`Item\` components are able to be wrapped and extended with styling libraries or
other layout divs. All necessary information is provided through the \`Context\` API.

All \`Items\` require a \`value\` prop that is provided with the \`onSelect\` callback.
Any object or value can be provided.
  `
      }
    }
  )
  .add(
    'async loading',
    () =>
      React.createElement(() => {
        const [isOpen, setIsOpen] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        return (
          <Dropdown
            onSelect={action('item-selected')}
            isOpen={isOpen}
            onStateChange={(changes: any) => {
              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                setIsOpen(changes.isOpen);

                if (changes.isOpen) {
                  setIsLoading(true);

                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                }
              }
            }}
          >
            <Trigger>
              <Button active={isOpen}>Async Loading</Button>
            </Trigger>
            <Menu placement="end" arrow>
              {isLoading ? (
                <Item disabled>Loading...</Item>
              ) : (
                <>
                  <Item value="option-1">Option 1</Item>
                  <Item value="option-2">Option 2</Item>
                  <Item value="option-3">Option 3</Item>
                </>
              )}
            </Menu>
          </Dropdown>
        );
      }),
    {
      notes: {
        markdown: `
You may delay rendering of items if loading is asynchronous. Re-renders will cause Downshift to reapply the required accessibility and interaction attributes.
        `
      }
    }
  )
  .add(
    'tree layouts',
    () =>
      React.createElement(() => {
        const [isOpen, setIsOpen] = useState(false);
        const [tempSelectedItem, setTempSelectedItem] = useState<string | undefined>(undefined);

        const renderItems = () => {
          if (tempSelectedItem === 'specific-settings') {
            return (
              <>
                <PreviousItem value="general-settings">Specific Settings</PreviousItem>
                <Separator />
                <Item value="cool-setting">Cool setting</Item>
                <Item value="uncool-setting">Uncool setting</Item>
                <Item value="another-setting">Another cool setting</Item>
              </>
            );
          }

          return (
            <>
              <HeaderItem>General Settings</HeaderItem>
              <Separator />
              <Item value="profile">Profile</Item>
              <Item value="settings">Settings</Item>
              <Item value="user-images">User Images</Item>
              <NextItem value="specific-settings">Specific Settings</NextItem>
              <Item value="theme-editor">Theme Editor</Item>
            </>
          );
        };

        return (
          <Dropdown
            isOpen={isOpen}
            onStateChange={(changes: any, stateAndHelpers: any) => {
              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                setIsOpen(
                  changes.selectedItem === 'specific-settings' ||
                    changes.selectedItem === 'general-settings' ||
                    changes.isOpen
                );
              }

              if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
                setTempSelectedItem(changes.selectedItem);

                if (changes.selectedItem === 'specific-settings') {
                  stateAndHelpers.setHighlightedIndex(1);
                } else if (changes.selectedItem === 'general-settings') {
                  stateAndHelpers.setHighlightedIndex(3);
                }
              }
            }}
          >
            <Trigger>
              <Button>Tree Layout</Button>
            </Trigger>
            <Menu placement="end" arrow style={{ width: 200, height: 270 }}>
              {renderItems()}
            </Menu>
          </Dropdown>
        );
      }),
    {
      notes: {
        markdown: `
The \`NextItem\` and \`PreviousItem\` components are wrappers around the
default \`Item\` component, but enable additional RTL-aware keyboard navigation.

To handle the open/close state based on selection you may control it
with the \`isOpen\` and \`onOpen\` props.
      `
      }
    }
  );
