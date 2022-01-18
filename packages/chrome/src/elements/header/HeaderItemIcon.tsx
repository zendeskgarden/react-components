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
import { ThemeProps } from 'styled-components';
import { StyledHeaderItemIcon } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const HeaderItemIcon = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  const element = Children.only(children) as ReactHTMLElement<HTMLElement>;

  if (isValidElement(element)) {
    const Icon = (iconProps: ThemeProps<HTMLAttributes<HTMLElement>>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { theme, ...cloneProps } = { ...props, ...iconProps };

      return cloneElement<HTMLAttributes<HTMLElement>, HTMLElement>(element, cloneProps);
    };

    return <StyledHeaderItemIcon as={Icon} {...props} />;
  }

  return null;
};
