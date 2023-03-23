/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledContent } from '../../../styled';

const ContentComponent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>((props, ref) => <StyledContent {...props} ref={ref} />);

ContentComponent.displayName = 'Draggable.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
