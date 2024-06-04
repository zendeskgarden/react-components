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
import { StyledOverflowButton } from './StyledOverflowButton';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.row';

export interface IStyledRowProps {
  isStriped?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isSelected?: boolean;
  isReadOnly?: ITableProps['isReadOnly'];
  size?: ITableProps['size'];
}

const baseRowColorStyles = ({ theme, isStriped }: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  return css`
    border-bottom: ${theme.borders.sm} ${getColor({ variable: 'border.subtle', theme })};
    background-color: ${isStriped &&
    getColor({
      variable: 'background.emphasis',
      transparency: theme.opacity[100],
      light: { offset: -300 },
      theme
    })};
  `;
};

export const StyledBaseRow = styled.tr<IStyledRowProps>`
  display: table-row;
  transition: background-color 0.1s ease-in-out;
  vertical-align: top;
  box-sizing: border-box;

  ${baseRowColorStyles}
`;

StyledBaseRow.defaultProps = {
  theme: DEFAULT_THEME
};

const colorStyles = ({
  theme,
  isFocused,
  isSelected,
  isHovered,
  isReadOnly
}: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  const boxShadow = `inset ${theme.rtl ? '-' : ''}${
    theme.shadowWidths.md
  } 0 0 0 ${getColor({ variable: 'border.primaryEmphasis', theme })}`;
  const hoveredBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: { offset: -100 },
    theme
  });
  const hoveredBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[100],
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
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });
  const hoveredSelectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300], // needs validation from design
    dark: { offset: -100 },
    theme
  });
  let backgroundColor = undefined;
  let borderColor = undefined;
  let hoverBorderBottomColor = undefined;
  let hoverBackgroundColor = undefined;

  if (isSelected) {
    if (isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
    } else {
      backgroundColor = selectedBackgroundColor;
    }

    borderColor = selectedBorderColor;
    hoverBorderBottomColor = selectedBorderColor;
    hoverBackgroundColor = hoveredSelectedBackgroundColor;
  } else if (isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  } else if (!isReadOnly) {
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
      box-shadow: ${isFocused && boxShadow};

      &:focus {
        box-shadow: ${boxShadow};
      }
    }
  `;
};

export const StyledRow = styled(StyledBaseRow).attrs<IStyledRowProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  tabIndex: props.isReadOnly ? undefined : (-1 as number)
}))<IStyledRowProps>`
  height: ${getRowHeight};

  ${props => colorStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  theme: DEFAULT_THEME
};
