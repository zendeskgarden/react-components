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
import { getDocument, withTheme } from '@zendeskgarden/react-theming';
import activeElement from 'dom-helpers/activeElement';

export class FocusJailContainer extends ControlledComponent {
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

    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(
        'Deprecation Warning: The `FocusJailContainer` component has been deprecated. ' +
          'It will be removed in an upcoming major release. Migrate to the ' +
          '`@zendeskgarden/container-focusjail` package to continue receiving updates.'
      );
      /* eslint-enable */
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

        const tabbableNodes = this.tabbableNodes();

        if (
          event.shiftKey &&
          (event.target === tabbableNodes.firstItem || event.target === this.container)
        ) {
          this.focusElement(tabbableNodes.lastItem);
          event.preventDefault();
        }

        if (!event.shiftKey && event.target === tabbableNodes.lastItem) {
          this.focusElement(tabbableNodes.firstItem);
          event.preventDefault();
        }
      }),
      ...other
    };
  };

  tabbableNodes = () => {
    const elements = tabbable(this.container);

    return {
      firstItem: elements[0] || this.getInitialFocusNode(),
      lastItem: elements[elements.length - 1] || this.getInitialFocusNode()
    };
  };

  getInitialFocusNode = () => {
    const doc = getDocument ? getDocument(this.props) : document;
    const activeElem = activeElement(doc);

    return this.container.contains(activeElem) ? activeElem : this.container;
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

export default withTheme(FocusJailContainer);
