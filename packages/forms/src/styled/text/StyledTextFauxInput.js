/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import VALIDATION from '../../utils/validation';
import { StyledTextInput } from './StyledTextInput';

const COMPONENT_ID = 'forms.faux_input';

export const StyledTextFauxInput = styled(StyledTextInput).attrs(props => ({
  as: 'div',
  tabIndex: props.isDisabled ? null : 0,
  'aria-disabled': props.isDisabled,
  'data-garden-focus-visible': props.isFocused,
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  display: ${props => (props.mediaLayout ? 'inline-flex' : 'inline-block')};
  align-items: ${props => props.mediaLayout && 'baseline'};
  cursor: ${props => (props.mediaLayout && !props.isDisabled ? 'text' : 'default')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextFauxInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  isFocused: PropTypes.bool,
  isDisabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  mediaLayout: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledTextFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
