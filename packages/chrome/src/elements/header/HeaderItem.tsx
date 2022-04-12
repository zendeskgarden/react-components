/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IHeaderItemProps, PRODUCT } from '../../types';
import { StyledHeaderItem, StyledLogoHeaderItem } from '../../styled';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const HeaderItem = React.forwardRef<HTMLButtonElement, IHeaderItemProps>(
  ({ hasLogo, product, ...other }, ref) => {
    if (hasLogo) {
      return <StyledLogoHeaderItem ref={ref} product={product} {...other} />;
    }

    return <StyledHeaderItem ref={ref} {...other} />;
  }
);

HeaderItem.displayName = 'HeaderItem';

HeaderItem.propTypes = {
  maxX: PropTypes.bool,
  maxY: PropTypes.bool,
  isRound: PropTypes.bool,
  product: PropTypes.oneOf(PRODUCT),
  hasLogo: PropTypes.bool
};
