/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerModalHeader } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { getTitleProps } = useModalContext();

    return <StyledDrawerModalHeader ref={ref} {...getTitleProps(props)} />;
  }
);

Header.displayName = 'DrawerModal.Header';
