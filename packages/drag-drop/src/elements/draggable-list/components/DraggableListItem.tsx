/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';
import { StyledDraggableListItem } from '../../../styled';

const DraggableListItemComponent = forwardRef<
  HTMLLIElement,
  PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>
>((props, ref) => <StyledDraggableListItem {...props} ref={ref} />);

DraggableListItemComponent.displayName = 'DraggableList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DraggableListItem = DraggableListItemComponent;
