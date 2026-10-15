/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, useEffect, forwardRef } from 'react';
import XStrokeIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { useText } from '../../theming/utils/useText';
import { StyledDrawerClose } from '../../views/modal/StyledDrawerClose';
import { COMPONENT_IDS } from '../utils';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps, setIsCloseButtonPresent } = useModalContext();

    useEffect(() => {
      setIsCloseButtonPresent(true);

      return () => setIsCloseButtonPresent(false);
    });

    const ariaLabel = useText(
      CloseComponent,
      props,
      'aria-label',
      'Close drawer',
      props['aria-describedby'] === undefined /* has tooltip */
    );

    return (
      <StyledDrawerClose
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        data-garden-id={COMPONENT_IDS['modals.drawer_modal.close']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <XStrokeIcon />
      </StyledDrawerClose>
    );
  }
);

CloseComponent.displayName = 'Drawer.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
