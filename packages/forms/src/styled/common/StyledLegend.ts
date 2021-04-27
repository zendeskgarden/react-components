/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.fieldset_legend';

interface IStyledLegend {
  isCompact?: boolean;
}

export const StyledLegend = styled.legend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledLegend>`
  margin-bottom: ${props =>
    props.isCompact ? props.theme.space.base : props.theme.space.base * 2}px;

  &[hidden] {
    ${hideVisually()};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLegend.defaultProps = {
  theme: DEFAULT_THEME
};
