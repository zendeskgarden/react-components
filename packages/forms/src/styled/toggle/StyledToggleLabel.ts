/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from '../checkbox/StyledCheckLabel';

const COMPONENT_ID = 'forms.toggle_label';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = math(`${props.theme.space.base} * 10px`); /* from StyledToggleInput */
  const padding = math(`${size} + (${props.theme.space.base} * 2px)`);

  return css`
    /* stylelint-disable property-no-unknown */
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding};

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size};
    }
    /* stylelint-enable property-no-unknown */
  `;
};

export const StyledToggleLabel = styled(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledToggleLabel.defaultProps = {
  theme: DEFAULT_THEME
};
