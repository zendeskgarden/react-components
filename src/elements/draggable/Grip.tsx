/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';
import GripIcon from 'svg-icons-legacy/src/12/grip.svg';

import { StyledGrip } from '../../views/draggable/StyledGrip';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Grip = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledGrip
    {...props}
    data-garden-id={COMPONENT_IDS['draggable.grip']}
    data-garden-version={PACKAGE_VERSION}
    ref={ref}
  >
    <GripIcon />
  </StyledGrip>
));

Grip.displayName = 'Draggable.Grip';
