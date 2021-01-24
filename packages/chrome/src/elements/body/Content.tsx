/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledContent } from '../../styled';
import { useBodyContext } from '../../utils/useBodyContext';
import { useChromeContext } from '../../utils/useChromeContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { contentId, setContentId } = useChromeContext();
    const { hasFooter } = useBodyContext();

    if (id && setContentId) {
      setContentId(id);
    }

    return (
      <StyledContent
        id={id || contentId}
        tabIndex={props.tabIndex || -1}
        ref={ref}
        hasFooter={hasFooter}
        {...props}
      />
    );
  }
);

Content.displayName = 'Content';
