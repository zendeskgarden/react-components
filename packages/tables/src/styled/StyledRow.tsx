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
  height: ${props => props.theme.space.base * 10}px;
  vertical-align: top;
  box-sizing: border-box;
`;

export const getRowHeight = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  if (props.size === 'large') {
    return `${props.theme.space.base * 16}px`;
  } else if (props.size === 'small') {
    return `${props.theme.space.base * 8}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

const colorStyles = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor = undefined;
  let borderColor = undefined;
  const hoveredBackgroundColor = getColor('primaryHue', 100, props.theme);
  const boxShadow = `inset ${props.theme.rtl ? '-' : ''}${
    props.theme.shadowWidths.md
  } 0 0 0 ${getColor('primaryHue', 600, props.theme)}`;

  if (props.isSelected || (props as any)['aria-selected']) {
    backgroundColor = getColor('primaryHue', 200, props.theme);
    borderColor = getColor('primaryHue', 300, props.theme);
  } else if (props.isHovered) {
    backgroundColor = hoveredBackgroundColor;
  }

  return css`
    border-bottom-color: ${borderColor};
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${hoveredBackgroundColor};

      ${StyledOverflowButton} {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }

    &:focus ${StyledCell}:first-of-type {
      box-shadow: ${boxShadow};
    }

    ${props.isFocused &&
      `
    ${StyledCell}:first-of-type {
      box-shadow: ${boxShadow};
    }
  `}
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
