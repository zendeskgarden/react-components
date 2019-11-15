/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, css, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import stripUnit from 'polished/lib/helpers/stripUnit';

import { StyledTooltip, IStyledTooltipProps } from './StyledTooltip';

const COMPONENT_ID = 'tooltip.light_tooltip';

const arrowStyles = ({ theme, size }: IStyledTooltipProps & ThemeProps<DefaultTheme>) => {
  let arrowFontSize = `${theme.space.base * 1.75 + 2}px`;

  if (size === 'large') {
    arrowFontSize = `${stripUnit(theme.fontSizes.sm) + 2}px`;
  } else if (size === 'extra-large') {
    arrowFontSize = `${theme.space.base * 4 + 2}px`;
  }

  return css`
    &::before,
    &::after {
      font-size: ${arrowFontSize};
    }
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    border: ${theme.borderWidths.sm} ${theme.borderStyles.solid}
      ${getColor('neutralHue', 300, theme)};
    box-shadow: 0 ${theme.space.base * 3}px ${theme.space.base * 5}px 0
      ${getColor('chromeHue', 600, theme, 0.15)};
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
  `;
};

/**
 * Accepts all `<div>` props
 */
export const StyledLightTooltip = styled(StyledTooltip).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTooltipProps>`
  ${colorStyles};
  ${arrowStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLightTooltip.defaultProps = {
  hasArrow: true,
  size: 'large',
  theme: DEFAULT_THEME
};
