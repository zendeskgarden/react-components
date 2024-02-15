/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  SELECTOR_FOCUS_VISIBLE,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { StyledTextInput, IStyledTextInputProps } from './StyledTextInput';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';

const COMPONENT_ID = 'forms.faux_input';

export interface IStyledTextFauxInputProps extends IStyledTextInputProps {
  mediaLayout?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

const VALIDATION_HUES = {
  success: 'successHue',
  warning: 'warningHue',
  error: 'dangerHue'
};

export function getValidationHue(
  validation?: IStyledTextFauxInputProps['validation'],
  defaultHue = 'primaryHue'
) {
  if (validation) {
    return VALIDATION_HUES[validation];
  }

  return defaultHue;
}

const colorStyles = (props: IStyledTextFauxInputProps & ThemeProps<DefaultTheme>) => {
  const { theme, validation, focusInset, isBare, isFocused } = props;

  return css`
    ${focusStyles({
      theme,
      inset: focusInset,
      condition: !isBare,
      hue: getValidationHue(validation),
      shade: validation === 'warning' ? 700 : 600,
      selector: isFocused ? '&' : '&:focus-within',
      styles: { borderColor: getColor(getValidationHue(validation), 600, theme) }
    })}
  `;
};

/**
 * [1] removes inner input styles when focused
 */

export const StyledTextFauxInput = styled(
  StyledTextInput as 'div'
).attrs<IStyledTextFauxInputProps>(props => ({
  as: 'div',
  'aria-readonly': props.isReadOnly,
  'aria-disabled': props.isDisabled,
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IStyledTextFauxInputProps>`
  display: ${props => (props.mediaLayout ? 'inline-flex' : 'inline-block')};
  align-items: ${props => props.mediaLayout && 'baseline'};
  cursor: ${props => (props.mediaLayout && !props.isDisabled ? 'text' : 'default')};
  overflow: hidden;

  ${colorStyles}

  & > ${StyledTextInput} {
    vertical-align: ${props => !props.mediaLayout && 'baseline'};

    ${SELECTOR_FOCUS_VISIBLE} {
      box-shadow: unset; /* [1] */
    }
  }

  & > ${StyledTextMediaFigure} {
    flex-shrink: ${props => props.mediaLayout && '0'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextFauxInput.defaultProps = {
  theme: DEFAULT_THEME
};
