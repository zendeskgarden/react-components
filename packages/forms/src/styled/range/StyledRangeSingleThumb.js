/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import RangeStyles from '@zendeskgarden/css-forms/dist/range.css';

/**
 * Accepts all `<input [type="range"]>` props
 */
const StyledRangeSingleThumb = styled.input.attrs(props => ({
  type: 'range',
  className: classNames(RangeStyles['c-range__input'], {
    [RangeStyles['is-disabled']]: props.disabled,
    [RangeStyles['is-focused']]: props.focused,
    [RangeStyles['is-hovered']]: props.hovered,

    // RTL
    [RangeStyles['is-rtl']]: isRtl(props)
  })
}))`
  && {
    ${({ backgroundSize }) => `background-size: ${backgroundSize};`};
  }

  ${props => retrieveComponentStyles('forms.single_thumb_range', props)};
`;

StyledRangeSingleThumb.propTypes = {
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  backgroundSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

StyledRangeSingleThumb.defaultProps = {
  backgroundSize: '0%'
};

/** @component */
export default StyledRangeSingleThumb;
