/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { OptionType } from '../../types';

const COMPONENT_ID = 'dropdowns.combobox.option';

export interface IStyledOptionProps extends ThemeProps<DefaultTheme> {
  $hasAnchor?: boolean;
  $isActive?: boolean;
  $isCompact?: boolean;
  $type?: OptionType | 'header' | 'group';
}

const colorStyles = ({ theme, $hasAnchor, $isActive, $type }: IStyledOptionProps) => {
  let backgroundColor;
  let boxShadow;

  if ($isActive && $type !== 'group' && $type !== 'header') {
    const variable = 'background.primaryEmphasis';

    backgroundColor = getColor({ theme, variable, transparency: theme.opacity[100] });
    boxShadow = `inset ${
      theme.rtl ? `-${theme.shadowWidths.md}` : theme.shadowWidths.md
    } 0 ${getColor({ theme, variable })}`;
  }

  let foregroundVariable;

  if ($hasAnchor || $type === 'add') {
    foregroundVariable = 'foreground.primary';
  } else if ($type === 'danger') {
    foregroundVariable = 'foreground.danger';
  } else {
    foregroundVariable = 'foreground.default';
  }

  const foregroundColor = getColor({ theme, variable: foregroundVariable });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });

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
  props.theme.space.base * (props.$isCompact ? 7 : 9);

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
  overflow-wrap: anywhere;
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

  ${componentStyles};
`;
