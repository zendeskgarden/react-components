/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.drop_indicator';

export interface IStyledDropIndicatorProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

const getPosition = ({ theme }: IStyledDropIndicatorProps) => {
  const { borderWidths, space } = theme;

  return math(`${space.xxs} - ${borderWidths.sm}`);
};

const getBeforeTransform = (props: IStyledDropIndicatorProps) => {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;
  const position = getPosition(props);

  if (isHorizontal) {
    return rtl ? `translate(${position}, -100%)` : `translate(-${position}, -100%)`;
  }

  return `translate(-100%, -${position})`;
};

const getAfterTransform = (props: IStyledDropIndicatorProps) => {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;
  const position = getPosition(props);

  if (isHorizontal) {
    return rtl ? `translate(${position}, 100%)` : `translate(-${position}, 100%)`;
  }

  return `translate(100%, -${position})`;
};

function pseudoBeforeSize(props: IStyledDropIndicatorProps) {
  const { isHorizontal } = props;
  const positionProperty = isHorizontal ? 'top' : 'left';

  return css`
    ${positionProperty}: 0;
    transform: ${getBeforeTransform(props)};
  `;
}

function pseudoAfterSize(props: IStyledDropIndicatorProps) {
  const { isHorizontal } = props;
  const positionProperty = isHorizontal ? 'bottom' : 'right';

  return css`
    ${positionProperty}: 0;
    transform: ${getAfterTransform(props)};
  `;
}

const colorStyles = (props: IStyledDropIndicatorProps) => {
  const { theme } = props;
  const backgroundColor = getColor('primaryHue', 600, theme);

  return css`
    background-color: ${backgroundColor};

    &::before,
    &::after {
      background-color: ${backgroundColor};
    }

    &:focus {
      outline: none;
    }
  `;
};

const sizeStyles = (props: IStyledDropIndicatorProps) => {
  const { theme, isHorizontal } = props;
  const size = `${theme.space.base / 2}px`;
  const pseudoSize = theme.space.xs;

  return css`
    width: ${isHorizontal && size};
    height: ${!isHorizontal && size};

    &::before,
    &::after {
      border-radius: 50%;
      width: ${pseudoSize};
      height: ${pseudoSize};
    }

    &::before {
      ${pseudoBeforeSize}
    }

    &::after {
      ${pseudoAfterSize}
    }
  `;
};

export const StyledDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropIndicatorProps>`
  position: relative;

  ${sizeStyles}
  ${colorStyles}

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
