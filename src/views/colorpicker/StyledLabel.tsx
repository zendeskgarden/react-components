/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';
import { styled } from 'styled-components';

import { LabelComponent } from '../../elements/form/Label';
import { COMPONENT_IDS } from '../../elements/utils';
import { componentStyles } from '../../theming/utils/componentStyles';
import { ILabelProps } from '../../types/elements';

/* styled-components does not forward `$` props, so the id is set below the
 * styled boundary for the rendered element to pick it up */
const ColorPickerLabel = forwardRef<HTMLLabelElement, ILabelProps>((props, ref) => (
  <LabelComponent
    ref={ref}
    {...props}
    $componentId={COMPONENT_IDS['colorpickers.colorpicker_label']}
  />
));

ColorPickerLabel.displayName = 'ColorPickerLabel';

export const StyledLabel = styled(ColorPickerLabel as any)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${componentStyles};
`;
