/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, PropsWithChildren } from 'react';
import { DropzoneMessage } from './components/DropzoneMessage';
import { StyledDropzone } from '../../styled';
import { IDropzoneProps } from '../../types';

const DropzoneComponent = forwardRef<HTMLDivElement, PropsWithChildren<IDropzoneProps>>(
  (props, ref) => <StyledDropzone {...props} ref={ref} />
);

DropzoneComponent.displayName = 'Dropzone';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Dropzone = DropzoneComponent as typeof DropzoneComponent & {
  Message: typeof DropzoneMessage;
};

Dropzone.Message = DropzoneMessage;
