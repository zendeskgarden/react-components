/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StyledSelect from './StyledSelect';

const CssHiddenStyling = css`
  position: relative;
  left: -100px;
  transform: scale(0);
  opacity: 0;
  outline: 0;
  border-width: 0;
  border-style: initial;
  border-color: initial;
  background: 0 center;
  width: 1px;
  color: transparent;
  font-size: inherit;
  border-image: initial;
`;

const StyledBareInput = styled(StyledSelect.withComponent('input')).attrs({ bare: true })`
  && {
    ${props => props.isHidden && CssHiddenStyling}
  }
`;

StyledBareInput.propTypes = {
  isHidden: PropTypes.bool
};

export default StyledBareInput;
