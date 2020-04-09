/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.footer';

interface IStyledFooter {
  isLarge?: boolean;
}

export const StyledFooter = styled.div.attrs<IStyledFooter>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFooter>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  border-top: ${props =>
    props.isLarge && `${props.theme.borders.sm} ${getColor('neutralHue', 200, props.theme)}`};
  padding: ${props =>
    props.isLarge
      ? `${props.theme.space.base * 8}px ${props.theme.space.base * 10}px`
      : `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px ${
          props.theme.space.base * 8
        }px`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFooter.defaultProps = {
  theme: DEFAULT_THEME
};
