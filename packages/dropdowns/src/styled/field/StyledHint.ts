/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const COMPONENT_ID = 'dropdowns.hint';

export interface IStyledHintProps {
  small?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledHint = styled.div.attrs<IStyledHintProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TextStyles['c-txt__hint'], {
    [TextStyles['c-txt__hint--sm']]: props.small,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledHintProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHint.defaultProps = {
  theme: DEFAULT_THEME
};
