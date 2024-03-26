/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  Children,
  cloneElement,
  SVGAttributes,
  isValidElement,
  PropsWithChildren,
  ReactSVGElement
} from 'react';
import { DefaultTheme, ThemeProps } from 'styled-components';
import { StyledNavItemIcon } from '../../styled';

/**
 * @deprecated use `Nav.ItemIcon` instead
 *
 * @extends SVGAttributes<SVGElement>
 */
export const NavItemIcon = ({
  children,
  ...props
}: PropsWithChildren<SVGAttributes<SVGElement>>) => {
  const element = Children.only(children) as ReactSVGElement;

  if (isValidElement(element)) {
    const Icon = ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      theme,
      ...iconProps
    }: ThemeProps<DefaultTheme> & SVGAttributes<SVGElement>) =>
      cloneElement<SVGAttributes<SVGElement>, SVGElement>(element, { ...props, ...iconProps });

    return <StyledNavItemIcon as={Icon} {...props} />;
  }

  return null;
};
