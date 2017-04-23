import React from 'react';
import expect from 'test/expect';
import sinon from 'sinon';

import ReactSingleSelectionModel from './ReactSingleSelectionModel';
import Menu from '../../Menu';

import createFakeEvent from '../../../test/createFakeEvent';

describe('ReactSingleSelectionModel', () => {
  let model;

  beforeEach(() => {
    model = new ReactSingleSelectionModel();
  });

  describe('with selectable items', () => {
    beforeEach(() => {
      model.items = [
        <Menu.Item value="foo">Foo</Menu.Item>,
        <Menu.Item value="bar">Bar</Menu.Item>,
        <Menu.Separator />,
        <Menu.Item value="baz" disabled>Baz</Menu.Item>,
        <Menu.Item value="qux">Qux</Menu.Item>
      ];
    });

    describe('when setting the items', () => {
      it('maintains the selection', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 40 }));
        model.handleKeyDown(createFakeEvent({ keyCode: 40 }));

        model.items = [
          <Menu.Item value="bar" selected>Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux">Qux</Menu.Item>
        ];
      });
    });

    describe('handleKeyDown', () => {
      it('delegates arrow down events to selectNext', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 40 }));

        expect(model.items, 'to satisfy', [
          <Menu.Item value="foo" selected>Foo</Menu.Item>,
          <Menu.Item value="bar">Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux">Qux</Menu.Item>
        ]);
      });

      it('delegates arrow up events to selectPrevious', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 38 }));

        expect(model.items, 'to satisfy', [
          <Menu.Item value="foo">Foo</Menu.Item>,
          <Menu.Item value="bar">Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux" selected>Qux</Menu.Item>
        ]);
      });

      it('delegates home events to selectFirst', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 36 }));

        expect(model.items, 'to satisfy', [
          <Menu.Item value="foo" selected>Foo</Menu.Item>,
          <Menu.Item value="bar">Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux">Qux</Menu.Item>
        ]);
      });

      it('delegates end events to selectLast', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 35 }));

        expect(model.items, 'to satisfy', [
          <Menu.Item value="foo">Foo</Menu.Item>,
          <Menu.Item value="bar">Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux" selected>Qux</Menu.Item>
        ]);
      });

      it('with an enter event chooses the selected item', () => {
        model.onValueChosen = sinon.spy();
        model.handleKeyDown(createFakeEvent({ keyCode: 40 }));
        model.handleKeyDown(createFakeEvent({ keyCode: 13 }));

        expect(model.onValueChosen, 'to have calls satisfying', () => {
          model.onValueChosen('foo');
        });
      });

      it('with an space event chooses the selected item', () => {
        model.onValueChosen = sinon.spy();
        model.handleKeyDown(createFakeEvent({ keyCode: 38 }));
        model.handleKeyDown(createFakeEvent({ keyCode: 13 }));

        expect(model.onValueChosen, 'to have calls satisfying', () => {
          model.onValueChosen('qux');
        });
      });

      it('only navigates selectable items', () => {
        model.handleKeyDown(createFakeEvent({ keyCode: 38 }));
        model.handleKeyDown(createFakeEvent({ keyCode: 38 }));

        expect(model.items, 'to satisfy', [
          <Menu.Item value="foo">Foo</Menu.Item>,
          <Menu.Item value="bar" selected>Bar</Menu.Item>,
          <Menu.Separator />,
          <Menu.Item value="baz" disabled>Baz</Menu.Item>,
          <Menu.Item value="qux">Qux</Menu.Item>
        ]);
      });

      describe('in horizontal mode', () => {
        beforeEach(() => {
          model.vertical = false;
        });

        it('delegates arrow left events to selectPrevious', () => {
          model.handleKeyDown(createFakeEvent({ keyCode: 37 }));

          expect(model.items, 'to satisfy', [
            <Menu.Item value="foo">Foo</Menu.Item>,
            <Menu.Item value="bar">Bar</Menu.Item>,
            <Menu.Separator />,
            <Menu.Item value="baz" disabled>Baz</Menu.Item>,
            <Menu.Item value="qux" selected>Qux</Menu.Item>
          ]);
        });

        it('delegates arrow right events to selectNext', () => {
          model.handleKeyDown(createFakeEvent({ keyCode: 39 }));

          expect(model.items, 'to satisfy', [
            <Menu.Item value="foo" selected>Foo</Menu.Item>,
            <Menu.Item value="bar">Bar</Menu.Item>,
            <Menu.Separator />,
            <Menu.Item value="baz" disabled>Baz</Menu.Item>,
            <Menu.Item value="qux">Qux</Menu.Item>
          ]);
        });

        it('delegates home events to selectFirst', () => {
          model.handleKeyDown(createFakeEvent({ keyCode: 36 }));

          expect(model.items, 'to satisfy', [
            <Menu.Item value="foo" selected>Foo</Menu.Item>,
            <Menu.Item value="bar">Bar</Menu.Item>,
            <Menu.Separator />,
            <Menu.Item value="baz" disabled>Baz</Menu.Item>,
            <Menu.Item value="qux">Qux</Menu.Item>
          ]);
        });

        it('delegates end events to selectLast', () => {
          model.handleKeyDown(createFakeEvent({ keyCode: 35 }));

          expect(model.items, 'to satisfy', [
            <Menu.Item value="foo">Foo</Menu.Item>,
            <Menu.Item value="bar">Bar</Menu.Item>,
            <Menu.Separator />,
            <Menu.Item value="baz" disabled>Baz</Menu.Item>,
            <Menu.Item value="qux" selected>Qux</Menu.Item>
          ]);
        });

        describe('with the rtl configuration', () => {
          beforeEach(() => {
            model.rtl = true;
          });

          it('delegates arrow left events to selectNext', () => {
            model.handleKeyDown(createFakeEvent({ keyCode: 37 }));

            expect(model.items, 'to satisfy', [
              <Menu.Item value="foo" selected>Foo</Menu.Item>,
              <Menu.Item value="bar">Bar</Menu.Item>,
              <Menu.Separator />,
              <Menu.Item value="baz" disabled>Baz</Menu.Item>,
              <Menu.Item value="qux">Qux</Menu.Item>
            ]);
          });

          it('delegates arrow right events to selectPrevious', () => {
            model.handleKeyDown(createFakeEvent({ keyCode: 39 }));

            expect(model.items, 'to satisfy', [
              <Menu.Item value="foo">Foo</Menu.Item>,
              <Menu.Item value="bar">Bar</Menu.Item>,
              <Menu.Separator />,
              <Menu.Item value="baz" disabled>Baz</Menu.Item>,
              <Menu.Item value="qux" selected>Qux</Menu.Item>
            ]);
          });

          it('delegates home events to selectFirst', () => {
            model.handleKeyDown(createFakeEvent({ keyCode: 36 }));

            expect(model.items, 'to satisfy', [
              <Menu.Item value="foo" selected>Foo</Menu.Item>,
              <Menu.Item value="bar">Bar</Menu.Item>,
              <Menu.Separator />,
              <Menu.Item value="baz" disabled>Baz</Menu.Item>,
              <Menu.Item value="qux">Qux</Menu.Item>
            ]);
          });

          it('delegates end events to selectLast', () => {
            model.handleKeyDown(createFakeEvent({ keyCode: 35 }));

            expect(model.items, 'to satisfy', [
              <Menu.Item value="foo">Foo</Menu.Item>,
              <Menu.Item value="bar">Bar</Menu.Item>,
              <Menu.Separator />,
              <Menu.Item value="baz" disabled>Baz</Menu.Item>,
              <Menu.Item value="qux" selected>Qux</Menu.Item>
            ]);
          });
        });
      });
    });
  });
});
