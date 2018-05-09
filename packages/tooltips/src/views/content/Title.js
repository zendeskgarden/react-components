/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { zdFontWeightRegular } from '@zendeskgarden/css-variables';
import { retrieveTheme } from '@zendeskgarden/react-theming';

/**
 * Accepts all `<div>` props
 */
const Title = styled.div`
  font-weight: ${zdFontWeightRegular};
  margin-bottom: 12px;

  ${props => retrieveTheme('tooltip.title', props)};
`;

/** @component */
export default Title;
