/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.highlight';

const StyledHighlight = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{
  isHighlighted: boolean;
  isStart: boolean;
  isEnd: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${props =>
    props.isStart &&
    `
    border-radius: ${props.theme.rtl ? '0 50% 50% 0' : '50% 0 0 50%'};
  `}

  ${props =>
    props.isEnd &&
    `
    border-radius: ${props.theme.rtl ? '50% 0 0 50%' : '0 50% 50% 0'};
  `}

  ${props =>
    props.isHighlighted && `background-color: ${getColor('primaryHue', 600, props.theme, 0.08)};`}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHighlight.defaultProps = {
  theme: DEFAULT_THEME
};

export default StyledHighlight;
