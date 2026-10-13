/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Draggable, IDraggableProps } from '../../../src/index';

interface IArgs extends IDraggableProps {
  hasGrip?: boolean;
}

export const DraggableStory = ({ hasGrip, children, ...args }: IArgs) => (
  <Draggable {...args}>
    {!!hasGrip && <Draggable.Grip />}
    {!!children && <Draggable.Content>{children}</Draggable.Content>}
  </Draggable>
);
