/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useSchedule } from '@zendeskgarden/container-schedule';
import { useDocument } from '@zendeskgarden/react-theming';
import { IDotsProps } from '../types';
import {
  StyledDotsCircleOne,
  StyledDotsCircleTwo,
  StyledDotsCircleThree,
  StyledSVG,
  StyledLoadingPlaceholder
} from '../styled';

const COMPONENT_ID = 'loaders.dots';

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export const Dots = forwardRef<SVGSVGElement, IDotsProps>(
  ({ size, color, duration, delayMS, ...other }, ref) => {
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
        $dataGardenId={COMPONENT_ID}
        ref={ref}
        fontSize={size!}
        color={color!}
        width="80"
        height="72"
        {...other}
      >
        <g fill="currentColor">
          <StyledDotsCircleOne $duration={duration!} ref={dotOne} />
          <StyledDotsCircleTwo $duration={duration!} ref={dotTwo} />
          <StyledDotsCircleThree $duration={duration!} ref={dotThree} />
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

Dots.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  duration: 1250,
  delayMS: 750
};
