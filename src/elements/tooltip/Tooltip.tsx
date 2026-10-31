/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { autoPlacement, autoUpdate, flip, platform, useFloating } from '@floating-ui/react-dom';
import { useTooltip } from '@zendeskgarden/container-tooltip';
import { composeEventHandlers, getControlledValue } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import {
  cloneElement,
  useRef,
  useEffect,
  FC,
  HTMLAttributes,
  Children,
  ReactElement,
  RefAttributes,
  RefObject
} from 'react';
import { createPortal } from 'react-dom';

import { getFloatingPlacements } from '../../theming/utils/getFloatingPlacements';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { ITooltipProps, TOOLTIP_PLACEMENT, TOOLTIP_SIZE, TOOLTIP_TYPE } from '../../types/elements';
import { getElementRef } from '../../utils/shared/getElementRef';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledTooltip } from '../../views/tooltip/StyledTooltip';
import { StyledTooltipWrapper } from '../../views/tooltip/StyledTooltipWrapper';
import { COMPONENT_IDS } from '../utils';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
import { toSize } from './utils';

export const PLACEMENT_DEFAULT = 'top';

export const TooltipComponent: FC<ITooltipProps> = ({
  id,
  delayMS = 500,
  isLabel,
  isInitialVisible,
  content,
  refKey = 'ref',
  placement: _placement = PLACEMENT_DEFAULT,
  fallbackPlacements: _fallbackPlacements,
  children,
  hasArrow = true,
  size,
  type = 'dark',
  appendToNode,
  zIndex,
  isVisible: externalIsVisible,
  onFocus,
  onBlur,
  ...props
}) => {
  const theme = useGardenTheme();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const { isVisible, getTooltipProps, getTriggerProps, openTooltip, closeTooltip } = useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible,
    isLabel,
    triggerRef: triggerRef as RefObject<HTMLElement>
  });

  const controlledIsVisible = getControlledValue(externalIsVisible, isVisible);
  const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(
    theme,
    _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!,
    _fallbackPlacements
  );

  const {
    refs,
    placement,
    update,
    floatingStyles: { transform }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: { reference: triggerRef?.current, floating: floatingRef?.current },
    placement: floatingPlacement,
    middleware: _placement === 'auto' ? [autoPlacement()] : [flip({ fallbackPlacements })]
  });

  useEffect(() => {
    // Only allow positioning updates on visible tooltip.
    let cleanup: () => void;

    if (controlledIsVisible && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }

    return () => cleanup && cleanup();
  }, [controlledIsVisible, refs.reference, refs.floating, update]);

  const Child = Children.only<ReactElement & RefAttributes<HTMLButtonElement>>(children);

  const Node = (
    <StyledTooltipWrapper
      ref={floatingRef}
      style={{ transform }}
      $zIndex={zIndex}
      aria-hidden={!controlledIsVisible}
    >
      <StyledTooltip
        $hasArrow={hasArrow}
        $placement={placement}
        $size={toSize(size, type)}
        $type={type}
        {...(getTooltipProps({
          'aria-hidden': !controlledIsVisible,
          onBlur: composeEventHandlers(onBlur, () => closeTooltip(0)),
          onFocus: composeEventHandlers(onFocus, openTooltip),
          ...props
        }) as HTMLAttributes<HTMLDivElement>)}
        data-garden-id={COMPONENT_IDS['tooltip.tooltip']}
        data-garden-version={PACKAGE_VERSION}
      >
        {content}
      </StyledTooltip>
    </StyledTooltipWrapper>
  );

  return (
    <>
      {cloneElement(
        Child,
        getTriggerProps({
          ...(Child.props as HTMLAttributes<HTMLElement>),
          [refKey!]: mergeRefs([triggerRef, getElementRef(Child)])
        })
      )}
      {appendToNode ? createPortal(Node, appendToNode) : Node}
    </>
  );
};

TooltipComponent.displayName = 'Tooltip';

TooltipComponent.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  delayMS: PropTypes.number,
  id: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(TOOLTIP_PLACEMENT),
  fallbackPlacements: PropTypes.arrayOf(
    PropTypes.oneOf(TOOLTIP_PLACEMENT.filter(placement => placement !== 'auto'))
  ),
  size: PropTypes.oneOf(TOOLTIP_SIZE),
  type: PropTypes.oneOf(TOOLTIP_TYPE),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isInitialVisible: PropTypes.bool,
  isLabel: PropTypes.bool,
  refKey: PropTypes.string
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tooltip = TooltipComponent as typeof TooltipComponent & {
  Paragraph: typeof Paragraph;
  Title: typeof Title;
};

Tooltip.Paragraph = Paragraph;
Tooltip.Title = Title;
