/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.col';

const retrieveNumberedClass = (
  className: string,
  number: number | boolean | string | undefined,
  classes: Array<any>
) => {
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
}: IStyledColProps) => {
  const output: Array<any> = [];

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

export interface IStyledColProps {
  size?: number | string;
  xs?: number | string | boolean;
  sm?: number | string | boolean;
  md?: number | string | boolean;
  lg?: number | string | boolean;
  xl?: number | string | boolean;
  offsetXs?: number | string | boolean;
  offsetSm?: number | string | boolean;
  offsetMd?: number | string | boolean;
  offsetLg?: number | string | boolean;
  offsetXl?: number | string | boolean;
  alignSelf?: 'start' | 'center' | 'end';
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
  order?: any;
}

export const StyledCol = styled.div.attrs<IStyledColProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(...retrieveColClassNames(props), {
    [GridStyles[`align-self-${props.alignSelf}`]]: props.alignSelf,
    [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent,
    [GridStyles[`order-${props.order}`]]: props.order
  })
}))`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
