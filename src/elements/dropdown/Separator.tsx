/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { LiHTMLAttributes, forwardRef } from 'react';

import { useMenuContext } from '../../hooks/dropdown/useMenuContext';
import { StyledSeparator } from '../../views/dropdown/StyledSeparator';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Separator = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, ...props }, ref) => {
    const { getSeparatorProps } = useMenuContext();

    const separatorProps = getSeparatorProps() as LiHTMLAttributes<HTMLLIElement>;

    return (
      <StyledSeparator
        {...props}
        {...separatorProps}
        data-garden-id={COMPONENT_IDS['dropdowns.menu.separator']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

Separator.displayName = 'Separator';
