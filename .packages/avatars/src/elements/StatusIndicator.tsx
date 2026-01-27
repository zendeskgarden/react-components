/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import ArrowLeftIcon12 from '@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg';
import ClockIcon12 from '@zendeskgarden/svg-icons/src/12/clock-stroke.svg';
import ArrowLeftIcon16 from '@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg';
import ClockIcon16 from '@zendeskgarden/svg-icons/src/16/clock-stroke.svg';
import PropTypes from 'prop-types';
import React, { forwardRef, useMemo } from 'react';

import {
  StyledStandaloneStatusIndicator,
  StyledStandaloneStatusCaption,
  StyledStandaloneStatus
} from '../styled';
import { IStatusIndicatorProps, STATUS } from '../types';

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
    const ariaLabel = useText(
      StatusIndicator,
      { 'aria-label': label },
      'aria-label',
      defaultLabel,
      label !== null
    );

    return (
      // [1]
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledStandaloneStatus role="status" ref={ref} {...props}>
        {/* [2] */}
        {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
        <StyledStandaloneStatusIndicator
          aria-hidden={label === null ? true : undefined}
          aria-label={ariaLabel}
          role="img"
          $type={type}
          $size={isCompact ? 'small' : 'medium'}
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
  'aria-label': PropTypes.string,
  type: PropTypes.oneOf(STATUS),
  isCompact: PropTypes.bool
};
