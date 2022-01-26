/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes } from 'react';
import { StyledIcon } from '../../styled';

export interface IButtonEndIconProps extends SVGAttributes<SVGElement> {
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}

const EndIconComponent = (props: IButtonEndIconProps) => <StyledIcon position="end" {...props} />;

EndIconComponent.displayName = 'Button.EndIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const EndIcon = EndIconComponent;
