/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { defaultTheme, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import SM from './SM';
import MD from './MD';
import LG from './LG';

const COMPONENT_ID = 'typography.code';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TYPE = {
  GREY: 'grey',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

const backgroundColor = (type, theme) => {
  switch (type) {
    case TYPE.RED:
      return theme.palette.red[200];
    case TYPE.GREEN:
      return theme.palette.green[200];
    case TYPE.YELLOW:
      return theme.palette.yellow[200];
    case TYPE.GREY:
    default:
      return theme.palette.grey[200];
  }
};

const foregroundColor = (type, theme) => {
  switch (type) {
    case TYPE.RED:
      return theme.palette.red[700];
    case TYPE.GREEN:
      return theme.palette.green[700];
    case TYPE.YELLOW:
      return theme.palette.yellow[700];
    case TYPE.GREY:
    default:
      return theme.palette.grey[700];
  }
};

const codeAttributes = {
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
};

const codeCSS = css`
  border-radius: 2px;
  background-color: ${props => backgroundColor(props.type, props.theme)};
  padding: 1.5px;
  color: ${props => foregroundColor(props.type, props.theme)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
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
    case SIZE.MEDIUM:
    default:
      return <StyledMD {...props} />;
  }
};

Code.propTypes = {
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  type: PropTypes.oneOf([TYPE.GREY, TYPE.RED, TYPE.GREEN, TYPE.YELLOW])
};

Code.defaultProps = {
  theme: defaultTheme
};

/** @component */
export default Code;
