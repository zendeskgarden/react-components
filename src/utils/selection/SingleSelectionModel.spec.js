import unexpected from 'test/expect'
import sinon from 'sinon'

import SingleSelectionModel from './SingleSelectionModel'

describe('SingleSelectionModel', () => {
  const expect = unexpected.clone()
    .addType({
      name: 'SingleSelectionModel',
      base: 'object',
      identify: (value) => value && value instanceof SingleSelectionModel
    })
    .addAssertion('<SingleSelectionModel> to have selection <any>', (expect, subject, value) => {
      expect(subject, 'to satisfy', { selection: value })
    })
    .addAssertion('<SingleSelectionModel> to have no selection', (expect, subject) => {
      expect(subject.hasSelection(), 'to be false')
    })
    .addAssertion('<SingleSelectionModel> to have items <array>', (expect, subject, value) => {
      expect(subject, 'to satisfy', { items: value })
    })

  let model

  beforeEach(() => {
    model = new SingleSelectionModel()
  })

  describe('when just created', () => {
    it('has no selection', () => {
      expect(model, 'to have no selection')
    })

    it('has no items', () => {
      expect(model, 'to have items', [])
    })

    describe('selectNext', () => {
      it('returns false as no change happened', () => {
        expect(model.selectNext(), 'to be false')
      })
    })

    describe('selectPrevious', () => {
      it('returns false as no change happened', () => {
        expect(model.selectPrevious(), 'to be false')
      })
    })
  })

  describe('with items', () => {
    beforeEach(() => {
      model.items = ['foo', 'bar', 'baz']
      model.onSelectionChanged = sinon.spy()
    })

    describe('select', () => {
      it('selects the given item', () => {
        model.select('bar')
        expect(model, 'to have selection', 'bar')
      })

      it('fires a onSelectionChanged event', () => {
        model.select('bar')
        expect(model.onSelectionChanged, 'to have calls satisfying', () => {
          model.onSelectionChanged('bar', null)
        })
      })

      describe('with a selection', () => {
        beforeEach(() => {
          model.selection = 'foo'
        })

        it('selects the given item', () => {
          model.select('bar')
          expect(model, 'to have selection', 'bar')
        })

        it('fires a onSelectionChanged event', () => {
          model.select('bar')
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('bar', 'foo')
          })
        })

        describe('with a value that does not exist', () => {
          it('sets the selection to null', () => {
            model.select('qux')
            expect(model, 'to have no selection')
          })

          it('fires a onSelectionChanged event', () => {
            model.select('qux')
            expect(model.onSelectionChanged, 'to have calls satisfying', () => {
              model.onSelectionChanged(null, 'foo')
            })
          })
        })
      })
    })

    describe('clear', () => {
      describe('with no selection', () => {
        it('fires a onSelectionChanged event', () => {
          model.clear()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged(null, null)
          })
        })
      })

      describe('with a selection', () => {
        beforeEach(() => {
          model.selection = 'bar'
        })

        it('clears the selection', () => {
          model.clear()
          expect(model, 'to have no selection')
        })

        it('fires a onSelectionChanged event', () => {
          model.clear()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged(null, 'bar')
          })
        })
      })
    })

    describe('and no selection', () => {
      beforeEach(() => {
        model.selection = null
      })

      describe('selectNext', () => {
        it('selects the first item', () => {
          model.selectNext()
          expect(model, 'to have selection', 'foo')
        })

        it('returns true when the selection chances', () => {
          expect(model.selectNext(), 'to be true')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectNext()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('foo', null)
          })
        })

        describe('with no onSelectionChanged handler', () => {
          beforeEach(() => {
            model.onSelectionChanged = null
          })

          describe('selectNext', () => {
            it('does not try to call the missing ', () => {
              model.selectNext()
            })
          })
        })
      })

      describe('selectPrevious', () => {
        it('selects the last item', () => {
          model.selectPrevious()
          expect(model, 'to have selection', 'baz')
        })

        it('returns true when the selection chances', () => {
          expect(model.selectNext(), 'to be true')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectPrevious()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('baz', null)
          })
        })
      })
    })

    describe('with the first item selected', () => {
      beforeEach(() => {
        model.selection = 'foo'
      })

      describe('selectNext', () => {
        it('selects the next item', () => {
          model.selectNext()
          expect(model, 'to have selection', 'bar')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectNext()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('bar', 'foo')
          })
        })
      })

      describe('selectPrevious', () => {
        it('selects the last item', () => {
          model.selectPrevious()
          expect(model, 'to have selection', 'baz')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectPrevious()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('baz', 'foo')
          })
        })
      })
    })

    describe('with a selection', () => {
      beforeEach(() => {
        model.selection = model.items[1]
      })

      describe('selectNext', () => {
        it('selects the next item', () => {
          model.selectNext()
          expect(model, 'to have selection', 'baz')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectNext()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('baz', 'bar')
          })
        })
      })

      describe('selectPrevious', () => {
        it('selects the previous item', () => {
          model.selectPrevious()
          expect(model, 'to have selection', 'foo')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectPrevious()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('foo', 'bar')
          })
        })
      })
    })

    describe('with the last item selected', () => {
      beforeEach(() => {
        model.selection = model.items[2]
      })

      describe('selectNext', () => {
        it('selects the first item', () => {
          model.selectNext()
          expect(model, 'to have selection', 'foo')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectNext()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('foo', 'baz')
          })
        })
      })

      describe('selectPrevious', () => {
        it('selects the previous item', () => {
          model.selectPrevious()
          expect(model, 'to have selection', 'bar')
        })

        it('fires a onSelectionChanged event', () => {
          model.selectPrevious()
          expect(model.onSelectionChanged, 'to have calls satisfying', () => {
            model.onSelectionChanged('bar', 'baz')
          })
        })
      })
    })
  })
})
