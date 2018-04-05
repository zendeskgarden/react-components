import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import TooltipContainer from '../containers/TooltipContainer';
import TooltipView from '../views/TooltipView';
import LightTooltip from '../views/LightTooltip';

const PLACEMENT = {
  AUTO: 'auto',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};

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

export default class Tooltip extends Component {
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
    /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
    placement: PropTypes.oneOf([
      PLACEMENT.AUTO,
      PLACEMENT.TOP,
      PLACEMENT.TOP_START,
      PLACEMENT.TOP_END,
      PLACEMENT.RIGHT,
      PLACEMENT.RIGHT_START,
      PLACEMENT.RIGHT_END,
      PLACEMENT.BOTTOM,
      PLACEMENT.BOTTOM_START,
      PLACEMENT.BOTTOM_END,
      PLACEMENT.LEFT,
      PLACEMENT.LEFT_START,
      PLACEMENT.LEFT_END
    ]),
    /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
    popperModifiers: PropTypes.object,
    size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRA_LARGE]),
    type: PropTypes.oneOf([TYPE.LIGHT, TYPE.DARK])
  };

  static defaultProps = {
    arrow: true,
    eventsEnabled: true,
    size: SIZE.SMALL,
    type: TYPE.DARK
  };

  render() {
    const {
      appendToBody,
      id,
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
