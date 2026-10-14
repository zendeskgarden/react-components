/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { StyledLabel } from './StyledLabel';

const COMPONENT_ID = 'forms.radio_label';

const sizeStyles = (props: IStyledBaseProps) => {
  const size = props.theme.space.base * 4; /* from StyledRadioInput */
  const padding = size + props.theme.space.base * 2;
  const lineHeight = props.theme.space.base * 5;

  return css`
    padding-${props.theme.rtl ? 'right' : 'left'}: ${padding}px;

    &[hidden] {
      padding-${props.theme.rtl ? 'right' : 'left'}: ${size}px;
      height: ${lineHeight}px;
      line-height: ${lineHeight}px;
    }
  `;
};

/**
 * 1. Vertical alignment.
 */
// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledRadioLabel = styled(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $isRadio: true
})`
  display: inline-block; /* [1] */
  position: relative;
  cursor: pointer;

  ${props => sizeStyles(props)};

  ${componentStyles};
`;
