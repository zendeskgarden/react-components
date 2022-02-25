/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { StyledSeparator } from './StyledSeparator';

const COMPONENT_ID = 'splitter.separator_container';

interface IStyledSeparatorContainerProps {
  isHorizontal?: boolean;
}

const sizeStyles = ({
  isHorizontal,
  theme
}: IStyledSeparatorContainerProps & ThemeProps<DefaultTheme>) => {
  const containerMarginCorrection = math(`${theme.shadowWidths.md} + ${theme.borderWidths.sm}`);
  const containerThickness = math(`${theme.shadowWidths.md} * 2 + ${theme.borderWidths.sm}`);

  let containerWidth;
  let containerHeight;
  let marginDirection;
  let flexPositioning;
  let cursorType;
  let separatorHeight;
  let separatorWidth;

  if (isHorizontal) {
    marginDirection = 'margin-top';
    containerWidth = '100%';
    containerHeight = containerThickness;
    separatorHeight = theme.shadowWidths.md;
    flexPositioning = 'align-items';
    cursorType = 'row-resize';
  } else if (theme.rtl) {
    marginDirection = 'margin-right';
    containerWidth = containerThickness;
    separatorWidth = theme.shadowWidths.md;
    containerHeight = '100%';
    flexPositioning = 'justify-content';
    cursorType = 'col-resize';
  } else {
    marginDirection = 'margin-left';
    containerWidth = containerThickness;
    separatorWidth = theme.shadowWidths.md;
    containerHeight = '100%';
    flexPositioning = 'justify-content';
    cursorType = 'col-resize';
  }

  return css`
    cursor: ${cursorType};
    width: ${containerWidth};
    height: ${containerHeight};
    ${flexPositioning}: center;
    ${marginDirection}: -${containerMarginCorrection};

    &:hover > ${StyledSeparator} {
      width: ${separatorWidth};
      height: ${separatorHeight};
    }

    &:focus {
      outline: none;
    }

    &:focus > ${StyledSeparator} {
      width: ${separatorWidth};
      height: ${separatorHeight};
    }

    &:active > ${StyledSeparator} {
      width: ${separatorWidth};
      height: ${separatorHeight};
    }
  `;
};

const colorStyles = ({ theme }: IStyledSeparatorContainerProps & ThemeProps<DefaultTheme>) => {
  const boxShadowPrimaryHue = theme.shadows.md(getColor('primaryHue', 600, theme, 0.35)!);
  const lightPrimaryHue = getColor('primaryHue', 600, theme);
  const heavyPrimaryHue = getColor('primaryHue', 800, theme);

  return css`
    &:hover > ${StyledSeparator} {
      background-color: ${lightPrimaryHue};
    }

    &:focus > ${StyledSeparator} {
      box-shadow: ${boxShadowPrimaryHue};
      background-color: ${lightPrimaryHue};
    }

    &:active > ${StyledSeparator} {
      background-color: ${heavyPrimaryHue};
    }
  `;
};

export const StyledSeparatorContainer = styled.div.attrs<IStyledSeparatorContainerProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSeparatorContainerProps>`
  display: flex;
  position: absolute;

  ${sizeStyles}

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledSeparatorContainer.defaultProps = {
  theme: DEFAULT_THEME
};
