/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.option';

interface IStyledOptionProps extends ThemeProps<DefaultTheme> {
  isActive?: boolean;
  isCompact?: boolean;
  isDanger?: boolean;
}

const colorStyles = (props: IStyledOptionProps) => {
  const backgroundColor = props.theme.colors.background;
  const foregroundColor = props.isDanger
    ? getColor('dangerHue', 600, props.theme)
    : props.theme.colors.foreground;
  const activeBackgroundColor = getColor(
    props.isDanger ? 'dangerHue' : 'primaryHue',
    600,
    props.theme,
    0.08
  );
  const disabledForegroundColor = getColor('neutralHue', 400, props.theme);

  return css`
    background-color: ${props.isActive ? activeBackgroundColor : backgroundColor};
    color: ${foregroundColor};

    &:hover {
      background-color: ${activeBackgroundColor};
    }

    &[aria-disabled='true'] {
      background-color: ${backgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

export const getMinHeight = (props: IStyledOptionProps) =>
  props.theme.space.base * (props.isCompact ? 7 : 9);

/*
 * 1. Use px vs. unitless to prevent browser sizing shifts.
 */
const sizeStyles = (props: IStyledOptionProps) => {
  const lineHeight = props.theme.space.base * 5;
  const paddingHorizontal = `${props.theme.space.base * 9}px`;
  const paddingVertical = `${(getMinHeight(props) - lineHeight) / 2}px`;

  return css`
    padding: ${paddingVertical} ${paddingHorizontal};
    line-height: ${lineHeight}px; /* [1] */
  `;
};

export const StyledOption = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionProps>`
  display: block;
  position: relative;
  cursor: pointer;
  word-wrap: break-word;
  user-select: none;

  &:focus {
    outline: none;
  }

  ${sizeStyles};

  ${colorStyles};

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOption.defaultProps = {
  theme: DEFAULT_THEME
};
