/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, useState } from 'react';
import TrashIcon from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import { Message } from './components/Message';
import { Icon } from './components/Icon';
import { StyledDropzone, StyledIcon } from '../../styled';
import { IDropzoneProps } from '../../types';
import { DropzoneContext } from '../../utils/useDropzoneContext';

const DropzoneComponent = forwardRef<HTMLDivElement, IDropzoneProps>(
  ({ children, isActive, isDanger, isDisabled, isHighlighted, isVertical, tag, ...other }, ref) => {
    const [hasMessage, setHasMessage] = useState(false);
    const [hasIcon, setHasIcon] = useState(false);
    const value = useMemo(
      () => ({ isVertical, hasMessage, setHasMessage, hasIcon, setHasIcon, isDanger }),
      [hasMessage, hasIcon, isDanger, isVertical]
    );

    /**
     * 1. `Icon` isn't used directly because rendering it will call `setHasIcon(true)`
     */
    return (
      <DropzoneContext.Provider value={value}>
        <StyledDropzone
          as={tag}
          aria-disabled={isDisabled}
          {...other}
          $isActive={isActive}
          $isDisabled={isDisabled}
          $isDanger={isDanger}
          $isHighlighted={isHighlighted}
          $hasIcon={hasIcon}
          $hasMessage={hasMessage}
          $isVertical={isVertical}
          ref={ref}
        >
          {/* [1] */}
          {!!(hasMessage && isDanger) && !hasIcon && (
            <StyledIcon aria-hidden="true" $hasMessage={hasMessage} $isVertical={isVertical}>
              <TrashIcon />
            </StyledIcon>
          )}
          {children}
        </StyledDropzone>
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
