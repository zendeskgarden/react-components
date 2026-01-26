/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import XIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledClose } from '../styled';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Remove');

    return (
      <StyledClose ref={ref} aria-label={ariaLabel} {...props} type="button" tabIndex={-1}>
        <XIcon />
      </StyledClose>
    );
  }
);

CloseComponent.displayName = 'Tag.Close';

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
