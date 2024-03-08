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
import { StyledNavItemIcon } from '../../styled';

/**
 * @deprecated use `Nav.ItemIcon` instead
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export const NavItemIcon = ({
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

    return <StyledNavItemIcon as={Icon} {...props} />;
  }

  return null;
};
