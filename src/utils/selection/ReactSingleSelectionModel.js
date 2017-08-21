import React from "react";
import SingleSelectionModel from "./SingleSelectionModel";

export default class ReactSingleSelectionModel {
  constructor(
    {
      rtl = false,
      wrapping = "items",
      selectOnSpace = true,
      vertical = true
    } = {}
  ) {
    this.model = new SingleSelectionModel({ wrapping });
    this.onSelectionChanged = null;
    this.onValueChosen = null;
    this.model.onSelectionChanged = (newSelection, previousSelection) => {
      if (newSelection !== previousSelection) {
        this.onSelectionChanged && this.onSelectionChanged();
      }
    };
    this.selectedByMouse = false;
    this.selectOnSpace = selectOnSpace;
    this.rtl = rtl;
    this.vertical = vertical;
    this._items = [];
  }

  set items(items) {
    this._items = items;
    const selectable = [];
    const selection = this.model.selection;

    React.Children.forEach(this._items, item => {
      if (item && item.type && item.type.selectable && !item.props.disabled) {
        selectable.push(item);
        if (this.hasSelection() && item.props.value === selection.props.value) {
          this.model.selection = item;
        }
      }
    });

    this.model.items = selectable;
  }

  get items() {
    return React.Children.map(this._items, child => {
      if (child && child.type && child.type.selectable) {
        return React.cloneElement(child, {
          selectedByMouse: this.selectedByMouse,
          onSelect: () => {
            this.selectedByMouse = true;
            this.model.select(child);
          },
          onValueChosen: (value, event) => {
            this.selectedByMouse = true;
            if (this.model.selection !== child) {
              this.model.select(child);
            }
            this.choseSelection(event);
          },
          selected: child === this.model.selection
        });
      } else {
        return child;
      }
    });
  }

  get selection() {
    if (this.hasSelection()) {
      return this.model.selection.props.value;
    } else {
      return null;
    }
  }

  handleKeyDown = event => {
    const keyDownHandlers = this.vertical
      ? {
          "13": this.onEnter,
          "32": this.onSpace,
          "38": this.onArrowUp,
          "40": this.onArrowDown
        }
      : {
          "13": this.onEnter,
          "32": this.onSpace,
          "37": this.onArrowLeft,
          "39": this.onArrowRight
        };

    keyDownHandlers["35"] = this.onEnd;
    keyDownHandlers["36"] = this.onHome;

    const handler = keyDownHandlers[event.keyCode];
    if (handler) {
      this.selectedByMouse = false;
      handler(event);
    }
  };

  choseSelection = event => {
    if (this.hasSelection()) {
      const selection = this.model.selection;
      const value = selection.props.value;
      if (selection.props.action) {
        selection.props.action &&
          selection.props.action(selection.props, event);
      }
      this.onValueChosen && this.onValueChosen(value);
      return true;
    }
  };

  hasSelection = () => this.model.hasSelection();

  onEnter = event => {
    if (this.choseSelection(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onSpace = event => {
    if (this.selectOnSpace && this.choseSelection(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onArrowDown = event => {
    if (this.model.selectNext()) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onArrowUp = event => {
    if (this.model.selectPrevious()) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onArrowRight = event => {
    const success = this.rtl
      ? this.model.selectPrevious()
      : this.model.selectNext();

    if (success) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onArrowLeft = event => {
    const success = this.rtl
      ? this.model.selectNext()
      : this.model.selectPrevious();

    if (success) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onHome = event => {
    if (this.model.selectFirst()) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onEnd = event => {
    if (this.model.selectLast()) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  reactivate = defaultSelection => {
    this.model.reactivate(defaultSelection);
  };

  clear = () => {
    this.selectedByMouse = false;
    this.model.clear();
  };
}
