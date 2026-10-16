/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { getTrackHeight, getTrackMargin } from './StyledRange';

interface IStyledSlidersProps {
  $isOpaque?: boolean;
}

const sizeStyles = (props: IStyledSlidersProps & IStyledBaseProps) => {
  if (props.$isOpaque) {
    return undefined;
  }

  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);

  return `
    & > * {
      position: absolute;
      width: 100%;
      height: ${trackMargin * 2 + trackHeight}px;
    }

    & > :first-child {
      top: -${trackMargin}px;
    }

    & > :last-child {
      bottom: -${trackMargin}px;
    }
  `;
};

export const StyledSliders = styled.div<IStyledSlidersProps>`
  position: relative;
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 2}px;
  width: 100%;

  ${sizeStyles}

  ${componentStyles};
`;
