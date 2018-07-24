/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';

import TooltipContainer from '../containers/TooltipContainer';
import TooltipView from '../views/TooltipView';
import LightTooltip from '../views/LightTooltip';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};

const TYPE = {
  LIGHT: 'light',
  DARK: 'dark'
};

export default class Tooltip extends ControlledComponent {
  static propTypes = {
    /** Appends the tooltip to the body element */
    appendToBody: PropTypes.bool,
    arrow: PropTypes.bool,
    children: PropTypes.node,
    /** Milliseconds of delay before open/close of tooltip is initiated */
    delayMilliseconds: PropTypes.number,
    /** Whether Popper.js should update based on DOM resize events */
    eventsEnabled: PropTypes.bool,
    id: PropTypes.string,
    trigger: PropTypes.node,
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
    size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRA_LARGE]),
    type: PropTypes.oneOf([TYPE.LIGHT, TYPE.DARK])
  };

  static defaultProps = {
    arrow: true,
    eventsEnabled: true,
    type: TYPE.DARK
  };

  state = {
    id: IdManager.generateId()
  };

  render() {
    const {
      appendToBody,
      trigger,
      placement: defaultPlacement,
      eventsEnabled,
      popperModifiers,
      delayMilliseconds,
      type,
      arrow,
      children,
      size,
      ...otherProps
    } = this.props;

    const { id } = this.getControlledState();

    return (
      <TooltipContainer
        appendToBody={appendToBody}
        id={id}
        placement={defaultPlacement}
        eventsEnabled={eventsEnabled}
        popperModifiers={popperModifiers}
        delayMilliseconds={delayMilliseconds}
        trigger={({ getTriggerProps }) => {
          return cloneElement(trigger, getTriggerProps(trigger.props));
        }}
      >
        {({ getTooltipProps, placement }) => {
          const tooltipProps = { arrow, placement, size, ...otherProps };
          const TooltipElem = type === TYPE.LIGHT ? LightTooltip : TooltipView;

          return <TooltipElem {...getTooltipProps(tooltipProps)}>{children}</TooltipElem>;
        }}
      </TooltipContainer>
    );
  }
}
