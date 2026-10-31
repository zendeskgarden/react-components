/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { FC } from 'react';

import { IButtonIconProps } from '../../types/elements';
import { StyledIcon } from '../../views/button/StyledIcon';
import { COMPONENT_IDS } from '../utils';

const EndIconComponent: FC<IButtonIconProps> = ({ isRotated, ...props }) => (
  <StyledIcon
    $position="end"
    $isRotated={isRotated}
    {...props}
    data-garden-id={COMPONENT_IDS['buttons.icon']}
    data-garden-version={PACKAGE_VERSION}
  />
);

EndIconComponent.displayName = 'Button.EndIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const EndIcon = EndIconComponent;
