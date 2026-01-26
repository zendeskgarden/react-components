/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'dropdowns.combobox.optgroup';

export interface IStyledOptGroupProps extends ThemeProps<DefaultTheme> {
  $isCompact?: boolean;
}

export const StyledOptGroup = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptGroupProps>`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${componentStyles};
`;
