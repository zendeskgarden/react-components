/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { Type } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { validationTypes } from '../../utils/notification/icons';
import { IStyledNotificationBaseProps, StyledBase } from './StyledBase';
import { StyledTitle } from './StyledTitle';

export interface IStyledAlertProps extends IStyledNotificationBaseProps {
  $type?: Type;
}

const colorStyles = (props: IStyledAlertProps & IStyledBaseProps) => {
  const { $type, theme } = props;

  let variable;

  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.successEmphasis';
      break;
    case validationTypes.error:
      variable = 'foreground.dangerEmphasis';
      break;
    case validationTypes.warning:
      variable = 'foreground.warningEmphasis';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }

  const color = variable ? getColor({ variable, theme }) : undefined;

  return css`
    ${StyledTitle} {
      color: ${color};
    }
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledAlert = styled(StyledBase)<IStyledAlertProps>`
  padding: ${props => props.theme.space.base * 4}px ${props => props.theme.space.base * 10}px;

  ${colorStyles}

  ${componentStyles};
`;
