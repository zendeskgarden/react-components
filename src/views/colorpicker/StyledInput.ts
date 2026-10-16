/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Input } from '@zendeskgarden/react-forms';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

const COMPONENT_ID = 'colorpickers.colorpicker_input';

// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledInput = styled(Input as any).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  focusInset: false
})`
  text-align: center;

  ${componentStyles};
`;
