/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Draggable, IDraggableProps } from '@zendeskgarden/react-draggable';

interface IArgs extends IDraggableProps {
  hasGrip?: boolean;
}

export const DraggableStory: StoryFn<IArgs> = ({ hasGrip, children, ...args }) => (
  <Draggable {...args}>
    {!!hasGrip && <Draggable.Grip />}
    {!!children && <Draggable.Content>{children}</Draggable.Content>}
  </Draggable>
);
