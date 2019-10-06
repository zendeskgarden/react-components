/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkboxes/StyledCheckInput';

/**
 * Hidden `<input>` used to show custom radio visualization. Accepts all `<input>` props.
 */
const StyledRadioInput = styled(StyledCheckInput).attrs({
  type: 'radio'
})`
  ${props => retrieveComponentStyles('forms.radio_input', props)};
`;

export default StyledRadioInput;
