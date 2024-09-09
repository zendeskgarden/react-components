/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from '../radio/StyledRadioInput';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundOptions = { theme, variable: 'background.primaryEmphasis' };
  const borderOptions = { theme, variable: 'border.primaryEmphasis' };

  const indeterminateBackgroundColor = getColor(backgroundOptions);
  const indeterminateBorderColor = getColor(borderOptions);

  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };

  const indeterminateHoverBackgroundColor = getColor({ ...backgroundOptions, ...offset100 });
  const indeterminateHoverBorderColor = getColor({ ...borderOptions, ...offset100 });
  const indeterminateActiveBackgroundColor = getColor({ ...backgroundOptions, ...offset200 });
  const indeterminateActiveBorderColor = getColor({ ...borderOptions, ...offset200 });
  const indeterminateDisabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });

  return css`
    &:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: ${indeterminateBorderColor};
      background-color: ${indeterminateBackgroundColor};
    }

    &:enabled:indeterminate ~ ${StyledCheckLabel}:hover::before {
      border-color: ${indeterminateHoverBorderColor};
      background-color: ${indeterminateHoverBackgroundColor};
    }

    &:enabled:indeterminate ~ ${StyledCheckLabel}:active::before {
      border-color: ${indeterminateActiveBorderColor};
      background-color: ${indeterminateActiveBackgroundColor};
    }

    &:disabled:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: transparent;
      background-color: ${indeterminateDisabledBackgroundColor};
    }
  `;
};

export const StyledCheckInput = styled(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'checkbox' as string
})`
  & ~ ${StyledCheckLabel}::before {
    border-radius: ${props => props.theme.borderRadii.md};
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
