/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import TrashIcon from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import { StyledMessage, StyledMessageIcon } from '../../../styled';
import { useDropzoneContext } from '../../../utils/useDropzoneContext';

const MessageComponent = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>
>(({ children, ...props }, ref) => {
  const { setHasMessage, hasMessage, isDanger } = useDropzoneContext();

  useEffect(() => {
    if (setHasMessage && !hasMessage) {
      setHasMessage(true);
    }

    return () => {
      if (hasMessage && setHasMessage) {
        setHasMessage(false);
      }
    };
  }, [setHasMessage, hasMessage]);

  return (
    <StyledMessage {...props} ref={ref}>
      {isDanger && (
        <StyledMessageIcon>
          <TrashIcon />
        </StyledMessageIcon>
      )}
      {children}
    </StyledMessage>
  );
});

MessageComponent.displayName = 'Dropzone.Message';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Message = MessageComponent;
