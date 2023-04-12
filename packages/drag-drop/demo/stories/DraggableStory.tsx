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
  hasGrip?: boolean;
  content?: string;
}

export const DraggableStory: Story<IArgs> = ({ hasGrip, content, ...args }) => (
  <Draggable {...args}>
    {hasGrip && <Draggable.Grip />}
    {content && <Draggable.Content>{content}</Draggable.Content>}
  </Draggable>
);
