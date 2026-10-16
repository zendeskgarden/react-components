/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';

import { ITitleProps } from '../../types/elements';
import { StyledTitle } from '../../views/notification/StyledTitle';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Alert.Title`, `Notification.Title`, or `Well.Title` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = forwardRef<HTMLDivElement, ITitleProps>(({ isRegular, ...props }, ref) => (
  <StyledTitle
    ref={ref}
    $isRegular={isRegular}
    {...props}
    data-garden-id={COMPONENT_IDS['notifications.title']}
    data-garden-version={PACKAGE_VERSION}
  />
));

Title.displayName = 'Notification.Title';
