/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SelectionContainer, ControlledComponent, IdManager } from '@zendeskgarden/react-selection';

export default class PaginationContainer extends ControlledComponent {
  static propTypes = {
    /** The currently focused key */
    focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The currently selected key */
    selectedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * @param {Object} newState - The updated state
     * @param {Any} newState.selectedKey - The newly selected key
     * @param {Any} newState.focusedKey - The newly focused key
     */
    onStateChange: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getContainerProps - Props to be spread onto the containing element
     * @param {Function} renderProps.getPageProps - Props to be spread onto each page element. `({key})` is required. Use `index` attribute for custom ordering.
     * @param {Function} renderProps.getPreviousPageProps - Props to be spread onto the previous page element. `({key})` is required.
     * @param {Function} renderProps.getNextPageProps - Props to be spread onto the next page element. `({key})` is required.
     * @param {Any} renderProps.focusedKey - Unique key of currently focused page
     * @param {Any} renderProps.selectedKey - Unique key of currently selected page
     */
    children: PropTypes.func,
    /** Identical to children */
    render: PropTypes.func,
    /** The root ID to use for descendants. A unique ID is created if none is provided. **/
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
      id: IdManager.generateId('garden-pagination-container')
    };
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(
        'Deprecation Warning: The `PaginationContainer` component has been deprecated. ' +
          'It will be removed in an upcoming major release. Migrate to the ' +
          '`@zendeskgarden/container-pagination` package to continue receiving updates.'
      );
      /* eslint-enable */
    }
  }

  getContainerProps = (props = {}) => {
    return {
      'aria-label': 'Pagination navigation',
      ...props
    };
  };

  getPreviousPageProps = ({ key, ...otherProps } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getPreviousPageProps regardless of being used within a .map()'
      );
    }

    return {
      key,
      'aria-label': 'Previous page',
      ...otherProps
    };
  };

  getNextPageProps = ({ key, ...otherProps } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getNextPageProps regardless of being used within a .map()'
      );
    }

    return {
      key,
      'aria-label': 'Next page',
      ...otherProps
    };
  };

  getPageProps = ({ key, ...otherProps } = {}) => {
    if (typeof key === 'undefined' || key === null) {
      throw new Error(
        '"key" must be defined within getPageProps regardless of being used within a .map()'
      );
    }

    const { selectedKey } = this.getControlledState();
    const isCurrentPage = selectedKey === key;
    let ariaLabel = `Page ${key}`;

    if (isCurrentPage) {
      ariaLabel = `Current page, Page ${key}`;
    }

    return {
      key,
      'aria-label': ariaLabel,
      ...otherProps
    };
  };

  render() {
    const { children, render = children } = this.props;
    const { focusedKey, selectedKey, id } = this.getControlledState();

    return (
      <SelectionContainer
        id={id}
        focusedKey={focusedKey}
        selectedKey={selectedKey}
        onStateChange={this.setControlledState}
      >
        {({ getContainerProps, getItemProps }) =>
          render({
            getContainerProps: props => getContainerProps(this.getContainerProps(props)),
            getPageProps: props => getItemProps(this.getPageProps(props)),
            getPreviousPageProps: props => getItemProps(this.getPreviousPageProps(props)),
            getNextPageProps: props => getItemProps(this.getNextPageProps(props)),
            focusedKey,
            selectedKey
          })
        }
      </SelectionContainer>
    );
  }
}
