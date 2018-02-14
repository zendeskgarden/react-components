/**
 * Manages single selection state within a collection.
 * @component
 */
export default class SingleSelectionModel {
  constructor({ wrapping = 'items' } = {}) {
    this.selectedIndex = undefined;
    this.numItems = 0;
    this.wrapping = wrapping;
  }

  fireSelectionChanged(newSelection, previousSelection) {
    this.onSelectionChanged({
      newSelection,
      previousSelection
    });
  }

  select(index) {
    const previousSelectedIndex = this.selectedIndex;

    this.selectedIndex = index;

    if (this.selectedIndex === -1) {
      this.selectedIndex = undefined;
    }

    this.fireSelectionChanged(this.selectedIndex, previousSelectedIndex);
  }

  selectNext() {
    if (this.numItems > 0) {
      let newIndex = this.selectedIndex + 1;

      if (this.numItems <= newIndex) {
        if (this.wrapping === 'clear') {
          newIndex = -1;
        } else if (this.wrapping === 'items') {
          newIndex = newIndex % this.numItems;
        } else if (this.wrapping === 'off') {
          newIndex = this.numItems - 1;
        }
      }

      this.select(newIndex);

      return true;
    }

    return false;
  }

  selectPrevious() {
    if (this.numItems > 0) {
      let newIndex;

      if (typeof this.selectedIndex === 'undefined') {
        newIndex = this.numItems - 1;
      } else {
        newIndex = this.selectedIndex - 1;
        if (newIndex < 0) {
          if (this.wrapping === 'clear') {
            newIndex = -1;
          } else if (this.wrapping === 'items') {
            newIndex = this.numItems - 1;
          } else if (this.wrapping === 'off') {
            newIndex = 0;
          }
        }
      }

      this.select(newIndex);

      return true;
    }

    return false;
  }

  selectFirst() {
    if (this.numItems > 0) {
      this.select(0);

      return true;
    }

    return false;
  }

  selectLast() {
    if (this.numItems > 0) {
      this.select(this.numItems - 1);

      return true;
    }

    return false;
  }

  clearSelection() {
    this.select();
  }

  reset({ numItems = 0, selectedIndex } = {}) {
    this.numItems = numItems;
    this.selectedIndex = selectedIndex;
  }

  hasSelection() {
    return this.selectedIndex !== undefined;
  }
}
