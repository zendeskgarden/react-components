/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SelectionContainer, ControlledComponent, IdManager } from '@zendeskgarden/react-selection';

export default class TabsContainer extends ControlledComponent {
  static propTypes = {
    /**
     * Whether to handle vertical keyboard navigation
     */
    vertical: PropTypes.bool,
    /**
     * The currently focused key
     */
    focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * The currently selected key
     */
    selectedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * @param {Object} newState - The updated state
     * @param {Any} newState.selectedKey - The newly selected key
     * @param {Any} newState.focusedKey - The newly focused key
     */
    onStateChange: PropTypes.func,
    /**
     * Callback for when a tab has been selected by keyboard or mouse
     * @param {String} selectedKey - The key of the selected tab
     */
    onChange: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTabListProps - Props to be spread onto tab list element
     * @param {Function} renderProps.getTabProps - Props to be spread onto each tab element. `({key})` is required. Use `index` attribute for custom ordering.
     * @param {Function} renderProps.getTabPanelProps - Props to be spread onto each tab panel element. `({key})` is required.
     * @param {Any} renderProps.focusedKey - Unique key of currently focused tab
     * @param {Any} renderProps.selectedKey - Unique key of currently selected tab
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

  static defaultProps = {
    vertical: false
  };

  constructor(...args) {
    super(...args);

    this.state = {
      focusedKey: undefined,
      selectedKey: undefined,
      id: IdManager.generateId('garden-tabs-container')
    };
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(
        'Deprecation Warning: The `TabsContainer` component has been deprecated. ' +
          'It will be removed in an upcoming major release. Migrate to the ' +
          '`@zendeskgarden/container-tabs` package to continue receiving updates.'
      );
      /* eslint-enable */
    }
  }

  onTabSelected = selectedKey => {
    const { onChange } = this.props;

    onChange && onChange(selectedKey);
  };

  getTabListProps = ({ role = 'tablist', ...other } = {}) => {
    return {
      role,
      ...other
    };
  };

  getTabProps = ({ role = 'tab', key, ...other } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getTabProps regardless of being used within a .map()'
      );
    }

    return {
      key,
      role,
      ...other
    };
  };

  getTabPanelProps = ({ role = 'tabpanel', key, ...other } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getTabPanelProps regardless of being used within a .map()'
      );
    }

    const { selectedKey } = this.getControlledState();
    const isHidden = key !== selectedKey;

    return {
      key,
      role,
      'aria-hidden': isHidden,
      ...other
    };
  };

  render() {
    const { children, render = children, vertical } = this.props;
    const { focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <SelectionContainer
        id={id}
        direction={vertical ? 'vertical' : 'horizontal'}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={newState => {
          /**
           * A new tab has been selected
           */
          if (Object.prototype.hasOwnProperty.call(newState, 'selectedKey')) {
            this.onTabSelected(newState.selectedKey);
          }

          this.setControlledState(newState);
        }}
      >
        {({ getContainerProps, getItemProps }) =>
          render({
            getTabListProps: props => getContainerProps(this.getTabListProps(props)),
            getTabProps: props => getItemProps(this.getTabProps(props)),
            getTabPanelProps: this.getTabPanelProps,
            focusedKey,
            selectedKey
          })
        }
      </SelectionContainer>
    );
  }
}
