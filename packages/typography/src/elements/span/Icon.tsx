/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes } from 'react';
import { StyledIcon } from '../../styled';

const IconComponent = (props: SVGAttributes<SVGElement>) => <StyledIcon {...props} />;

IconComponent.displayName = 'Span.Icon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const Icon = IconComponent;
