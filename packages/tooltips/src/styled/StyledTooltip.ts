/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import ArrowStyles from '@zendeskgarden/css-arrows';
import TooltipStyles from '@zendeskgarden/css-tooltips';

import { POPPER_PLACEMENT } from '../utils/gardenPlacements';

const COMPONENT_ID = 'tooltip.tooltip';

export type TOOLTIP_SIZE = 'small' | 'medium' | 'large' | 'extra-large';

const shouldShowArrow = ({ showArrow: arrow, placement }: IStyledTooltipProps) => {
  return arrow && placement;
};

const retrieveTooltipMargin = ({ showArrow, size }: IStyledTooltipProps) => {
  if (showArrow) {
    if (size === 'large') {
      return 'margin: 8px;';
    } else if (size === 'extra-large') {
      return 'margin: 12px;';
    }
  }

  return 'margin: 6px';
};

export interface IStyledTooltipProps {
  showArrow?: boolean;
  size?: TOOLTIP_SIZE;
  /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
  placement?: POPPER_PLACEMENT;
}

/**
 * Accepts all `<div>` props
 */
export const StyledTooltip = styled.div.attrs<IStyledTooltipProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TooltipStyles['c-tooltip'], {
    // Size
    [TooltipStyles['c-tooltip--medium']]: props.size === 'medium',
    [TooltipStyles['c-tooltip--large']]: props.size === 'large',
    [TooltipStyles['c-tooltip--extra-large']]: props.size === 'extra-large',

    // Arrows
    [TooltipStyles['c-arrow']]: shouldShowArrow(props),
    [ArrowStyles['c-arrow']]: shouldShowArrow(props),
    [ArrowStyles['c-arrow--r']]: props.placement === 'left',
    [ArrowStyles['c-arrow--rt']]: props.placement === 'left-start',
    [ArrowStyles['c-arrow--rb']]: props.placement === 'left-end',
    [ArrowStyles['c-arrow--b']]: props.placement === 'top',
    [ArrowStyles['c-arrow--bl']]: props.placement === 'top-start',
    [ArrowStyles['c-arrow--br']]: props.placement === 'top-end',
    [ArrowStyles['c-arrow--l']]: props.placement === 'right',
    [ArrowStyles['c-arrow--lt']]: props.placement === 'right-start',
    [ArrowStyles['c-arrow--lb']]: props.placement === 'right-end',
    [ArrowStyles['c-arrow--t']]: props.placement === 'bottom',
    [ArrowStyles['c-arrow--tl']]: props.placement === 'bottom-start',
    [ArrowStyles['c-arrow--tr']]: props.placement === 'bottom-end',

    // RTL
    [TooltipStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledTooltipProps>`
  ${props => retrieveTooltipMargin(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltip.defaultProps = {
  showArrow: true,
  size: 'small'
};
