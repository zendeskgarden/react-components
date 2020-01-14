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

const COMPONENT_ID = 'dropdowns.label';

export interface IStyledLabel {
  regular?: boolean;
  small?: boolean;
}

/**
 * Accepts all `<label>` props
 */
export const StyledLabel = styled.label.attrs<IStyledLabel>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TextStyles['c-txt__label'], {
    [TextStyles['c-txt__label--regular']]: props.regular,
    [TextStyles['c-txt__label--sm']]: props.small,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledLabel>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
