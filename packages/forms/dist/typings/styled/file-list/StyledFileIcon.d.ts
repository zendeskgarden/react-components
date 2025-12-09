/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DataAttributes } from 'styled-components';
import { FileValidation } from '../../types';
export interface IStyledFileIconProps {
    $isCompact?: boolean;
    $validation?: FileValidation;
}
export declare const StyledFileIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>, import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>>, DataAttributes>, IStyledFileIconProps>> & string;
