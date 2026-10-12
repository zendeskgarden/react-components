/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IDotsProps } from '../../types/elements';
import {
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree
} from '../../views/loader/StyledDots';
import { StyledSVG } from '../../views/loader/StyledSVG';
import { COMPONENT_IDS } from '../utils';

/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export const Dots = forwardRef<SVGSVGElement, IDotsProps>(
  ({ size = 'inherit', color = 'inherit', duration = 1250, delayMS = 750, ...other }, ref) => {
    return (
      // [1]
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <StyledSVG
        ref={ref}
        $fontSize={size!}
        $color={color!}
        $delayShow={delayMS!}
        {...other}
        data-garden-id={COMPONENT_IDS['loaders.dots']}
        data-garden-version={PACKAGE_VERSION}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        viewBox="0 0 80 72"
        role="img"
      >
        <g fill="currentColor">
          <StyledDotsCircleOne cx={9} cy={36} r={9} $duration={duration!} $delay={delayMS!} />
          <StyledDotsCircleTwo cx={40} cy={36} r={9} $duration={duration!} $delay={delayMS!} />
          <StyledDotsCircleThree cx={71} cy={36} r={9} $duration={duration!} $delay={delayMS!} />
        </g>
      </StyledSVG>
    );
  }
);

Dots.displayName = 'Dots';

Dots.propTypes = {
  size: PropTypes.any,
  duration: PropTypes.number,
  color: PropTypes.string,
  delayMS: PropTypes.number
};
