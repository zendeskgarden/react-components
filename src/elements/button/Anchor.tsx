/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import { StyledAnchor, StyledExternalIcon } from '../styled';
import { IAnchorProps } from '../types';

/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const Anchor = forwardRef<HTMLAnchorElement, IAnchorProps>(
  ({ children, externalIconLabel, isDanger, isExternal, isUnderlined = true, ...other }, ref) => {
    let anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = other;

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
      <StyledAnchor
        ref={ref}
        $isDanger={isDanger}
        $isUnderlined={isUnderlined}
        {...(anchorProps as any)}
      >
        {children}
        {!!isExternal && (
          /* [1] */
          // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
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
  isUnderlined: PropTypes.bool,
  externalIconLabel: PropTypes.string
};
