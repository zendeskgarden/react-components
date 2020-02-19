/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.slider';

interface IStyledSliderProps {
  isDisabled?: boolean;
}

export const StyledSlider = styled.div.attrs<IStyledSliderProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-disabled': props.isDisabled
}))<IStyledSliderProps>`
  display: block;
  position: relative;
  z-index: 0;
  cursor: pointer;
  /* thumb height + focused shadow widths */
  height: ${props =>
    math(`(${props.theme.space.base} * 5px) + (${props.theme.shadowWidths.md} * 2)`)};

  &[aria-disabled='true'] {
    cursor: default;
  }

  /* stylelint-disable */
  ${StyledLabel} + &,
  ${StyledHint} + &,
  ${StyledMessage} + &,
  & + ${StyledHint},
  & + ${StyledMessage} {
    margin-top: ${props => math(`${props.theme.space.base} * 2px`)};
  }
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSlider.defaultProps = {
  theme: DEFAULT_THEME
};
