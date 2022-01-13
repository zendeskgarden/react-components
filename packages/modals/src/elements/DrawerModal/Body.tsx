/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerModalBody } from '../../styled';

const BodyComponent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { getContentProps } = useModalContext();

    return (
      <StyledDrawerModalBody ref={ref} {...getContentProps(props)}>
        {props.children}
      </StyledDrawerModalBody>
    );
  }
);

BodyComponent.displayName = 'DrawerModal.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
