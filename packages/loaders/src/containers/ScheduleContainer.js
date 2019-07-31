/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-loaders` ScheduleContainer has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/container-schedule` package to continue receiving updates.'
  );
  /* eslint-enable */
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LoadingPlaceholder } from '../styled-elements';

export default class ScheduleContainer extends Component {
  static propTypes = {
    /**
     * Size of the loader. Can inherit from `font-size` styling.
     **/
    size: PropTypes.any,
    /**
     * Delay in MS to begin loader rendering. This helps prevent
     * quick flashes of the loader during normal loading times.
     **/
    delayMS: PropTypes.number,
    /**
     * Function to call on each animation frame.
     **/
    tick: PropTypes.func,
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  static defaultProps = {
    delayMS: 750
  };

  constructor(props) {
    super(props);

    this.state = {
      delayComplete: false
    };
  }

  componentDidMount() {
    const { delayMS } = this.props;

    this.renderingDelayTimeout = setTimeout(() => {
      this.setState({ delayComplete: true }, () => {
        this.performAnimationFrame();
      });
    }, delayMS);
  }

  componentWillUnmount() {
    clearTimeout(this.renderingDelayTimeout);
    cancelAnimationFrame(this.tick);
  }

  performAnimationFrame() {
    this.tick = requestAnimationFrame(timestamp => {
      this.props.tick(timestamp);
      this.performAnimationFrame();
    });
  }

  render() {
    const { delayMS, size, children, render = children } = this.props;
    const { delayComplete } = this.state;

    if (!delayComplete && delayMS !== 0) {
      return <LoadingPlaceholder fontSize={size}>&nbsp;</LoadingPlaceholder>;
    }

    return render();
  }
}
