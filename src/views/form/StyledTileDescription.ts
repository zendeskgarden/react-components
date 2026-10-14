/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';

const COMPONENT_ID = 'forms.tile_description';

interface IStyledTileDescriptionProps {
  $isCentered?: boolean;
}

const sizeStyles = ({
  theme,
  $isCentered
}: IStyledTileDescriptionProps & ThemeProps<DefaultTheme>) => {
  const marginTop = `${theme.space.base}px`;
  const marginHorizontal = $isCentered
    ? undefined
    : math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.space.base * 4, fontSize);

  return css`
    margin-top: ${marginTop};
    margin-${theme.rtl ? 'right' : 'left'}: ${marginHorizontal};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTileDescription = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileDescriptionProps>`
  display: block;
  text-align: ${props => props.$isCentered && 'center'};

  ${sizeStyles};

  ${componentStyles};
`;
