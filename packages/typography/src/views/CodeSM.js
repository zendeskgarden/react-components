/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
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
import MonospaceSM from './MonospaceSM';

const COMPONENT_ID = 'typography.code_sm';

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

/**
 * Accepts all `code` props
 */
const CodeSM = styled(MonospaceSM.withComponent('code')).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  border-radius: 2px;
  background-color: ${props => backgroundColor(props.type)};
  padding: 1.5px 2px;
  color: ${props => foregroundColor(props.type)};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

CodeSM.propTypes = {
  type: PropTypes.oneOf([TYPE.GREY, TYPE.RED, TYPE.GREEN, TYPE.YELLOW])
};

/** @component */
export default CodeSM;
