/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { OptionType } from '../../types';

const COMPONENT_ID = 'dropdowns.combobox.option.meta';

export interface IStyledOptionMetaProps extends ThemeProps<DefaultTheme> {
  isDisabled?: boolean;
  $type?: OptionType;
}

const colorStyles = ({ theme, isDisabled, $type }: IStyledOptionMetaProps) => {
  let variable;

  if (isDisabled) {
    variable = 'foreground.disabled';
  } else if ($type === 'danger') {
    variable = 'foreground.danger';
  } else {
    variable = 'foreground.subtle';
  }

  const color = getColor({ theme, variable });

  return css`
    color: ${color};
  `;
};

const sizeStyles = (props: IStyledOptionMetaProps) => {
  const lineHeight = props.theme.lineHeights.sm;
  const fontSize = props.theme.fontSizes.sm;

  return css`
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledOptionMeta = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionMetaProps>`
  transition: color 0.25s ease-in-out;
  font-weight: ${props => props.theme.fontWeights.regular};

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOptionMeta.defaultProps = {
  theme: DEFAULT_THEME
};
