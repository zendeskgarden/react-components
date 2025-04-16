/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, css, ThemeProps } from 'styled-components';
import { focusStyles, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { stripUnit } from 'polished';

const COMPONENT_ID = 'tabs.tab';

interface IStyledTabProps {
  $isSelected?: boolean;
  $isVertical?: boolean;
}

const colorStyles = ({ theme, $isSelected }: IStyledTabProps & ThemeProps<DefaultTheme>) => {
  const borderColor = $isSelected
    ? getColor({ theme, variable: 'border.primaryEmphasis' })
    : 'transparent';
  const selectedColor = getColor({ theme, variable: 'foreground.primary' });
  const foregroundColor = $isSelected ? selectedColor : 'inherit';
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    border-color: ${borderColor};
    color: ${foregroundColor};

    &:hover {
      color: ${selectedColor};
    }

    ${focusStyles({
      theme,
      inset: true,
      spacerWidth: null,
      shadowWidth: 'sm',
      selector: '&:focus-visible::before',
      styles: { color: selectedColor }
    })}

    &:active {
      border-color: currentcolor;
      color: ${selectedColor};
    }

    &[aria-disabled='true'] {
      border-color: transparent;
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme, $isVertical }: IStyledTabProps & ThemeProps<DefaultTheme>) => {
  const borderWidth = theme.borderWidths.md;
  const focusHeight = `calc(100% - ${theme.space.base * ($isVertical ? 2 : 4)}px);`;
  let marginBottom;
  let padding;

  if ($isVertical) {
    marginBottom = `${theme.space.base * 5}px`;
    padding = `${theme.space.base}px ${theme.space.base * 2}px`;
  } else {
    const paddingTop = theme.space.base * 2.5;
    const paddingHorizontal = theme.space.base * 7;
    const paddingBottom =
      paddingTop -
      (stripUnit(theme.borderWidths.md) as number) -
      (stripUnit(theme.borderWidths.sm) as number);

    padding = `${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px`;
  }

  return css`
    margin-bottom: ${marginBottom};
    border-width: ${borderWidth};
    padding: ${padding};

    &:focus-visible::before,
    &[data-garden-focus-visible]::before {
      height: ${focusHeight};
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  `;
};

/*
 * 1. Text truncation (requires `max-width`).
 * 2. Overflow compensation.
 * 3. Override default anchor styling
 */
export const StyledTab = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabProps>`
  display: ${props => (props.$isVertical ? 'block' : 'inline-block')};
  position: relative;
  transition: color 0.25s ease-in-out;
  border-bottom: ${props => (props.$isVertical ? undefined : props.theme.borderStyles.solid)};
  border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => (props.$isVertical ? props.theme.borderStyles.solid : undefined)};
  cursor: pointer;
  overflow: hidden; /* [1] */
  vertical-align: top; /* [2] */
  user-select: none;
  text-align: ${props => {
    if (props.$isVertical) {
      return props.theme.rtl ? 'right' : 'left';
    }

    return 'center';
  }};
  text-decoration: none; /* [3] */
  text-overflow: ellipsis; /* [1] */

  ${sizeStyles};

  ${colorStyles};

  &:focus {
    text-decoration: none;
  }

  &::before {
    transition: box-shadow 0.1s ease-in-out;
    content: '';
  }

  &:focus-visible::before {
    position: absolute;
    top: ${props => props.theme.space.base * (props.$isVertical ? 1 : 2.5)}px;
    right: ${props => props.theme.space.base * (props.$isVertical ? 1 : 6)}px;
    left: ${props => props.theme.space.base * (props.$isVertical ? 1 : 6)}px;
    border-radius: ${props => props.theme.borderRadii.md};
    pointer-events: none;
  }

  &:active::before {
    box-shadow: none;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${componentStyles};
`;
