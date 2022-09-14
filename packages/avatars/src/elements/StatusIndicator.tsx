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
 * @extends HTMLAttributes<HTMLElement>
 */
const StatusIndicatorComponent = forwardRef<HTMLElement, IStatusIndicatorProps>(
  ({ children, type, isCompact, ...props }, ref) => {
    let ClockIcon = ClockIcon16;
    let ArrowLeftIcon = ArrowLeftIcon16;

    if (isCompact) {
      ClockIcon = ClockIcon12;
      ArrowLeftIcon = ArrowLeftIcon12;
    }

    const defaultLabel = useMemo(() => ['status'].concat(type).join(': '), [type]);
    const ariaLabel = useText(StatusIndicatorComponent, props, 'aria-label', defaultLabel);

    return (
      <StyledStandaloneStatus role="status" ref={ref} {...props}>
        <StyledStandaloneStatusIndicator
          role="img"
          type={type}
          isCompact={isCompact}
          aria-label={ariaLabel}
        >
          {type === 'away' ? <ClockIcon data-icon-status={type} aria-hidden="true" /> : null}
          {type === 'transfers' ? (
            <ArrowLeftIcon data-icon-status={type} aria-hidden="true" />
          ) : null}
        </StyledStandaloneStatusIndicator>
        {children && <StyledStandaloneStatusCaption>{children}</StyledStandaloneStatusCaption>}
      </StyledStandaloneStatus>
    );
  }
);

StatusIndicatorComponent.displayName = 'StatusIndicator';

StatusIndicatorComponent.propTypes = {
  type: PropTypes.oneOf(STATUS).isRequired,
  isCompact: PropTypes.bool
};

StatusIndicatorComponent.defaultProps = {
  isCompact: false
};

export const StatusIndicator = StatusIndicatorComponent;
