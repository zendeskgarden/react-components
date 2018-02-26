import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import { zdColorWhite } from '@zendesk/garden-css-variables';
import ArrowStyles from '@zendesk/garden-css-arrows';
import TooltipStyles from '@zendesk/garden-css-tooltips';

import Title from './content/Title';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};

const PLACEMENT = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

const shouldShowArrow = ({ arrow, placement }) => {
  return (
    arrow &&
    (placement === PLACEMENT.LEFT ||
      placement === PLACEMENT.BOTTOM ||
      placement === PLACEMENT.RIGHT ||
      placement === PLACEMENT.TOP)
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
      [ArrowStyles['c-arrow--l']]: props.placement === PLACEMENT.RIGHT,
      [ArrowStyles['c-arrow--t']]: props.placement === PLACEMENT.BOTTOM
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
  placement: PropTypes.oneOf([PLACEMENT.RIGHT, PLACEMENT.LEFT, PLACEMENT.TOP, PLACEMENT.BOTTOM])
};

TooltipView.defaultProps = {
  arrow: true,
  size: SIZE.SMALL
};

/** @component */
export default TooltipView;
