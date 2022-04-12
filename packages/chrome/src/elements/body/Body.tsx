/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { IBodyProps } from '../../types';
import { StyledBody } from '../../styled';
import { BodyContext } from '../../utils/useBodyContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = React.forwardRef<HTMLDivElement, IBodyProps>(({ hasFooter, ...props }, ref) => {
  const bodyContextValue = useMemo(() => ({ hasFooter: !!hasFooter }), [hasFooter]);

  return (
    <BodyContext.Provider value={bodyContextValue}>
      <StyledBody ref={ref} {...props} />
    </BodyContext.Provider>
  );
});

Body.displayName = 'Body';

Body.propTypes = {
  hasFooter: PropTypes.bool
};
