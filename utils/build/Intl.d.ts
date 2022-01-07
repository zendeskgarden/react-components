/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

declare namespace Intl {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
    dateStyle?: 'full' | 'long' | 'medium' | 'short';
  }
}
