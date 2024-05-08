/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.drop_indicator';

export interface IStyledDropIndicatorProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

const colorStyles = (props: IStyledDropIndicatorProps) => {
  const { theme } = props;
  const color = getColor({ variable: 'foreground.primary', theme });

  return css`
    box-shadow: ${`0 0 0 ${theme.borderWidths.sm} ${color}`};

    &::before,
    &::after {
      background-color: ${color};
    }

    &:focus {
      outline: none;
    }
  `;
};

const sizeStyles = (props: IStyledDropIndicatorProps) => {
  const { isHorizontal, theme } = props;
  const pseudoSize = theme.space.xs;
  const translateX = isHorizontal ? theme.space.xxs : theme.space.xs;
  const translateY = isHorizontal ? theme.space.xs : theme.space.xxs;

  return css`
    &::before,
    &::after {
      border-radius: 50%;
      width: ${pseudoSize};
      height: ${pseudoSize};
    }

    &::before {
      top: 0;
      left: 0;
      transform: translate(-${translateX}, -${translateY});
    }

    &::after {
      right: 0;
      bottom: 0;
      transform: translate(${translateX}, ${translateY});
    }
  `;
};

export const StyledDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropIndicatorProps>`
  position: relative;

  ${sizeStyles}
  ${colorStyles}

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
