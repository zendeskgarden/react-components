/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_group.append';

const borderStyles = (props: ThemeProps<DefaultTheme>) => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';

  return css`
    /* stylelint-disable */
    margin-${startDirection}: -${props.theme.borderWidths.sm};

    & > * {
      border-top-${startDirection}-radius: 0;
      border-bottom-${startDirection}-radius: 0;
    }

    &:not(:last-child) > * {
      border-top-${endDirection}-radius: 0;
      border-bottom-${endDirection}-radius: 0;
    }
    /* stylelint-enable */
  `;
};

export const StyledAppend = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  z-index: 2;

  ${props => borderStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAppend.defaultProps = {
  theme: DEFAULT_THEME
};
