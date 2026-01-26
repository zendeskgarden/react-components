/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledFileClose } from './StyledFileClose';

const COMPONENT_ID = 'forms.file.delete';

export const StyledFileDelete = styled(StyledFileClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.danger' })};

  ${componentStyles};
`;
