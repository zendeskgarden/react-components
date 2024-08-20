/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo, useState } from 'react';
import { StyledBody } from '../../styled';
import { BodyContext } from '../../utils/useBodyContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const [hasFooter, setHasFooter] = useState(false);
    const bodyContextValue = useMemo(
      () => ({ hasFooter, setHasFooter }),
      [hasFooter, setHasFooter]
    );

    return (
      <BodyContext.Provider value={bodyContextValue}>
        <StyledBody ref={ref} {...props} />
      </BodyContext.Provider>
    );
  }
);

Body.displayName = 'Body';
