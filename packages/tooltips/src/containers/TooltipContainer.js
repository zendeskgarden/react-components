/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Manager, Popper, Target } from 'react-popper';
import {
  ControlledComponent,
  composeEventHandlers,
  IdManager
} from '@zendeskgarden/react-selection';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { getPopperPlacement, getRtlPopperPlacement } from '../utils/gardenPlacements';

/**
 * This container must provide a wrapper for the provided tooltip
 * due to constraints in our arrow css. We must ensure that the container
 * of the tooltip can retain it's relative positioning. Without this
 * container Popper would apply absolute positioning.
 */
const TooltipWrapper = styled.div`
  z-index: ${props => props.zIndex};

  &[aria-hidden='true'] {
    display: none;
  }
`;

class TooltipContainer extends ControlledComponent {
  static propTypes = {
    /** Appends the tooltip to the body element */
    appendToBody: PropTypes.bool,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTooltipProps - Props to be spread onto the tooltip element
     * @param {Function} renderProps.isVisible - Whether the Tooltip is currently visible
     * @param {Any} renderProps.placement - The current placement of the Tooltip. Will update based on boundary conflicts.
     * @param {Any} renderProps.outOfBoundaries - Whether the current tooltip has escaped it's boundary.
     * @param {Any} renderProps.scheduleUpdate - Method to force an update within Popper.js
     */
    children: PropTypes.func,
    /** Milliseconds of delay before open/close of tooltip is initiated */
    delayMilliseconds: PropTypes.number,
    /** Whether Popper.js should update based on DOM resize events */
    eventsEnabled: PropTypes.bool,
    /** The root ID to use for descendants. A unique ID is created if none is provided.  */
    id: PropTypes.string,
    /** Controls visibility of tooltip */
    isVisible: PropTypes.bool,
    /** Returns all changed state. Used for controlling usage. */
    onStateChange: PropTypes.func,
    /**
     * These placements differ from the default naming of Popper.JS placements to help
     * assist with RTL layouts.
     **/
    placement: PropTypes.oneOf([
      'auto',
      'top',
      'top-start',
      'top-end',
      'end',
      'end-top',
      'end-bottom',
      'bottom',
      'bottom-start',
      'bottom-end',
      'start',
      'start-top',
      'start-bottom'
    ]),
    /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
    popperModifiers: PropTypes.object,
    /** Identical to children */
    render: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTriggerProps - Props to be spread onto the trigger element
     * @param {Function} renderProps.isVisible - Whether the Tooltip is currently visible
     * @param {Function} renderProps.ref - Callback to retrieve the trigger elements ref
     */
    trigger: PropTypes.func,
    /**
     * The z-index of the popper.js placement container
     */
    zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    placement: 'top',
    eventsEnabled: true,
    delayMilliseconds: 500
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isVisible: false,
      id: IdManager.generateId('garden-tooltip-container')
    };

    this.mouseEntered = true;
  }

  componentWillUnmount() {
    clearTimeout(this.openTooltipTimeout);
    clearTimeout(this.closeTooltipTimeout);
  }

  openTooltip = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.closeTooltipTimeout);

    this.openTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: true });
    }, delayMilliseconds);
  };

  closeTooltip = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.openTooltipTimeout);

    this.closeTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: false });
    }, delayMilliseconds);
  };

  getTriggerProps = ({
    tabIndex = 0,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...other
  } = {}) => {
    return {
      tabIndex,
      onMouseEnter: composeEventHandlers(onMouseEnter, () => this.openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => this.closeTooltip()),
      onFocus: composeEventHandlers(onFocus, () => this.openTooltip()),
      // Close menu immediately when blurred
      onBlur: composeEventHandlers(onBlur, () => this.closeTooltip(0)),
      ...other
    };
  };

  getTooltipProps = ({
    role = 'tooltip',
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...other
  } = {}) => {
    return {
      role,
      onMouseEnter: composeEventHandlers(onMouseEnter, () => this.openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => this.closeTooltip()),
      onFocus: composeEventHandlers(onFocus, () => this.openTooltip()),
      // Close menu after delay to mimic mouse interaction
      onBlur: composeEventHandlers(onBlur, () => this.closeTooltip()),
      ...other
    };
  };

  convertGardenToPopperPlacement = () => {
    const { placement } = this.props;

    if (isRtl(this.props)) {
      return getRtlPopperPlacement(placement);
    }

    return getPopperPlacement(placement);
  };

  render() {
    const {
      children,
      render = children,
      trigger,
      eventsEnabled,
      popperModifiers,
      appendToBody,
      zIndex
    } = this.props;
    const { isVisible } = this.getControlledState();

    return (
      <Manager tag={false}>
        <>
          <Target>
            {({ targetProps }) => {
              return (
                trigger &&
                trigger({
                  getTriggerProps: props => this.getTriggerProps({ ...props }),
                  ref: targetProps.ref,
                  isVisible
                })
              );
            }}
          </Target>
          <Popper
            placement={this.convertGardenToPopperPlacement()}
            eventsEnabled={eventsEnabled}
            modifiers={popperModifiers}
          >
            {({ popperProps, scheduleUpdate }) => {
              const popperPlacement = popperProps['data-placement'];
              const outOfBoundaries = popperProps['data-x-out-of-boundaries'];

              if (!isVisible) {
                return null;
              }

              const tooltip = (
                <TooltipWrapper ref={popperProps.ref} style={popperProps.style} zIndex={zIndex}>
                  {render({
                    getTooltipProps: props => this.getTooltipProps(props),
                    isVisible,
                    placement: popperPlacement,
                    outOfBoundaries,
                    scheduleUpdate
                  })}
                </TooltipWrapper>
              );

              if (appendToBody) {
                return createPortal(tooltip, document.body);
              }

              return tooltip;
            }}
          </Popper>
        </>
      </Manager>
    );
  }
}

export default withTheme(TooltipContainer);
