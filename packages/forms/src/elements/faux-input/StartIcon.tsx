/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, SVGAttributes } from 'react';
import { StyledTextMediaFigure } from '../../styled';

export interface IFauxInputStartIconProps extends SVGAttributes<SVGElement> {
  /** Applies hover styling */
  isHovered?: boolean;
  /** Applies focus styling */
  isFocused?: boolean;
  /** Applies disabled styling */
  isDisabled?: boolean;
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
}

const StartIconComponent = forwardRef<Element, IFauxInputStartIconProps>((props, ref) => (
  <StyledTextMediaFigure position="start" ref={ref} {...props} />
));

StartIconComponent.displayName = 'FauxInput.StartIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const StartIcon = StartIconComponent;
