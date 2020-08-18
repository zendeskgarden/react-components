/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers, getControlledValue } from '@zendeskgarden/container-utilities';
import { withTheme, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Manager, Popper, Reference } from 'react-popper';
import { Modifiers } from 'popper.js';

import {
  getPopperPlacement,
  getRtlPopperPlacement,
  GARDEN_PLACEMENT
} from '../utils/gardenPlacements';
import { StyledTooltipWrapper, StyledTooltip, TOOLTIP_SIZE, TOOLTIP_TYPE } from '../styled';

export interface ITooltipProps
  extends Partial<ThemeProps<DefaultTheme>>,
    React.HTMLAttributes<HTMLDivElement> {
  /** Appends the tooltip to the body element */
  appendToNode?: Element;
  hasArrow?: boolean;
  /** Milliseconds of delay before open/close of tooltip is initiated */
  delayMS?: number;
  /** Whether Popper should update based on DOM resize events */
  eventsEnabled?: boolean;
  id?: string;
  content: React.ReactNode;
  /**
   * These placements differ from the default naming of Popper placements to help
   * assist with RTL layouts.
   **/
  placement?: GARDEN_PLACEMENT;
  /** See Popper [documentation](https://popper.js.org/docs/v1/#modifiers--codeobjectcode) for details */
  popperModifiers?: Modifiers;
  size?: TOOLTIP_SIZE;
  type?: TOOLTIP_TYPE;
  zIndex?: number | string;
  /** Determine visibility on initial render */
  isInitialVisible?: boolean;
  /** Control visibility state of the Tooltip */
  isVisible?: boolean;
  children: React.ReactElement;
  refKey?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({
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
    if (controlledIsVisible) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  }, [controlledIsVisible, content]);

  const popperPlacement = otherProps.theme!.rtl
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
              ref={controlledIsVisible && ref}
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
  refKey: 'ref',
  theme: DEFAULT_THEME
};

/** @component */
export default withTheme(Tooltip) as React.FC<ITooltipProps>;
