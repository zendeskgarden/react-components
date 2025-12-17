/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Fragment } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Draggable, IDraggableListProps, DraggableList } from '@zendeskgarden/react-draggable';

interface IArgs extends IDraggableListProps {
  items: string[];
  indicatorIndex?: number;
  ariaLabel?: string;
}

export const DraggableListStory: StoryFn<IArgs> = ({
  items,
  indicatorIndex,
  'aria-label': ariaLabel,
  ...args
}: IArgs) => (
  <DraggableList {...args}>
    {indicatorIndex === 0 && <DraggableList.DropIndicator aria-label={ariaLabel} />}

    {items.map((item, idx) => {
      const innerStartIdx = 1;
      const endIdx = items.length - 1;

      return (
        <Fragment key={item}>
          {typeof indicatorIndex === 'number' &&
            indicatorIndex >= innerStartIdx &&
            indicatorIndex <= endIdx &&
            indicatorIndex === idx && <DraggableList.DropIndicator aria-label={ariaLabel} />}
          <DraggableList.Item>
            <Draggable>
              <Draggable.Grip />
              <Draggable.Content>{item}</Draggable.Content>
            </Draggable>
          </DraggableList.Item>
        </Fragment>
      );
    })}

    {indicatorIndex === items.length && <DraggableList.DropIndicator aria-label={ariaLabel} />}
  </DraggableList>
);
