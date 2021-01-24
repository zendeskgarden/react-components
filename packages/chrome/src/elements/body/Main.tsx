/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useContext } from 'react';
import { StyledMain } from '../../styled';
import { ChromeContext } from '../../utils/useChromeContext';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Main = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ id, ...props }, ref) => {
    const { mainId, setMainId } = useContext(ChromeContext);

    if (id && setMainId) {
      setMainId(id);
    }

    return <StyledMain id={id || mainId} tabIndex={props.tabIndex || -1} ref={ref} {...props} />;
  }
);

Main.displayName = 'Main';
