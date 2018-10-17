/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import {
  ControlledComponent,
  IdManager,
  composeEventHandlers
} from '@zendeskgarden/react-selection';

export default class TabsContainer extends ControlledComponent {
  static propTypes = {
    /**
     * Whether the accordion is currently expanded
     */
    expanded: PropTypes.bool,
    /**
     * @param {Object} newState - The updated state
     * @param {Any} newState.expanded - Whether the accordion is currently expanded
     */
    onStateChange: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getHeadingProps - Props to be spread onto each heading element.
     * @param {Function} renderProps.getHeadingButtonProps - Props to be spread onto each heading button element.
     * @param {Function} renderProps.getPanelProps - Props to be spread onto each panel element.
     * @param {Any} renderProps.expanded - Whether the accordion is currently expanded
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
      expanded: false,
      id: IdManager.generateId('garden-accordion-container')
    };
  }

  getHeaderId = () => `${this.getControlledState().id}-header`;

  getPanelId = () => `${this.getControlledState().id}-panel`;

  getHeadingProps = ({ role = 'heading', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  getHeadingButtonProps = ({ onClick, ...other } = {}) => {
    const { expanded } = this.getControlledState();

    return {
      id: this.getHeaderId(),
      'aria-controls': this.getPanelId(),
      'aria-expanded': expanded,
      onClick: composeEventHandlers(onClick, () => {
        this.setControlledState({ expanded: !expanded });
      }),
      ...other
    };
  };

  getPanelProps = ({ role = 'region', ...other } = {}) => {
    const { expanded } = this.getControlledState();

    return {
      role,
      'aria-hidden': !expanded,
      'aria-labelledby': this.getHeaderId(),
      id: this.getPanelId(),
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;
    const { expanded } = this.getControlledState();

    return render({
      getHeadingProps: this.getHeadingProps,
      getHeadingButtonProps: this.getHeadingButtonProps,
      getPanelProps: this.getPanelProps,
      expanded
    });
  }
}
