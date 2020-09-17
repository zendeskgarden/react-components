/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.drawer_modal';

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 800, theme, 0.35);

  return shadows.lg(offsetY, blurRadius, color as string);
};

export const StyledDrawerModal = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: fixed;
  right: -10000px;
  flex-direction: column;
  transition: transform 0.25s ease-in-out;
  box-shadow: ${boxShadow};
  background: ${props => props.theme.colors.background};
  width: 380px;
  height: 100%;

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModal.defaultProps = {
  theme: DEFAULT_THEME
};
