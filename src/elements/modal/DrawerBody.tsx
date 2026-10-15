/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { StyledDrawerBody } from '../../views/modal/StyledDrawerBody';
import { COMPONENT_IDS } from '../utils';

const BodyComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useModalContext();

  return (
    <StyledDrawerBody
      {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)}
      data-garden-id={COMPONENT_IDS['modals.drawer_modal.body']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    >
      {props.children}
    </StyledDrawerBody>
  );
});

BodyComponent.displayName = 'Drawer.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
