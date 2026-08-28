/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.time_option';

interface IStyledTimeOptionProps {
  $isCompact?: boolean;
  'aria-selected'?: boolean;
  'aria-disabled'?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledTimeOptionProps & ThemeProps<DefaultTheme>) => {
  const height = theme.space.base * ($isCompact ? 7 : 8);
  const paddingH = theme.space.base * ($isCompact ? 2 : 3);
  const fontSize = $isCompact ? theme.fontSizes.sm : theme.fontSizes.md;
  const borderRadius = theme.borderRadii.md;

  return css`
    margin: 0 ${theme.space.base}px;
    border-radius: ${borderRadius};
    padding: 0 ${paddingH}px;
    height: ${height}px;
    font-size: ${fontSize};
  `;
};

const colorStyles = ({ theme, ...props }: IStyledTimeOptionProps & ThemeProps<DefaultTheme>) => {
  const isSelected = props['aria-selected'];
  const isDisabled = props['aria-disabled'];

  let backgroundColor = 'transparent';
  let foreground;
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const backgroundActive = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });

  if (isSelected && !isDisabled) {
    backgroundColor = getColor({ variable: 'background.primaryEmphasis', theme });
    foreground = getColor({ variable: 'foreground.onEmphasis', theme });
  } else if (isDisabled) {
    foreground = getColor({ variable: 'foreground.disabled', theme });
  } else {
    foreground = getColor({ variable: 'foreground.default', theme });
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foreground};

    &:not([aria-disabled]):not([aria-selected]):hover {
      background-color: ${backgroundHover};
    }

    &:not([aria-disabled]):not([aria-selected]):active {
      background-color: ${backgroundActive};
    }
  `;
};

export const StyledTimeOption = styled.div.attrs<IStyledTimeOptionProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimeOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props['aria-disabled'] ? 'default' : 'pointer')};

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
