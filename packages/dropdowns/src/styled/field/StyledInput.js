/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const hiddenStyling = css`
  position: absolute;
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
`;

const StyledInput = styled.input.attrs({
  className: classNames(TextStyles['c-txt__input'], TextStyles['c-txt__input--bare'])
})`
  && {
    vertical-align: baseline;
    ${props => props.isHidden && hiddenStyling}
  }
`;

StyledInput.propTypes = {
  isHidden: PropTypes.bool
};

export default StyledInput;
