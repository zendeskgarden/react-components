/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class BreadcrumbContainer extends Component {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getContainerProps - Props to be spread onto containing element
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  getContainerProps = ({ role = 'navigation', ...other } = {}) => {
    return {
      role,
      'aria-label': 'Breadcrumb navigation',
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;

    return render({
      getContainerProps: this.getContainerProps
    });
  }
}
