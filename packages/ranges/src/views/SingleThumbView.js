/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import RangeStyles from '@zendeskgarden/css-forms/dist/range.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'ranges.single_thumb_view';

/**
 * Accepts all `<input [type="range"]>` props
 */
const SingleThumbView = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  type: 'range',
  className: props =>
    classNames(RangeStyles['c-range__input'], {
      [RangeStyles['is-disabled']]: props.disabled,
      [RangeStyles['is-focused']]: props.focused,
      [RangeStyles['is-hovered']]: props.hoverer,

      // RTL
      [RangeStyles['is-rtl']]: isRtl(props)
    })
})`
  ${({ backgroundSize }) => `
    background-size: ${backgroundSize};
  `};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

SingleThumbView.propTypes = {
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  backgroundSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

SingleThumbView.defaultProps = {
  backgroundSize: '0%'
};

/** @component */
export default SingleThumbView;
