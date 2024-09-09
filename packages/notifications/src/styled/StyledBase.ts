/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getLineHeight, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Type } from '../types';
import { validationTypes } from '../utils/icons';

const COMPONENT_ID = 'notifications.base_container';

export interface IStyledBaseProps extends ThemeProps<DefaultTheme> {
  $isFloating?: boolean;
  $type?: Type;
}

const colorStyles = ({ theme, $type, $isFloating }: IStyledBaseProps) => {
  const { space, shadows } = theme;
  let bgVariable;
  let borderVariable;
  let fgVariable;

  if (!$isFloating && $type && !!(validationTypes as any)[$type]) {
    switch ($type) {
      case validationTypes.success:
        bgVariable = 'background.success';
        borderVariable = 'border.success';
        fgVariable = 'foreground.success';
        break;
      case validationTypes.error:
        bgVariable = 'background.danger';
        borderVariable = 'border.danger';
        fgVariable = 'foreground.danger';
        break;
      case validationTypes.warning:
        bgVariable = 'background.warning';
        borderVariable = 'border.warning';
        fgVariable = 'foreground.warning';
        break;
      case validationTypes.info:
        bgVariable = 'background.subtle';
        borderVariable = 'border.default';
        fgVariable = 'foreground.subtle';
        break;
    }
  } else {
    bgVariable = 'background.raised';
    borderVariable = 'border.default';
    fgVariable = 'foreground.default';
  }

  const backgroundColor = getColor({ variable: bgVariable, theme });
  const borderColor = getColor({ variable: borderVariable, theme });
  const foregroundColor = getColor({ variable: fgVariable, theme });

  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const boxShadow = $isFloating
    ? shadows.lg(offsetY, blurRadius, getColor({ variable: 'shadow.large', theme }))
    : undefined;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const padding = (props: ThemeProps<DefaultTheme>) => {
  const { space } = props.theme;
  const paddingVertical = `${space.base * 5}px`;
  const paddingHorizontal = `${space.base * 10}px`;

  return `${paddingVertical} ${paddingHorizontal}`;
};

export const StyledBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBaseProps>`
  position: relative;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  padding: ${padding};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;
