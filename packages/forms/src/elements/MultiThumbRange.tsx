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
  useContext
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import debounce from 'lodash.debounce';
import { KEY_CODES, composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useDocument } from '@zendeskgarden/react-theming';
import {
  StyledSlider,
  StyledSliderTrack,
  StyledSliderTrackRail,
  StyledSliderThumb
} from '../styled';
import useFieldContext from '../utils/useFieldContext';

export interface IMultiThumbRangeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Sets the minimum permitted value */
  min?: number;
  /** Sets the maximum permitted value */
  max?: number;
  /** Sets the minimum thumb input value */
  minValue?: number;
  /** Sets the maximum thumb input value */
  maxValue?: number;
  /** Defines the stepping interval */
  step?: number;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /**
   * Handles change events
   *
   * @param {Object} updatedValues The values that have changed
   * @param {number} [updatedValues.minValue] The optional minimum value
   * @param {number} [updatedValues.maxValue] The optional maximum value
   * */
  onChange?: (updatedValues: { minValue?: number; maxValue?: number }) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const MultiThumbRange: React.FC<IMultiThumbRangeProps> = ({
  min,
  max,
  minValue,
  maxValue,
  disabled,
  step,
  onChange,
  onMouseDown,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const themedDocument = useDocument(theme);
  const [isMinThumbFocused, setIsMinThumbFocused] = useState(false);
  const [railWidth, setRailWidth] = useState(0);
  const [isMousedDown, setIsMousedDown] = useState(false);
  const trackRailRef = useRef<HTMLDivElement>(null);
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);
  const fieldContext = useFieldContext();
  const { isLabelHovered, isLabelActive, multiThumbRangeRef } = fieldContext || {};

  /**
   * The window resize event is debounced to reduce unnecessary renders
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onWindowResize = useCallback(
    debounce(() => {
      if (trackRailRef.current) {
        setRailWidth(trackRailRef.current.getBoundingClientRect().width);
      }
    }, 100),
    []
  );

  useEffect(() => {
    if (multiThumbRangeRef) {
      multiThumbRangeRef.current = minThumbRef.current;
    }
  }, [multiThumbRangeRef]);

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

      if (onChange && (newMinValue !== minValue || newMaxValue !== maxValue)) {
        onChange({ minValue: newMinValue, maxValue: newMaxValue });
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

  const calculateUpdatedValue = useCallback(
    (e: React.MouseEvent) => {
      if (!trackRailRef.current) {
        return undefined;
      }

      const trackOffsetLeft = trackRailRef.current.getBoundingClientRect().left;
      const trackOffsetRight = trackOffsetLeft + trackRailRef.current.getBoundingClientRect().width;
      const trackWidth = trackRailRef.current.getBoundingClientRect().width;

      let diffX = e.pageX - (theme.rtl ? trackOffsetRight : trackOffsetLeft);

      if (theme.rtl) {
        diffX *= -1;
      }

      const newValue =
        min! + parseInt((((max! - min!) * diffX) / trackWidth) as unknown as string, 10);

      // Reduce updated value to align with step size
      return Math.floor(newValue / step!) * step!;
    },
    [max, min, step, theme.rtl]
  );

  /**
   * Calculates the update thumb position based on current mouse position
   */
  const onDocumentMouseMove = useCallback(
    e => {
      const newValue = calculateUpdatedValue(e);

      if (isMinThumbFocused) {
        updateMinThumbSlider(newValue);
      } else {
        updateMaxThumbSlider(newValue);
      }
    },
    [calculateUpdatedValue, isMinThumbFocused, updateMinThumbSlider, updateMaxThumbSlider]
  );

  const removeDragEvents = useCallback(() => {
    if (themedDocument) {
      themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
      themedDocument.removeEventListener('mouseup', removeDragEvents);
    }

    setIsMousedDown(false);
  }, [onDocumentMouseMove, themedDocument]);

  const onTrackMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0 || disabled) {
        return;
      }

      e.preventDefault();

      const valueAtMouseDown = calculateUpdatedValue(e);

      if (valueAtMouseDown === undefined || minValue === undefined || maxValue === undefined) {
        return;
      }

      const distanceFromMinThumb = Math.abs(minValue - valueAtMouseDown);
      const distanceFromMaxThumb = Math.abs(maxValue - valueAtMouseDown);

      if (distanceFromMinThumb <= distanceFromMaxThumb) {
        minThumbRef.current && minThumbRef.current.focus();
        updateMinThumbSlider(valueAtMouseDown);
      } else {
        maxThumbRef.current && maxThumbRef.current.focus();
        updateMaxThumbSlider(valueAtMouseDown);
      }
    },
    [
      calculateUpdatedValue,
      disabled,
      maxValue,
      minValue,
      updateMaxThumbSlider,
      updateMinThumbSlider
    ]
  );

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

  const onSliderMouseDown = composeEventHandlers(onMouseDown, onTrackMouseDown);

  return (
    <StyledSlider
      data-test-id="slider"
      isDisabled={disabled}
      onMouseDown={onSliderMouseDown}
      {...props}
    >
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
            aria-valuetext={minValue as unknown as string}
            data-test-id="thumb"
            isDisabled={disabled}
            position={minPosition}
            ref={minThumbRef}
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => onKeyDown('min')(e)}
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
            data-garden-active={isLabelActive}
            data-garden-hover={isLabelHovered}
          />
          <StyledSliderThumb
            role="slider"
            tabIndex={disabled ? undefined : 0}
            aria-valuemin={minValue}
            aria-valuemax={max}
            aria-valuenow={maxValue}
            aria-valuetext={maxValue as unknown as string}
            data-test-id="thumb"
            isDisabled={disabled}
            position={maxPosition}
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => onKeyDown('max')(e)}
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
  step: 1
};
