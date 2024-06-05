/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Tag } from '@zendeskgarden/react-tags';

const COMPONENT_ID = 'dropdowns.combobox.tag';

export const StyledTag = styled(Tag).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  &[aria-disabled='true'] {
    color: ${props =>
      props.hue ? undefined : getColor({ theme: props.theme, variable: 'foreground.disabled' })};
  }

  &[hidden] {
    display: revert;
    ${hideVisually()}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTag.defaultProps = {
  theme: DEFAULT_THEME
};
