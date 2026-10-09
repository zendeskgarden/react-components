/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useText } from '../../theming/utils/useText';
import { IInlineProps } from '../../types/elements';
import { StyledInline, StyledCircle } from '../../views/loader/StyledInline';
import { COMPONENT_IDS } from '../utils';

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
        $color={color!}
        aria-label={ariaLabel}
        role="img"
        {...other}
        data-garden-id={COMPONENT_IDS['loaders.inline']}
        data-garden-version={PACKAGE_VERSION}
        viewBox="0 0 16 4"
        width={size}
        height={size! * 0.25}
      >
        <StyledCircle cx="14" cy={2} r={2} fill="currentColor" />
        <StyledCircle cx="8" cy={2} r={2} fill="currentColor" />
        <StyledCircle cx="2" cy={2} r={2} fill="currentColor" />
      </StyledInline>
    );
  }
);

Inline.displayName = 'Inline';

Inline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
