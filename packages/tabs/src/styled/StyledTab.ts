/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, css, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tab';

interface IStyledTabProps {
  disabled?: boolean;
  isSelected?: boolean;
}

/**
 * A high specificity is needed to apply the border-color in vertical orientations
 */
const colorStyles = ({ theme, isSelected }: IStyledTabProps & ThemeProps<DefaultTheme>) => css`
  color: ${isSelected ? getColor('primaryHue', 600, theme) : 'inherit'};

  &&& {
    border-color: ${isSelected && 'currentColor'};
  }

  &:hover {
    color: ${props => getColor('primaryHue', 600, props.theme)};
  }

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:active {
    border-color: currentColor;
    color: ${props => getColor('primaryHue', 600, props.theme)};
  }

  &::before {
    transition: box-shadow 0.1s ease-in-out;
    content: '';
  }

  &:active::before {
    box-shadow: none;
  }
`;

const focusStyles = ({ theme }: ThemeProps<DefaultTheme>) => css`
  &[data-garden-focus-visible] {
    color: ${getColor('primaryHue', 600, theme)};
  }

  &[data-garden-focus-visible]::before {
    position: absolute;
    top: ${theme.space.base * 2.5}px;
    right: ${theme.space.base * 6}px;
    left: ${theme.space.base * 6}px;
    border-radius: ${theme.borderRadii.md};
    box-shadow: inset ${theme.shadows.sm(getColor('primaryHue', 600, theme, 0.35)!)};
    height: ${theme.space.base * 5}px;
    pointer-events: none;
  }
`;

/**
 * Accepts all `<div>` props
 */
export const StyledTab = styled.div.attrs<IStyledTabProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-disabled': props.disabled
}))<IStyledTabProps>`
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out;
  border-bottom: ${props => props.theme.borderStyles.solid} transparent;
  border-width: ${props => props.theme.borderWidths.md};
  cursor: pointer;
  padding: ${props => props.theme.space.base * 2.5}px ${props => props.theme.space.base * 7}px
    ${props => props.theme.space.base * 1.5}px;
  overflow: hidden;
  vertical-align: top;
  user-select: none;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;

  ${colorStyles}
  ${focusStyles}

  &[aria-disabled='true'] {
    border-color: transparent;
    cursor: default;
    color: ${props => getColor('neutralHue', 400, props.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTab.defaultProps = {
  theme: DEFAULT_THEME
};
