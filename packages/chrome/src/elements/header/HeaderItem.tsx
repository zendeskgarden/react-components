/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderItem, IStyledHeaderItemProps } from '../../styled/header/StyledHeaderItem';
import { PRODUCTS } from '../../utils/types';

/**
 * Accepts all `<button>` props
 */
export const HeaderItem = React.forwardRef<
  HTMLButtonElement,
  IStyledHeaderItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => <StyledHeaderItem ref={ref} {...props} />);

HeaderItem.propTypes = {
  maxX: PropTypes.bool,
  maxY: PropTypes.bool,
  isRound: PropTypes.bool,
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool
};
