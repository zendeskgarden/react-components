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

export const StyledTextFauxInput = styled(StyledTextInput).attrs({
  as: 'div',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: ${props => props.mediaLayout && 'flex'};
  align-items: ${props => props.mediaLayout && 'baseline'};
  cursor: ${props => props.mediaLayout && 'text'};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextFauxInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  mediaLayout: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledTextFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
