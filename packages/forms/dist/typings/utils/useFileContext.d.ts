/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IFileContext {
    isCompact?: boolean;
}
export declare const FileContext: import("react").Context<IFileContext | undefined>;
declare const useFileContext: () => IFileContext | undefined;
export default useFileContext;
