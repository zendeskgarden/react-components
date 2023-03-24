/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useState } from 'react';
import { Message } from './components/Message';
import { Icon } from './components/Icon';
import { StyledDropzone } from '../../styled';
import { IDropzoneProps } from '../../types';
import { DropzoneContext } from '../../utils/useDropzoneContext';

const DropzoneComponent = forwardRef<HTMLDivElement, IDropzoneProps>(
  ({ tag = 'div', ...props }, ref) => {
    const { isDanger } = props;
    const [hasMessage, setHasMessage] = useState(false);
    const value = useMemo(() => ({ hasMessage, setHasMessage, isDanger }), [hasMessage, isDanger]);

    return (
      <DropzoneContext.Provider value={value}>
        <StyledDropzone
          as={tag}
          aria-disabled={props.isDisabled}
          {...props}
          hasMessage={hasMessage}
          ref={ref}
        />
      </DropzoneContext.Provider>
    );
  }
);

DropzoneComponent.displayName = 'Dropzone';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Dropzone = DropzoneComponent as typeof DropzoneComponent & {
  Icon: typeof Icon;
  Message: typeof Message;
};

Dropzone.Message = Message;
Dropzone.Icon = Icon;
