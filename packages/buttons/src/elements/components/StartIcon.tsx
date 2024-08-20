/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IButtonIconProps } from '../../types';
import { StyledIcon } from '../../styled';

const StartIconComponent = ({ isRotated, ...props }: IButtonIconProps) => (
  <StyledIcon $position="start" $isRotated={isRotated} {...props} />
);

StartIconComponent.displayName = 'Button.StartIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const StartIcon = StartIconComponent;
