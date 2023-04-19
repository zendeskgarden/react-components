/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox';

interface IStyledComboboxProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

export const StyledCombobox = styled.div.attrs<IStyledComboboxProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledComboboxProps>`
  min-width: ${props => (props.isCompact ? 100 : 144)}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCombobox.defaultProps = {
  theme: DEFAULT_THEME
};
