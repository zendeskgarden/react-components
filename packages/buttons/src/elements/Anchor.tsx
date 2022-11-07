/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IAnchorProps } from '../types';
import { StyledAnchor, StyledExternalIcon } from '../styled';
import { useText } from '@zendeskgarden/react-theming';

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>(
  ({ children, isExternal, externalIconLabel, ...otherProps }, ref) => {
    let anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = otherProps;

    if (isExternal) {
      anchorProps = {
        target: '_blank',
        rel: 'noopener noreferrer',
        ...anchorProps
      };
    }

    // Only show label warnings for the external icon when the Anchor is external
    const checkProps = isExternal ? { externalIconLabel } : { noIconLabel: 'true' };
    const iconAriaLabel = useText(
      Anchor,
      checkProps,
      isExternal ? 'externalIconLabel' : 'noIconLabel',
      '(opens in a new tab)'
    );

    return (
      <StyledAnchor ref={ref} {...(anchorProps as any)}>
        {children}
        {isExternal && (
          <StyledExternalIcon role="img" aria-label={iconAriaLabel} aria-hidden={undefined} />
        )}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  isExternal: PropTypes.bool,
  isDanger: PropTypes.bool,
  externalIconLabel: PropTypes.string
};
