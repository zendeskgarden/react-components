/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { FC, SVGAttributes } from 'react';

import { StyledIcon } from '../../views/typography/StyledIcon';
import { COMPONENT_IDS } from '../utils';

const IconComponent: FC<SVGAttributes<SVGElement>> = props => (
  <StyledIcon
    {...props}
    data-garden-id={COMPONENT_IDS['typography.icon']}
    data-garden-version={PACKAGE_VERSION}
  />
);

IconComponent.displayName = 'Span.Icon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const Icon = IconComponent;
