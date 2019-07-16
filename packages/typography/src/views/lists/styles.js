/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import { isRtl } from '@zendeskgarden/react-theming';

export const listCSS = props => {
  const rtl = isRtl(props);

  return css`
    direction: ${rtl ? 'rtl' : 'ltr'};
    margin: 0;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${rtl ? 'right' : 'left'}: 24px;
    padding: 0;
    list-style-position: outside;
    list-style-type: ${props.type};
  `;
};

export const listItemContentCSS = props => {
  let padding;

  switch (props.size) {
    case 'small':
      padding = '0';
      break;
    case 'large':
      padding = '4px 0';
      break;
    case 'medium':
    default:
      padding = '2px 0';
      break;
  }

  return css`
    padding: ${padding};
  `;
};
