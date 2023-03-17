/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Draggable, IDraggableProps } from '@zendeskgarden/react-drag-drop';
import { IconButton } from '@zendeskgarden/react-buttons';
import { MD, SM } from '@zendeskgarden/react-typography';
import Icon from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';

interface IArgs extends IDraggableProps {
  label: string;
  caption?: string;
  hasAction?: boolean;
  isFocusable?: boolean;
}

export const DraggableStory: Story<IArgs> = ({
  label,
  caption,
  hasAction,
  isFocusable,
  ...args
}) => (
  <Draggable {...args} tabIndex={isFocusable ? 0 : undefined}>
    <Draggable.Grip />
    <Draggable.Content>
      <MD isBold>{label}</MD>
      {caption && <SM>{caption}</SM>}
    </Draggable.Content>
    {hasAction && !isFocusable && (
      <IconButton size="small">
        <Icon />
      </IconButton>
    )}
  </Draggable>
);
