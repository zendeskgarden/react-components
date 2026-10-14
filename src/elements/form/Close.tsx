/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import XIconCompact from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import XIconDefault from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import React, { ButtonHTMLAttributes } from 'react';

import { StyledFileClose } from '../../../styled';
import useFileContext from '../../../utils/useFileContext';

const CloseComponent = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const fileContext = useFileContext();
    const onMouseDown = composeEventHandlers(
      props.onMouseDown,
      (event: MouseEvent) => event.preventDefault() // prevent parent File focus
    );
    const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Close');

    return (
      <StyledFileClose
        ref={ref}
        aria-label={ariaLabel}
        {...props}
        type="button"
        tabIndex={-1}
        onMouseDown={onMouseDown}
      >
        {fileContext && fileContext.isCompact ? <XIconCompact /> : <XIconDefault />}
      </StyledFileClose>
    );
  }
);

CloseComponent.displayName = 'File.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
