/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextInput } from '../text/StyledTextInput';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input_group';

interface IStyledInputGroupProps {
  isCompact?: boolean;
}

/**
 * [1] - Override the default `width: 100%` style
 */
const positionStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const topMargin = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';

  return css`
    /* stylelint-disable */
    ${StyledLabel} + &,
    ${StyledHint} + &,
    ${StyledMessage} + &,
    & + ${StyledHint},
    & + ${StyledMessage} {
      margin-top: ${topMargin};
    }
    /* stylelint-enable */

    ${StyledTextInput} {
      position: relative;
      flex: 1 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      width: 1px; /* [1] */
      min-width: 0;
    }

    ${StyledTextInput}:not(:first-child) {
      /* stylelint-disable */
      border-top-${startDirection}-radius: 0;
      border-bottom-${startDirection}-radius: 0;
      /* stylelint-enable */
    }

    ${StyledTextInput}:not(:last-child) {
      /* stylelint-disable */
      border-top-${endDirection}-radius: 0;
      border-bottom-${endDirection}-radius: 0;
      /* stylelint-enable */
    }
  `;
};

export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputGroupProps>`
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  ${props => positionStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInputGroup.defaultProps = {
  theme: DEFAULT_THEME
};
