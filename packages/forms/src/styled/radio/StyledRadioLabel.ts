/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';

const COMPONENT_ID = 'forms.radio_label';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const size = props.theme.space.base * 4; /* from StyledRadioInput */
  const padding = size + props.theme.space.base * 2;
  const lineHeight = props.theme.space.base * 5;

  return css`
    /* stylelint-disable property-no-unknown */
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding}px;

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size}px;
      line-height: ${lineHeight}px;
    }
    /* stylelint-enable property-no-unknown */
  `;
};

/**
 * 1. Vertical alignment.
 * 2. CSS Bedrock override.
 */
export const StyledRadioLabel = styled(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block; /* [1] */
  position: relative;
  cursor: pointer;
  user-select: none;

  &[hidden] {
    display: inline-block; /* [2] */
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
