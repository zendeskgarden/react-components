/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes, useEffect } from 'react';

import { useDropzoneContext } from '../../hooks/draggable/useDropzoneContext';
import { StyledMessage } from '../../views/draggable/StyledMessage';
import { COMPONENT_IDS } from '../utils';

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

    return (
      <StyledMessage
        {...props}
        data-garden-id={COMPONENT_IDS['dropzone.message']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

Message.displayName = 'Dropzone.Message';
