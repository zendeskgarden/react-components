/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledContent } from '../../views/draggable/StyledContent';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledContent
    {...props}
    data-garden-id={COMPONENT_IDS['draggable.content']}
    data-garden-version={PACKAGE_VERSION}
    ref={ref}
  />
));

Content.displayName = 'Draggable.Content';
