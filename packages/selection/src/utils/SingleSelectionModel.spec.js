import SingleSelectionModel from './SingleSelectionModel';

describe('SingleSelectionModel', () => {
  let model;

  beforeEach(() => {
    model = new SingleSelectionModel();
  });

  describe('when first created', () => {
    it('has no selection', () => {
      expect(model.selectedIndex).toBe(undefined);
    });

    it('has no items', () => {
      expect(model.numItems).toBe(0);
    });

    describe('selectNext()', () => {
      it('returns false as no change happened', () => {
        expect(model.selectNext()).toBe(false);
      });
    });

    describe('selectPrevious()', () => {
      it('returns false as no change happened', () => {
        expect(model.selectPrevious()).toBe(false);
      });
    });
  });

  describe('with items', () => {
    beforeEach(() => {
      model.numItems = 3;
      model.selectedIndex = 0;
      model.onSelectionChanged = jest.fn();
    });

    describe('select()', () => {
      it('selects the given item', () => {
        model.select(1);
        expect(model.selectedIndex).toBe(1);
      });

      it('sets selectedIndex to undefined if provided -1', () => {
        model.select(-1);
        expect(model.selectedIndex).toBe(undefined);
      });

      it('fires a onSelectionChanged event', () => {
        model.select(1);
        expect(model.onSelectionChanged).toHaveBeenCalledWith({
          newSelection: 1,
          previousSelection: 0
        });
      });

      describe('with a selection', () => {
        beforeEach(() => {
          model.selectedIndex = 2;
        });

        it('selects the given item', () => {
          model.select(1);
          expect(model.selectedIndex).toBe(1);
        });

        it('fires a onSelectionChanged event', () => {
          model.select(1);
          expect(model.onSelectionChanged).toHaveBeenCalledWith({
            newSelection: 1,
            previousSelection: 2
          });
        });
      });
    });

    describe('clearSelection()', () => {
      it('removes current selection', () => {
        model.selectedIndex = 2;
        model.clearSelection();

        expect(model.onSelectionChanged).toHaveBeenCalledWith({
          newSelection: undefined,
          previousSelection: 2
        });
      });
    });

    describe('selectNext()', () => {
      it('increments when less than total length', () => {
        model.selectedIndex = 1;
        model.selectNext();
        expect(model.selectedIndex).toBe(2);
      });

      describe('when equal to total length', () => {
        it('wraps when in "items" wrapping mode', () => {
          model.selectedIndex = 2;
          model.selectNext();
          expect(model.selectedIndex).toBe(0);
        });

        it('clears selection when in "clear" wrapping mode', () => {
          model.wrapping = 'clear';
          model.selectedIndex = 2;
          model.selectNext();
          expect(model.selectedIndex).toBe(undefined);
        });

        it('does not increment when in "off" wrapping mode', () => {
          model.wrapping = 'off';
          model.selectedIndex = 2;
          model.selectNext();
          expect(model.selectedIndex).toBe(2);
        });
      });

      it('increments and wraps when equal to total length', () => {
        model.selectedIndex = 2;
        model.selectNext();
        expect(model.selectedIndex).toBe(0);
      });
    });

    describe('selectPrevious()', () => {
      it('decrements when greater than 0', () => {
        model.selectedIndex = 1;
        model.selectPrevious();
        expect(model.selectedIndex).toBe(0);
      });

      it('selects last item when nothing is selected', () => {
        model.selectedIndex = undefined;
        model.selectPrevious();
        expect(model.selectedIndex).toBe(2);
      });

      describe('when previous is less than 0', () => {
        it('selects last item when in "items" wrapping mode', () => {
          model.selectedIndex = 0;
          model.selectPrevious();
          expect(model.selectedIndex).toBe(2);
        });

        it('clears selection when in "clear" wrapping mode', () => {
          model.wrapping = 'clear';
          model.selectedIndex = 0;
          model.selectPrevious();
          expect(model.selectedIndex).toBe(undefined);
        });

        it('does not decrement when in "off" wrapping mode', () => {
          model.wrapping = 'off';
          model.selectedIndex = 0;
          model.selectPrevious();
          expect(model.selectedIndex).toBe(0);
        });
      });
    });

    describe('selectFirst()', () => {
      it('selects first item', () => {
        model.selectFirst();
        expect(model.selectedIndex).toBe(0);
      });

      it('returns true if items are available to select', () => {
        expect(model.selectFirst()).toBe(true);
      });

      it('returns false if items are not available to select', () => {
        model.numItems = 0;
        expect(model.selectFirst()).toBe(false);
      });
    });

    describe('selectLast()', () => {
      it('selects last item', () => {
        model.selectLast();
        expect(model.selectedIndex).toBe(2);
      });

      it('returns true if items are available to select', () => {
        expect(model.selectLast()).toBe(true);
      });

      it('returns false if items are not available to select', () => {
        model.numItems = 0;
        expect(model.selectLast()).toBe(false);
      });
    });

    describe('hasSelection()', () => {
      it('return false if no selection is found', () => {
        model.select(-1);
        expect(model.hasSelection()).toBe(false);
      });

      it('return true a selection in found', () => {
        model.select(1);
        expect(model.hasSelection()).toBe(true);
      });
    });
  });
});
