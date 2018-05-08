import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import { zdColorWhite } from '@zendeskgarden/css-variables';
import ArrowStyles from '@zendeskgarden/css-arrows';
import TooltipStyles from '@zendeskgarden/css-tooltips';

import Title from './content/Title';

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
  return (
    arrow &&
    (placement === PLACEMENT.LEFT ||
      placement === PLACEMENT.RIGHT ||
      placement === PLACEMENT.BOTTOM ||
      placement === PLACEMENT.BOTTOM_START ||
      placement === PLACEMENT.BOTTOM_END ||
      placement === PLACEMENT.TOP ||
      placement === PLACEMENT.TOP_START ||
      placement === PLACEMENT.TOP_END)
  );
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
const TooltipView = styled.div.attrs({
  className: props =>
    classNames(TooltipStyles['c-tooltip'], {
      // Size
      [TooltipStyles['c-tooltip--medium']]: props.size === SIZE.MEDIUM,
      [TooltipStyles['c-tooltip--large']]: props.size === SIZE.LARGE,
      [TooltipStyles['c-tooltip--extra-large']]: props.size === SIZE.EXTRA_LARGE,

      // Arrows
      [TooltipStyles['c-arrow']]: shouldShowArrow(props),
      [ArrowStyles['c-arrow']]: shouldShowArrow(props),
      [ArrowStyles['c-arrow--r']]: props.placement === PLACEMENT.LEFT,
      [ArrowStyles['c-arrow--b']]: props.placement === PLACEMENT.TOP,
      [ArrowStyles['c-arrow--bl']]: props.placement === PLACEMENT.TOP_START,
      [ArrowStyles['c-arrow--br']]: props.placement === PLACEMENT.TOP_END,
      [ArrowStyles['c-arrow--l']]: props.placement === PLACEMENT.RIGHT,
      [ArrowStyles['c-arrow--t']]: props.placement === PLACEMENT.BOTTOM,
      [ArrowStyles['c-arrow--tl']]: props.placement === PLACEMENT.BOTTOM_START,
      [ArrowStyles['c-arrow--tr']]: props.placement === PLACEMENT.BOTTOM_END
    })
})`
  ${/* sc-selector */ Title} & {
    color: ${zdColorWhite};
  }

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTooltipMargin(props)};
  ${props => retrieveTheme('tooltip.tooltip', props)};
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
