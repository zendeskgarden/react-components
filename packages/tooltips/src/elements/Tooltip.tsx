/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { withTheme, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Manager, Popper, Reference } from 'react-popper';

import {
  getPopperPlacement,
  getRtlPopperPlacement,
  GARDEN_PLACEMENT
} from '../utils/gardenPlacements';
import { StyledTooltip, StyledLightTooltip, TOOLTIP_SIZE } from '../styled';

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
const TooltipWrapper = styled.div<{ zIndex?: number | string }>`
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
  }

  /* stylelint-disable-next-line time-min-milliseconds */
  transition: opacity 10ms;
  opacity: 1;
  z-index: ${props => props.zIndex};
`;

type TOOLTIP_TYPE = 'light' | 'dark';

export interface ITooltipProps
  extends Partial<ThemeProps<DefaultTheme>>,
    React.HTMLAttributes<HTMLDivElement> {
  /** Appends the tooltip to the body element */
  appendToNode?: Element;
  hasArrow?: boolean;
  /** Milliseconds of delay before open/close of tooltip is initiated */
  delayMilliseconds?: number;
  /** Whether Popper.js should update based on DOM resize events */
  eventsEnabled?: boolean;
  id?: string;
  content: React.ReactNode;
  /**
   * These placements differ from the default naming of Popper.JS placements to help
   * assist with RTL layouts.
   **/
  placement?: GARDEN_PLACEMENT;
  /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
  popperModifiers?: any;
  size?: TOOLTIP_SIZE;
  type?: TOOLTIP_TYPE;
  /** The z-index of the popper.js placement container */
  zIndex?: number | string;
  initialIsVisible?: boolean;
  children: React.ReactElement;
  refKey?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({
  id,
  delayMilliseconds,
  initialIsVisible,
  content,
  refKey,
  placement,
  eventsEnabled,
  popperModifiers,
  children,
  hasArrow,
  size,
  type,
  appendToNode,
  zIndex,
  ...otherProps
}) => {
  const scheduleUpdateRef = useRef<() => void>();
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

  const popperPlacement = otherProps.theme!.rtl
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  const singleChild = React.Children.only(children);

  /**
   * By default PopperJS treats an overflow container as it's boundary.
   * It is much more common to want the parent viewport to determine
   * the overflow boundary.
   */
  const modifiers = {
    preventOverflow: {
      boundariesElement: 'viewport'
    },
    ...popperModifiers
  };

  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          return cloneElement(
            singleChild,
            getTriggerProps({ ...singleChild.props, [refKey!]: ref })
          );
        }}
      </Reference>
      <Popper
        placement={popperPlacement}
        eventsEnabled={isVisible && eventsEnabled}
        modifiers={modifiers}
      >
        {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
          scheduleUpdateRef.current = scheduleUpdate;

          const { onFocus, onBlur, ...otherTooltipProps } = otherProps;

          const tooltipProps = {
            hasArrow,
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

          const TooltipElem = type === 'light' ? StyledLightTooltip : StyledTooltip;

          const tooltip = (
            <TooltipWrapper ref={ref} style={style} zIndex={zIndex} aria-hidden={!isVisible}>
              <TooltipElem {...(getTooltipProps(tooltipProps) as any)}>{content}</TooltipElem>
            </TooltipWrapper>
          );

          if (appendToNode) {
            return createPortal(tooltip, appendToNode);
          }

          return tooltip;
        }}
      </Popper>
    </Manager>
  );
};

Tooltip.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  delayMilliseconds: PropTypes.number,
  eventsEnabled: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.any.isRequired,
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
  popperModifiers: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  type: PropTypes.oneOf(['light', 'dark']),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  initialIsVisible: PropTypes.bool,
  refKey: PropTypes.string
};

Tooltip.defaultProps = {
  hasArrow: true,
  eventsEnabled: true,
  type: 'dark',
  placement: 'top',
  delayMilliseconds: 500,
  refKey: 'ref',
  theme: DEFAULT_THEME
};

/** @component */
export default withTheme(Tooltip) as React.FC<ITooltipProps>;
