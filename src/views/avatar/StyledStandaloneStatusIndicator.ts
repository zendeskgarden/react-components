/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';
import { getStatusSize, IStyledStatusIndicatorProps } from './utility';

export const StyledStandaloneStatusIndicator = styled(
  StyledStatusIndicatorBase
)<IStyledStatusIndicatorProps>`
  position: relative;
  box-sizing: content-box;
  margin-top: ${props => {
    /* attrs cannot provide this fallback: styled-components >= 6.3.12 preserves
     * explicitly passed undefined props, so `$size` may still be undefined here */
    const sizeProps = { ...props, $size: props.$size ?? 'medium' };

    return `calc((${props.theme.lineHeights.md} - ${getStatusSize(sizeProps, '0')}) / 2)`;
  }};

  ${componentStyles};
`;
