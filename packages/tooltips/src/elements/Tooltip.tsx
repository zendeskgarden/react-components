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
import { mergeRefs } from 'react-merge-refs';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers, getControlledValue } from '@zendeskgarden/container-utilities';
import { Manager, Popper, Reference } from 'react-popper';
import { Modifiers } from 'popper.js';
import { getPopperPlacement, getRtlPopperPlacement } from '../utils/gardenPlacements';
import { StyledTooltipWrapper, StyledTooltip } from '../styled';
import { ITooltipProps, PLACEMENT, SIZE, TYPE } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tooltip = ({
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
}: ITooltipProps) => {
  const { rtl } = useContext(ThemeContext);
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

  const popperPlacement = rtl ? getRtlPopperPlacement(placement!) : getPopperPlacement(placement!);

  const singleChild = React.Children.only<
    React.ReactElement & React.RefAttributes<HTMLButtonElement>
  >(children);

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
            getTriggerProps({
              ...singleChild.props,
              [refKey!]: mergeRefs([ref, singleChild.ref ? singleChild.ref : null])
            })
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

          let computedSize: ITooltipProps['size'] = size;

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
  placement: PropTypes.oneOf(PLACEMENT),
  popperModifiers: PropTypes.any,
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE),
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
