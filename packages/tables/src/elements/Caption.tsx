/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledCaption } from '../styled';

/**
 * Accepts all `<caption>` attributes and events
 */
export const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>((props, ref) => <StyledCaption ref={ref} {...props} />);
