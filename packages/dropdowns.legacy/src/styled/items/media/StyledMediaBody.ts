/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.media_body';

interface IStyledMediaBodyProps {
  $isCompact?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledMediaBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMediaBodyProps>`
  display: block;
  overflow: hidden;
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    props.theme.space.base * 2}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
