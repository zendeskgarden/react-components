/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { Dropdown } from './elements/Dropdown/Dropdown';
export { Trigger } from './elements/Trigger/Trigger';
export { Autocomplete } from './elements/Autocomplete/Autocomplete';
export { Combobox } from './elements/Combobox/Combobox';
export { Multiselect } from './elements/Multiselect/Multiselect';
export { Select } from './elements/Select/Select';
export { Field } from './elements/Fields/Field';
export { Hint } from './elements/Fields/Hint';
export { Label } from './elements/Fields/Label';
export { Message } from './elements/Fields/Message';
export { Menu } from './elements/Menu/Menu';
export { Separator } from './elements/Menu/Separator';
export { AddItem } from './elements/Menu/Items/AddItem';
export { HeaderIcon } from './elements/Menu/Items/HeaderIcon';
export { HeaderItem } from './elements/Menu/Items/HeaderItem';
export { Item } from './elements/Menu/Items/Item';
export { ItemMeta } from './elements/Menu/Items/ItemMeta';
export { MediaBody } from './elements/Menu/Items/MediaBody';
export { MediaFigure } from './elements/Menu/Items/MediaFigure';
export { MediaItem } from './elements/Menu/Items/MediaItem';
export { NextItem } from './elements/Menu/Items/NextItem';
export { PreviousItem } from './elements/Menu/Items/PreviousItem';

export type {
  IDropdownProps,
  ITriggerProps,
  ISelectProps,
  IAutocompleteProps,
  IComboboxProps,
  IMultiselectProps,
  IMenuProps,
  IItemProps,
  IHeaderItemProps,
  /* @deprecated these types can be dereferenced from the exported interfaces */
  GardenPlacement as GARDEN_PLACEMENT,
  PopperPlacement as POPPER_PLACEMENT
} from './types';
export type { ILabelProps, IMessageProps } from '@zendeskgarden/react-forms';

export { resetIdCounter } from 'downshift';
