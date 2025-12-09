/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IGridProps } from '../types';
import { Row } from './Row';
import { Col } from './Col';
export declare const GridComponent: React.ForwardRefExoticComponent<IGridProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Grid: typeof GridComponent & {
    Row: typeof Row;
    Col: typeof Col;
};
