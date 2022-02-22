/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderItem, StyledLogoHeaderItem } from '../../styled';
import { PRODUCT, PRODUCTS } from '../../utils/types';

export interface IHeaderItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Maximizes the width of a flex item in the header */
  maxX?: boolean;
  /** Maximizes the height of the item (i.e. contains a search input) */
  maxY?: boolean;
  /** Rounds the border radius of the item */
  isRound?: boolean;
  /**
   * Applies a
   * [brand color](/design/color#brand-colors)
   * to the product logo
   */
  product?: PRODUCT;
  /** Applies header logo styles to the item */
  hasLogo?: boolean;
}

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
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool
};
