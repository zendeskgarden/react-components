import { Component } from 'react';
import PropTypes from 'prop-types';

import composeEventHandlers from '../utils/composeEventHandlers';

export default class KeyboardFocusContainer extends Component {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getFocusProps - Props to be spread onto the trigger
     * @param {Boolean} renderProps.keyboardFocused - Whether the item is currently focused by a keyboard
     */
    children: PropTypes.func,
    /** Same as children */
    render: PropTypes.func
  };

  constructor(...args) {
    super(...args);

    this.state = {
      keyboardFocused: false
    };

    this.keyboardFocusable = true;
  }

  onMouseDown = () => {
    this.keyboardFocusable = false;

    /**
     * This is necessary to recognize focus events caused by keyboard vs mouseDown.
     * Due to React event ordering this is always called before onFocus.
     */
    setTimeout(() => {
      this.keyboardFocusable = true;
    }, 0);
  };

  onFocus = () => {
    if (this.keyboardFocusable) {
      this.setState({ keyboardFocused: true });
    }
  };

  onBlur = () => {
    this.setState({ keyboardFocused: false });
  };

  getFocusProps = ({ tabIndex = 0, onBlur, onFocus, onMouseDown, ...otherProps } = {}) => {
    return {
      tabIndex,
      onBlur: composeEventHandlers(onBlur, this.onBlur),
      onFocus: composeEventHandlers(onFocus, this.onFocus),
      onMouseDown: composeEventHandlers(onMouseDown, this.onMouseDown),
      ...otherProps
    };
  };

  render() {
    const { children, render = children } = this.props;
    const { keyboardFocused } = this.state;

    return render({
      getFocusProps: this.getFocusProps,
      keyboardFocused
    });
  }
}
