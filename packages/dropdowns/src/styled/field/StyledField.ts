/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const COMPONENT_ID = 'dropdowns.field';

export interface IStyledFieldProps {
  inline?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledField = styled.div.attrs<IStyledFieldProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TextStyles['c-txt'], {
    [TextStyles['c-txt--inline']]: props.inline,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledFieldProps>`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;
