/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';
import { styled } from 'styled-components';

import { InputComponent } from '../../elements/form/Input';
import { COMPONENT_IDS } from '../../elements/utils';
import { componentStyles } from '../../theming/utils/componentStyles';
import { IInputProps } from '../../types/elements';

/* styled-components does not forward `$` props, so the id is set below the
 * styled boundary for the rendered element to pick it up */
const ColorPickerInput = forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <InputComponent
    ref={ref}
    {...props}
    $componentId={COMPONENT_IDS['colorpickers.colorpicker_input']}
  />
));

ColorPickerInput.displayName = 'ColorPickerInput';

export const StyledInput = styled(ColorPickerInput as any)`
  text-align: center;

  ${componentStyles};
`;
