/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import ArrowStyles from '@zendeskgarden/css-arrows';
import TooltipStyles from '@zendeskgarden/css-tooltips';

const COMPONENT_ID = 'tooltip.tooltip';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};

const PLACEMENT = {
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

const shouldShowArrow = ({ arrow, placement }) => {
  return arrow && placement;
};

const retrieveTooltipMargin = ({ arrow, size }) => {
  if (arrow) {
    if (size === SIZE.LARGE) {
      return 'margin: 8px;';
    } else if (size === SIZE.EXTRA_LARGE) {
      return 'margin: 12px;';
    }
  }

  return 'margin: 6px';
};

/**
 * Accepts all `<div>` props
 */
const TooltipView = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TooltipStyles['c-tooltip'], {
    // Size
    [TooltipStyles['c-tooltip--medium']]: props.size === SIZE.MEDIUM,
    [TooltipStyles['c-tooltip--large']]: props.size === SIZE.LARGE,
    [TooltipStyles['c-tooltip--extra-large']]: props.size === SIZE.EXTRA_LARGE,

    // Arrows
    [TooltipStyles['c-arrow']]: shouldShowArrow(props),
    [ArrowStyles['c-arrow']]: shouldShowArrow(props),
    [ArrowStyles['c-arrow--r']]: props.placement === PLACEMENT.LEFT,
    [ArrowStyles['c-arrow--rt']]: props.placement === PLACEMENT.LEFT_START,
    [ArrowStyles['c-arrow--rb']]: props.placement === PLACEMENT.LEFT_END,
    [ArrowStyles['c-arrow--b']]: props.placement === PLACEMENT.TOP,
    [ArrowStyles['c-arrow--bl']]: props.placement === PLACEMENT.TOP_START,
    [ArrowStyles['c-arrow--br']]: props.placement === PLACEMENT.TOP_END,
    [ArrowStyles['c-arrow--l']]: props.placement === PLACEMENT.RIGHT,
    [ArrowStyles['c-arrow--lt']]: props.placement === PLACEMENT.RIGHT_START,
    [ArrowStyles['c-arrow--lb']]: props.placement === PLACEMENT.RIGHT_END,
    [ArrowStyles['c-arrow--t']]: props.placement === PLACEMENT.BOTTOM,
    [ArrowStyles['c-arrow--tl']]: props.placement === PLACEMENT.BOTTOM_START,
    [ArrowStyles['c-arrow--tr']]: props.placement === PLACEMENT.BOTTOM_END,

    // RTL
    [TooltipStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTooltipMargin(props)};
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

TooltipView.propTypes = {
  arrow: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRA_LARGE]),
  /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
  placement: PropTypes.oneOf([
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
  ])
};

TooltipView.defaultProps = {
  arrow: true,
  size: SIZE.SMALL
};

/** @component */
export default TooltipView;
