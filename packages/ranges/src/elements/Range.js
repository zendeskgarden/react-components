/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { composeEventHandlers, ControlledComponent } from '@zendeskgarden/react-selection';
import PropTypes from 'prop-types';

import SingleThumbView from '../views/SingleThumbView';

/**
 * Accepts all `<input [type="range"]>` props
 */
export default class Range extends ControlledComponent {
  static propTypes = {
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    rangeRef: PropTypes.func
  };

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1
  };

  static hasType = () => Range;

  state = {
    focused: false,
    backgroundSize: 0
  };

  /**
   * Set background size to match the initial value of the input
   * on first render.
   */
  componentDidMount() {
    this.updateBackgroundWidthFromInput(this.rangeRef);
  }

  updateBackgroundWidthFromInput = rangeRef => {
    this.setControlledState({
      backgroundSize: this.getBackgroundWidthFromInput(rangeRef)
    });
  };

  /**
   * Calculate background size as a percentage to
   * align with value thumb.
   */
  getBackgroundWidthFromInput = target => {
    let { max } = this.props;
    const { min } = this.props;
    const { value } = target;

    if (parseFloat(max) < parseFloat(min)) {
      max = 100;
    }

    const percentage = (100 * (value - min)) / (max - min);

    return `${percentage}%`;
  };

  render() {
    const { min, max, step, onFocus, onBlur, onChange, rangeRef, ...otherProps } = this.props;
    const { focused, backgroundSize } = this.getControlledState();

    return (
      <SingleThumbView
        min={min}
        max={max}
        step={step}
        backgroundSize={backgroundSize}
        focused={focused}
        onFocus={composeEventHandlers(onFocus, () => {
          this.setControlledState({ focused: true });
        })}
        onBlur={composeEventHandlers(onBlur, () => {
          this.setControlledState({ focused: false });
        })}
        onChange={composeEventHandlers(onChange, event => {
          this.updateBackgroundWidthFromInput(event.target);
        })}
        ref={ref => {
          this.rangeRef = ref;
          rangeRef && rangeRef(ref);
        }}
        {...otherProps}
      />
    );
  }
}
