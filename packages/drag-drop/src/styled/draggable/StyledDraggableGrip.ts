/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable.grip';

function getMarginStyles(props: ThemeProps<DefaultTheme>) {
  return {
    [props.theme.rtl ? 'marginLeft' : 'marginRight']: props.theme.space.xs
  };
}

export const StyledDraggableGrip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${getMarginStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableGrip.defaultProps = {
  theme: DEFAULT_THEME
};
