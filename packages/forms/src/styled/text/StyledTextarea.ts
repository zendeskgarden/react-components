/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput';

const COMPONENT_ID = 'forms.textarea';

interface IStyledTextareaProps {
  isResizable?: boolean;
}

export const StyledTextarea = styled(StyledTextInput).attrs({
  as: 'textarea',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTextareaProps>`
  resize: ${props => (props.isResizable ? 'vertical' : 'none')};
  overflow: auto;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextarea.defaultProps = {
  theme: DEFAULT_THEME
};
