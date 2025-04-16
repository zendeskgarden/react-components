/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IStyledOptionProps, StyledOption } from '../combobox/StyledOption';

const COMPONENT_ID = 'dropdowns.menu.item';

interface IStyledItemProps extends IStyledOptionProps {
  $hasAnchor?: boolean;
}

export const StyledItem = styled(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemProps>`
  padding: ${p => p.$hasAnchor && 0};

  ${componentStyles};
`;
