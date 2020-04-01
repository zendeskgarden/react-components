/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CircleIcon from './icon.svg';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from './StyledRadioInput';
import { StyledRadioLabel } from './StyledRadioLabel';

const COMPONENT_ID = 'forms.radio_svg';

export const StyledRadioSvg = styled(CircleIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: opacity 0.25 ease-in-out;
  opacity: 0;

  ${StyledRadioInput}:checked ~ ${StyledRadioLabel} > & {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioSvg.defaultProps = {
  theme: DEFAULT_THEME
};
