/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TooltipStyles from '@zendeskgarden/css-tooltips';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import TooltipView from './TooltipView';
import { version } from '../../package.json';
const COMPONENT_ID = 'tooltip.light_tooltip';

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

/**
 * Accepts all `<div>` props
 */
const LightTooltip = styled(TooltipView).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: classNames(TooltipStyles['c-tooltip--light'])
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

LightTooltip.propTypes = {
  arrow: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRA_LARGE]),
  placement: PropTypes.oneOf([PLACEMENT.RIGHT, PLACEMENT.LEFT, PLACEMENT.TOP, PLACEMENT.BOTTOM])
};

LightTooltip.defaultProps = {
  arrow: true,
  size: SIZE.LARGE
};

/** @component */
export default LightTooltip;
