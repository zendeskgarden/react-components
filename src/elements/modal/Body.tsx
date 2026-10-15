/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { StyledBody } from '../../views/modal/StyledBody';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Modal.Body` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useModalContext();

  return (
    <StyledBody
      {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)}
      data-garden-id={COMPONENT_IDS['modals.body']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  );
});

Body.displayName = 'Modal.Body';
