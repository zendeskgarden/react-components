/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, css, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { stripUnit } from 'polished';

const COMPONENT_ID = 'tabs.tab';

interface IStyledTabProps {
  isSelected?: boolean;
}

/**
 * 1. A high specificity is needed to apply the border-color in vertical orientations
 */
const colorStyles = ({ theme, isSelected }: IStyledTabProps & ThemeProps<DefaultTheme>) => {
  const selectedColor = getColor('primaryHue', 600, theme);

  return css`
    border-color: ${isSelected && 'currentColor !important'}; /* [1] */
    color: ${isSelected ? selectedColor : 'inherit'};

    &:hover {
      color: ${selectedColor};
    }

    &:active {
      border-color: currentColor;
      color: ${selectedColor};
    }

    &[data-garden-focus-visible] {
      color: ${selectedColor};
    }

    &[data-garden-focus-visible]::before {
      box-shadow: inset ${theme.shadows.sm(getColor('primaryHue', 600, theme, 0.35)!)};
    }

    &[aria-disabled='true'] {
      border-color: transparent;
      color: ${props => getColor('neutralHue', 400, props.theme)};
    }
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const paddingTop = theme.space.base * 2.5;
  const paddingHorizontal = theme.space.base * 7;
  const paddingBottom =
    paddingTop -
    (stripUnit(theme.borderWidths.md) as number) -
    (stripUnit(theme.borderWidths.sm) as number);

  return css`
    padding: ${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px;
  `;
};

/**
 * 1. Text truncation (requires `max-width`).
 * 2. Overflow compensation.
 * 3. Override default anchor styling
 */
export const StyledTab = styled.div.attrs<IStyledTabProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabProps>`
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out;
  border-bottom: ${props => props.theme.borderStyles.solid} transparent;
  border-width: ${props => props.theme.borderWidths.md};
  cursor: pointer;
  overflow: hidden; /* [1] */
  vertical-align: top; /* [2] */
  user-select: none;
  text-align: center;
  text-decoration: none; /* [3] */
  text-overflow: ellipsis; /* [1] */

  ${sizeStyles}
  ${colorStyles}

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &[data-garden-focus-visible]::before {
    position: absolute;
    top: ${props => props.theme.space.base * 2.5}px;
    right: ${props => props.theme.space.base * 6}px;
    left: ${props => props.theme.space.base * 6}px;
    border-radius: ${props => props.theme.borderRadii.md};
    height: ${props => props.theme.space.base * 5}px;
    pointer-events: none;
  }

  &::before {
    transition: box-shadow 0.1s ease-in-out;
    content: '';
  }

  &:active::before {
    box-shadow: none;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTab.defaultProps = {
  theme: DEFAULT_THEME
};
