/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextMediaInput } from '../text/StyledTextMediaInput';

const COMPONENT_ID = 'forms.select';

/**
 * 1. Select reset.
 */
export const StyledSelect = styled(StyledTextMediaInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'select'
})`
  &::-ms-expand {
    display: none; /* [1] */
  }

  &::-ms-value {
    background-color: transparent; /* [1] */
    color: inherit; /* [1] */
  }

  &:-moz-focusring {
    transition: none;
    text-shadow: 0 0 0 ${props => props.theme.colors.foreground}; /* [1] */
    color: transparent; /* [1] */
  }
`;

StyledSelect.defaultProps = {
  theme: DEFAULT_THEME
};
