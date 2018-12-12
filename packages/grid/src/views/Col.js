/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.col';

const retrieveNumberedClass = (className, number, classes) => {
  if (typeof number === 'boolean') {
    classes.push(GridStyles[className]);
  } else if (typeof number !== 'undefined') {
    classes.push(GridStyles[`${className}-${number}`]);
  }
};

const retrieveColClassNames = ({
  size,
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl
} = {}) => {
  const output = [];

  retrieveNumberedClass('col', size, output);
  retrieveNumberedClass('col-xs', xs, output);
  retrieveNumberedClass('col-sm', sm, output);
  retrieveNumberedClass('col-md', md, output);
  retrieveNumberedClass('col-lg', lg, output);
  retrieveNumberedClass('col-xl', xl, output);
  retrieveNumberedClass('offset-xs', offsetXs, output);
  retrieveNumberedClass('offset-sm', offsetSm, output);
  retrieveNumberedClass('offset-md', offsetMd, output);
  retrieveNumberedClass('offset-lg', offsetLg, output);
  retrieveNumberedClass('offset-xl', offsetXl, output);

  if (output.length === 0) {
    output.push(GridStyles.col);
  }

  return output;
};

/**
 * Accepts all `<div>` props
 */
const Col = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(...retrieveColClassNames(props), {
    [GridStyles[`align-self-${props.alignSelf}`]]: props.alignSelf,
    [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent,
    [GridStyles[`order-${props.order}`]]: props.order
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Col.propTypes = {
  /** Sizing for all breakpoints. */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for extra small breakpoints. */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for small breakpoints. */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for medium breakpoints. */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for large breakpoints. */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for extra large breakpoints. */
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Use flexbox alignment utilities to horizontally align */
  alignSelf: PropTypes.oneOf(['start', 'center', 'end']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  order: PropTypes.any
};

/** @component */
export default Col;
