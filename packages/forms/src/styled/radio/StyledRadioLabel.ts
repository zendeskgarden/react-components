/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';

const COMPONENT_ID = 'forms.radio_label';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = math(`${props.theme.space.base} * 4px`); /* from StyledRadioInput */
  const padding = math(`${size} + (${props.theme.space.base} * 2px)`);

  return css`
    /* stylelint-disable property-no-unknown */
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding};

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size};
    }
    /* stylelint-enable property-no-unknown */
  `;
};

export const StyledRadioLabel = styled(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block; /* required to display input on hidden label */
  position: relative;
  cursor: pointer;
  user-select: none;

  &[hidden] {
    vertical-align: top;
    text-indent: -100%;
    font-size: 0;
  }

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioLabel.defaultProps = {
  theme: DEFAULT_THEME
};
