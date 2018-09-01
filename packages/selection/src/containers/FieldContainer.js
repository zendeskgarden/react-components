/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import ControlledComponent from '../utils/ControlledComponent';
import IdManager from '../utils/IdManager';

export default class FieldContainer extends ControlledComponent {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getLabelProps - Props to be spread onto the label element
     * @param {Function} renderProps.getInputProps - Props to be spread onto the input element
     * @param {Function} renderProps.getHintProps - Props to be spread onto the hint element
     * @param {Function} renderProps.getMessageProps - Props to be spread onto the message element
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func,
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.string
  };

  constructor(...args) {
    super(...args);

    this.state = {
      id: IdManager.generateId()
    };
  }

  retrieveInputId = () => `${this.getControlledState().id}--input`;

  retrieveLabelId = () => `${this.getControlledState().id}--label`;

  retrieveHintId = () => `${this.getControlledState().id}--hint`;

  getLabelProps = ({
    id = this.retrieveLabelId(),
    htmlFor = this.retrieveInputId(),
    ...other
  } = {}) => {
    return {
      id,
      htmlFor,
      ...other
    };
  };

  getInputProps = ({ id = this.retrieveInputId(), ...other } = {}, { isDescribed = true } = {}) => {
    return {
      id,
      'aria-labelledby': this.retrieveLabelId(),
      'aria-describedby': isDescribed ? this.retrieveHintId() : null,
      ...other
    };
  };

  getHintProps = ({ id = this.retrieveHintId(), ...other } = {}) => {
    return {
      id,
      ...other
    };
  };

  getMessageProps = ({ role = 'alert', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;

    return render({
      getLabelProps: this.getLabelProps,
      getInputProps: this.getInputProps,
      getHintProps: this.getHintProps,
      getMessageProps: this.getMessageProps
    });
  }
}
