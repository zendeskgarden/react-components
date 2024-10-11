/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IHeaderProps } from '../../types';
import { StyledHeader } from '../../styled';
import { HeaderItem } from './HeaderItem';
import { HeaderItemIcon } from './HeaderItemIcon';
import { HeaderItemText } from './HeaderItemText';
import { HeaderItemWrapper } from './HeaderItemWrapper';

export const HeaderComponent = React.forwardRef<HTMLElement, IHeaderProps>(
  ({ isStandalone, ...other }, ref) => (
    <StyledHeader ref={ref} $isStandalone={isStandalone} {...other} />
  )
);

HeaderComponent.displayName = 'Header';

HeaderComponent.propTypes = {
  isStandalone: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Header = HeaderComponent as typeof HeaderComponent & {
  Item: typeof HeaderItem;
  ItemIcon: typeof HeaderItemIcon;
  ItemText: typeof HeaderItemText;
  ItemWrapper: typeof HeaderItemWrapper;
};

Header.Item = HeaderItem;
Header.ItemIcon = HeaderItemIcon;
Header.ItemText = HeaderItemText;
Header.ItemWrapper = HeaderItemWrapper;
