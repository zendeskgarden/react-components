/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useEffect } from 'react';

import { StyledMessage } from '../../../styled';
import { useDropzoneContext } from '../../../utils/useDropzoneContext';

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Message = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => {
    const { setHasMessage, hasMessage } = useDropzoneContext();

    useEffect(() => {
      if (setHasMessage && !hasMessage) {
        setHasMessage(true);
      }

      return () => {
        if (setHasMessage && hasMessage) {
          setHasMessage(false);
        }
      };
    }, [setHasMessage, hasMessage]);

    return <StyledMessage {...props} ref={ref} />;
  }
);

Message.displayName = 'Dropzone.Message';
