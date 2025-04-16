/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Field } from '@zendeskgarden/react-forms';
import styled, { DefaultTheme } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_rgb_field';

const sizeStyles = (theme: DefaultTheme) => {
  const margin = `${theme.space.base * 1.5}px`;
  const width = `${theme.space.base * 12.75}px`;

  return `
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
    width: ${width};
    min-width: ${width};
  `;
};

export const StyledRGBAField = styled(Field as unknown as 'div').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${props => sizeStyles(props.theme)};

  ${componentStyles};
`;
