/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, Children } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import { Span } from '@zendeskgarden/react-typography';
import SvgClockStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/clock-stroke.svg.js';
import SvgClockStroke$1 from '../node_modules/@zendeskgarden/svg-icons/src/16/clock-stroke.svg.js';
import SvgArrowLeftSmStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg.js';
import SvgArrowLeftSmStroke$1 from '../node_modules/@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg.js';
import { STATUS, SIZE } from '../types/index.js';
import { StyledAvatar } from '../styled/StyledAvatar.js';
import '../styled/StyledStandaloneStatus.js';
import '../styled/StyledStandaloneStatusCaption.js';
import '../styled/StyledStandaloneStatusIndicator.js';
import { StyledStatusIndicator } from '../styled/StyledStatusIndicator.js';
import '../styled/StyledText.js';
import { Text } from './components/Text.js';

const AvatarComponent = forwardRef(({
  'aria-hidden': ariaHidden,
  backgroundColor,
  badge,
  children,
  foregroundColor,
  isSystem,
  size = 'medium',
  status,
  statusLabel,
  surfaceColor,
  ...other
}, ref) => {
  const computedStatus = badge === undefined ? status : 'active';
  let ClockIcon = SvgClockStroke;
  let ArrowLeftIcon = SvgArrowLeftSmStroke;
  if (['large', 'medium'].includes(size)) {
    ClockIcon = SvgClockStroke$1;
    ArrowLeftIcon = SvgArrowLeftSmStroke$1;
  }
  const defaultStatusLabel = useMemo(() => {
    let statusMessage = computedStatus;
    if (computedStatus === 'active') {
      const count = typeof badge === 'string' ? parseInt(badge, 10) : badge;
      statusMessage = `active. ${count > 0 ? `${count} notification${count > 1 ? 's' : ''}` : 'no notifications'}`;
    }
    return ['status'].concat(statusMessage || []).join(': ');
  }, [computedStatus, badge]);
  const shouldValidate = computedStatus !== undefined && ariaHidden !== true;
  const label = useText(AvatarComponent, {
    statusLabel
  }, 'statusLabel', defaultStatusLabel, shouldValidate);
  return React__default.createElement(StyledAvatar, Object.assign({
    ref: ref,
    $isSystem: isSystem,
    $size: size,
    $status: computedStatus,
    $surfaceColor: surfaceColor,
    $backgroundColor: backgroundColor,
    $foregroundColor: foregroundColor,
    "aria-atomic": "true",
    "aria-hidden": ariaHidden,
    "aria-live": "polite"
  }, other), Children.only(children), !!computedStatus && React__default.createElement(StyledStatusIndicator, {
    $size: size,
    $type: computedStatus,
    $surfaceColor: surfaceColor,
    as: "figcaption"
  }, ariaHidden !== true && React__default.createElement(Span, {
    hidden: true
  }, label), computedStatus === 'active' ? React__default.createElement("span", {
    "aria-hidden": true
  }, badge) : React__default.createElement(React__default.Fragment, null, computedStatus === 'away' ? React__default.createElement(ClockIcon, {
    "data-icon-status": computedStatus
  }) : null, computedStatus === 'transfers' ? React__default.createElement(ArrowLeftIcon, {
    "data-icon-status": computedStatus
  }) : null)));
});
AvatarComponent.displayName = 'Avatar';
AvatarComponent.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(SIZE),
  status: PropTypes.oneOf(STATUS),
  statusLabel: PropTypes.string
};
const Avatar = AvatarComponent;
Avatar.Text = Text;

export { Avatar };
