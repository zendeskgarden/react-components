/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledParagraph } from '../../views/tooltip/StyledParagraph';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Tooltip.Paragraph` instead
 *
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Paragraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => (
    <StyledParagraph
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['tooltip.paragraph']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Paragraph.displayName = 'Tooltip.Paragraph';
