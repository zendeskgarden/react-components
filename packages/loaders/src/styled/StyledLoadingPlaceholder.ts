/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.loading_placeholder';

interface IStyledLoadingPlaceholderProps {
  fontSize: string | number;
  width?: string;
  height?: string;
}

export const StyledLoadingPlaceholder = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'progressbar'
})<IStyledLoadingPlaceholderProps>`
  display: inline-block;
  width: ${props => props.width || '1em'};
  height: ${props => props.height || '0.9em'};
  font-size: ${props => props.fontSize};

  ${componentStyles}
`;
