/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledLabelProps } from '../../types/views';

const COMPONENT_ID = 'forms.input_label';

/**
 * 1. CSS Bedrock override.
 */
// MIGRATE(component-ids): computed data-garden-id — the base element lets an incoming id win
export const StyledLabel = styled.label.attrs(props => ({
  'data-garden-id': (props as any)['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': (props as any)['data-garden-version'] || PACKAGE_VERSION
}))<IStyledLabelProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  vertical-align: middle; /* support label inline with input layout */
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props =>
    props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};

  &[hidden] {
    display: ${props => (props.$isRadio ? 'inline-block' : 'inline')}; /* [1] */
    vertical-align: ${props => props.$isRadio && 'top'};
    text-indent: ${props => props.$isRadio && '-100%'};
    font-size: ${props => props.$isRadio && '0'};

    ${props => !props.$isRadio && hideVisually()};
  }

  ${componentStyles};
`;
