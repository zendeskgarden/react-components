/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledIcon } from '../../styled';

const IconComponent = (props: HTMLAttributes<HTMLElement>) => <StyledIcon {...props} />;

IconComponent.displayName = 'Span.Icon';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Icon = IconComponent;
