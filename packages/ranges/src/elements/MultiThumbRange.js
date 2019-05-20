/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* stylelint-disable block-no-empty */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { retrieveTheme, withTheme, isRtl, getDocument } from '@zendeskgarden/react-theming';
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

  ${props => retrieveTheme(SLIDER_COMPONENT_ID, props)};
`;

const StyledTrack = styled.div.attrs({
  'data-garden-id': TRACK_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'track',
  className: RangeStyles['c-range__slider__track']
})`
  ${props => retrieveTheme(TRACK_COMPONENT_ID, props)};
`;

const StyledTrackRail = styled.div.attrs({
  'data-garden-id': RAIL_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'rail',
  className: RangeStyles['c-range__slider__track__rail']
})`
  ${props => retrieveTheme(RAIL_COMPONENT_ID, props)};
`;

const StyledThumb = styled.div.attrs(props => ({
  'data-garden-id': THUMB_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'thumb',
  className: classNames(RangeStyles['c-range__slider__track__rail__thumb'], {
    [RangeStyles['is-focused']]: props.isFocused
  })
}))`
  ${props => retrieveTheme(THUMB_COMPONENT_ID, props)};
`;

class MultiThumbRange extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    min: 0,
    max: 100,
    minValue: 0,
    maxValue: 100,
    step: 1
  };

  static hasType = () => MultiThumbRange;

  state = {
    isMinThumbFocused: false,
    isMaxThumbFocused: false,
    railWidthPx: 0
  };

  componentDidMount() {
    // Perform initial range size calculation
    this.onWindowResize();

    this.addRangeResizeEvents();
  }

  componentWillUnmount() {
    this.removeRangeResizeEvents();
  }

  addRangeResizeEvents = () => {
    window.addEventListener('resize', this.onWindowResize);
  };

  removeRangeResizeEvents = () => {
    window.removeEventListener('resize', this.onWindowResize);
  };

  addDragEvents = () => {
    const themedDocument = getDocument(this.props);

    themedDocument.addEventListener('mousemove', this.onDocumentMouseMove);
    themedDocument.addEventListener('mouseup', this.removeDragEvents);
  };

  removeDragEvents = () => {
    const themedDocument = getDocument(this.props);

    themedDocument.removeEventListener('mousemove', this.onDocumentMouseMove);
    themedDocument.removeEventListener('mouseup', this.removeDragEvents);
  };

  /**
   * The window resize event is debounced to reduce unnecessary renders
   */
  onWindowResize = debounce(() => {
    this.setState({ railWidthPx: this.trackRailRef.getBoundingClientRect().width });
  }, 100);

  /**
   * Calculates the update thumb position based on current mouse position
   */
  onDocumentMouseMove = e => {
    const { min, max, step } = this.props;
    const { isMinThumbFocused } = this.state;

    if (!this.trackRailRef) {
      return;
    }

    const trackOffsetLeft = this.trackRailRef.getBoundingClientRect().x;
    const trackOffsetRight = trackOffsetLeft + this.trackRailRef.getBoundingClientRect().width;
    const trackWidth = this.trackRailRef.getBoundingClientRect().width;

    let diffX = e.pageX - (isRtl(this.props) ? trackOffsetRight : trackOffsetLeft);

    if (isRtl(this.props)) {
      diffX *= -1;
    }

    let newValue = min + parseInt(((max - min) * diffX) / trackWidth, 10);

    // Reduce updated value to align with step size
    newValue = Math.floor(newValue / step) * step;

    if (isMinThumbFocused) {
      this.updateMinThumbSlider(newValue);
    } else {
      this.updateMaxThumbSlider(newValue);
    }
  };

  /**
   * Provides updated values to onChange prop if values have changed
   */
  onRangeValuesChange = ({ minValue: newMinValue, maxValue: newMaxValue } = {}) => {
    const { onChange, minValue, maxValue, disabled } = this.props;

    if (disabled) {
      return;
    }

    if (newMinValue !== minValue || newMaxValue !== maxValue) {
      onChange && onChange({ minValue: newMinValue, maxValue: newMaxValue });
      this.setState({ minValue, maxValue });
    }
  };

  updateMinThumbSlider = value => {
    const { min, maxValue } = this.props;
    let managedValue = value;

    if (value < min) {
      managedValue = min;
    } else if (value > maxValue) {
      managedValue = maxValue;
    }

    this.onRangeValuesChange({ maxValue, minValue: managedValue });
  };

  updateMaxThumbSlider = value => {
    const { max, minValue } = this.props;
    let managedValue = value;

    if (value < minValue) {
      managedValue = minValue;
    } else if (value > max) {
      managedValue = max;
    }

    this.onRangeValuesChange({ maxValue: managedValue, minValue });
  };

  onKeyDown = type => e => {
    const isMinThumb = type === 'min';
    const { min, max, step, minValue, maxValue } = this.props;
    let keyIntercepted = false;

    const decrementThumb = () => {
      if (isMinThumb) {
        this.updateMinThumbSlider(minValue - step);
      } else {
        this.updateMaxThumbSlider(maxValue - step);
      }
    };

    const incrementThumb = () => {
      if (isMinThumb) {
        this.updateMinThumbSlider(minValue + step);
      } else {
        this.updateMaxThumbSlider(maxValue + step);
      }
    };

    switch (e.keyCode) {
      case KEY_CODES.LEFT:
        if (isRtl(this.props)) {
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
        if (isRtl(this.props)) {
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
          this.updateMinThumbSlider(min);
        } else {
          this.updateMaxThumbSlider(min);
        }

        keyIntercepted = true;
        break;

      case KEY_CODES.END:
        if (isMinThumb) {
          this.updateMinThumbSlider(max);
        } else {
          this.updateMaxThumbSlider(max);
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

  calculateMinPosition = minDistancePx => {
    const { min, max, minValue, maxValue } = this.props;
    const { railWidthPx } = this.state;

    let boundedMinValue = minValue;

    if (boundedMinValue < min) {
      boundedMinValue = min;
    } else if (boundedMinValue > maxValue) {
      boundedMinValue = maxValue;
    } else if (boundedMinValue > max) {
      boundedMinValue = max;
    }

    return ((boundedMinValue - min) / (max - min)) * (railWidthPx - minDistancePx);
  };

  calculateMaxPosition = minDistancePx => {
    const { min, max, maxValue, minValue } = this.props;
    const { railWidthPx } = this.state;

    let boundedMaxValue = maxValue;

    if (boundedMaxValue > max) {
      boundedMaxValue = max;
    } else if (boundedMaxValue < minValue) {
      boundedMaxValue = minValue;
    } else if (boundedMaxValue < min) {
      boundedMaxValue = min;
    }

    return ((boundedMaxValue - min) / (max - min)) * (railWidthPx - minDistancePx) + minDistancePx;
  };

  render() {
    const { min, max, minValue, maxValue, disabled } = this.props;
    const { isMinThumbFocused, isMaxThumbFocused, railWidthPx } = this.state;

    // This may be increased to enforce separation between thumbs
    const MIN_DISTANCE_PX = 0;

    const minPositionPx = this.calculateMinPosition(MIN_DISTANCE_PX);
    const maxPositionPx = this.calculateMaxPosition(MIN_DISTANCE_PX);
    const sliderBackgroundSizePx = Math.abs(maxPositionPx) - Math.abs(minPositionPx);

    const trackStyle = {
      backgroundSize: `${sliderBackgroundSizePx}px`,
      backgroundPosition: `${isRtl(this.props) ? railWidthPx - maxPositionPx : minPositionPx}px`
    };

    const positionKey = isRtl(this.props) ? 'right' : 'left';
    const minThumbStyle = { [positionKey]: `${minPositionPx}px` };
    const maxThumbStyle = { [positionKey]: `${maxPositionPx}px` };

    return (
      <StyledSlider isDisabled={disabled}>
        <StyledTrack style={trackStyle}>
          <StyledTrackRail
            ref={ref => {
              this.trackRailRef = ref;
            }}
          >
            <StyledThumb
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={min}
              aria-valuemax={maxValue}
              aria-valuenow={minValue}
              aria-valuetext={minValue}
              isFocused={isMinThumbFocused}
              style={minThumbStyle}
              ref={ref => {
                this.minThumbRef = ref;
              }}
              onKeyDown={e => this.onKeyDown('min')(e)}
              onFocus={() => {
                this.setState({ isMinThumbFocused: true });
              }}
              onBlur={() => {
                this.setState({ isMinThumbFocused: false });
              }}
              onMouseDown={e => {
                this.addDragEvents();

                e.preventDefault();
                e.stopPropagation();

                this.minThumbRef.focus();
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
              onKeyDown={e => this.onKeyDown('max')(e)}
              ref={ref => {
                this.maxThumbRef = ref;
              }}
              onFocus={() => {
                this.setState({ isMaxThumbFocused: true });
              }}
              onBlur={() => {
                this.setState({ isMaxThumbFocused: false });
              }}
              onMouseDown={e => {
                this.addDragEvents();

                e.preventDefault();
                e.stopPropagation();

                this.maxThumbRef.focus();
              }}
            />
          </StyledTrackRail>
        </StyledTrack>
      </StyledSlider>
    );
  }
}

export default withTheme(MultiThumbRange);
