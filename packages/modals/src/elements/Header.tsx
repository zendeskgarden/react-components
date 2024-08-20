/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../utils/useModalContext';
import { StyledDangerIcon, StyledHeader } from '../styled';
import { IHeaderProps } from '../types';

/**
 * @deprecated use `Modal.Header` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = forwardRef<HTMLDivElement, IHeaderProps>(
  ({ children, tag, ...other }, ref) => {
    const { isCloseButtonPresent, hasHeader, setHasHeader, getTitleProps } = useModalContext();

    useEffect(() => {
      if (!hasHeader && setHasHeader) {
        setHasHeader(true);
      }

      return () => {
        if (hasHeader && setHasHeader) {
          setHasHeader(false);
        }
      };
    }, [hasHeader, setHasHeader]);

    return (
      <StyledHeader
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        as={tag}
        isCloseButtonPresent={isCloseButtonPresent}
        ref={ref}
      >
        {other.isDanger && <StyledDangerIcon />}
        {children}
      </StyledHeader>
    );
  }
);

Header.displayName = 'Modal.Header';

Header.propTypes = {
  isDanger: PropTypes.bool,
  tag: PropTypes.any
};

Header.defaultProps = {
  tag: 'div'
};
