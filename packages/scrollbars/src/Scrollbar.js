/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import ScrollbarStyles from '@zendeskgarden/css-scrollbars';

const COMPONENT_ID = 'scrollbars.scrollbar';

class Scrollbar extends Component {
  static propTypes = {
    /**
     * Enable dark styling
     */
    dark: PropTypes.bool,
    active: PropTypes.bool,
    scrolling: PropTypes.bool,
    /**
     * Reference to the react-custom-scrollbars component
     */
    scrollbarRef: PropTypes.func
  };

  static defaultProps = {
    dark: false
  };

  state = {
    isScrolling: false
  };

  /**
   * Our `css-scrollbars` implementation provides these values for us
   */
  removeInvalidStyling = props => {
    if (props.style) {
      delete props.style.width;
      delete props.style.height;
      delete props.style.position;
    }

    return props;
  };

  /**
   * react-custom-scrollbars requires a `ref` attribute which requires us to not use
   * styled-components or a presentation component
   */
  renderHorizontalTrack = props => (
    <div
      {...this.removeInvalidStyling(props)}
      className={classNames(
        ScrollbarStyles['c-scrollbar__track'],
        ScrollbarStyles['c-scrollbar__track--horizontal'],
        {
          [ScrollbarStyles['is-scrolling']]: this.isScrolling(),
          [ScrollbarStyles['is-active']]: this.props.active
        }
      )}
    />
  );

  /**
   * react-custom-scrollbars requires a `ref` attribute which requires us to not use
   * styled-components or a presentation component
   */
  renderVerticalTrack = props => (
    <div
      {...this.removeInvalidStyling(props)}
      className={classNames(
        ScrollbarStyles['c-scrollbar__track'],
        ScrollbarStyles['c-scrollbar__track--vertical'],
        {
          [ScrollbarStyles['is-scrolling']]: this.isScrolling(),
          [ScrollbarStyles['is-active']]: this.props.active
        }
      )}
    />
  );

  /**
   * react-custom-scrollbars requires a `ref` attribute which requires us to not use
   * styled-components or a presentation component
   */
  renderHorizontalThumb = props => (
    <div
      {...this.removeInvalidStyling(props)}
      className={classNames(
        ScrollbarStyles['c-scrollbar__thumb'],
        ScrollbarStyles['c-scrollbar__thumb--horizontal']
      )}
    />
  );

  /**
   * react-custom-scrollbars requires a `ref` attribute which requires us to not use
   * styled-components or a presentation component
   */
  renderVerticalThumb = props => (
    <div
      {...this.removeInvalidStyling(props)}
      className={classNames(
        ScrollbarStyles['c-scrollbar__thumb'],
        ScrollbarStyles['c-scrollbar__thumb--vertical']
      )}
    />
  );

  /**
   * react-custom-scrollbars doesn't have the concept of RTL scrollbars.
   * We must manually "flip" some of their style calculations
   */
  renderView = props => {
    if (isRtl(this.props) && props.style && props.style.marginRight) {
      props.style.marginLeft = props.style.marginRight;
      delete props.style.marginRight;
    }

    return <div {...props} />;
  };

  startScrolling = () => {
    this.setState({ isScrolling: true });
  };

  stopScrolling = () => {
    this.setState({ isScrolling: false });
  };

  isScrolling = () => {
    return this.props.scrolling || this.state.isScrolling;
  };

  render() {
    const {
      dark,
      className,
      onScrollStart,
      onScrollStop,
      onMouseEnter,
      onMouseLeave,
      scrolling, // eslint-disable-line no-unused-vars
      scrollbarRef,
      ...otherProps
    } = this.props;

    return (
      <Scrollbars
        hideTracksWhenNotNeeded
        thumbMinSize={52}
        ref={scrollbarRef}
        data-garden-id={COMPONENT_ID}
        data-garden-version={PACKAGE_VERSION}
        className={classNames(ScrollbarStyles['c-scrollbar'], {
          [ScrollbarStyles['c-scrollbar--dark']]: dark,
          [ScrollbarStyles['is-rtl']]: isRtl(this.props),
          className
        })}
        renderTrackHorizontal={this.renderHorizontalTrack}
        renderTrackVertical={this.renderVerticalTrack}
        renderThumbVertical={this.renderVerticalThumb}
        renderThumbHorizontal={this.renderHorizontalThumb}
        renderView={this.renderView}
        onScrollStart={e => {
          onScrollStart && onScrollStart(e);
          this.startScrolling(e);
        }}
        onScrollStop={e => {
          onScrollStop && onScrollStop(e);
          this.stopScrolling(e);
        }}
        onMouseEnter={e => {
          onMouseEnter && onMouseEnter(e);
          this.startScrolling(e);
        }}
        onMouseLeave={e => {
          onMouseLeave && onMouseLeave(e);
          this.stopScrolling(e);
        }}
        {...otherProps}
      />
    );
  }
}

export default withTheme(Scrollbar);
