/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledButton, getHeight, IStyledButtonProps } from './StyledButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.icon_button';

const iconButtonStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  return css`
    border: ${props.isBasic && 'none'};
    padding: 0;
    width: ${getHeight(props)};
  `;
};

const iconStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const size =
    props.size === 'large'
      ? math(`${props.theme.space.base * 6} * 1px`)
      : math(`${props.theme.space.base * 4} * 1px`);

  return css`
    width: ${size};
    height: ${size};
  `;
};

/**
 * Accepts all `<button>` props
 */
export const StyledIconButton = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => iconButtonStyles(props)};

  ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
