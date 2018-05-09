/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import tabbable from 'tabbable';
import {
  ControlledComponent,
  composeEventHandlers,
  KEY_CODES
} from '@zendeskgarden/react-selection';

export default class FocusJailContainer extends ControlledComponent {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getContainerProps - Props to be spread onto the element you want to jail
     * @param {Function} renderProps.containerRef - Callback for the ref of the containing element
     */
    children: PropTypes.func,
    /**
     * Whether to focus the jailed container immediately on mount
     */
    focusOnMount: PropTypes.bool,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  static defaultProps = {
    focusOnMount: true
  };

  componentDidMount() {
    const { focusOnMount } = this.props;

    this.validateContainerRef();

    if (focusOnMount) {
      this.focusElement(this.container);
    }
  }

  /** This method is added to the prototype of FocusJailContainer to allow for easier test mocking */
  /* eslint-disable class-methods-use-this */
  focusElement(element) {
    element && element.focus();
  }
  /* eslint-enable class-methods-use-this */

  validateContainerRef = () => {
    if (!this.container) {
      throw new Error(
        'Accessibility Error: You must apply the ref prop to your containing element.'
      );
    }
  };

  getContainerProps = ({ onKeyDown, ...other } = {}) => {
    return {
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        if (event.keyCode !== KEY_CODES.TAB) {
          return;
        }

        this.validateContainerRef();
        const elements = tabbable(this.container);

        const index = elements.indexOf(event.target);

        if (elements.length === 0) {
          setTimeout(() => {
            this.focusElement(this.container);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        } else if (event.shiftKey) {
          const newIndex = index <= 0 ? elements.length - 1 : index - 1;

          setTimeout(() => {
            this.focusElement(elements[newIndex]);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        } else {
          const newIndex = (index + 1) % elements.length;

          setTimeout(() => {
            this.focusElement(elements[newIndex]);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        }
      }),
      ...other
    };
  };

  containerRef = reference => {
    this.container = reference;
  };

  render() {
    const { children, render = children } = this.props;

    return render({
      getContainerProps: this.getContainerProps,
      containerRef: this.containerRef
    });
  }
}
