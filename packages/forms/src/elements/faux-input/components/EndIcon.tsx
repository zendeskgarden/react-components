/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IFauxInputIconProps } from '../../../types';
import { StyledTextMediaFigure } from '../../../styled';

const EndIconComponent = ({ isDisabled, isRotated, ...props }: IFauxInputIconProps) => (
  <StyledTextMediaFigure
    $position="end"
    $isDisabled={isDisabled}
    $isRotated={isRotated}
    {...props}
  />
);

EndIconComponent.displayName = 'FauxInput.EndIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const EndIcon = EndIconComponent;
