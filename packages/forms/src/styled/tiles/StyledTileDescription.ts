/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_description';

interface IStyledTileDescriptionProps {
  isCentered?: boolean;
}

const sizeStyles = (props: IStyledTileDescriptionProps & ThemeProps<DefaultTheme>) => {
  let marginDirection = 'left';
  let marginValue;

  if (props.theme.rtl) {
    marginDirection = 'right';
  }

  if (!props.isCentered) {
    marginValue = math(`(${props.theme.iconSizes.md} * 2) + ${props.theme.space.base * 5}px`);
  }

  return css`
    margin-top: ${props.theme.space.base}px;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${marginDirection}: ${marginValue};
  `;
};

export const StyledTileDescription = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileDescriptionProps>`
  display: block;
  text-align: ${props => props.isCentered && 'center'};
  line-height: ${props => getLineHeight(props.theme.space.base * 4, props.theme.fontSizes.sm)};
  font-size: ${props => props.theme.fontSizes.sm};

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileDescription.defaultProps = {
  theme: DEFAULT_THEME
};
