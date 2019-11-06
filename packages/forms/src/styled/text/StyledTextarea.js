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

const COMPONENT_ID = 'forms.textarea';

export const StyledTextarea = styled(StyledTextInput).attrs({
  as: 'textarea',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  resize: ${props => (props.isResizable ? 'vertical' : 'none')};
  overflow: auto;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  isResizable: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledTextarea.defaultProps = {
  theme: DEFAULT_THEME
};
