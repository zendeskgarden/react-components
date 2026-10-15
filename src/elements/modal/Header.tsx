/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useEffect, HTMLAttributes, forwardRef } from 'react';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { IHeaderProps } from '../../types/elements';
import { StyledDangerIcon } from '../../views/modal/StyledDangerIcon';
import { StyledHeader } from '../../views/modal/StyledHeader';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Modal.Header` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = forwardRef<HTMLDivElement, IHeaderProps>(
  ({ children, isDanger, tag = 'div', ...other }, ref) => {
    const { isCloseButtonPresent, hasHeader, setHasHeader, getTitleProps } = useModalContext();

    useEffect(() => {
      if (!hasHeader && setHasHeader) {
        setHasHeader(true);
      }

      return () => {
        if (hasHeader && setHasHeader) {
          setHasHeader(false);
        }
      };
    }, [hasHeader, setHasHeader]);

    return (
      <StyledHeader
        {...(getTitleProps(other) as HTMLAttributes<HTMLDivElement>)}
        data-garden-id={COMPONENT_IDS['modals.header']}
        data-garden-version={PACKAGE_VERSION}
        as={tag}
        $isCloseButtonPresent={isCloseButtonPresent}
        $isDanger={isDanger}
        ref={ref}
      >
        {!!isDanger && <StyledDangerIcon />}
        {children}
      </StyledHeader>
    );
  }
);

Header.displayName = 'Modal.Header';

Header.propTypes = {
  isDanger: PropTypes.bool,
  tag: PropTypes.any
};
