/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerHeader } from '../../styled';
import { IDrawerHeaderProps } from '../../types';

const HeaderComponent = forwardRef<HTMLDivElement, IDrawerHeaderProps>(({ tag, ...other }, ref) => {
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
    <StyledDrawerHeader
      {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
      as={tag}
      $isCloseButtonPresent={isCloseButtonPresent}
      ref={ref}
    />
  );
});

HeaderComponent.displayName = 'Drawer.Header';

HeaderComponent.propTypes = {
  tag: PropTypes.any
};

HeaderComponent.defaultProps = {
  tag: 'div'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = HeaderComponent;
