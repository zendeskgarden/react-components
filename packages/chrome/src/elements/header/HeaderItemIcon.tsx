/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  Children,
  cloneElement,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactHTMLElement
} from 'react';
import { DefaultTheme, ThemeProps } from 'styled-components';
import { StyledHeaderItemIcon } from '../../styled';

/**
 * @deprecated use `Header.ItemIcon` instead
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export const HeaderItemIcon = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  const element = Children.only(children) as ReactHTMLElement<HTMLElement>;

  if (isValidElement(element)) {
    const Icon = ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      theme,
      ...iconProps
    }: ThemeProps<DefaultTheme> & HTMLAttributes<HTMLElement>) =>
      cloneElement<HTMLAttributes<HTMLElement>, HTMLElement>(element, { ...props, ...iconProps });

    return <StyledHeaderItemIcon as={Icon} {...props} />;
  }

  return null;
};
