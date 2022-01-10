/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, SVGAttributes } from 'react';
import { StyledIcon } from '../../styled';

export interface IButtonStartIconProps extends SVGAttributes<SVGElement> {
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}

const StartIconComponent = forwardRef<SVGElement, IButtonStartIconProps>((props, ref) => (
  <StyledIcon position="start" ref={ref} {...props} />
));

StartIconComponent.displayName = 'Button.StartIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const StartIcon = StartIconComponent;
