/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'react';

declare module 'react' {
  /* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
  export interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
    defaultProps?: Partial<P>;
    propTypes?: WeakValidationMap<P>;
  }
}
