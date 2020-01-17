/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { StyledHint, IStyledHintProps } from '../../styled';
import { HTMLAttributes } from 'react';

/**
 * Accepts all `div` props. Must be nested with a `<Field>` component.
 */
const Hint = StyledHint as React.FunctionComponent<
  IStyledHintProps & HTMLAttributes<HTMLDivElement>
>;

Hint.displayName = 'Hint';

Hint.propTypes = {
  isSmall: PropTypes.bool
};

export default Hint;
