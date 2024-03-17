/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getColorV8, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from '../radio/StyledRadioInput';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;

  const indeterminateBorderColor = getColorV8('primaryHue', SHADE, props.theme);
  const indeterminateBackgroundColor = indeterminateBorderColor;
  const indeterminateActiveBorderColor = getColorV8('primaryHue', SHADE + 100, props.theme);
  const indeterminateActiveBackgroundColor = indeterminateActiveBorderColor;
  const indeterminateDisabledBackgroundColor = getColorV8('neutralHue', SHADE - 400, props.theme);

  return css`
    &:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: ${indeterminateBorderColor};
      background-color: ${indeterminateBackgroundColor};
    }

    /* stylelint-disable selector-max-specificity */
    &:enabled:indeterminate ~ ${StyledCheckLabel}:active::before {
      border-color: ${indeterminateActiveBorderColor};
      background-color: ${indeterminateActiveBackgroundColor};
    }

    &:disabled:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: transparent;
      background-color: ${indeterminateDisabledBackgroundColor};
    }
    /* stylelint-enable selector-max-specificity */
  `;
};

export const StyledCheckInput = styled(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'checkbox' as string
})`
  /* stylelint-disable-next-line */
  & ~ ${StyledCheckLabel}::before {
    border-radius: ${props => props.theme.borderRadii.md};
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckInput.defaultProps = {
  theme: DEFAULT_THEME
};
