import React from 'react';
import sinon from 'sinon';
import expect from 'test/expect';

import { View } from '..';
import Callout from '.';

describe('Callout', () => {
  it('renders a callout with the given text', () =>
    expect(<Callout>Callout</Callout>, 'to render as', <View>Callout</View>));

  const types = ['default', 'success', 'warning', 'error'];
  types.forEach(type => {
    describe(`when given the type ${type}`, () => {
      it(`renders a ${type} callout`, () => {
        expect(
          <Callout type={type}>Callout</Callout>,
          'to render as',
          <View className={type} />
        );
      });
    });
  });

  describe('when given a tabIndex', () => {
    it('renders a label with the given tab index', () =>
      expect(
        <Callout tabIndex={42}>Callout</Callout>,
        'to render as',
        <View tabIndex={42} />
      ));
  });

  describe('when given a onClose handler', () => {
    it('renders a remove button with the given handler', () => {
      const onClose = () => {};

      return expect(
        <Callout onClose={onClose}>Callout</Callout>,
        'to render as',
        <View>
          Callout
          <button className="remove" tabIndex={-1} onClick={onClose} />
        </View>
      );
    });

    it('calls the onClose handler when clicking the remove button', () => {
      const onClose = sinon.spy();

      return expect(
        <Callout onClose={onClose}>Callout</Callout>,
        'when deeply rendered',
        'with event ',
        'click',
        'on',
        <button className="remove" />
      ).then(() => {
        expect(onClose, 'was called');
      });
    });

    it('calls the onClose handler when pressing delete', () => {
      const onClose = sinon.spy();
      const preventDefaultSpy = sinon.spy();

      return expect(
        <Callout onClose={onClose}>Callout</Callout>,
        'when deeply rendered',
        'with event ',
        'keyDown',
        {
          keyCode: 8,
          preventDefault: preventDefaultSpy
        }
      ).then(() => {
        expect(onClose, 'was called');
        expect(preventDefaultSpy, 'was called');
      });
    });
  });
});
