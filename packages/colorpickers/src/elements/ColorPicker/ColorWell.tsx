/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useCallback, useContext, useEffect, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import throttle from 'lodash.throttle';
import { IHSVColor } from '../../utils/types';
import { hsl2hsv } from '../../utils/conversion';
import { getNextHsv, getThumbPosition } from '../../utils/saturation';
import {
  StyledColorWell,
  StyledColorWellGradient,
  StyledColorWellThumb,
  StyledColorWellWrapper
} from '../../styled';

interface IColorWellProps {
  hue: number;
  saturation: number;
  lightness: number;
  onChange?: (hsv: IHSVColor, event: MouseEvent) => void;
}

export const ColorWell: React.FC<IColorWellProps> = ({ hue, saturation, lightness, onChange }) => {
  const { rtl } = useContext(ThemeContext);
  const container = useRef<HTMLDivElement>(null);
  const hsv = hsl2hsv(hue, saturation, lightness);
  const mouseActiveRef = useRef(false);

  // State for thumb position when change come from mouse activity on the color well
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { topFromMouse, leftFromMouse } = getThumbPosition(x, y, rtl, container);

  // State for thumb position when change come from saturation and lightness props without mouse activity
  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    setTopPosition(100 - hsv.v);
    setLeftPosition(rtl ? 100 - hsv.s : hsv.s);
  }, [hsv.s, hsv.v, rtl]);

  const throttledChange = useMemo(() => {
    return throttle((e: MouseEvent) => {
      if (container.current) {
        const nextHsv = getNextHsv(e, hue, container.current, rtl);

        onChange && onChange(nextHsv, e);
      }
    }, 50);
  }, [hue, rtl, onChange]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseActiveRef.current = true;
      setX(e.pageX);
      setY(e.pageY);
      throttledChange(e);
    },
    [throttledChange]
  );

  const handleMouseUp = useCallback(() => {
    mouseActiveRef.current = true;
    setTimeout(() => {
      mouseActiveRef.current = false;
    });
    throttledChange.cancel();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      mouseActiveRef.current = true;
      handleMouseMove(e as any);
      throttledChange(e as any);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [throttledChange, handleMouseMove, handleMouseUp]
  );

  useEffect(() => {
    return () => {
      throttledChange.cancel();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [throttledChange, handleMouseMove, handleMouseUp]);

  return (
    <StyledColorWellWrapper>
      <StyledColorWell hue={hue} ref={container} role="presentation" onMouseDown={handleMouseDown}>
        <StyledColorWellGradient>
          <StyledColorWellThumb
            top={mouseActiveRef.current ? topFromMouse : topPosition}
            left={mouseActiveRef.current ? leftFromMouse : leftPosition}
          />
        </StyledColorWellGradient>
      </StyledColorWell>
    </StyledColorWellWrapper>
  );
};
