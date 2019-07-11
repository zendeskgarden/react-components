/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSchedule } from '@zendeskgarden/container-schedule';

import {
  DotsOneCircle,
  DotsTwoCircle,
  DotsThreeCircle,
  StyledSVG,
  LoadingPlaceholder
} from './styled-elements';
import { useCSSSVGAnimation } from './hooks/useCSSSVGAnimation';

const COMPONENT_ID = 'loaders.dots';

/** @component */
export default function Dots({
  size = 'inherit',
  color = 'inherit',
  duration = 1250,
  delayMS = 750,
  ...other
}) {
  const { delayComplete } = useSchedule({ duration, delayMS });
  const noAnimatedSVGSupport = useCSSSVGAnimation();
  const dotOne = useRef(null);
  const dotTwo = useRef(null);
  const dotThree = useRef(null);

  useEffect(() => {
    if (noAnimatedSVGSupport && delayComplete) {
      const transforms = [
        window.getComputedStyle(dotOne.current).getPropertyValue('transform'),
        window.getComputedStyle(dotTwo.current).getPropertyValue('transform'),
        window.getComputedStyle(dotThree.current).getPropertyValue('transform')
      ];

      dotOne.current.setAttribute('transform', transforms[0]);
      dotTwo.current.setAttribute('transform', transforms[1]);
      dotThree.current.setAttribute('transform', transforms[2]);
    }
  });

  if (!delayComplete && delayMS !== 0) {
    return <LoadingPlaceholder fontSize={size}>&nbsp;</LoadingPlaceholder>;
  }

  return (
    <StyledSVG
      fontSize={size}
      color={color}
      width="80"
      height="72"
      data-garden-id={COMPONENT_ID}
      {...other}
    >
      <g fill="currentColor">
        <DotsOneCircle duration={duration} ref={dotOne} />
        <DotsTwoCircle duration={duration} ref={dotTwo} />
        <DotsThreeCircle duration={duration} ref={dotThree} />
      </g>
    </StyledSVG>
  );
}

Dots.propTypes = {
  /**
   * Size of the loader. Can inherit from `font-size` styling.
   **/
  size: PropTypes.any,
  /**
   * Duration (ms) of the animation. Default is 1250ms.
   **/
  duration: PropTypes.number,
  /**
   * Color of the loader. Can inherit from `color` styling.
   **/
  color: PropTypes.string,
  /**
   * Delay in MS to begin loader rendering. This helps prevent
   * quick flashes of the loader during normal loading times.
   **/
  delayMS: PropTypes.number
};
