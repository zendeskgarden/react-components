/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { rgba } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledButtonPreview, IStyleButtonPreviewProps } from '..';

const COMPONENT_ID = 'colorpickers.swatch_button';

export const StyledSwatchButton = styled(StyledButtonPreview).attrs<IStyleButtonPreviewProps>(
  props => ({
    as: 'button',
    'data-garden-id': COMPONENT_ID,
    'data-test-id': props.backgroundColor,
    'data-garden-version': PACKAGE_VERSION
  })
)`
  outline: none;
  border: none;
  border-radius: ${props => props.theme.borderRadii.md};
  padding: 0;

  &[data-garden-focus-visible] {
    box-shadow: ${props =>
      props.theme.shadows.md(rgba(getColor('primaryHue', 600, props.theme) as string, 0.35))};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSwatchButton.defaultProps = {
  theme: DEFAULT_THEME
};
