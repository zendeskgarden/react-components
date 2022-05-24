/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { StyledClose } from '../styled';
import { useText } from '@zendeskgarden/react-theming';
import { useModalContext } from '../utils/useModalContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { getCloseProps, setCloseButtonPresent } = useModalContext();

  useEffect(() => {
    setCloseButtonPresent(true);

    return () => setCloseButtonPresent(false);
  });

  const ariaLabel = useText(Close, props, 'aria-label', 'Close modal');

  return (
    <StyledClose ref={ref} {...getCloseProps({ ...props, 'aria-label': ariaLabel })}>
      <XStrokeIcon />
    </StyledClose>
  );
});

Close.displayName = 'Close';
