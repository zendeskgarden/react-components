/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import XIconCompact from 'svg-icons-legacy/src/12/x-stroke.svg';
import XIconDefault from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useFileContext } from '../../hooks/form/useFileContext';
import { useText } from '../../theming/utils/useText';
import { StyledFileClose } from '../../views/form/StyledFileClose';
import { COMPONENT_IDS } from '../utils';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
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
        data-garden-id={COMPONENT_IDS['forms.file.close']}
        data-garden-version={PACKAGE_VERSION}
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
