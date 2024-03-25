/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';
import { OptionType } from '../../types';

const COMPONENT_ID = 'dropdowns.combobox.option';

export interface IStyledOptionProps extends ThemeProps<DefaultTheme> {
  isActive?: boolean;
  isCompact?: boolean;
  $type?: OptionType | 'header' | 'group';
}

const colorStyles = (props: IStyledOptionProps) => {
  let backgroundColor;
  let boxShadow;

  if (props.isActive && props.$type !== 'group' && props.$type !== 'header') {
    const hue = props.$type === 'danger' ? 'dangerHue' : 'primaryHue';

    backgroundColor = getColorV8(hue, 600, props.theme, 0.08);
    boxShadow = `inset ${
      props.theme.rtl ? `-${props.theme.shadowWidths.md}` : props.theme.shadowWidths.md
    } 0 ${getColorV8(hue, 600, props.theme)}`;
  }

  const disabledForegroundColor = getColorV8('neutralHue', 400, props.theme);
  let foregroundColor = props.theme.colors.foreground;

  if (props.$type === 'add') {
    foregroundColor = getColorV8('primaryHue', 600, props.theme)!;
  } else if (props.$type === 'danger') {
    foregroundColor = getColorV8('dangerHue', 600, props.theme)!;
  }

  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &[aria-disabled='true'] {
      background-color: transparent;
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
  const lineHeight = props.theme.lineHeights.md;
  const minHeight = getMinHeight(props);
  const paddingHorizontal = props.$type === 'group' ? 0 : `${props.theme.space.base * 9}px`;
  const paddingVertical = props.$type === 'group' ? 0 : math(`(${minHeight} - ${lineHeight}) / 2`);

  return css`
    box-sizing: border-box;
    padding: ${paddingVertical} ${paddingHorizontal};
    min-height: ${minHeight}px;
    line-height: ${lineHeight}; /* [1] */
  `;
};

export const StyledOption = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptionProps>`
  display: flex;
  position: relative;
  transition: color 0.25s ease-in-out;
  cursor: ${props => (props.$type === 'group' || props.$type === 'header' ? 'default' : 'pointer')};
  word-wrap: break-word;
  font-weight: ${props =>
    props.$type === 'header' || props.$type === 'previous'
      ? props.theme.fontWeights.semibold
      : props.theme.fontWeights.regular};
  user-select: none;

  &:focus {
    outline: none;
  }

  ${sizeStyles};

  ${colorStyles};

  &[aria-disabled='true'] {
    cursor: default;
  }

  &[aria-hidden='true'] {
    ${hideVisually()};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOption.defaultProps = {
  theme: DEFAULT_THEME
};
