/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledCaption } from '../styled';

/**
 * @deprecated use `Table.Caption` instead
 *
 * @extends HTMLAttributes<HTMLTableCaptionElement>
 */
export const Caption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  (props, ref) => <StyledCaption ref={ref} {...props} />
);

Caption.displayName = 'Table.Caption';
