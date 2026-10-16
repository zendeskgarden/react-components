/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledGlobalAlertContent } from '../../views/notification/StyledGlobalAlertContent';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const GlobalAlertContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <StyledGlobalAlertContent
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['notifications.global_alert.content']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

GlobalAlertContent.displayName = 'GlobalAlert.Content';
