/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useCallback, useContext, useEffect, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import throttle from 'lodash.throttle';
import { IHSVColor } from '../../utils/types';
import { hsl2hsv } from '../../utils/conversion';
import { calculateNextHsv } from '../../utils/saturation';
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

  const throttledChange = useMemo(() => {
    return throttle((e: MouseEvent) => {
      if (container.current) {
        const nextHsv = calculateNextHsv(e, hue, container.current, rtl);

        onChange && onChange(nextHsv, e);
      }
    }, 50);
  }, [hue, rtl, onChange]);

  const handleMouseMove = useCallback((e: MouseEvent) => throttledChange(e), [throttledChange]);

  const handleMouseUp = useCallback(() => {
    throttledChange.cancel();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [throttledChange, handleMouseMove]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

  const topPosition = 100 - hsv.v;
  const leftPosition = rtl ? 100 - hsv.s : hsv.s;

  return (
    <StyledColorWellWrapper>
      <StyledColorWell hue={hue} ref={container} role="presentation" onMouseDown={handleMouseDown}>
        <StyledColorWellGradient>
          <StyledColorWellThumb top={topPosition} left={leftPosition} />
        </StyledColorWellGradient>
      </StyledColorWell>
    </StyledColorWellWrapper>
  );
};
