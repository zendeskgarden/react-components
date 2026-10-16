/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';
import {
  useRef,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  FC,
  MouseEvent as ReactMouseEvent,
  memo
} from 'react';
import { ThemeContext } from 'styled-components';

import DEFAULT_THEME from '../../theming/elements/theme';
import { IHSVColor } from '../../types/elements';
import { hslToHsv } from '../../utils/colorpicker/conversion';
import { getNextHsv, getThumbPosition } from '../../utils/colorpicker/saturation';
import { background, StyledColorWell } from '../../views/colorpicker/StyledColorWell';
import { StyledColorWellThumb } from '../../views/colorpicker/StyledColorWellThumb';
import { COMPONENT_IDS } from '../utils';

interface IColorWellProps {
  hue: number;
  saturation: number;
  lightness: number;
  onChange?: (hsv: IHSVColor, event: ReactMouseEvent | MouseEvent) => void;
}

export const ColorWell: FC<IColorWellProps> = memo(({ hue, saturation, lightness, onChange }) => {
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const { rtl } = theme;
  const containerRef = useRef<HTMLDivElement>(null);
  const hsv = hslToHsv(hue, saturation, lightness);
  const mouseActiveRef = useRef(false);

  // State for thumb position when change come from mouse activity on the color well
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { topFromMouse, leftFromMouse } = getThumbPosition(x, y, rtl, containerRef);

  // State for thumb position when change come from saturation and lightness props without mouse activity
  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    setTopPosition(100 - hsv.v);
    setLeftPosition(rtl ? 100 - hsv.s : hsv.s);
  }, [hsv.s, hsv.v, rtl]);

  const throttledChange = useMemo(() => {
    return throttle((e: ReactMouseEvent | MouseEvent) => {
      if (containerRef.current) {
        const nextHsv = getNextHsv(e, hue, containerRef.current, rtl);

        onChange && onChange(nextHsv, e);
      }
    }, 50);
  }, [hue, rtl, onChange]);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent | MouseEvent) => {
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
    (e: ReactMouseEvent<HTMLDivElement>) => {
      mouseActiveRef.current = true;
      e.persist();
      handleMouseMove(e);
      throttledChange(e);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [throttledChange, handleMouseMove, handleMouseUp]
  );

  useEffect(() => {
    return () => {
      throttledChange.cancel();
    };
  }, [throttledChange]);

  const thumbTop = mouseActiveRef.current ? topFromMouse : topPosition;
  const thumbLeft = mouseActiveRef.current ? leftFromMouse : leftPosition;

  return (
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    <StyledColorWell
      $hue={hue}
      ref={containerRef}
      role="presentation"
      onMouseDown={handleMouseDown}
      style={{ background: background({ theme, $hue: hue }) }}
      data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_colorwell']}
      data-garden-version={PACKAGE_VERSION}
      data-test-id="colorwell"
    >
      <StyledColorWellThumb
        style={{ top: `${thumbTop}%`, left: `${thumbLeft}%` }}
        data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_colorwell_thumb']}
        data-garden-version={PACKAGE_VERSION}
        data-test-id="colorwell-thumb"
      />
    </StyledColorWell>
  );
});

ColorWell.displayName = 'ColorWell';

ColorWell.propTypes = {
  hue: PropTypes.number.isRequired,
  saturation: PropTypes.number.isRequired,
  lightness: PropTypes.number.isRequired,
  onChange: PropTypes.func
};
