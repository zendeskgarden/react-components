export default class SingleSelectionModel {
  constructor({ wrapping = "items" } = {}) {
    this.selection = null;
    this.items = [];
    this.wrapping = wrapping;
  }

  get selectedIndex() {
    return this.items.indexOf(this.selection);
  }

  fireSelectionChanged(newSelection, previousSelection) {
    if (this.onSelectionChanged) {
      if (typeof newSelection === "undefined") {
        newSelection = null;
      }

      if (typeof previousSelection === "undefined") {
        previousSelection = null;
      }

      this.onSelectionChanged(newSelection, previousSelection);
    }
  }

  select(item) {
    const selection = this.selection;
    this.selection = item;
    if (this.selectedIndex === -1) {
      this.selection = null;
    }

    this.fireSelectionChanged(this.selection, selection);
  }

  selectNext() {
    if (this.items.length > 0) {
      let newIndex = this.selectedIndex + 1;
      if (this.items.length <= newIndex) {
        switch (this.wrapping) {
          case "clear":
            newIndex = -1;
            break;
          case "items":
            newIndex = newIndex % this.items.length;
            break;
          case "off":
            newIndex = this.items.length - 1;
            break;
        }
      }

      this.select(this.items[newIndex] || null);
      return true;
    } else {
      return false;
    }
  }

  selectPrevious() {
    if (this.items.length > 0) {
      let newIndex;
      if (this.selectedIndex === -1) {
        newIndex = this.items.length - 1;
      } else {
        newIndex = this.selectedIndex - 1;
        if (newIndex < 0) {
          switch (this.wrapping) {
            case "clear":
              newIndex = -1;
              break;
            case "items":
              newIndex = this.items.length - 1;
              break;
            case "off":
              newIndex = 0;
              break;
          }
        }
      }

      this.select(this.items[newIndex] || null);
      return true;
    } else {
      return false;
    }
  }

  selectFirst() {
    if (this.items.length > 0) {
      this.select(this.items[0] || null);
      return true;
    } else {
      return false;
    }
  }

  selectLast() {
    if (this.items.length > 0) {
      this.select(this.items[this.items.length - 1] || null);
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.clearedSelection = this.selection;
    this.select(null);
  }

  reactivate() {
    if (this.items.indexOf(this.clearedSelection) === -1) {
      return this.selectFirst();
    }

    this.select(this.clearedSelection);
    this.clearedSelection = null;
    return true;
  }

  hasSelection() {
    return this.selection !== null;
  }
}
