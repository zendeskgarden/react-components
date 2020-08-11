/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextFauxInput } from '../text/StyledTextFauxInput';

const COMPONENT_ID = 'forms.select_wrapper';

export const StyledSelectWrapper = styled(StyledTextFauxInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  isBare: true
})`
  position: relative;
  overflow: visible;
`;

StyledSelectWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
