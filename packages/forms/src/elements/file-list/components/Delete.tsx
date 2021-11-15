/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import TrashIconCompact from '@zendeskgarden/svg-icons/src/12/trash-stroke.svg';
import TrashIconDefault from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import useFileContext from '../../../utils/useFileContext';
import { StyledFileDelete } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Delete = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const fileContext = useFileContext();

    return (
      <StyledFileDelete ref={ref} {...props}>
        {fileContext && fileContext.isCompact ? <TrashIconCompact /> : <TrashIconDefault />}
      </StyledFileDelete>
    );
  }
);

Delete.displayName = 'File.Delete';
