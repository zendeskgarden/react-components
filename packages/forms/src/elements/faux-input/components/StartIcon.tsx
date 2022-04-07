/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IFauxInputIconProps } from '../../../types';
import { StyledTextMediaFigure } from '../../../styled';

const StartIconComponent = (props: IFauxInputIconProps) => (
  <StyledTextMediaFigure position="start" {...props} />
);

StartIconComponent.displayName = 'FauxInput.StartIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const StartIcon = StartIconComponent;
