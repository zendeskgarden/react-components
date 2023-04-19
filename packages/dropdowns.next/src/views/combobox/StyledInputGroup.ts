/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.input_group';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const margin = props.theme.shadowWidths.sm;

  return css`
    margin: -${margin};
    min-width: 0;

    & > * {
      margin: ${margin};
    }
  `;
};

export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInputGroup.defaultProps = {
  theme: DEFAULT_THEME
};
