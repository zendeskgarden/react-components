/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont, IStyledFontProps } from './StyledFont';

const COMPONENT_ID = 'typography.code';

/**
 * 1. override CSS bedrock
 */
const colorStyles = (props: IStyledCodeProps & ThemeProps<DefaultTheme>) => {
  const hue = props.hue || 'neutralHue';
  const backgroundColor = getColor(hue, 200, props.theme);
  const shade = hue === 'yellow' ? 800 : 700;
  const foregroundColor = getColor(hue, shade, props.theme);
  const baseAnchorColor = getColor('primaryHue', shade, props.theme);
  const hoverAnchorColor = getColor('primaryHue', shade + 100, props.theme);
  const activeAnchorColor = getColor('primaryHue', shade + 200, props.theme);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    a & {
      color: ${baseAnchorColor};

      &:hover,
      &:focus, /* [1] */
      &[data-garden-focus-visible] {
        color: ${hoverAnchorColor};
      }

      &:active {
        color: ${activeAnchorColor};
      }
    }
  `;
};

interface IStyledCodeProps extends IStyledFontProps {
  hue?: string;
  size?: 'sm' | 'md' | 'lg' | 'inherit';
}

export const StyledCode = styled(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code'
})<IStyledCodeProps>`
  border-radius: ${props => props.theme.borderRadii.sm};
  padding: 1.5px;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCode.defaultProps = {
  theme: DEFAULT_THEME,
  isMonospace: true,
  hue: 'neutralHue',
  size: 'inherit'
};
