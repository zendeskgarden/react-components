/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ITilesProps } from '../../types';
import { Tile } from './components/Tile';
import { Description } from './components/Description';
import { Icon } from './components/Icon';
import { Label } from './components/Label';
declare const TilesComponent: React.ForwardRefExoticComponent<ITilesProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Tiles: typeof TilesComponent & {
    Description: typeof Description;
    Icon: typeof Icon;
    Label: typeof Label;
    Tile: typeof Tile;
};
export {};
