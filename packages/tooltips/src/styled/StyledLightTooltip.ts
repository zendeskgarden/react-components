/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import TooltipStyles from '@zendeskgarden/css-tooltips';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

import { StyledTooltip, IStyledTooltipProps } from './StyledTooltip';

const COMPONENT_ID = 'tooltip.light_tooltip';

/**
 * Accepts all `<div>` props
 */
export const StyledLightTooltip = styled(StyledTooltip).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, TooltipStyles['c-tooltip--light'])
}))<IStyledTooltipProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLightTooltip.defaultProps = {
  hasArrow: true,
  size: 'large'
};
