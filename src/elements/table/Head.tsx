/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';

import { IHeadProps } from '../../types/elements';
import { StyledHead } from '../../views/table/StyledHead';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Head` instead
 *
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Head = forwardRef<HTMLTableSectionElement, IHeadProps>(
  ({ isSticky, ...props }, ref) => (
    <StyledHead
      ref={ref}
      $isSticky={isSticky}
      {...props}
      data-garden-id={COMPONENT_IDS['tables.head']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Head.displayName = 'Table.Head';
