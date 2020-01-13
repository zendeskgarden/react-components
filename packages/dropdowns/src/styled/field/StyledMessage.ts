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

const COMPONENT_ID = 'dropdowns.message';

export enum VALIDATION {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface IStyledMessageProps {
  validation?: VALIDATION;
}

/**
 * Accepts all `<div>` props
 */
export const StyledMessage = styled.div.attrs<IStyledMessageProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'alert',
  className: classNames(TextStyles['c-txt__message'], {
    [TextStyles['c-txt__message--success']]: props.validation === VALIDATION.SUCCESS,
    [TextStyles['c-txt__message--warning']]: props.validation === VALIDATION.WARNING,
    [TextStyles['c-txt__message--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledMessageProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessage.defaultProps = {
  theme: DEFAULT_THEME
};
