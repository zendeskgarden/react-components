/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledFooter } from '../styled';
import { useModalContext } from '../utils/useModalContext';

/**
 * @deprecated use `Modal.Footer` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isLarge } = useModalContext();

    return <StyledFooter ref={ref} $isLarge={isLarge} {...props} />;
  }
);

Footer.displayName = 'Modal.Footer';
