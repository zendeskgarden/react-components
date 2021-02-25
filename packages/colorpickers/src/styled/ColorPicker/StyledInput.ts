/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';
import styled from 'styled-components';
import { Input } from '@zendeskgarden/react-forms';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_input';

/**
 * 1. Ensure correct input styles when ColorDialog is used within an InputGroup
 */
export const StyledInput = styled(Input as any).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable declaration-no-important */
  margin-top: ${props => props.theme.space.base}px !important; /* [1] */
  border-radius: ${props => props.theme.space.base}px !important; /* [1] */

  &:focus,
  &[data-garden-focus-visible='true'] {
    border-color: ${props => getColor('primaryHue', 600, props.theme)};
    box-shadow: ${props =>
      props.theme.shadows.md(
        rgba(getColor('primaryHue', 600, props.theme) as string, 0.35)
      )} !important; /* [1] */
  }
  /* stylelint-enable declaration-no-important */

  text-align: center;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
