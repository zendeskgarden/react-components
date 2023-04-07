/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Draggable, IDraggableProps } from '@zendeskgarden/react-drag-drop';

interface IArgs extends IDraggableProps {
  label: string;
  caption?: string;
  hasAction?: boolean;
}

export const DraggableStory: Story<IArgs> = ({ children, ...args }) => (
  <Draggable {...args}>
    <Draggable.Grip />
    <Draggable.Content>{children}</Draggable.Content>
  </Draggable>
);
