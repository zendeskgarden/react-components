/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, focusStyles } from '@zendeskgarden/react-theming';
import {
  StyledButtonPreview,
  IStyleButtonPreviewProps
} from '../ColorpickerDialog/StyledButtonPreview';

const COMPONENT_ID = 'colorpickers.swatch_button';

export const StyledSwatchButton = styled(StyledButtonPreview).attrs<IStyleButtonPreviewProps>(
  props => ({
    as: 'button',
    'data-garden-id': COMPONENT_ID,
    'data-test-id': props.backgroundColor,
    'data-garden-version': PACKAGE_VERSION
  })
)`
  transition: box-shadow 0.1s ease-in-out;
  outline: none;
  border: none;
  border-radius: ${props => props.theme.borderRadii.md};
  cursor: pointer;
  padding: 0;

  ${props =>
    focusStyles({
      theme: props.theme
    })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSwatchButton.defaultProps = {
  theme: DEFAULT_THEME
};
