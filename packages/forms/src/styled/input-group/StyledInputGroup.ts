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

  return css`
    /* stylelint-disable */
    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && + ${StyledMessage} {
      margin-top: ${topMargin};
    }
    /* stylelint-enable */

    & > ${StyledTextInput} {
      position: relative;
      flex: 1 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      width: auto; /* [1] */
      min-width: 0;
    }
  `;
};

/**
 * 1. remove border overlap in items
 * 2. keep text inputs above other elements for validation states
 */
const itemStyles = (props: ThemeProps<DefaultTheme>) => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';

  return css`
    /* stylelint-disable
      property-no-unknown,
      property-case,
      selector-no-qualifying-type */
    & > * {
      z-index: -1;
    }

    & > ${StyledTextInput} {
      z-index: 0; /* [2] */
    }

    & > ${StyledTextInput}:disabled {
      z-index: -2;
    }

    & > ${StyledTextInput}:hover,
    & > button:hover,
    & > ${StyledTextInput}:focus-visible,
    & > button:focus-visible,
    & > ${StyledTextInput}[data-garden-focus-visible],
    & > button[data-garden-focus-visible],
    & > ${StyledTextInput}:active,
    & > button:active,
    & > button[aria-pressed='true'],
    & > button[aria-pressed='mixed'] {
      z-index: 1;
    }

    & > button:disabled {
      border-top-width: 0;
      border-bottom-width: 0;
    }

    & > *:not(:first-child) {
      margin-${startDirection}: -${props.theme.borderWidths.sm}; /* [1] */
    }

    & > *:first-child:not(:last-child) {
      border-top-${endDirection}-radius: 0;
      border-bottom-${endDirection}-radius: 0;
    }

    & > *:last-child:not(:first-child) {
      border-top-${startDirection}-radius: 0;
      border-bottom-${startDirection}-radius: 0;
    }

    & > *:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    /* stylelint-enable
      property-no-unknown,
      property-case,
      selector-no-qualifying-type */
  `;
};

export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputGroupProps>`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: stretch;
  z-index: 0;
  width: 100%;

  ${props => positionStyles(props)};
  ${props => itemStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInputGroup.defaultProps = {
  theme: DEFAULT_THEME
};
