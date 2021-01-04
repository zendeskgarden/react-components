/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useSchedule } from '@zendeskgarden/container-schedule';
import { useDocument } from '@zendeskgarden/react-theming';
import {
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree,
  StyledSVG,
  StyledLoadingPlaceholder
} from '../styled';

const COMPONENT_ID = 'loaders.dots';

export interface IDotsProps extends React.SVGAttributes<SVGSVGElement> {
  /** Sets the height and width in pixels. Inherits the parent's font size by default. */
  size?: string | number;
  /** Sets the fill color. Inherits the parent's `color` by default. */
  color?: string;
  /** Sets the length of the animation cycle in milliseconds **/
  duration?: number;
  /** Delays displaying the loader to prevent a render flash during normal loading times **/
  delayMS?: number;
}

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
const Dots: React.FC<IDotsProps> = ({ size, color, duration, delayMS, ...other }) => {
  const theme = useContext(ThemeContext);
  const environment = useDocument(theme);
  const canTransformSVG = useRef<boolean | null>(null);

  if (environment && canTransformSVG.current === null) {
    const svg = environment.createElementNS('http://www.w3.org/2000/svg', 'svg');

    canTransformSVG.current = 'transform' in svg;
  }

  const { delayComplete } = useSchedule({ duration, delayMS, loop: true });
  const dotOne = useRef<SVGCircleElement>(null);
  const dotTwo = useRef<SVGCircleElement>(null);
  const dotThree = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!canTransformSVG.current && delayComplete) {
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

export default Dots;
