/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledAvatar } from '../styled';
import { IStyledBaseIconProps } from '@zendeskgarden/react-theming';

const AvatarComponent = (props: IStyledBaseIconProps) => <StyledAvatar {...props} />;

AvatarComponent.displayName = 'Tag.Avatar';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Avatar = AvatarComponent;
