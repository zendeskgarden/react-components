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
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree,
  StyledSVG,
  StyledLoadingPlaceholder
} from '../styled';
import { useCSSSVGAnimation } from '../utils/useCSSSVGAnimation';

const COMPONENT_ID = 'loaders.dots';

interface IDotsProps extends React.HTMLAttributes<SVGSVGElement> {
  /**
   * Sets the height and width in pixels. Inherits the parent `font-size` by default
   **/
  size?: string | number;
  /**
   * Sets the fill color. Inherits the parent font `color` by default
   **/
  color?: string;
  /**
   * Sets the speed of the loading animation in milliseconds
   **/
  duration?: number;
  /**
   * Delays showing the loader to prevent a quick render flash during normal loading times. Time is in milliseconds
   **/
  delayMS?: number;
}

const Dots: React.FC<IDotsProps> = ({ size, color, duration, delayMS, ...other }) => {
  const noAnimatedSVGSupport = useCSSSVGAnimation();
  const { delayComplete } = useSchedule({ duration, delayMS, loop: noAnimatedSVGSupport });
  const dotOne = useRef<SVGCircleElement>(null);
  const dotTwo = useRef<SVGCircleElement>(null);
  const dotThree = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (noAnimatedSVGSupport && delayComplete) {
      const transforms = [
        window.getComputedStyle(dotOne.current!).getPropertyValue('transform'),
        window.getComputedStyle(dotTwo.current!).getPropertyValue('transform'),
        window.getComputedStyle(dotThree.current!).getPropertyValue('transform')
      ];

      dotOne.current!.setAttribute('transform', transforms[0]);
      dotTwo.current!.setAttribute('transform', transforms[1]);
      dotThree.current!.setAttribute('transform', transforms[2]);
    }
  });

  if (!delayComplete && delayMS !== 0) {
    return <StyledLoadingPlaceholder fontSize={size!}>&nbsp;</StyledLoadingPlaceholder>;
  }

  return (
    <StyledSVG
      fontSize={size!}
      color={color!}
      width="80"
      height="72"
      dataGardenId={COMPONENT_ID}
      {...other}
    >
      <g fill="currentColor">
        <StyledDotsCircleOne duration={duration!} ref={dotOne} />
        <StyledDotsCircleTwo duration={duration!} ref={dotTwo} />
        <StyledDotsCircleThree duration={duration!} ref={dotThree} />
      </g>
    </StyledSVG>
  );
};

Dots.propTypes = {
  size: PropTypes.any,
  duration: PropTypes.number,
  color: PropTypes.string,
  delayMS: PropTypes.number
};

Dots.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  duration: 1250,
  delayMS: 750
};

/* @component */
export default Dots;
