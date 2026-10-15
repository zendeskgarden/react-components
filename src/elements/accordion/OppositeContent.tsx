/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledOppositeContent } from '../../views/accordion/StyledOppositeContent';
import { COMPONENT_IDS } from '../utils';

const OppositeContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <StyledOppositeContent
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['timeline.opposite.content']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

OppositeContentComponent.displayName = 'Timeline.OppositeContent';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const OppositeContent = OppositeContentComponent;
