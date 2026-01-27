/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledDrawerBody } from '../../styled';
import { useModalContext } from '../../utils/useModalContext';

const BodyComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useModalContext();

  return (
    <StyledDrawerBody {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)} ref={ref}>
      {props.children}
    </StyledDrawerBody>
  );
});

BodyComponent.displayName = 'Drawer.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
