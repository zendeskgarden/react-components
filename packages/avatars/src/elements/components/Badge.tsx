/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';

import { IBadgeProps } from '../../types';
import { useAvatarContext } from '../../utils';
import { StyledBadge } from '../../styled';

const BadgeComponent = forwardRef<HTMLDivElement, IBadgeProps>(({ children, ...props }, ref) => {
  const ctx = useAvatarContext();

  return (
    <StyledBadge ref={ref} {...props} size={props.size || ctx.size}>
      {children}
    </StyledBadge>
  );
});

BadgeComponent.displayName = 'Avatar.Badge';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Badge = BadgeComponent;
