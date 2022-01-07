/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonGroup, IButtonProps } from '@zendeskgarden/react-buttons';
import { IButtonGroupButtons } from './types';

interface IArgs extends IButtonProps {
  buttons: IButtonGroupButtons[];
  selectedItem: unknown;
  onSelect: (item: unknown) => void;
}

export const ButtonGroupStory: Story<IArgs> = ({ selectedItem, onSelect, buttons, ...args }) => (
  <ButtonGroup selectedItem={selectedItem} onSelect={onSelect}>
    {buttons.map((button, index) => (
      <Button key={index} value={button.value} {...args}>
        {button.text}
      </Button>
    ))}
  </ButtonGroup>
);
