/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { ITableProps } from '../types';
import { StyledCell } from './StyledCell';
import { StyledBaseRow } from './StyledBaseRow';
import { StyledOverflowButton } from './StyledOverflowButton';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.row';

export interface IStyledRowProps {
  $isStriped?: boolean;
  $isFocused?: boolean;
  $isHovered?: boolean;
  $isSelected?: boolean;
  $isReadOnly?: ITableProps['isReadOnly'];
  $size?: ITableProps['size'];
}

const colorStyles = ({
  theme,
  $isFocused,
  $isSelected,
  $isHovered,
  $isReadOnly
}: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  const hoveredBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: { offset: -100 },
    theme
  });
  const hoveredBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });
  const selectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });
  const selectedBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    light: { offset: -400 },
    dark: { offset: 300 },
    theme
  });
  const hoveredSelectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: { offset: -100 },
    theme
  });
  const hoveredSelectedBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    light: { offset: -300 },
    dark: { offset: 200 },
    theme
  });
  const boxShadowColor = getColor({ variable: 'border.primaryEmphasis', theme });
  const boxShadow = `inset ${theme.rtl ? '-' : ''}${theme.shadowWidths.md} 0 0 0 ${boxShadowColor}`;
  let backgroundColor = undefined;
  let borderColor = undefined;
  let hoverBorderBottomColor = undefined;
  let hoverBackgroundColor = undefined;

  if ($isSelected) {
    if ($isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
      borderColor = hoveredSelectedBorderColor;
    } else {
      backgroundColor = selectedBackgroundColor;
      borderColor = selectedBorderColor;
    }

    hoverBorderBottomColor = hoveredSelectedBorderColor;
    hoverBackgroundColor = hoveredSelectedBackgroundColor;
  } else if ($isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  } else if (!$isReadOnly) {
    hoverBorderBottomColor = hoveredBorderColor;
    hoverBackgroundColor = hoveredBackgroundColor;
  }

  return css`
    border-bottom-color: ${borderColor};
    background-color: ${backgroundColor};

    &:hover {
      border-bottom-color: ${hoverBorderBottomColor};
      background-color: ${hoverBackgroundColor};

      ${StyledOverflowButton} {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }

    ${StyledCell}:first-of-type {
      box-shadow: ${$isFocused && boxShadow};

      &:focus {
        box-shadow: ${boxShadow};
      }
    }
  `;
};

const sizeStyles = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  return css`
    height: ${getRowHeight(props)};
  `;
};

export const StyledRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRowProps>`
  ${sizeStyles}

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  theme: DEFAULT_THEME
};
