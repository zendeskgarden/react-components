/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { StyledFooter } from '../../views/modal/StyledFooter';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Modal.Footer` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { isLarge } = useModalContext();

  return (
    <StyledFooter
      ref={ref}
      $isLarge={isLarge}
      {...props}
      data-garden-id={COMPONENT_IDS['modals.footer']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

Footer.displayName = 'Modal.Footer';
