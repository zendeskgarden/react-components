/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.drop_indicator';

export const INDICATOR_LINE_SIZE = 2;
const PSEUDO_ELEMENT_SIZE = 8;

export interface IStyledDropIndicatorProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

function beforePseudoElementStyles(props: IStyledDropIndicatorProps) {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;

  const style = {
    [isHorizontal ? 'top' : 'left']: 0,
    transform: 'translate(-100%, -50%)'
  };

  if (isHorizontal) {
    style.transform = rtl ? 'translate(50%, -100%)' : 'translate(-50%, -100%)';
  }

  return style;
}

function afterPseudoElementStyles(props: IStyledDropIndicatorProps) {
  const {
    isHorizontal,
    theme: { rtl }
  } = props;

  const style = {
    [isHorizontal ? 'bottom' : 'right']: 0,
    transform: 'translate(100%, -50%)'
  };

  if (isHorizontal) {
    style.transform = rtl ? 'translate(50%, 100%)' : 'translate(-50%, 100%)';
  }

  return style;
}

const pseudoElementStyles = (props: IStyledDropIndicatorProps) => css`
  &::before,
  &::after {
    position: absolute;
    border-radius: 50%;
    background-color: ${p => getColor('primaryHue', 600, p.theme)};
    width: ${PSEUDO_ELEMENT_SIZE}px;
    height: ${PSEUDO_ELEMENT_SIZE}px;
    content: '';
  }

  &::before {
    ${beforePseudoElementStyles(props)}
  }

  &::after {
    ${afterPseudoElementStyles(props)}
  }
`;

export const StyledDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropIndicatorProps>`
  position: relative;
  border: ${p => p.theme.borders.sm} ${p => getColor('primaryHue', 600, p.theme)};

  ${pseudoElementStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
