/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import SvgClockStroke$1 from '../node_modules/@zendeskgarden/svg-icons/src/12/clock-stroke.svg.js';
import SvgClockStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/clock-stroke.svg.js';
import SvgArrowLeftSmStroke$1 from '../node_modules/@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg.js';
import SvgArrowLeftSmStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg.js';
import { STATUS } from '../types/index.js';
import '../styled/StyledAvatar.js';
import { StyledStandaloneStatus } from '../styled/StyledStandaloneStatus.js';
import { StyledStandaloneStatusCaption } from '../styled/StyledStandaloneStatusCaption.js';
import { StyledStandaloneStatusIndicator } from '../styled/StyledStandaloneStatusIndicator.js';
import '../styled/StyledStatusIndicator.js';
import '../styled/StyledText.js';

const StatusIndicator = forwardRef(({
  children,
  type = 'offline',
  isCompact,
  'aria-label': label,
  ...props
}, ref) => {
  let ClockIcon = SvgClockStroke;
  let ArrowLeftIcon = SvgArrowLeftSmStroke;
  if (isCompact) {
    ClockIcon = SvgClockStroke$1;
    ArrowLeftIcon = SvgArrowLeftSmStroke$1;
  }
  const defaultLabel = useMemo(() => ['status'].concat(type || []).join(': '), [type]);
  const ariaLabel = useText(StatusIndicator, {
    'aria-label': label
  }, 'aria-label', defaultLabel, label !== null);
  return (
    React__default.createElement(StyledStandaloneStatus, Object.assign({
      role: "status",
      ref: ref
    }, props), React__default.createElement(StyledStandaloneStatusIndicator, {
      "aria-hidden": label === null ? true : undefined,
      "aria-label": ariaLabel,
      role: "img",
      $type: type,
      $size: isCompact ? 'small' : 'medium'
    }, type === 'away' ? React__default.createElement(ClockIcon, {
      "data-icon-status": type,
      "aria-hidden": "true"
    }) : null, type === 'transfers' ? React__default.createElement(ArrowLeftIcon, {
      "data-icon-status": type,
      "aria-hidden": "true"
    }) : null), !!children && React__default.createElement(StyledStandaloneStatusCaption, null, children))
  );
});
StatusIndicator.displayName = 'StatusIndicator';
StatusIndicator.propTypes = {
  'aria-label': PropTypes.string,
  type: PropTypes.oneOf(STATUS),
  isCompact: PropTypes.bool
};

export { StatusIndicator };
