/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';
import { StyledCheckLabel } from './StyledCheckLabel';
import { StyledRadioInput } from './StyledRadioInput';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const borderOptions = { theme, variable: 'border.primaryEmphasis' };

  const indeterminateBackgroundColor = getColor({ theme, variable: 'foreground.default' });
  const indeterminateBorderColor = 'transparent';

  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };

  const indeterminateHoverBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 800 },
    dark: { shade: 200 }
  });
  const indeterminateHoverBorderColor = getColor({ ...borderOptions, ...offset100 });
  const indeterminateActiveBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 100 }
  });
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

export const StyledCheckInput = styled(StyledRadioInput)`
  & ~ ${StyledCheckLabel}::before {
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  ${colorStyles};

  ${componentStyles};
`;
