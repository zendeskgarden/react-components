/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledTitle } from '../../views/tooltip/StyledTitle';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tooltip.Title` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledTitle
    ref={ref}
    {...props}
    data-garden-id={COMPONENT_IDS['tooltip.title']}
    data-garden-version={PACKAGE_VERSION}
  />
));

Title.displayName = 'Tooltip.Title';
