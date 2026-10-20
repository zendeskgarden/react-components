/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronDoubleRight from '@zendeskgarden/svg-icons/src/chevron-double-right.svg';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledCursor } from '../../views/pagination/StyledCursor';
import { StyledIcon } from '../../views/pagination/StyledIcon';
import { COMPONENT_IDS } from '../utils';

const LastComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...other }, ref) => {
    return (
      <StyledCursor
        {...other}
        as="button"
        data-garden-id={COMPONENT_IDS['cursor_pagination.cursor']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <span>{children}</span>
        <StyledIcon $type="last">
          <ChevronDoubleRight />
        </StyledIcon>
      </StyledCursor>
    );
  }
);

LastComponent.displayName = 'CursorPagination.Last';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Last = LastComponent;
