/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  HTMLAttributes,
  KeyboardEvent,
  FunctionComponent
} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { withTheme, useDocument, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {
  StyledSlider,
  StyledSliderTrack,
  StyledSliderTrackRail,
  StyledSliderThumb
} from '../styled';
import { ThemeProps, DefaultTheme } from 'styled-components';

export interface IMultiThumbRangeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** The minimum permitted value */
  min?: number;
  /** The maximum permitted value */
  max?: number;
  /** The minimum thumb input value */
  minValue?: number;
  /** The maximum thumb input value */
  maxValue?: number;
  /** The stepping interval */
  step?: number;
  /** Apply disabled styling */
  disabled?: boolean;
  /** Handler for processing change events */
  onChange?: (updatedValues: { minValue?: number; maxValue?: number }) => void;
}

/**
 * Accepts all `<div>` attributes and events.
 */
const MultiThumbRange: React.FC<IMultiThumbRangeProps & ThemeProps<DefaultTheme>> = ({
  min,
  max,
  minValue,
  maxValue,
  disabled,
  step,
  onChange,
  theme,
  ...props
}) => {
  const themedDocument = useDocument(theme);
  const [isMinThumbFocused, setIsMinThumbFocused] = useState(false);
  const [railWidth, setRailWidth] = useState(0);
  const [isMousedDown, setIsMousedDown] = useState(false);
  const trackRailRef = useRef<HTMLDivElement>(null);
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);

  /**
   * The window resize event is debounced to reduce unnecessary renders
   */
  const onWindowResize = useCallback(
    debounce(() => {
      if (trackRailRef.current) {
        setRailWidth(trackRailRef.current.getBoundingClientRect().width);
      }
    }, 100),
    []
  );

  useEffect(() => {
    onWindowResize();

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize]);

  const calculateMinPosition = useCallback(
    minDistance => {
      let boundedMinValue = minValue!;

      if (boundedMinValue < min!) {
        boundedMinValue = min!;
      } else if (boundedMinValue > maxValue!) {
        boundedMinValue = maxValue!;
      } else if (boundedMinValue > max!) {
        boundedMinValue = max!;
      }

      return ((boundedMinValue - min!) / (max! - min!)) * (railWidth - minDistance);
    },
    [max, maxValue, min, minValue, railWidth]
  );

  const calculateMaxPosition = useCallback(
    minDistance => {
      let boundedMaxValue = maxValue!;

      if (boundedMaxValue > max!) {
        boundedMaxValue = max!;
      } else if (boundedMaxValue < minValue!) {
        boundedMaxValue = minValue!;
      } else if (boundedMaxValue < min!) {
        boundedMaxValue = min!;
      }

      return ((boundedMaxValue - min!) / (max! - min!)) * (railWidth - minDistance) + minDistance;
    },
    [max, maxValue, min, minValue, railWidth]
  );

  /**
   * Provides updated values to onChange prop if values have changed
   */
  const onRangeValuesChange = useCallback(
    ({ minValue: newMinValue, maxValue: newMaxValue } = {}) => {
      if (disabled) {
        return;
      }

      if (newMinValue !== minValue || newMaxValue !== maxValue) {
        onChange && onChange({ minValue: newMinValue, maxValue: newMaxValue });
      }
    },
    [disabled, maxValue, minValue, onChange]
  );

  const updateMinThumbSlider = useCallback(
    value => {
      let managedValue = value;

      if (value < min!) {
        managedValue = min;
      } else if (value > maxValue!) {
        managedValue = maxValue;
      }

      onRangeValuesChange({ maxValue, minValue: managedValue });
    },
    [maxValue, min, onRangeValuesChange]
  );

  const updateMaxThumbSlider = useCallback(
    value => {
      let managedValue = value;

      if (value < minValue!) {
        managedValue = minValue;
      } else if (value > max!) {
        managedValue = max;
      }

      onRangeValuesChange({ maxValue: managedValue, minValue });
    },
    [max, minValue, onRangeValuesChange]
  );

  /**
   * Calculates the update thumb position based on current mouse position
   */
  const onDocumentMouseMove = useCallback(
    e => {
      if (!trackRailRef.current) {
        return;
      }

      const trackOffsetLeft = trackRailRef.current.getBoundingClientRect().left;
      const trackOffsetRight = trackOffsetLeft + trackRailRef.current.getBoundingClientRect().width;
      const trackWidth = trackRailRef.current.getBoundingClientRect().width;

      let diffX = e.pageX - (theme.rtl ? trackOffsetRight : trackOffsetLeft);

      if (theme.rtl) {
        diffX *= -1;
      }

      let newValue =
        min! + parseInt(((((max! - min!) * diffX) / trackWidth) as unknown) as string, 10);

      // Reduce updated value to align with step size
      newValue = Math.floor(newValue / step!) * step!;

      if (isMinThumbFocused) {
        updateMinThumbSlider(newValue);
      } else {
        updateMaxThumbSlider(newValue);
      }
    },
    [isMinThumbFocused, max, min, theme, step, updateMaxThumbSlider, updateMinThumbSlider]
  );

  const removeDragEvents = useCallback(() => {
    if (themedDocument) {
      themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
      themedDocument.removeEventListener('mouseup', removeDragEvents);
    }

    setIsMousedDown(false);
  }, [onDocumentMouseMove, themedDocument]);

  useEffect(() => {
    if (isMousedDown && themedDocument) {
      themedDocument.addEventListener('mousemove', onDocumentMouseMove);
      themedDocument.addEventListener('mouseup', removeDragEvents);
    }

    return () => {
      if (isMousedDown && themedDocument) {
        themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
        themedDocument.removeEventListener('mouseup', removeDragEvents);
      }
    };
  }, [isMousedDown, onDocumentMouseMove, removeDragEvents, themedDocument]);

  const onKeyDown = (type: 'min' | 'max') => (e: KeyboardEvent<HTMLDivElement>) => {
    const isMinThumb = type === 'min';
    let keyIntercepted = false;

    const decrementThumb = () => {
      if (isMinThumb) {
        updateMinThumbSlider(minValue! - step!);
      } else {
        updateMaxThumbSlider(maxValue! - step!);
      }
    };

    const incrementThumb = () => {
      if (isMinThumb) {
        updateMinThumbSlider(minValue! + step!);
      } else {
        updateMaxThumbSlider(maxValue! + step!);
      }
    };

    switch (e.keyCode) {
      case KEY_CODES.LEFT:
        if (theme.rtl) {
          incrementThumb();
        } else {
          decrementThumb();
        }

        keyIntercepted = true;
        break;

      case KEY_CODES.DOWN:
        decrementThumb();
        keyIntercepted = true;
        break;

      case KEY_CODES.RIGHT:
        if (theme.rtl) {
          decrementThumb();
        } else {
          incrementThumb();
        }

        keyIntercepted = true;
        break;

      case KEY_CODES.UP:
        incrementThumb();
        keyIntercepted = true;
        break;

      case KEY_CODES.HOME:
        if (isMinThumb) {
          updateMinThumbSlider(min);
        } else {
          updateMaxThumbSlider(min);
        }

        keyIntercepted = true;
        break;

      case KEY_CODES.END:
        if (isMinThumb) {
          updateMinThumbSlider(max);
        } else {
          updateMaxThumbSlider(max);
        }

        keyIntercepted = true;
        break;
    }

    if (keyIntercepted) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // This may be increased to enforce separation between thumbs
  const MIN_DISTANCE = 0;

  const minPosition = calculateMinPosition(MIN_DISTANCE);
  const maxPosition = calculateMaxPosition(MIN_DISTANCE);
  const sliderBackgroundSize = Math.abs(maxPosition) - Math.abs(minPosition);

  return (
    <StyledSlider data-test-id="slider" isDisabled={disabled} {...props}>
      <StyledSliderTrack
        backgroundSize={sliderBackgroundSize}
        backgroundPosition={theme.rtl ? railWidth - maxPosition : minPosition}
        data-test-id="track"
        isDisabled={disabled}
      >
        <StyledSliderTrackRail data-test-id="rail" ref={trackRailRef}>
          <StyledSliderThumb
            role="slider"
            tabIndex={disabled ? undefined : 0}
            aria-valuemin={min}
            aria-valuemax={maxValue}
            aria-valuenow={minValue}
            aria-valuetext={(minValue as unknown) as string}
            data-test-id="thumb"
            isDisabled={disabled}
            position={minPosition}
            ref={minThumbRef}
            onKeyDown={e => onKeyDown('min')(e)}
            onFocus={() => {
              setIsMinThumbFocused(true);
            }}
            onBlur={() => {
              setIsMinThumbFocused(false);
            }}
            onMouseDown={e => {
              setIsMousedDown(true);

              e.preventDefault();
              e.stopPropagation();

              minThumbRef.current && minThumbRef.current.focus();
            }}
          />
          <StyledSliderThumb
            role="slider"
            tabIndex={disabled ? undefined : 0}
            aria-valuemin={minValue}
            aria-valuemax={max}
            aria-valuenow={maxValue}
            aria-valuetext={(maxValue as unknown) as string}
            data-test-id="thumb"
            isDisabled={disabled}
            position={maxPosition}
            onKeyDown={e => onKeyDown('max')(e)}
            ref={maxThumbRef}
            onMouseDown={e => {
              setIsMousedDown(true);

              e.preventDefault();
              e.stopPropagation();

              maxThumbRef.current && maxThumbRef.current.focus();
            }}
          />
        </StyledSliderTrackRail>
      </StyledSliderTrack>
    </StyledSlider>
  );
};

MultiThumbRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

MultiThumbRange.defaultProps = {
  min: 0,
  max: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  theme: DEFAULT_THEME
};

/** @component */
export default withTheme(MultiThumbRange) as FunctionComponent<IMultiThumbRangeProps>;
