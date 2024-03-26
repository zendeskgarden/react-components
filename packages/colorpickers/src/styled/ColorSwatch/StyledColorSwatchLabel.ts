/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { parseToRgb, readableColor } from 'polished';
import {
  DEFAULT_THEME,
  focusStyles,
  getColorV8,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { StyledButtonPreview } from '../ColorPickerDialog/StyledButtonPreview';
import { IRGBColor } from '../../types';

const COMPONENT_ID = 'colorpickers.color_swatch_label';

interface IStyledColorSwatchLabelProps extends ThemeProps<DefaultTheme> {
  backgroundColor: string;
}

const colorStyles = (props: IStyledColorSwatchLabelProps) => {
  const { alpha } = parseToRgb(props.backgroundColor) as IRGBColor;
  let foregroundColor = getColorV8('foreground', 600 /* default shade */, props.theme);

  if (alpha === undefined || alpha >= 0.4) {
    foregroundColor = readableColor(
      props.backgroundColor,
      foregroundColor,
      getColorV8('background', 600 /* default shade */, props.theme),
      false /* turn off strict mode to prevent black */
    );
  }

  return `
    color: ${foregroundColor};
  `;
};

export const StyledColorSwatchLabel = styled(StyledButtonPreview).attrs({
  as: 'label',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;
  top: 0;
  border-radius: ${props => props.theme.borderRadii.md};

  ${colorStyles};

  ${props => focusStyles({ theme: props.theme, selector: '&:has(:focus-visible)' })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorSwatchLabel.defaultProps = {
  theme: DEFAULT_THEME
};
