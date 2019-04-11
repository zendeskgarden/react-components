/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  zdColorGreen200,
  zdColorGreen700,
  zdColorGrey200,
  zdColorGrey700,
  zdColorRed300,
  zdColorRed700,
  zdColorYellow200,
  zdColorYellow700
} from '@zendeskgarden/css-variables';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import SM from './SM';
import MD from './MD';
import LG from './LG';

const COMPONENT_ID = 'typography.code';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

const TYPE = {
  GREY: 'grey',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

const backgroundColor = type => {
  switch (type) {
    case TYPE.RED:
      return zdColorRed300;
    case TYPE.GREEN:
      return zdColorGreen200;
    case TYPE.YELLOW:
      return zdColorYellow200;
    case TYPE.GREY:
    default:
      return zdColorGrey200;
  }
};

const foregroundColor = type => {
  switch (type) {
    case TYPE.RED:
      return zdColorRed700;
    case TYPE.GREEN:
      return zdColorGreen700;
    case TYPE.YELLOW:
      return zdColorYellow700;
    case TYPE.GREY:
    default:
      return zdColorGrey700;
  }
};

const codeAttributes = {
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
};

const codeCSS = css`
  border-radius: 2px;
  background-color: ${props => backgroundColor(props.type)};
  padding: 1.5px 2px;
  color: ${props => foregroundColor(props.type)};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

const StyledSM = styled(SM).attrs(codeAttributes)`
  ${codeCSS};
`;

const StyledMD = styled(MD).attrs(codeAttributes)`
  ${codeCSS};
`;

const StyledLG = styled(LG).attrs(codeAttributes)`
  ${codeCSS};
`;

/**
 * Accepts all `code` props
 */
const Code = ({ size, ...other }) => {
  const props = { monospace: true, tag: 'code', ...other };

  switch (size) {
    case SIZE.SMALL:
      return <StyledSM {...props} />;
    case SIZE.LARGE:
      return <StyledLG {...props} />;
    default:
      return <StyledMD {...props} />;
  }
};

Code.propTypes = {
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  type: PropTypes.oneOf([TYPE.GREY, TYPE.RED, TYPE.GREEN, TYPE.YELLOW])
};

/** @component */
export default Code;
