/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from '../radio/StyledRadioInput.js';
import { StyledCheckLabel } from './StyledCheckLabel.js';

const COMPONENT_ID$o = 'forms.checkbox';
const colorStyles$8 = ({
  theme
}) => {
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const indeterminateBackgroundColor = getColor(backgroundOptions);
  const indeterminateBorderColor = getColor(borderOptions);
  const offset100 = {
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  };
  const offset200 = {
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  };
  const indeterminateHoverBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset100
  });
  const indeterminateHoverBorderColor = getColor({
    ...borderOptions,
    ...offset100
  });
  const indeterminateActiveBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset200
  });
  const indeterminateActiveBorderColor = getColor({
    ...borderOptions,
    ...offset200
  });
  const indeterminateDisabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });
  return css(["&:indeterminate ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:indeterminate ~ ", ":hover::before{border-color:", ";background-color:", ";}&:enabled:indeterminate ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled:indeterminate ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledCheckLabel, indeterminateBorderColor, indeterminateBackgroundColor, StyledCheckLabel, indeterminateHoverBorderColor, indeterminateHoverBackgroundColor, StyledCheckLabel, indeterminateActiveBorderColor, indeterminateActiveBackgroundColor, StyledCheckLabel, indeterminateDisabledBackgroundColor);
};
const StyledCheckInput = styled(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '9.12.3',
  type: 'checkbox'
}).withConfig({
  displayName: "StyledCheckInput",
  componentId: "sc-176jxxe-0"
})(["& ~ ", "::before{border-radius:", ";}", ";", ";"], StyledCheckLabel, props => props.theme.borderRadii.md, colorStyles$8, componentStyles);

export { StyledCheckInput };
