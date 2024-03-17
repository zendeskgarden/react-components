/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getColorV8, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont, IStyledFontProps } from './StyledFont';
import { ICodeProps } from '../types';

const COMPONENT_ID = 'typography.code';

const colorStyles = (props: IStyledCodeProps & ThemeProps<DefaultTheme>) => {
  const hue = props.hue || 'neutralHue';
  const backgroundColor = getColorV8(hue, 200, props.theme);
  const shade = hue === 'yellow' ? 800 : 700;
  const foregroundColor = getColorV8(hue, shade, props.theme);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    a & {
      color: inherit;
    }
  `;
};

interface IStyledCodeProps extends Omit<IStyledFontProps, 'size'> {
  hue?: string;
  size?: ICodeProps['size'];
}

export const StyledCode = styled(StyledFont as 'code').attrs({
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
