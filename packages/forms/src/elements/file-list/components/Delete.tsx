/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import TrashIconCompact from '@zendeskgarden/svg-icons/src/12/trash-stroke.svg';
import TrashIconDefault from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import useFileContext from '../../../utils/useFileContext';
import { StyledFileDelete } from '../../../styled';

const DeleteComponent = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const fileContext = useFileContext();
    const onMouseDown = composeEventHandlers(
      props.onMouseDown,
      (event: MouseEvent) => event.preventDefault() // prevent parent File focus
    );

    return (
      <StyledFileDelete ref={ref} {...props} onMouseDown={onMouseDown}>
        {fileContext && fileContext.isCompact ? <TrashIconCompact /> : <TrashIconDefault />}
      </StyledFileDelete>
    );
  }
);

DeleteComponent.displayName = 'File.Delete';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Delete = DeleteComponent;
