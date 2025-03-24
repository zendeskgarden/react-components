/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import ClockIcon12 from '@zendeskgarden/svg-icons/src/12/clock-stroke.svg';
import ClockIcon16 from '@zendeskgarden/svg-icons/src/16/clock-stroke.svg';
import ArrowLeftIcon12 from '@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg';
import ArrowLeftIcon16 from '@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg';

import { IStatusIndicatorProps, STATUS } from '../types';
import {
  StyledStandaloneStatusIndicator,
  StyledStandaloneStatusCaption,
  StyledStandaloneStatus
} from '../styled';

/**
 * 1. role='status' on `div` is valid WAI-ARIA usage in this context.
 *    https://www.w3.org/TR/wai-aria-1.1/#status
 * 2. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const StatusIndicator = forwardRef<HTMLElement, IStatusIndicatorProps>(
  ({ children, type = 'offline', isCompact, 'aria-label': label, ...props }, ref) => {
    let ClockIcon = ClockIcon16;
    let ArrowLeftIcon = ArrowLeftIcon16;

    if (isCompact) {
      ClockIcon = ClockIcon12;
      ArrowLeftIcon = ArrowLeftIcon12;
    }

    const defaultLabel = useMemo(() => ['status'].concat(type || []).join(': '), [type]);
    const ariaLabel = useText(StatusIndicator, { 'aria-label': label }, 'aria-label', defaultLabel);

    return (
      // [1]
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledStandaloneStatus role="status" ref={ref} {...props}>
        {/* [2] */}
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledStandaloneStatusIndicator
          role="img"
          $type={type}
          $size={isCompact ? 'small' : 'medium'}
          aria-label={ariaLabel}
        >
          {type === 'away' ? <ClockIcon data-icon-status={type} aria-hidden="true" /> : null}
          {type === 'transfers' ? (
            <ArrowLeftIcon data-icon-status={type} aria-hidden="true" />
          ) : null}
        </StyledStandaloneStatusIndicator>
        {!!children && <StyledStandaloneStatusCaption>{children}</StyledStandaloneStatusCaption>}
      </StyledStandaloneStatus>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';

StatusIndicator.propTypes = {
  type: PropTypes.oneOf(STATUS),
  isCompact: PropTypes.bool
};
