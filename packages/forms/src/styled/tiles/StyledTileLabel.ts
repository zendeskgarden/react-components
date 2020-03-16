/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile_label';

interface IStyledTileLabelProps {
  isCentered?: boolean;
}

const sizeStyles = (props: IStyledTileLabelProps & ThemeProps<DefaultTheme>) => {
  let marginDirection = 'left';
  let marginTop = `${props.theme.space.base * 2}px`;
  let marginValue;

  if (props.theme.rtl) {
    marginDirection = 'right';
  }

  if (!props.isCentered) {
    marginValue = math(`(${props.theme.iconSizes.md} * 2) + ${props.theme.space.base * 5}px`);
    marginTop = '0';
  }

  return css`
    margin-top: ${marginTop};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${marginDirection}: ${marginValue};
  `;
};

export const StyledTileLabel = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileLabelProps>`
  display: block;
  text-align: ${props => props.isCentered && 'center'};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileLabel.defaultProps = {
  theme: DEFAULT_THEME
};
