/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import NextIconSvg from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.next_item_icon';

interface IStyledNextIconProps {
  isDisabled?: boolean;
}

const NextIconComponent: React.FC<HTMLAttributes<SVGSVGElement>> = ({ className }) => (
  <NextIconSvg
    data-garden-id={COMPONENT_ID}
    data-garden-version={PACKAGE_VERSION}
    className={className}
  />
);

export const StyledNextIcon = styled(NextIconComponent)<IStyledNextIconProps>`
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  color: ${props =>
    props.isDisabled
      ? 'inherit'
      : getColor({ theme: props.theme, variable: 'foreground.disabled' })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNextIcon.defaultProps = {
  theme: DEFAULT_THEME
};
