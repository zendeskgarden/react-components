/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-menus` package has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/react-dropdowns` package to continue receiving updates.'
  );
  /* eslint-enable */
}

export { default as MenuContainer } from './containers/MenuContainer';
export { default as Menu } from './elements/Menu';
export { default as AddItem } from './views/items/AddItem';
export { default as HeaderIcon } from './views/items/header/HeaderIcon';
export { default as HeaderItem } from './views/items/header/HeaderItem';
export { default as Item } from './views/items/Item';
export { default as ItemMeta } from './views/items/ItemMeta';
export { default as MediaBody } from './views/items/media/MediaBody';
export { default as MediaFigure } from './views/items/media/MediaFigure';
export { default as MediaItem } from './views/items/media/MediaItem';
export { default as NextItem } from './views/items/NextItem';
export { default as PreviousItem } from './views/items/PreviousItem';
export { default as MenuView } from './views/MenuView';
export { default as Separator } from './views/Separator';
