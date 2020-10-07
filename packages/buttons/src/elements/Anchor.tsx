/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor, StyledExternalIcon } from '../styled';

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Apply danger styling */
  isDanger?: boolean;
  /**
   * Used when the anchor navigates to an external resource. Applies `target="_blank"`
   * along with `rel="noopener noreferrer"` to ensure safe
   * [cross-origin destination links](https://web.dev/external-anchors-use-rel-noopener/).
   **/
  isExternal?: boolean;
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
  ({ children, isExternal, ...otherProps }, ref) => {
    let anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = otherProps;

    if (isExternal) {
      anchorProps = {
        target: '_blank',
        rel: 'noopener noreferrer',
        ...anchorProps
      };
    }

    return (
      <StyledAnchor ref={ref} {...(anchorProps as any)}>
        {children}
        {isExternal && <StyledExternalIcon />}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  isDanger: PropTypes.bool,
  isExternal: PropTypes.bool
};

/** @component */
export default Anchor;
