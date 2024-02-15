/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerModalBody } from '../../styled';

const BodyComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useModalContext();

  return (
    <StyledDrawerModalBody
      {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)}
      ref={ref}
    >
      {props.children}
    </StyledDrawerModalBody>
  );
});

BodyComponent.displayName = 'DrawerModal.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
