/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor, StyledExternalIcon } from '../styled';

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Apply danger styling */
  danger?: boolean;
  /** Used when the anchor navigates to an external resource */
  external?: boolean;
}

/**
 * Accepts all `<a>` props
 *
 * @component
 * @name Anchor
 */
const Anchor: React.FunctionComponent<
  IAnchorProps & React.RefAttributes<HTMLAnchorElement>
> = React.forwardRef<HTMLAnchorElement, IAnchorProps>(
  ({ children, external, ...otherProps }, ref) => {
    return (
      <StyledAnchor ref={ref} {...(otherProps as any)}>
        {children}
        {external && <StyledExternalIcon />}
      </StyledAnchor>
    );
  }
);

Anchor.propTypes = {
  danger: PropTypes.bool,
  external: PropTypes.bool
};

/** @component */
export default Anchor;
