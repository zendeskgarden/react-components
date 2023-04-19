/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  MENU_POSITION as MenuPosition,
  menuStyles
} from '@zendeskgarden/react-theming';
import { IListboxProps } from '../../types';
import { StyledListbox } from './StyledListbox';

const COMPONENT_ID = 'dropdowns.combobox.floating';

interface IStyledFloatingProps extends ThemeProps<DefaultTheme> {
  isHidden?: boolean;
  position: MenuPosition;
  zIndex?: IListboxProps['zIndex'];
}

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
export const StyledFloating = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFloatingProps>`
  top: 0; /* [1] */
  left: 0; /* [1] */

  ${props =>
    menuStyles(props.position, {
      theme: props.theme,
      hidden: props.isHidden,
      margin: `${props.theme.space.base}px`,
      childSelector: `> ${StyledListbox}`,
      animationModifier: '[data-garden-animate="true"]',
      zIndex: props.zIndex
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFloating.defaultProps = {
  theme: DEFAULT_THEME
};
