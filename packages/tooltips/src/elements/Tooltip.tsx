/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers, getControlledValue } from '@zendeskgarden/container-utilities';
import { Manager, Popper, Reference } from 'react-popper';
import { Modifiers } from 'popper.js';

import {
  getPopperPlacement,
  getRtlPopperPlacement,
  GARDEN_PLACEMENT
} from '../utils/gardenPlacements';
import { StyledTooltipWrapper, StyledTooltip, TOOLTIP_SIZE, TOOLTIP_TYPE } from '../styled';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Appends the tooltip to the element provided */
  appendToNode?: Element;
  /** Adds an arrow to the tooltip */
  hasArrow?: boolean;
  /** Adds milliseconds of delay to the opening and closing of the tooltip */
  delayMS?: number;
  /** Allows the tooltip to reposition during browser resize events */
  eventsEnabled?: boolean;
  /** Sets the ID of the tooltip */
  id?: string;
  /** Defines the content of the tooltip */
  content: React.ReactNode;
  /**
   * Adjusts the placement of the tooltip
   **/
  placement?: GARDEN_PLACEMENT;
  /** Passes configurations to the [Popper instance](https://popper.js.org/docs/v2/modifiers/) */
  popperModifiers?: Modifiers;
  /** Adjusts the padding and font size */
  size?: TOOLTIP_SIZE;
  /** Specifies the tooltip type */
  type?: TOOLTIP_TYPE;
  /** Sets the `z-index` of the tooltip */
  zIndex?: number | string;
  /** Displays the tooltip on initial render */
  isInitialVisible?: boolean;
  /** Displays the tooltip */
  isVisible?: boolean;
  children: React.ReactElement;
  /** Defines the ref key used to position the tooltip */
  refKey?: string;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tooltip: React.FC<ITooltipProps> = ({
  id,
  delayMS,
  isInitialVisible,
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
  isVisible: externalIsVisible,
  ...otherProps
}) => {
  const theme = useContext(ThemeContext);
  const scheduleUpdateRef = useRef<() => void>();
  const { isVisible, getTooltipProps, getTriggerProps, openTooltip, closeTooltip } = useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible
  });

  const controlledIsVisible = getControlledValue(externalIsVisible, isVisible);

  /**
   * Recalculate popper placement when open to allow animations to complete.
   **/
  useEffect(() => {
    if (controlledIsVisible && scheduleUpdateRef.current) {
      scheduleUpdateRef.current();
    }
  }, [controlledIsVisible, content]);

  const popperPlacement = theme.rtl
    ? getRtlPopperPlacement(placement!)
    : getPopperPlacement(placement!);

  const singleChild = React.Children.only(children);

  /**
   * By default PopperJS treats an overflow container as its boundary.
   * It is much more common to want the parent window to determine
   * the overflow boundary.
   */
  const modifiers: Modifiers = {
    preventOverflow: {
      boundariesElement: 'window'
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
        eventsEnabled={controlledIsVisible && eventsEnabled}
        modifiers={modifiers}
      >
        {({ ref, style, scheduleUpdate, placement: currentPlacement }) => {
          scheduleUpdateRef.current = scheduleUpdate;

          const { onFocus, onBlur, ...otherTooltipProps } = otherProps;

          let computedSize: TOOLTIP_SIZE | undefined = size;

          if (computedSize === undefined) {
            if (type === 'dark') {
              computedSize = 'small';
            } else {
              computedSize = 'large';
            }
          }

          const tooltipProps = {
            hasArrow,
            placement: currentPlacement,
            size: computedSize,
            onFocus: composeEventHandlers(onFocus, () => {
              openTooltip();
            }),
            onBlur: composeEventHandlers(onBlur, () => {
              closeTooltip(0);
            }),
            'aria-hidden': !controlledIsVisible,
            type,
            ...otherTooltipProps
          };

          const tooltip = (
            <StyledTooltipWrapper
              ref={controlledIsVisible ? ref : null}
              style={style}
              zIndex={zIndex}
              aria-hidden={!controlledIsVisible}
            >
              <StyledTooltip {...(getTooltipProps(tooltipProps) as any)}>{content}</StyledTooltip>
            </StyledTooltipWrapper>
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

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  delayMS: PropTypes.number,
  eventsEnabled: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.node.isRequired,
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
  popperModifiers: PropTypes.any,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  type: PropTypes.oneOf(['light', 'dark']),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isInitialVisible: PropTypes.bool,
  refKey: PropTypes.string
};

Tooltip.defaultProps = {
  hasArrow: true,
  eventsEnabled: true,
  type: 'dark',
  placement: 'top',
  delayMS: 500,
  refKey: 'ref'
};
