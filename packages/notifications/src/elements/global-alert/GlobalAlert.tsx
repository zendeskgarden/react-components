/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { TYPE, IGlobalAlertProps } from '../../types';
import { StyledGlobalAlert } from '../../styled';

import { GlobalAlertContext } from './utility';
import { GlobalAlertIcon } from './GlobalAlertIcon';

import { GlobalAlertAnchor } from './GlobalAlertAnchor';
import { GlobalAlertButton } from './GlobalAlertButton';
import { GlobalAlertClose } from './GlobalAlertClose';
import { GlobalAlertContent } from './GlobalAlertContent';
import { GlobalAlertTitle } from './GlobalAlertTitle';

// eslint-disable-next-line react/display-name
const GlobalAlertComponent = forwardRef<HTMLDivElement, IGlobalAlertProps>((props, ref) => (
  <GlobalAlertContext.Provider value={useMemo(() => ({ type: props.type }), [props.type])}>
    <StyledGlobalAlert ref={ref} role="status" {...props}>
      <GlobalAlertIcon type={props.type} />
      {props.children}
    </StyledGlobalAlert>
  </GlobalAlertContext.Provider>
));

export const GlobalAlert = GlobalAlertComponent as typeof GlobalAlertComponent & {
  Anchor: typeof GlobalAlertAnchor;
  Button: typeof GlobalAlertButton;
  Close: typeof GlobalAlertClose;
  Content: typeof GlobalAlertContent;
  Title: typeof GlobalAlertTitle;
};

GlobalAlert.displayName = 'GlobalAlert';

GlobalAlert.Anchor = GlobalAlertAnchor;
GlobalAlert.Button = GlobalAlertButton;
GlobalAlert.Close = GlobalAlertClose;
GlobalAlert.Content = GlobalAlertContent;
GlobalAlert.Title = GlobalAlertTitle;

GlobalAlert.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired,
  children: PropTypes.any
};
