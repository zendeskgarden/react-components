/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { StyledGlobalAlertClose } from '../../styled';
import { useGlobalAlertContext } from '../../utils/useGlobalAlertContext';

/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const GlobalAlertClose = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { type } = useGlobalAlertContext();
  const label = useText(GlobalAlertClose, props, 'aria-label', 'Close');

  return (
    <StyledGlobalAlertClose ref={ref} $alertType={type} {...props} size="small">
      {/* [1] */}
      {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
      <XStrokeIcon role="img" aria-label={label} />
    </StyledGlobalAlertClose>
  );
});

GlobalAlertClose.displayName = 'GlobalAlert.Close';
