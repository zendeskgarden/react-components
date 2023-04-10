/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.item';

interface IStyledItemProps extends ThemeProps<DefaultTheme> {
  isActive?: boolean;
  isCompact?: boolean;
  isDanger?: boolean;
}

const colorStyles = (props: IStyledItemProps) => {
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

export const getMinHeight = (props: IStyledItemProps) =>
  props.theme.space.base * (props.isCompact ? 7 : 9);

/*
 * 1. Use px vs. unitless to prevent browser sizing shifts.
 */
const sizeStyles = (props: IStyledItemProps) => {
  const lineHeight = props.theme.lineHeights.md;
  const minHeight = getMinHeight(props);
  const paddingHorizontal = `${props.theme.space.base * 9}px`;
  const paddingVertical = math(`(${minHeight} - ${lineHeight}) / 2`);

  return css`
    box-sizing: border-box;
    padding: ${paddingVertical} ${paddingHorizontal};
    min-height: ${minHeight}px;
    line-height: ${lineHeight}; /* [1] */
  `;
};

export const StyledItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemProps>`
  display: flex;
  position: relative;
  transition: color 0.25s ease-in-out;
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

StyledItem.defaultProps = {
  theme: DEFAULT_THEME
};
