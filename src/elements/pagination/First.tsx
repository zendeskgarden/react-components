/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import ChevronDoubleLeft from 'svg-icons-legacy/src/16/chevron-double-left-stroke.svg';

import { StyledCursor } from '../../views/pagination/StyledCursor';
import { StyledIcon } from '../../views/pagination/StyledIcon';
import { COMPONENT_IDS } from '../utils';

const FirstComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor
        {...other}
        as="button"
        data-garden-id={COMPONENT_IDS['cursor_pagination.cursor']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <StyledIcon $type="first">
          <ChevronDoubleLeft />
        </StyledIcon>
        <span>{children}</span>
      </StyledCursor>
    );
  }
);

FirstComponent.displayName = 'CursorPagination.First';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const First = FirstComponent;
