/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes, useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledSkipNav } from '../styled';
import { ChromeContext } from '../utils/useChromeContext';

interface ISkipNavProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Sets the ID of the element to link to */
  skipId?: string;
  /** Sets the `z-index` of the element */
  zIndex?: number;
}

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const SkipNav = React.forwardRef<HTMLAnchorElement, ISkipNavProps>(
  ({ children, skipId, zIndex, ...props }, ref) => {
    const { mainId } = useContext(ChromeContext);

    return (
      <StyledSkipNav href={`#${skipId || mainId}`} zIndex={zIndex} ref={ref} {...props}>
        {children}
      </StyledSkipNav>
    );
  }
);

SkipNav.displayName = 'SkipNav';

SkipNav.propTypes = {
  skipId: PropTypes.string,
  zIndex: PropTypes.number
};

SkipNav.defaultProps = {
  zIndex: 1
};
