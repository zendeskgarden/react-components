/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput.js';
import { StyledTextMediaFigure } from './StyledTextMediaFigure.js';

const COMPONENT_ID = 'forms.faux_input';
const colorStyles = _ref => {
  let {
    theme,
    $validation,
    $focusInset,
    $isBare,
    $isFocused
  } = _ref;
  let borderVariable;
  let focusBorderColor;
  if ($validation) {
    if ($validation === 'success') {
      borderVariable = 'border.successEmphasis';
    } else if ($validation === 'warning') {
      borderVariable = 'border.warningEmphasis';
    } else if ($validation === 'error') {
      borderVariable = 'border.dangerEmphasis';
    }
    focusBorderColor = getColor({
      theme,
      variable: borderVariable
    });
  } else {
    borderVariable = 'border.primaryEmphasis';
    focusBorderColor = getColor({
      theme,
      variable: borderVariable
    });
  }
  return css(["", ""], focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: borderVariable
    },
    selector: $isFocused ? '&' : '&:focus-within',
    styles: {
      borderColor: focusBorderColor
    },
    condition: !$isBare
  }));
};
const StyledTextFauxInput = styled(StyledTextInput).attrs(props => ({
  as: 'div',
  'aria-readonly': props.$isReadOnly,
  'aria-disabled': props.$isDisabled,
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
})).withConfig({
  displayName: "StyledTextFauxInput",
  componentId: "sc-yqw7j9-0"
})(["display:", ";align-items:", ";cursor:", ";overflow:hidden;", " & > ", "{vertical-align:", ";", "{box-shadow:unset;}}& > ", "{flex-shrink:", ";}", ";"], props => props.$mediaLayout ? 'inline-flex' : 'inline-block', props => props.$mediaLayout && 'baseline', props => props.$mediaLayout && !props.$isDisabled ? 'text' : 'default', colorStyles, StyledTextInput, props => !props.$mediaLayout && 'baseline', SELECTOR_FOCUS_VISIBLE, StyledTextMediaFigure, props => props.$mediaLayout && '0', componentStyles);

export { StyledTextFauxInput };
