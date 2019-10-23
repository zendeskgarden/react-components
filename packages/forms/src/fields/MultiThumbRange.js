/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import {
  retrieveComponentStyles,
  withTheme,
  isRtl,
  getDocument
} from '@zendeskgarden/react-theming';
import RangeStyles from '@zendeskgarden/css-forms/dist/range.css';

const SLIDER_COMPONENT_ID = 'ranges.multi_thumb_range.slider';
const TRACK_COMPONENT_ID = 'ranges.multi_thumb_range.track';
const RAIL_COMPONENT_ID = 'ranges.multi_thumb_range.rail';
const THUMB_COMPONENT_ID = 'ranges.multi_thumb_range.thumb';

/**
 * These Styled components are not exported with the other Views due to their logic
 * being more tightly coupled with this specific implemenation.
 */
const StyledSlider = styled.div.attrs(props => ({
  'data-garden-id': SLIDER_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'slider',
  className: classNames(RangeStyles['c-range__slider'], {
    [RangeStyles['is-disabled']]: props.isDisabled,
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${props => retrieveComponentStyles(SLIDER_COMPONENT_ID, props)};
`;

const StyledTrack = styled.div.attrs({
  'data-garden-id': TRACK_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'track',
  className: RangeStyles['c-range__slider__track']
})`
  ${props => retrieveComponentStyles(TRACK_COMPONENT_ID, props)};
`;

const StyledTrackRail = styled.div.attrs({
  'data-garden-id': RAIL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'rail',
  className: RangeStyles['c-range__slider__track__rail']
})`
  ${props => retrieveComponentStyles(RAIL_COMPONENT_ID, props)};
`;

const StyledThumb = styled.div.attrs(props => ({
  'data-garden-id': THUMB_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'thumb',
  className: classNames(RangeStyles['c-range__slider__track__rail__thumb'], {
    [RangeStyles['is-focused']]: props.isFocused
  })
}))`
  ${props => retrieveComponentStyles(THUMB_COMPONENT_ID, props)};
`;

const MultiThumbRange = ({
  min,
  max,
  minValue,
  maxValue,
  disabled,
  step,
  onChange,
  ...otherProps
}) => {
  const [isMinThumbFocused, setIsMinThumbFocused] = useState(false);
  const [isMaxThumbFocused, setIsMaxThumbFocused] = useState(false);
  const [railWidthPx, setRailWidthPx] = useState(0);
  const [isMousedDown, setIsMousedDown] = useState(false);
  const trackRailRef = useRef();
  const minThumbRef = useRef();
  const maxThumbRef = useRef();

  const themedDocument = getDocument(otherProps);
  const rtl = isRtl(otherProps);

  /**
   * The window resize event is debounced to reduce unnecessary renders
   */
  const onWindowResize = useCallback(
    debounce(() => {
      setRailWidthPx(trackRailRef.current.getBoundingClientRect().width);
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
    minDistancePx => {
      let boundedMinValue = minValue;

      if (boundedMinValue < min) {
        boundedMinValue = min;
      } else if (boundedMinValue > maxValue) {
        boundedMinValue = maxValue;
      } else if (boundedMinValue > max) {
        boundedMinValue = max;
      }

      return ((boundedMinValue - min) / (max - min)) * (railWidthPx - minDistancePx);
    },
    [max, maxValue, min, minValue, railWidthPx]
  );

  const calculateMaxPosition = useCallback(
    minDistancePx => {
      let boundedMaxValue = maxValue;

      if (boundedMaxValue > max) {
        boundedMaxValue = max;
      } else if (boundedMaxValue < minValue) {
        boundedMaxValue = minValue;
      } else if (boundedMaxValue < min) {
        boundedMaxValue = min;
      }

      return (
        ((boundedMaxValue - min) / (max - min)) * (railWidthPx - minDistancePx) + minDistancePx
      );
    },
    [max, maxValue, min, minValue, railWidthPx]
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

      if (value < min) {
        managedValue = min;
      } else if (value > maxValue) {
        managedValue = maxValue;
      }

      onRangeValuesChange({ maxValue, minValue: managedValue });
    },
    [maxValue, min, onRangeValuesChange]
  );

  const updateMaxThumbSlider = useCallback(
    value => {
      let managedValue = value;

      if (value < minValue) {
        managedValue = minValue;
      } else if (value > max) {
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

      const trackOffsetLeft = trackRailRef.current.getBoundingClientRect().x;
      const trackOffsetRight = trackOffsetLeft + trackRailRef.current.getBoundingClientRect().width;
      const trackWidth = trackRailRef.current.getBoundingClientRect().width;

      let diffX = e.pageX - (rtl ? trackOffsetRight : trackOffsetLeft);

      if (rtl) {
        diffX *= -1;
      }

      let newValue = min + parseInt(((max - min) * diffX) / trackWidth, 10);

      // Reduce updated value to align with step size
      newValue = Math.floor(newValue / step) * step;

      if (isMinThumbFocused) {
        updateMinThumbSlider(newValue);
      } else {
        updateMaxThumbSlider(newValue);
      }
    },
    [isMinThumbFocused, max, min, rtl, step, updateMaxThumbSlider, updateMinThumbSlider]
  );

  const removeDragEvents = useCallback(() => {
    themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
    themedDocument.removeEventListener('mouseup', removeDragEvents);

    setIsMousedDown(false);
  }, [onDocumentMouseMove, themedDocument]);

  useEffect(() => {
    if (isMousedDown) {
      themedDocument.addEventListener('mousemove', onDocumentMouseMove);
      themedDocument.addEventListener('mouseup', removeDragEvents);
    }

    return () => {
      if (isMousedDown) {
        themedDocument.removeEventListener('mousemove', onDocumentMouseMove);
        themedDocument.removeEventListener('mouseup', removeDragEvents);
      }
    };
  }, [isMousedDown, onDocumentMouseMove, removeDragEvents, themedDocument]);

  const onKeyDown = type => e => {
    const isMinThumb = type === 'min';
    let keyIntercepted = false;

    const decrementThumb = () => {
      if (isMinThumb) {
        updateMinThumbSlider(minValue - step);
      } else {
        updateMaxThumbSlider(maxValue - step);
      }
    };

    const incrementThumb = () => {
      if (isMinThumb) {
        updateMinThumbSlider(minValue + step);
      } else {
        updateMaxThumbSlider(maxValue + step);
      }
    };

    switch (e.keyCode) {
      case KEY_CODES.LEFT:
        if (rtl) {
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
        if (rtl) {
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

      default:
        break;
    }

    if (keyIntercepted) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // This may be increased to enforce separation between thumbs
  const MIN_DISTANCE_PX = 0;

  const minPositionPx = calculateMinPosition(MIN_DISTANCE_PX);
  const maxPositionPx = calculateMaxPosition(MIN_DISTANCE_PX);
  const sliderBackgroundSizePx = Math.abs(maxPositionPx) - Math.abs(minPositionPx);

  const trackStyle = {
    backgroundSize: `${sliderBackgroundSizePx}px`,
    backgroundPosition: `${rtl ? railWidthPx - maxPositionPx : minPositionPx}px`
  };

  const positionKey = rtl ? 'right' : 'left';
  const minThumbStyle = { [positionKey]: `${minPositionPx}px` };
  const maxThumbStyle = { [positionKey]: `${maxPositionPx}px` };

  return (
    <StyledSlider isDisabled={disabled}>
      <StyledTrack style={trackStyle}>
        <StyledTrackRail ref={trackRailRef}>
          <StyledThumb
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={maxValue}
            aria-valuenow={minValue}
            aria-valuetext={minValue}
            isFocused={isMinThumbFocused}
            style={minThumbStyle}
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

              minThumbRef.current.focus();
            }}
          />
          <StyledThumb
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={minValue}
            aria-valuemax={max}
            aria-valuenow={maxValue}
            aria-valuetext={maxValue}
            isFocused={isMaxThumbFocused}
            style={maxThumbStyle}
            onKeyDown={e => onKeyDown('max')(e)}
            ref={maxThumbRef}
            onFocus={() => {
              setIsMaxThumbFocused(true);
            }}
            onBlur={() => {
              setIsMaxThumbFocused(false);
            }}
            onMouseDown={e => {
              setIsMousedDown(true);

              e.preventDefault();
              e.stopPropagation();

              maxThumbRef.current.focus();
            }}
          />
        </StyledTrackRail>
      </StyledTrack>
    </StyledSlider>
  );
};

MultiThumbRange.propTypes = {
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
};

MultiThumbRange.defaultProps = {
  min: 0,
  max: 100,
  minValue: 0,
  maxValue: 100,
  step: 1
};

/** @component */
export default withTheme(MultiThumbRange);
