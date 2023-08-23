/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  menuStyles,
  MENU_POSITION
} from '@zendeskgarden/react-theming';
import { IMenuProps } from '../../types';
import { StyledFloatingListbox } from '../combobox/StyledFloatingListbox';

const COMPONENT_ID = 'dropdowns.menu.floating';

export interface IStyledFloatingMenuProps extends ThemeProps<DefaultTheme> {
  isHidden?: boolean;
  position: MENU_POSITION;
  zIndex?: IMenuProps['zIndex'];
}

export const StyledFloatingMenu = styled(StyledFloatingListbox).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFloatingMenuProps>`
  ${props =>
    menuStyles(props.position, {
      theme: props.theme,
      hidden: props.isHidden,
      animationModifier: '[data-garden-animate-menu="true"]',
      zIndex: props.zIndex
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFloatingMenu.defaultProps = {
  theme: DEFAULT_THEME
};
