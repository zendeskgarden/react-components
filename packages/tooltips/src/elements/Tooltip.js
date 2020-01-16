/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { isRtl, withTheme, getDocument } from '@zendeskgarden/react-theming';
import { Manager, Popper, Reference } from 'react-popper';

import { getPopperPlacement, getRtlPopperPlacement } from '../utils/gardenPlacements';
import TooltipView from '../views/TooltipView';
import LightTooltip from '../views/LightTooltip';

/**
 * This container must provide a wrapper for the provided tooltip
 * due to constraints in our arrow css. We must ensure that the container
 * of the tooltip can retain it's relative positioning. Without this
 * container Popper would apply absolute positioning.
 *
 * This wrapper also includes an opacity transition. It allows Popper to
 * re-position the tooltip without having a visible shift. The transition
 * is fast enough that it should not be perceptible.
 */
const TooltipWrapper = styled.div`
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
  }

  /* stylelint-disable-next-line time-min-milliseconds */
  transition: opacity 10ms;
  opacity: 1;
  z-index: ${props => props.zIndex};
`;

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

/**
 * Due to Popper.JS needing a reference to a component we provide a simple wrapper
 * to ensure the correct reference is provided.
 */
const TriggerWrapper = styled.div`
  display: inline-block;
`;

const Tooltip = ({
  appendToBody,
  arrow,
  children,
  delayMilliseconds,
  eventsEnabled,
  id,
  trigger,
  placement,
  popperModifiers,
  size,
  type,
  zIndex,
  initialIsVisible,
  ...otherProps
}) => {
  const scheduleUpdateRef = useRef();
  const { isVisible, getTooltipProps, getTriggerProps, openTooltip, closeTooltip } = useTooltip({
    id,
    delayMilliseconds,
    isVisible: initialIsVisible
  });

  /**
   * Recalculate popper placement when open to allow animations to complete.
   **/
  useEffect(() => {
    if (isVisible) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  }, [isVisible]);

  const popperPlacement = isRtl(otherProps)
    ? getRtlPopperPlacement(placement)
    : getPopperPlacement(placement);

  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          const triggerElement = cloneElement(trigger, getTriggerProps(trigger.props));

          return <TriggerWrapper ref={ref}>{triggerElement}</TriggerWrapper>;
        }}
      </Reference>
      <Popper
        placement={popperPlacement}
        eventsEnabled={isVisible && eventsEnabled}
        modifiers={popperModifiers}
      >
        {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
          scheduleUpdateRef.current = scheduleUpdate;
          const { onFocus, onBlur, ...otherTooltipProps } = otherProps;
          const tooltipProps = {
            arrow,
            placement: currentPlacement,
            size,
            onFocus: composeEventHandlers(onFocus, () => {
              openTooltip();
            }),
            onBlur: composeEventHandlers(onBlur, () => {
              closeTooltip(0);
            }),
            ...otherTooltipProps
          };
          const TooltipElem = type === TYPE.LIGHT ? LightTooltip : TooltipView;

          const tooltip = (
            <TooltipWrapper
              ref={isVisible && ref}
              style={style}
              zIndex={zIndex}
              aria-hidden={!isVisible}
            >
              <TooltipElem {...getTooltipProps(tooltipProps)}>{children}</TooltipElem>
            </TooltipWrapper>
          );

          if (appendToBody) {
            return createPortal(tooltip, getDocument(otherProps).body);
          }

          return tooltip;
        }}
      </Popper>
    </Manager>
  );
};

Tooltip.propTypes = {
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
  type: PropTypes.oneOf([TYPE.LIGHT, TYPE.DARK]),
  /**
   * The z-index of the popper.js placement container
   */
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  initialIsVisible: PropTypes.bool
};

Tooltip.defaultProps = {
  arrow: true,
  eventsEnabled: true,
  type: TYPE.DARK,
  placement: 'top',
  delayMilliseconds: 500
};

export default withTheme(Tooltip);
