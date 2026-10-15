/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledBody } from '../../views/table/StyledBody';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Body` instead
 *
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Body = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => (
    <StyledBody
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['tables.body']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

Body.displayName = 'Table.Body';
