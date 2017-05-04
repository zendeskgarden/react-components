import React from 'react';
import expect from 'test/expect';
import Tooltip from '.';
describe('Tooltip', () => {
  describe('when given no props', () => {
    it('renders with correct default values', () => {
      expect(
        <Tooltip />,
        'to deeply render as',
        <div className="tooltip size_default top" style={{ top: 0, left: 0 }} />
      );
    });
  });

  describe('when given a specific size', () => {
    it('renders with correct size class name', () => {
      expect(
        <Tooltip size="medium" />,
        'to deeply render as',
        <div className="tooltip size_medium" />
      );
    });
  });

  describe('when given a specific position', () => {
    it('renders with correct positional values', () => {
      expect(
        <Tooltip position="left" left={15} top={50} />,
        'to deeply render as',
        <div className="tooltip left" style={{ top: 50, left: 15 }} />
      );
    });
  });

  describe('when given content', () => {
    it('renders the content', () => {
      expect(
        <Tooltip>My content</Tooltip>,
        'to deeply render as',
        <div className="tooltip">My content</div>
      );
    });
  });
});
