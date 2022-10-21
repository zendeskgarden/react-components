/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../utils/useModalContext';
import { StyledDangerIcon, StyledHeader } from '../styled';
import { IHeaderProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = forwardRef<HTMLDivElement, IHeaderProps>(
  ({ children, isDanger, tag, ...other }, ref) => {
    const { isCloseButtonPresent, getTitleProps } = useModalContext();

    return (
      <StyledHeader
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        as={tag}
        isCloseButtonPresent={isCloseButtonPresent}
        ref={ref}
      >
        {isDanger && <StyledDangerIcon />}
        {children}
      </StyledHeader>
    );
  }
);

Header.displayName = 'Header';

Header.propTypes = {
  isDanger: PropTypes.bool,
  tag: PropTypes.any
};

Header.defaultProps = {
  tag: 'div'
};
