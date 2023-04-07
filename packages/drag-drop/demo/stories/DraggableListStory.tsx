/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Fragment } from 'react';
import { Story } from '@storybook/react';
import { Draggable, IDraggableListProps, DraggableList } from '@zendeskgarden/react-drag-drop';

interface IArgs extends IDraggableListProps {
  items: string[];
  dropIndicatorIndex?: number;
}

export const DraggableListStory: Story<IArgs> = ({ items, dropIndicatorIndex, ...args }: IArgs) => (
  <DraggableList {...args}>
    {dropIndicatorIndex === 0 && <DraggableList.DropIndicator />}

    {items.map((item, idx) => {
      const innerStartIdx = 1;
      const endIdx = items.length - 1;

      return (
        <Fragment key={item}>
          {typeof dropIndicatorIndex === 'number' &&
            dropIndicatorIndex >= innerStartIdx &&
            dropIndicatorIndex <= endIdx &&
            dropIndicatorIndex === idx && <DraggableList.DropIndicator />}
          <DraggableList.Item>
            <Draggable tabIndex={0}>
              <Draggable.Grip />
              <Draggable.Content>{item}</Draggable.Content>
            </Draggable>
          </DraggableList.Item>
        </Fragment>
      );
    })}

    {dropIndicatorIndex === items.length && <DraggableList.DropIndicator />}
  </DraggableList>
);
