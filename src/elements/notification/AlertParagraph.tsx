/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledParagraph } from '../../views/notification/StyledParagraph';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Paragraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => (
    <StyledParagraph
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['notifications.paragraph']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Paragraph.displayName = 'Alert.Paragraph';
