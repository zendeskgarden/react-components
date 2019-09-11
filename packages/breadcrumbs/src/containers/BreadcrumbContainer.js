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
     * @param {Function} renderProps.getCurrentPageProps - Props to be spread onto current page element
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(
        'Deprecation Warning: The `BreadcrumbContainer` component has been deprecated. ' +
          'It will be removed in an upcoming major release. Migrate to the ' +
          '`@zendeskgarden/container-breadcrumb` package to continue receiving updates.'
      );
      /* eslint-enable */
    }
  }

  getContainerProps = ({ role = 'navigation', ...other } = {}) => {
    return {
      role,
      'aria-label': 'Breadcrumb navigation',
      ...other
    };
  };

  getCurrentPageProps = props => {
    return {
      'aria-current': 'page',
      ...props
    };
  };

  render() {
    const { children, render = children } = this.props;

    return render({
      getContainerProps: this.getContainerProps,
      getCurrentPageProps: this.getCurrentPageProps
    });
  }
}
