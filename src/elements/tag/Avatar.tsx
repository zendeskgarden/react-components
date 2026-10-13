/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { SVGAttributes } from 'react';

import { StyledAvatar } from '../../views/tag/StyledAvatar';
import { COMPONENT_IDS } from '../utils';

const AvatarComponent = (props: SVGAttributes<SVGElement>) => (
  <StyledAvatar
    {...props}
    data-garden-id={COMPONENT_IDS['tags.avatar']}
    data-garden-version={PACKAGE_VERSION}
  />
);

AvatarComponent.displayName = 'Tag.Avatar';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const Avatar = AvatarComponent;
