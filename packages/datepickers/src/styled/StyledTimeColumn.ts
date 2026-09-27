/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.time_column';

interface IStyledTimeColumnProps {
  $isCompact?: boolean;
  $isScrollable?: boolean;
}

export const StyledTimeColumn = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimeColumnProps>`
  ${p =>
    p.$isScrollable !== false &&
    `
    overflow-y: scroll;
    scrollbar-gutter: stable;

    &:not(:hover) {
      scrollbar-color: transparent transparent;
    }
  `}

  ${componentStyles};
`;
