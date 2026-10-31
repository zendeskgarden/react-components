/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { FC } from 'react';

import { IFauxInputIconProps } from '../../types/elements';
import { StyledTextMediaFigure } from '../../views/form/StyledTextMediaFigure';
import { COMPONENT_IDS } from '../utils';

const EndIconComponent: FC<IFauxInputIconProps> = ({
  isDisabled,
  isFocused,
  isHovered,
  isRotated,
  ...props
}) => (
  <StyledTextMediaFigure
    $position="end"
    $isDisabled={isDisabled}
    $isFocused={isFocused}
    $isHovered={isHovered}
    $isRotated={isRotated}
    {...props}
    data-garden-id={COMPONENT_IDS['forms.media_figure']}
    data-garden-version={PACKAGE_VERSION}
  />
);

EndIconComponent.displayName = 'FauxInput.EndIcon';

/**
 * @extends SVGAttributes<SVGElement>
 */
export const EndIcon = EndIconComponent;
