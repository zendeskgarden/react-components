/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import PerfectScrollbar from 'perfect-scrollbar';
import { isRtl, retrieveTheme } from '@zendeskgarden/react-theming';

/**
 * These styles are NOT consumed through CSS Modules to allow
 * interaction with with perfect-scrollbars.
 */
import '@zendeskgarden/css-scrollbars';

const EVENT_KEYS = {
  SCROLL_Y: 'ps-scroll-y',
  SCROLL_X: 'ps-scroll-x',
  SCROLL_UP: 'ps-scroll-up',
  SCROLL_DOWN: 'ps-scroll-down',
  SCROLL_LEFT: 'ps-scroll-left',
  SCROLL_RIGHT: 'ps-scroll-right',
  REACH_START_Y: 'ps-y-reach-start',
  REACH_END_Y: 'ps-y-reach-end',
  REACH_START_X: 'ps-x-reach-start',
  REACH_END_X: 'ps-x-reach-end'
};

const COMPONENT_ID = 'scrollbars.scrollbar';

/**
 * Accepts all `<div>` props
 */
const ScrollbarContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames('c-scrollbar', {
      'c-scrollbar--dark': props.dark,
      'is-rtl': isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

export default class Scrollbar extends Component {
  static propTypes = {
    /** Apply dark mode styling */
    dark: PropTypes.bool,
    /** Customizations provided to [perfect-scrollbars](https://github.com/utatti/perfect-scrollbar) */
    perfectScrollbarOptions: PropTypes.object,
    /** Container ref */
    innerRef: PropTypes.func,
    /** Custom tag for the containing element */
    tagName: PropTypes.any,
    onScrollY: PropTypes.func,
    onScrollX: PropTypes.func,
    onScrollUp: PropTypes.func,
    onScrollDown: PropTypes.func,
    onScrollLeft: PropTypes.func,
    onScrollRight: PropTypes.func,
    onReachStartY: PropTypes.func,
    onReachEndY: PropTypes.func,
    onReachStartX: PropTypes.func,
    onReachEndX: PropTypes.func
  };

  static defaultProps = {
    tagName: 'div',
    dark: false
  };

  componentDidMount() {
    const { perfectScrollbarOptions } = this.props;

    if (this.scrollbarContainerRef) {
      this.perfectScrollbar = new PerfectScrollbar(
        this.scrollbarContainerRef,
        perfectScrollbarOptions
      );

      for (const eventKey in EVENT_KEYS) {
        if (Object.prototype.hasOwnProperty.call(EVENT_KEYS, eventKey)) {
          this.scrollbarContainerRef.addEventListener(
            EVENT_KEYS[eventKey],
            this.onCustomEvent(EVENT_KEYS[eventKey])
          );
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.perfectScrollbar) {
      this.perfectScrollbar.update();
    }
  }

  componentWillUnmount() {
    this.perfectScrollbar.destroy();
    this.perfectScrollbar = null;

    for (const eventKey in EVENT_KEYS) {
      if (Object.prototype.hasOwnProperty.call(EVENT_KEYS, eventKey)) {
        this.scrollbarContainerRef.removeEventListener(
          EVENT_KEYS[eventKey],
          this.onCustomEvent(EVENT_KEYS[eventKey])
        );
      }
    }
  }

  onCustomEvent = eventKey => {
    const {
      onScrollY,
      onScrollX,
      onScrollUp,
      onScrollDown,
      onScrollLeft,
      onScrollRight,
      onReachStartY,
      onReachEndY,
      onReachStartX,
      onReachEndX
    } = this.props;

    const EVENTS = {
      [EVENT_KEYS.SCROLL_Y]: onScrollY,
      [EVENT_KEYS.SCROLL_X]: onScrollX,
      [EVENT_KEYS.SCROLL_UP]: onScrollUp,
      [EVENT_KEYS.SCROLL_DOWN]: onScrollDown,
      [EVENT_KEYS.SCROLL_LEFT]: onScrollLeft,
      [EVENT_KEYS.SCROLL_RIGHT]: onScrollRight,
      [EVENT_KEYS.REACH_START_Y]: onReachStartY,
      [EVENT_KEYS.REACH_END_Y]: onReachEndY,
      [EVENT_KEYS.REACH_START_X]: onReachStartX,
      [EVENT_KEYS.REACH_END_X]: onReachEndX
    };

    return (...args) => EVENTS[eventKey] && EVENTS[eventKey](...args);
  };

  render() {
    const { children, innerRef, tagName, ...other } = this.props;

    const CustomScrollbarContainer = ScrollbarContainer.withComponent(tagName);

    return (
      <CustomScrollbarContainer
        {...other}
        innerRef={ref => {
          this.scrollbarContainerRef = ref;
          innerRef && innerRef(ref);
        }}
      >
        {children}
      </CustomScrollbarContainer>
    );
  }
}
