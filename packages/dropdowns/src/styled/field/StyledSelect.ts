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
import { VALIDATION } from '../';

const COMPONENT_ID = 'dropdowns.select';

const isInvalid = (validation?: VALIDATION) => {
  return validation === VALIDATION.WARNING || validation === VALIDATION.ERROR;
};

export interface IStyledSelectProps {
  validation?: VALIDATION;
  isSmall?: boolean;
  /** Allows flush spacing of Tab elements */
  tagLayout?: boolean;
  /** Applies flex layout to support MediaFigure components */
  mediaLayout?: boolean;
  /** Removes all borders and styling */
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  /** Displays select open state */
  isOpen?: boolean;
}

export const StyledSelect = styled.div.attrs<IStyledSelectProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation),
  className: classNames(TextStyles['c-txt__input'], TextStyles['c-txt__input--select'], {
    [TextStyles['c-txt__input--sm']]: props.isSmall,

    // Unable to use `tag` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--tag']]: props.tagLayout,

    // Unable to use `media` prop due to it being a valid, non-boolean prop
    [TextStyles['c-txt__input--media']]: props.mediaLayout,
    [TextStyles['c-txt__input--bare']]: props.isBare,
    [TextStyles['c-txt__input--focus-inset']]: props.focusInset,

    [TextStyles['is-disabled']]: props.disabled,
    [TextStyles['is-focused']]: props.isFocused,
    [TextStyles['is-hovered']]: props.isHovered,
    [TextStyles['is-open']]: props.isOpen,

    [TextStyles['c-txt__input--success']]: props.validation === VALIDATION.SUCCESS,
    [TextStyles['c-txt__input--warning']]: props.validation === VALIDATION.WARNING,
    [TextStyles['c-txt__input--error']]: props.validation === VALIDATION.ERROR,

    // RTL
    [TextStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledSelectProps>`
  cursor: default;

  && {
    appearance: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSelect.defaultProps = {
  theme: DEFAULT_THEME
};
