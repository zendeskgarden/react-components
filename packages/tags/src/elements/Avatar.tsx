/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes } from 'react';
import { StyledAvatar } from '../styled';

const AvatarComponent = (props: SVGAttributes<SVGElement>) => <StyledAvatar {...props} />;

AvatarComponent.displayName = 'Tag.Avatar';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const Avatar = AvatarComponent;
