/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import XIcon from 'svg-icons-legacy/src/12/x-stroke.svg';

import { useText } from '../../theming/utils/useText';
import { StyledClose } from '../../views/tag/StyledClose';
import { COMPONENT_IDS } from '../utils';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Remove');

    return (
      <StyledClose
        ref={ref}
        aria-label={ariaLabel}
        {...props}
        data-garden-id={COMPONENT_IDS['tags.close']}
        data-garden-version={PACKAGE_VERSION}
        type="button"
        tabIndex={-1}
      >
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
