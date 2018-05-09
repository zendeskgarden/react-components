/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

/** @component */
export default class ControlledComponent extends Component {
  static propTypes = {
    onStateChange: PropTypes.func
  };

  isControlledProp = key => {
    return Object.prototype.hasOwnProperty.call(this.props, key);
  };

  /**
   * Used to help retrieve state that can be controlled through props
   */
  getControlledState = (stateToMerge = this.state) => {
    return Object.keys(stateToMerge).reduce((state, key) => {
      state[key] = this.isControlledProp(key) ? this.props[key] : stateToMerge[key];

      return state;
    }, {});
  };

  /**
   * Used to help set state that can be controlled through props
   */
  setControlledState = (newState = {}) => {
    const { onStateChange } = this.props;

    if (onStateChange) {
      const newExternalState = {};
      const newInternalState = {};

      for (const key in newState) {
        if (this.isControlledProp(key)) {
          newExternalState[key] = newState[key];
        } else {
          newInternalState[key] = newState[key];
        }
      }

      onStateChange(newExternalState);
      this.setState(newInternalState);
    } else {
      this.setState(newState);
    }
  };
}
