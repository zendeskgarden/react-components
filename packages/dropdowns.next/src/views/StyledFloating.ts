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
import { StyledListbox } from './StyledListbox';

const COMPONENT_ID = 'dropdowns.combobox.floating';

interface IStyledFloatingProps extends ThemeProps<DefaultTheme> {
  isHidden?: boolean;
  position: MenuPosition;
}

export const StyledFloating = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFloatingProps>`
  ${props =>
    menuStyles(props.position, {
      theme: props.theme,
      hidden: props.isHidden,
      childSelector: `> ${StyledListbox}`,
      animationModifier: '[data-garden-animate="true"]'
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFloating.defaultProps = {
  theme: DEFAULT_THEME
};
