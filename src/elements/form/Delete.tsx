/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import TrashIconCompact from 'svg-icons-legacy/src/12/trash-stroke.svg';
import TrashIconDefault from 'svg-icons-legacy/src/16/trash-stroke.svg';

import { useFileContext } from '../../hooks/form/useFileContext';
import { useText } from '../../theming/utils/useText';
import { StyledFileDelete } from '../../views/form/StyledFileDelete';
import { COMPONENT_IDS } from '../utils';

const DeleteComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
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
        data-garden-id={COMPONENT_IDS['forms.file.delete']}
        data-garden-version={PACKAGE_VERSION}
        type="button"
        tabIndex={-1}
        onMouseDown={onMouseDown}
      >
        {fileContext && fileContext.isCompact ? <TrashIconCompact /> : <TrashIconDefault />}
      </StyledFileDelete>
    );
  }
);

DeleteComponent.displayName = 'File.Delete';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Delete = DeleteComponent;
