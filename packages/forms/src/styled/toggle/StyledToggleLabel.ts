/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from '../checkbox/StyledCheckLabel';

const COMPONENT_ID = 'forms.toggle_label';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = props.theme.space.base * 10; /* from StyledToggleInput */
  const padding = size + props.theme.space.base * 2;

  return css`
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding}px;

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size}px;
    }
  `;
};

export const StyledToggleLabel = styled(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
