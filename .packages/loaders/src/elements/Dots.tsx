/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import {
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree,
  StyledSVG
} from '../styled';
import { IDotsProps } from '../types';

const COMPONENT_ID = 'loaders.dots';

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export const Dots = forwardRef<SVGSVGElement, IDotsProps>(
  ({ size = 'inherit', color = 'inherit', duration = 1250, delayMS = 750, ...other }, ref) => {
    return (
      <StyledSVG
        data-garden-id={COMPONENT_ID}
        ref={ref}
        $fontSize={size!}
        $color={color!}
        $width="80"
        $height="72"
        $delayShow={delayMS!}
        {...other}
      >
        <g fill="currentColor">
          <StyledDotsCircleOne $duration={duration!} $delay={delayMS!} />
          <StyledDotsCircleTwo $duration={duration!} $delay={delayMS!} />
          <StyledDotsCircleThree $duration={duration!} $delay={delayMS!} />
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
