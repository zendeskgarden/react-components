/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { math } from 'polished';

const COMPONENT_ID = 'forms.tile_icon';

interface IStyledTileIconProps {
  isCentered?: boolean;
}

const sizeStyles = (props: IStyledTileIconProps & ThemeProps<DefaultTheme>) => {
  const iconSize = math(`${props.theme.iconSizes.md} * 2`);
  let position;
  let top;
  let horizontalValue;

  if (!props.isCentered) {
    position = 'absolute';
    top = `${props.theme.space.base * 6}px`;
    horizontalValue = `left: ${props.theme.space.base * 5}px`;

    if (props.theme.rtl) {
      horizontalValue = `right: ${props.theme.space.base * 5}px`;
    }
  }

  return css`
    position: ${position};
    top: ${top};
    ${horizontalValue};

    & > * {
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

export const StyledTileIcon = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileIconProps>`
  display: block;
  transition: color 0.25s ease-in-out;
  text-align: center;
  line-height: 0;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
