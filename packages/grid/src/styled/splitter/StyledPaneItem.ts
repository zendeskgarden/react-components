/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { ORIENTATION } from '../../types';

const COMPONENT_ID = 'splitter.pane_item';

interface IStyledPaneItemProps {
  paneOrientation?: ORIENTATION;
}

const layoutStyles = ({ paneOrientation }: IStyledPaneItemProps) => {
  switch (paneOrientation) {
    case 'top':
      return ` 
        grid-column: 1 / -1;
        grid-row: 1;
      `;
    case 'bottom':
      return `
        grid-column: 1 / -1;
        grid-row: 3;
      `;
    case 'start':
      return `
        grid-column: 1;
        grid-row: 1 / -1;
      `;
    case 'end':
      return `
        grid-column: 3;
        grid-row: 1 / -1;
      `;
    default:
      return `
        grid-column: 2;
        grid-row: 2;
      `;
  }
};

export const StyledPaneItem = styled.div.attrs<IStyledPaneItemProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPaneItemProps>`
  position: relative;

  ${layoutStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneItem.defaultProps = {
  theme: DEFAULT_THEME
};
