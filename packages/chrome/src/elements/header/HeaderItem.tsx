/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeaderItem,
  StyledLogoHeaderItem,
  IStyledBaseHeaderItemProps,
  IStyledLogoHeaderItemProps
} from '../../styled';
import { PRODUCTS } from '../../utils/types';

interface IHeadItemProps
  extends IStyledBaseHeaderItemProps,
    IStyledLogoHeaderItemProps,
    HTMLAttributes<HTMLElement> {
  /** Determines if the header contains a logo */
  hasLogo?: boolean;
}

/**
 * Accepts all `<button>` props
 */
export const HeaderItem = React.forwardRef<any, IHeadItemProps>(
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
