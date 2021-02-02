/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import throttle from 'lodash.throttle';
import { IHSVColor } from '../../utils/types';
import { hsl2hsv } from '../../utils/conversion';
import { calculateNextHsv, getSaturationPosition } from '../../utils/saturation';
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
  onChange?: (hsv: IHSVColor, event: React.MouseEvent<any>) => void;
}

export const ColorWell: React.FC<IColorWellProps> = ({ hue, saturation, lightness, onChange }) => {
  const { rtl } = useContext(ThemeContext);
  const container = useRef<HTMLDivElement>(null);
  const hsv = hsl2hsv(hue, saturation, lightness);
  const [position, setPosition] = useState<{ s: number; v: number }>({
    s: rtl ? 100 - hsv.s : hsv.s,
    v: hsv.v
  });

  const throttledChange = throttle(e => {
    if (container.current) {
      const nextHsv = calculateNextHsv(e, hsv, container.current, rtl);
      const saturationPosition = getSaturationPosition(e, container.current);

      setPosition(saturationPosition);
      onChange && onChange(nextHsv, e);
    }
  }, 50);

  const topPosition = 100 - position.v;
  const leftPosition = position.s;

  const handleMouseUp = () => {
    throttledChange.cancel();
    window.removeEventListener('mousemove', throttledChange);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    throttledChange(e);
    window.addEventListener('mousemove', throttledChange);
    window.addEventListener('mouseup', handleMouseUp);
  };

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
