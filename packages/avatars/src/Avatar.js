/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar } from './styled';

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
  const computedStatus = badge ? STATUS.ACTIVE : status;

  return (
    <StyledAvatar
      isSystem={isSystem}
      size={size}
      status={computedStatus}
      data-badge={badge}
      aria-live="polite"
      {...other}
    >
      {children}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /** Applies system styling */
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.LARGE]),
  status: PropTypes.oneOf([STATUS.AVAILABLE, STATUS.AWAY]),
  children: PropTypes.node
};

/** @component */
export default Avatar;
