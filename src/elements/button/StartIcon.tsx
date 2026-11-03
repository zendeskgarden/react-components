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

const StartIconComponent: FC<IButtonIconProps> = ({ isRotated, ...props }) => (
  <StyledIcon
    $position="start"
    $isRotated={isRotated}
    {...props}
    data-garden-id={COMPONENT_IDS['buttons.icon']}
    data-garden-version={PACKAGE_VERSION}
  />
);

StartIconComponent.displayName = 'Button.StartIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const StartIcon = StartIconComponent;
