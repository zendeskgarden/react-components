/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar, StyledBadge } from './styled';

const SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  LARGE: 'large'
};

const STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};

/**
 * Accepts all `<figure>` attributes and events
 */
const Avatar = ({ isSystem, size, status, children, badge, ...other }) => {
  let computedStatus = status;

  if (status === STATUS.AVAILABLE && badge !== undefined) {
    computedStatus = STATUS.ACTIVE;
  }

  const FormattedBadge = () => {
    if (status === undefined || status === STATUS.AWAY) {
      return null;
    }

    if (computedStatus === STATUS.AVAILABLE) {
      return <StyledBadge />;
    }

    return <StyledBadge>{badge}</StyledBadge>;
  };

  return (
    <StyledAvatar
      isSystem={isSystem}
      size={size}
      status={computedStatus}
      aria-live="polite"
      {...other}
    >
      {children}
      <FormattedBadge />
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /** Applies system styling */
  isSystem: PropTypes.bool,
  badge: PropTypes.node,
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.LARGE]),
  status: PropTypes.oneOf([STATUS.AVAILABLE, STATUS.AWAY]),
  children: PropTypes.node
};

/** @component */
export default Avatar;
