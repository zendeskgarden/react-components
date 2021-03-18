/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  Menu,
  Trigger,
  Item,
  HeaderItem,
  PreviousItem,
  NextItem,
  Separator
} from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

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
  hasArrow: boolean;
  isAnimated: boolean;
  isCompact: boolean;
  isDisabled: boolean;
}

export const Tree: Story<IStoryProps> = ({
  hasArrow,
  isAnimated,
  isCompact,
  placement,
  isDisabled
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelectedItem, setTempSelectedItem] = useState();

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
        <Item disabled={isDisabled} value="profile">
          Profile
        </Item>
        <Item disabled={isDisabled} value="settings">
          Settings
        </Item>
        <Item disabled={isDisabled} value="user-images">
          User Images
        </Item>
        <NextItem disabled={isDisabled} value="specific-settings">
          Specific Settings
        </NextItem>
        <Item disabled={isDisabled} value="theme-editor">
          Theme Editor
        </Item>
      </>
    );
  };

  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 250 }}>
        <Col textAlign="center">
          <Dropdown
            isOpen={isOpen}
            onStateChange={(changes, stateAndHelpers) => {
              const updatedState: any = {};

              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                updatedState.isOpen =
                  changes.selectedItem === 'specific-settings' ||
                  changes.selectedItem === 'general-settings' ||
                  changes.isOpen;
              }

              if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
                const updatedtempSelectedItem = changes.selectedItem;

                if (updatedtempSelectedItem === 'specific-settings') {
                  stateAndHelpers.setHighlightedIndex(1);
                } else if (updatedtempSelectedItem === 'general-settings') {
                  stateAndHelpers.setHighlightedIndex(3);
                }
              }

              if (updatedState.isOpen !== undefined) {
                setIsOpen(updatedState.isOpen);
              }

              if (changes.selectedItem !== undefined) {
                setTempSelectedItem(changes.selectedItem);
              }
            }}
          >
            <Trigger>
              <Button size={isCompact ? 'small' : 'medium'}>Tree Layout</Button>
            </Trigger>
            <Menu
              hasArrow={hasArrow}
              isAnimated={isAnimated}
              isCompact={isCompact}
              placement={placement}
            >
              {renderItems()}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Tree.argTypes = {
  hasArrow: { name: 'hasArrow', control: 'boolean' },
  isAnimated: { name: 'isAnimated', control: 'boolean' },
  isCompact: { name: 'isCompact', control: 'boolean' },
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
  isDisabled: { name: 'Disabled items', control: 'boolean' }
};

Tree.args = {
  placement: 'end',
  isAnimated: true
};
