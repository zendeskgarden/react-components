/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledInline, StyledCircle } from '../styled';
import { IInlineProps } from '../types';

/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export const Inline = forwardRef<SVGSVGElement, IInlineProps>(
  ({ size = 16, color = 'inherit', ...other }, ref) => {
    const ariaLabel = useText(Inline, other, 'aria-label', 'loading');

    return (
      // [1]
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledInline
        ref={ref}
        $size={size!}
        $color={color!}
        aria-label={ariaLabel}
        role="img"
        {...other}
      >
        <StyledCircle cx="14" />
        <StyledCircle cx="8" />
        <StyledCircle cx="2" />
      </StyledInline>
    );
  }
);

Inline.displayName = 'Inline';

Inline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
