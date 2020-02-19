/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { SIZE } from './StyledTable';
import { StyledCell } from './StyledCell';
import { StyledOverflowButton } from './StyledOverflowButton';
import { getRowHeight } from './style-utils';

const COMPONENT_ID = 'tables.row';

export interface IStyledRowProps {
  /** Applies striped styling */
  isStriped?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isSelected?: boolean;
  size: SIZE;
}

export const StyledBaseRow = styled.tr<IStyledRowProps>`
  display: table-row;
  transition: background-color 0.1s ease-in-out;
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColor('neutralHue', 200, props.theme)}`};
  background-color: ${props => props.isStriped && getColor('neutralHue', 100, props.theme)};
  vertical-align: top;
  box-sizing: border-box;
`;

StyledBaseRow.defaultProps = {
  theme: DEFAULT_THEME
};

const colorStyles = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  const boxShadow = `inset ${props.theme.rtl ? '-' : ''}${
    props.theme.shadowWidths.md
  } 0 0 0 ${getColor('primaryHue', 600, props.theme)}`;
  const hoveredBackgroundColor = getColor('primaryHue', 600, props.theme, 0.08);
  const hoveredBorderColor = getColor('primaryHue', 200, props.theme);
  const selectedBackgroundColor = getColor('primaryHue', 600, props.theme, 0.2);
  const selectedBorderColor = getColor('primaryHue', 300, props.theme);
  const hoveredSelectedBackgroundColor = getColor('primaryHue', 600, props.theme, 0.28);
  let backgroundColor = undefined;
  let borderColor = undefined;

  if (props.isSelected) {
    if (props.isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
    } else {
      backgroundColor = selectedBackgroundColor;
    }

    borderColor = selectedBorderColor;
  } else if (props.isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  }

  return css`
    border-bottom-color: ${borderColor};
    background-color: ${backgroundColor};

    &:hover {
      border-bottom-color: ${props.isSelected ? selectedBorderColor : hoveredBorderColor};
      background-color: ${props.isSelected
        ? hoveredSelectedBackgroundColor
        : hoveredBackgroundColor};

      ${StyledOverflowButton} {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }

    ${StyledCell}:first-of-type {
      box-shadow: ${props.isFocused && boxShadow};

      &:focus {
        box-shadow: ${boxShadow};
      }
    }
  `;
};

export const StyledRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  tabIndex: -1 as number
})<IStyledRowProps>`
  height: ${getRowHeight};

  ${props => colorStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  theme: DEFAULT_THEME
};
