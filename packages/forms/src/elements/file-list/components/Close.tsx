/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import XIconCompact from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import XIconDefault from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import useFileContext from '../../../utils/useFileContext';
import { StyledFileClose } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Close = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const fileContext = useFileContext();
    const onMouseDown = composeEventHandlers(
      props.onMouseDown,
      (event: MouseEvent) => event.preventDefault() // prevent parent File focus
    );

    return (
      <StyledFileClose ref={ref} {...props} onMouseDown={onMouseDown}>
        {fileContext && fileContext.isCompact ? <XIconCompact /> : <XIconDefault />}
      </StyledFileClose>
    );
  }
);

Close.displayName = 'File.Close';
