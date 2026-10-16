/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledCaption } from '../../views/table/StyledCaption';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Caption` instead
 *
 * @extends HTMLAttributes<HTMLTableCaptionElement>
 */
export const Caption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  (props, ref) => (
    <StyledCaption
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['tables.caption']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Caption.displayName = 'Table.Caption';
