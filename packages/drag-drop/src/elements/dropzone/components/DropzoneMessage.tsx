/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { StyledDropzoneMessage } from '../../../styled';

const DropzoneMessageComponent = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>
>((props, ref) => <StyledDropzoneMessage {...props} ref={ref} />);

DropzoneMessageComponent.displayName = 'Dropzone.Message';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const DropzoneMessage = DropzoneMessageComponent;
