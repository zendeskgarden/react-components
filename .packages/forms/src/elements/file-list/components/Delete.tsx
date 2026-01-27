/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import TrashIconCompact from '@zendeskgarden/svg-icons/src/12/trash-stroke.svg';
import TrashIconDefault from '@zendeskgarden/svg-icons/src/16/trash-stroke.svg';
import React, { ButtonHTMLAttributes } from 'react';

import { StyledFileDelete } from '../../../styled';
import useFileContext from '../../../utils/useFileContext';

const DeleteComponent = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = composeEventHandlers(
    props.onMouseDown,
    (event: MouseEvent) => event.preventDefault() // prevent parent File focus
  );
  const ariaLabel = useText(DeleteComponent, props, 'aria-label', 'Delete');

  return (
    <StyledFileDelete
      ref={ref}
      aria-label={ariaLabel}
      {...props}
      type="button"
      tabIndex={-1}
      onMouseDown={onMouseDown}
    >
      {fileContext && fileContext.isCompact ? <TrashIconCompact /> : <TrashIconDefault />}
    </StyledFileDelete>
  );
});

DeleteComponent.displayName = 'File.Delete';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Delete = DeleteComponent;
