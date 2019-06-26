/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';
import { VALIDATION } from '../';

const COMPONENT_ID = 'dropdowns.select';

const isInvalid = (validation?: VALIDATION) => {
  return validation === VALIDATION.WARNING || validation === VALIDATION.ERROR;
};

export interface IStyledSelectProps {
  validation?: VALIDATION;
  small?: boolean;
  /** Allows flush spacing of Tab elements */
  tagLayout?: boolean;
  /** Applies flex layout to support MediaFigure components */
  mediaLayout?: boolean;
  /** Removes all borders and styling */
  bare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  disabled?: boolean;
  focused?: boolean;
  hovered?: boolean;
  /** Displays select open state */
  open?: boolean;
}

export const StyledSelect = styled.div.attrs<IStyledSelectProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation),
  className: classNames(TextStyles['c-txt__input'], TextStyles['c-txt__input--select'], {
    [TextStyles['c-txt__input--sm']]: props.small,

    // Unable to use `tag` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--tag']]: props.tagLayout,

    // Unable to use `media` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--media']]: props.mediaLayout,
    [TextStyles['c-txt__input--bare']]: props.bare,
    [TextStyles['c-txt__input--focus-inset']]: props.focusInset,

    [TextStyles['is-disabled']]: props.disabled,
    [TextStyles['is-focused']]: props.focused,
    [TextStyles['is-hovered']]: props.hovered,
    [TextStyles['is-open']]: props.open,

    [TextStyles['c-txt__input--success']]: props.validation === VALIDATION.SUCCESS,
    [TextStyles['c-txt__input--warning']]: props.validation === VALIDATION.WARNING,
    [TextStyles['c-txt__input--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledSelectProps>`
  cursor: default;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
