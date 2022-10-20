/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerModalHeader } from '../../styled';
import { IDrawerModalHeaderProps } from '../../types';

const HeaderComponent = forwardRef<HTMLDivElement, IDrawerModalHeaderProps>(
  ({ tag, ...other }, ref) => {
    const { isCloseButtonPresent, getTitleProps } = useModalContext();

    return (
      <StyledDrawerModalHeader
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        as={tag}
        isCloseButtonPresent={isCloseButtonPresent}
        ref={ref}
      />
    );
  }
);

HeaderComponent.displayName = 'DrawerModal.Header';

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
