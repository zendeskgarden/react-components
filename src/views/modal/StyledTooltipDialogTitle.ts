/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { IStyledBaseProps } from '../../types/views';

const sizeStyles = (props: IStyledBaseProps) => `
  /* stylelint-disable-next-line property-no-unknown */
  line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props.theme.fontSizes.md};
`;

export const StyledTooltipDialogTitle = styled.div`
  margin: 0;
  color: ${({ theme }) => getColor({ variable: 'foreground.default', theme })};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => sizeStyles(props)};

  ${componentStyles};
`;
