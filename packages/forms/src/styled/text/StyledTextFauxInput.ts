/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextInput, IStyledTextInputProps } from './StyledTextInput';

const COMPONENT_ID = 'forms.faux_input';

interface IStyledTextFauxInputProps extends IStyledTextInputProps {
  mediaLayout?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
}

export const StyledTextFauxInput = styled(StyledTextInput).attrs<IStyledTextFauxInputProps>(
  props => ({
    as: 'div',
    'aria-disabled': props.isDisabled,
    'data-garden-focus-visible': props.isFocused,
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION
  })
)<IStyledTextFauxInputProps>`
  display: ${props => (props.mediaLayout ? 'inline-flex' : 'inline-block')};
  align-items: ${props => props.mediaLayout && 'baseline'};
  cursor: ${props => (props.mediaLayout && !props.isDisabled ? 'text' : 'default')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
